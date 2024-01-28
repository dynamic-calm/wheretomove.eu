import Link from "next/link";
import Image from "next/image";
import eurostat from "../../public/eurostat.png";
import getAllData from "@/lib/trpc/all";
import StartButton from "@/components/start-button";
import LandingPageIllustration from "@/components/landing-page-illustration";
import { It } from "@/components/italic";
import { DataTable } from "@/components/tables/data-table";
import { columns } from "../components/tables/full-data-columns";
import { Button } from "@/components/ui/button";

export default async function Home() {
  const data = await getAllData();

  return (
    <div className="flex flex-col items-center justify-between pt-10 md:w-2/3">
      <div className="flex flex-col items-center px-10 text-center">
        <h2 className="text-6xl font-bold">Where should I move?</h2>
        <div className="flex w-96 flex-col items-center px-10 pb-6 pt-2 text-left md:w-2/3">
          <h3 className="text-lg text-neutral-600 dark:text-neutral-300">
            Inspired by Daniel Kahneman's <It>"Thinking, Fast and Slow".</It>
          </h3>
          <LandingPageIllustration />
          <div className="flex space-x-2 pt-4">
            <StartButton />
            <Link href="/#all-data">
              <Button variant="link" className="mb-14">
                Check data
              </Button>
            </Link>
          </div>
          <h3 className="pb-4 pt-6 text-4xl font-bold">
            Discover your ideal country based on data
          </h3>
          <p className="pb-3 text-left text-lg text-neutral-600 dark:text-neutral-300">
            <It>
              “Intuition adds value even in the justly derided selection
              interview, but only after a disciplined collection of objective
              info and disciplined scoring of separate traits.”
            </It>
          </p>
        </div>
      </div>
      <div className="max-w-screen-md pt-10" id="all-data">
        <p className="text-left text-xl font-semibold">
          Explore all data available:
        </p>
        <DataTable columns={columns} data={data} />
      </div>
      <StartButton />
      <div className="flex w-96 flex-col items-start px-10 pt-2 text-left md:w-2/3">
        <h3 className="py-4 text-4xl font-bold">
          How the scoring system works
        </h3>
        <p className="text-neutral text-xl text-neutral-600 dark:text-neutral-300">
          <It>
            The scoring is based on the data points you select. Each metric adds
            to a country's total score. The more metrics you include, the higher
            the potential score, as each aspect adds to the overall total. The
            scores get calculated on a 0 to 10 scale for each metric.
          </It>
        </p>
      </div>
      <div className="flex items-center">
        <p className="text-neutral-600 dark:text-neutral-300">
          Data powered by
        </p>
        <Link target="_blank" href="https://ec.europa.eu/eurostat">
          <Image
            src={eurostat}
            height={150}
            width={150}
            alt="eurostat logo"
            className="py-6"
          />
        </Link>
      </div>
    </div>
  );
}
