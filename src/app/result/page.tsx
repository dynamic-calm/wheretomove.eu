import { z } from "zod";
import { IDS_SET, type Ids } from "@/config";
import { serverClient } from "@/trpc/client";
import { getScore, transformData } from "@/lib/utils";
import { DataTable } from "@/components/data-table";
import { columns } from "./columns";

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
  const scored = getScore(allCountryData, dataIds);

  return (
    <div className="flex min-h-[calc(100vh-8rem)] flex-col items-center justify-center text-left">
      <div>
        <p>
          {"You should move to "}
          <span className="font-bold">{scored.at(0)?.country}</span>
        </p>
        <DataTable columns={columns} data={scored} />
      </div>
    </div>
  );
}
