import { transformData } from "@/lib/utils";
import { IDS_SET } from "@/config";
import { serverClient } from "@/lib/trpc/client";
import { DataTable } from "@/components/data-table";
import { columns } from "./columns";

export default async function Data() {
  const promises = [...IDS_SET].map((id) => serverClient.getData(id));
  const allData = await Promise.all(promises);
  const allCountryData = transformData(allData);

  return (
    <>
      <DataTable columns={columns} data={allCountryData} />
    </>
  );
}
