import getAllData from "@/lib/trpc/all";
import { DataTable } from "@/components/data-table";
import { columns } from "./columns";

export default async function Data() {
  const data = await getAllData();
  
  return (
    <>
      <DataTable columns={columns} data={data} />
    </>
  );
}