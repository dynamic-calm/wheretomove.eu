import { transformData } from "@/lib/utils";
import { IDS, IDS_SET, type Ids } from "@/config";
import { serverClient } from "@/trpc/client";
import { DataTable } from "@/components/data-table";
import { columns } from "./columns";

export default async function Data() {
  const promises = [...IDS_SET].map((id) => serverClient.getData(id));
  const allData = await Promise.all(promises);
  const allCountryData = transformData(allData);

  return (
    <div className="flex min-h-[calc(100vh-8rem)] items-center justify-center">
      <DataTable columns={columns} data={allCountryData} />
    </div>
  );
}
