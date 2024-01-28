import getAllData from "@/lib/trpc/all";
import { DataTable } from "@/components/tables/data-table";
import { columns } from "../../components/tables/full-data-columns";

export default async function Data() {
  const data = await getAllData();
  
  return (
    <>
      <DataTable columns={columns} data={data} />
    </>
  );
}