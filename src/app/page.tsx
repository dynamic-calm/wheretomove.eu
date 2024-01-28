import Link from "next/link";
import Image from "next/image";
import eurostat from "../../public/eurostat.png";
import getAllData from "@/lib/trpc/all";
import StartButton from "@/components/start-button";
import LandingPageIllustration from "@/components/landing-page-illustration";
import { It } from "@/components/italic";
import { DataTable } from "@/components/tables/data-table";
import { columns } from "../components/tables/full-data-columns";

export default async function Home() {
  const data = await getAllData();

  return (
    <div className="flex flex-col items-center justify-between pt-10 md:w-2/3">
      <div className="flex flex-col items-center px-10 text-center">
        <h2 className="text-6xl font-bold">Where should I move?</h2>
        <h3 className="pt-3 text-2xl font-semibold">
          Discover your ideal country based on data.
        </h3>
      </div>
      <LandingPageIllustration />
      <StartButton />
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
      <div className="pt-10">
        <p className="text-left text-xl font-semibold">
          Explore all data available:
        </p>
        <DataTable columns={columns} data={data} />
      </div>
      <StartButton />
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
