import { transformData } from "@/lib/utils";
import { IDS_SET } from "@/config";
import { serverClient } from "@/trpc/client";
import { DataTable } from "@/components/data-table";
import { columns } from "./columns";
import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import Link from "next/link";

export default async function Data() {
  const promises = [...IDS_SET].map((id) => serverClient.getData(id));
  const allData = await Promise.all(promises);
  const allCountryData = transformData(allData);

  return (
    <div className="flex min-h-[calc(100vh-10rem)] flex-col items-center justify-around">
      <DataTable columns={columns} data={allCountryData} />
      <Link href="/select">
        <Button variant="secondary">
          <p className="pr-2">Continue</p> <ArrowRightIcon />
        </Button>
      </Link>
    </div>
  );
}
