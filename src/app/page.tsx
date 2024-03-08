import Link from "next/link";
import getAllData from "@/lib/trpc/all";
import { DataTable } from "@/components/tables/data-table";
import { columns } from "../components/tables/full-data-columns";
import { Button } from "@/components/ui/button";
import FlagCarousel from "@/components/flag-carousel";
import PoweredByEuroStat from "@/components/powered-by-eurostat";
import Mdiv from "@/components/motion-div";

export default async function Home() {
  const data = await getAllData();

  return (
    <div className="flex flex-grow flex-col items-center justify-evenly">
      <div className="flex flex-col items-center justify-between gap-2 py-6 pt-11">
        <Mdiv>
          <h1 className="pb-11 text-center text-4xl font-bold tracking-tighter lg:text-7xl">
            Where should I move?
          </h1>
        </Mdiv>
        <Mdiv>
          <DataTable columns={columns} data={data} />
        </Mdiv>
        <Mdiv>
          <p className="py-5 text-xl text-neutral-500 dark:text-neutral-400 lg:text-2xl lg:font-medium">
            Discover your ideal country based on data.
          </p>
        </Mdiv>
        <Mdiv>
          <Link href="/select" className="">
            <Button>Get Started</Button>
          </Link>
        </Mdiv>
        <Mdiv>
          <FlagCarousel />
        </Mdiv>
        <Mdiv>
          <PoweredByEuroStat />
        </Mdiv>
      </div>
    </div>
  );
}
