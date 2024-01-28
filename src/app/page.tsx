import Link from "next/link";
import Image from "next/image";
import whiteIllustration from "../../public/ilu-no-bg-black.png";
import blackIllustration from "../../public/ilu-no-bg-white.png";
import eurostat from "../../public/eurostat.png";
import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import { columns } from "./data/columns";
import { DataTable } from "@/components/data-table";
import { IDS_SET } from "@/config";
import { serverClient } from "@/lib/trpc/client";
import { transformData } from "@/lib/utils";
import { It } from "@/components/italic";

export default async function Home() {
  const promises = [...IDS_SET].map((id) => serverClient.getData(id));
  const allData = await Promise.all(promises);
  const allCountryData = transformData(allData);

  return (
    <div className="flex flex-col items-center justify-between pt-12 md:w-2/3">
      <div className="flex flex-col items-center px-10 text-center">
        <h2 className="text-6xl font-bold">Where should I move?</h2>
        <h3 className="pt-3 text-2xl font-semibold">
          Discover your ideal country based on data.
        </h3>
      </div>
      <div className="flex flex-col items-center justify-center py-8">
        <Image
          className="hidden w-auto dark:block"
          src={blackIllustration}
          alt="Person sitting next to window thinking"
          priority
          height={300}
          width={300}
        />
        <Image
          className="block w-auto dark:hidden"
          src={whiteIllustration}
          alt="Person sitting next to window thinking"
          priority
          height={300}
          width={300}
        />
      </div>
      <Link href="/select" className="pb-8">
        <Button className="pt-2">
          <p className="pr-2">Start</p>
          <ArrowRightIcon />
        </Button>
      </Link>
      <div className="flex w-96 flex-col items-center px-10 py-6 text-center md:w-2/3">
        <h3 className="py-4 text-4xl font-bold">
          Inspired by Daniel Kahneman's <It>"Thinking, Fast and Slow"</It>
        </h3>
        <p className="text-lg">
          <It>
            “Intuition adds value even in the justly derided selection
            interview, but only after a disciplined collection of objective info
            and disciplined scoring of separate traits.”
          </It>
        </p>
      </div>
      <DataTable columns={columns} data={allCountryData} />
      <Link target="_blank" href="https://ec.europa.eu/eurostat">
        <Image
          src={eurostat}
          height={150}
          width={150}
          alt="eurostat logo"
          className="pb-7"
        />
      </Link>
    </div>
  );
}
