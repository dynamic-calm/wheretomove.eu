import Link from "next/link";
import Image from "next/image";
import eurostat from "../../public/eurostat.png";
import getAllData from "@/lib/trpc/all";
import { DataTable } from "@/components/tables/data-table";
import { columns } from "../components/tables/full-data-columns";
import { Button } from "@/components/ui/button";
import FlagCarousel from "@/components/flag-carousel";

export default async function Home() {
  const data = await getAllData();

  return (
    <div className="flex w-auto max-w-[22.5rem] flex-grow flex-col items-center justify-evenly md:max-w-[40rem]">
      <div className="pt-auto flex flex-col items-center justify-between gap-2">
        <h1 className="scroll-m-20 text-center text-4xl font-extrabold  lg:text-5xl">
          Where should I move?
        </h1>
        <p className="text-xl text-neutral-500">
          Discover your ideal country based on data.
        </p>

        <FlagCarousel />
        <Link href="/select" className="py-5">
          <Button>Get Started</Button>
        </Link>
      </div>
      <div
        className="w-auto max-w-96 md:max-w-screen-md lg:max-w-screen-lg"
        id="all-data"
      >
        <DataTable columns={columns} data={data} />
      </div>
      <div className="flex items-center justify-center">
        <p className="text-neutral-500">Data powered by</p>
        <Link target="_blank" href="https://ec.europa.eu/eurostat">
          <Image
            src={eurostat}
            height={110}
            width={110}
            alt="eurostat logo"
            className=""
          />
        </Link>
      </div>
    </div>
  );
}
