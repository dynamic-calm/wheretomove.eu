import { z } from "zod";
import { transformData } from "@/lib/utils";
import { IDS, IDS_SET, type Ids } from "@/config";
import { serverClient } from "@/trpc/client";
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
  const { dataIds } = ParamsSchema.parse(searchParams);
  const promises = dataIds.map((id) => serverClient.getData(id));
  const allData = await Promise.all(promises);
  const allCountryData = transformData(allData);
  const [data] = allData;

  return (
    <div>
      <pre className="flex min-h-[calc(100vh-8rem)] items-center justify-center">
        <DataTable columns={columns} data={allCountryData} />
      </pre>
    </div>
  );
}
