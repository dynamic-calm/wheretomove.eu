import Link from "next/link";
import Image from "next/image";
import eurostat from "../../public/eurostat.png";
import getAllData from "@/lib/trpc/all";
import StartButton from "@/components/start-button";
import LandingPageIllustration from "@/components/landing-page-illustration";
import { DataTable } from "@/components/tables/data-table";
import { columns } from "../components/tables/full-data-columns";
import { Button } from "@/components/ui/button";

export default async function Home() {
  const data = await getAllData();

  return (
    <div className="flex w-auto max-w-[22.5rem] flex-col items-center justify-between pt-10 md:max-w-[40rem]">
      <div className="flex flex-col items-center justify-center text-center">
        <h2 className="text-4xl font-bold">Where should I move?</h2>
        <div className="flex flex-col items-center justify-center pb-6 pt-2 text-left">
          <h3 className="text-lg text-neutral-600 dark:text-neutral-300">
            Discover your ideal country based on data.
          </h3>
          <LandingPageIllustration />
          <div className="flex space-x-8 pt-4">
            <StartButton />
            <Link href="/#all-data">
              <Button
                variant="secondary"
                className="mb-14 text-neutral-600 dark:text-neutral-300"
              >
                Explore all data
              </Button>
            </Link>
          </div>
          <div className="text-center">
            <h3 className="pb-4 pt-6 text-xl font-bold">
              Inspired by Daniel Kahneman's Thinking, Fast and Slow.
            </h3>
            <p className="pb-3 text-neutral-600 dark:text-neutral-300">
              Intuition adds value even in the justly derided selection
              interview, but only after a disciplined collection of objective
              info and disciplined scoring of separate traits.
            </p>
          </div>
        </div>
      </div>
      <div
        className="w-auto  max-w-[22.5rem] pt-10 md:max-w-screen-md lg:max-w-screen-lg"
        id="all-data"
      >
        <p className="text-xl font-semibold">Explore all data available:</p>
        <DataTable columns={columns} data={data} />
      </div>
      <StartButton />
      <div className="flex flex-col items-center pt-2 text-center">
        <h3 className="py-4 text-2xl font-bold">
          How the scoring system works
        </h3>
        <p className="text-neutral text-neutral-600 dark:text-neutral-300">
          The scoring is based on the data points you select. Each metric adds
          to a country's total score. The more metrics you include, the higher
          the potential score, as each aspect adds to the overall total. The
          scores get calculated on a 0 to 10 scale for each metric.
        </p>
      </div>
      <div className="flex items-center justify-center pb-4 pt-6">
        <p className="text-neutral-600 dark:text-neutral-300">
          Data powered by
        </p>
        <Link target="_blank" href="https://ec.europa.eu/eurostat">
          <Image
            src={eurostat}
            height={150}
            width={150}
            alt="eurostat logo"
            className=""
          />
        </Link>
      </div>
    </div>
  );
}
