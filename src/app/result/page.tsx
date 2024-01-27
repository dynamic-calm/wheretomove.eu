import { z } from "zod";
import { IDS_SET, type Ids } from "@/config";
import { serverClient } from "@/trpc/client";
import { getScore, transformData } from "@/lib/utils";
import { DataTable } from "@/components/data-table";
import { columns } from "./columns";
import { ArrowRightIcon, ArrowLeftIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const ParamsSchema = z.object({
  dataIds: z
    .array(z.string())
    .refine((values) => values.every((value) => IDS_SET.has(value as Ids))),
});

export default async function ResultPage({
  searchParams,
}: {
  searchParams: unknown;
}) {
  const { dataIds } = ParamsSchema.parse(searchParams) as { dataIds: Ids[] };
  const promises = dataIds.map((id) => serverClient.getData(id));
  const allData = await Promise.all(promises);
  const allCountryData = transformData(allData);
  const scores = getScore(allCountryData, dataIds);

  return (
    <div className="flex min-h-[calc(100vh-8rem)] flex-col items-center justify-around text-left">
      <div>
        <p>
          {"You should move to "}
          <span className="font-bold">{scores.at(0)?.country}</span>
          {" based on your priorities."}
        </p>
        <DataTable columns={columns} data={scores} />
      </div>
      <div className="flex w-80 items-center justify-around">
        <Link href="/select">
          <Button variant="secondary">
            <p className="pr-2">Try again</p>
            <ArrowLeftIcon />
          </Button>
        </Link>
        <Link href="/data">
          <Button>
            <p className="pr-2">Check all data</p>
          </Button>
        </Link>
      </div>
    </div>
  );
}
