"use client";

import { DataTable } from "./data-table";
import { Button } from "../ui/button";
import { useState } from "react";
import Link from "next/link";
import { ArrowLeftIcon } from "@radix-ui/react-icons";
import { columns } from "./results-columns";
import { COUNTRIES } from "@/config";
import Mdiv from "../motion-div";

export default function Results({
  scores,
}: {
  scores: {
    position: number;
    country: string;
    score: number;
  }[];
}) {
  const [showRanking, setShowRanking] = useState(false);
  const midKey = showRanking ? "ranking" : "winner";
  const countryName = scores.at(0)?.country;
  return (
    <>
      {showRanking ? (
        <Mdiv key={midKey}>
          <div className="flex flex-col items-center justify-center">
            <DataTable columns={columns} data={scores} />
            <div className="flex space-x-4 pt-6">
              <Link href="/select">
                <Button className="mb-14">
                  Try again <ArrowLeftIcon className="ml-2" />
                </Button>
              </Link>
              <Link href="/#all-data">
                <Button variant="secondary" className="mb-14">
                  Check all data
                </Button>
              </Link>
            </div>
          </div>
        </Mdiv>
      ) : (
        <Mdiv key={midKey}>
          <div className="flex flex-col items-center justify-center gap-2">
            <p className="dark:text-slate- text-xl text-slate-500 dark:text-slate-300">
              You should move to...
            </p>
            <p className="text-6xl font-bold">
              {`${scores.at(0)?.country}! `}
              <span className="text-5xl">{COUNTRIES.get(countryName!)}</span>
            </p>
            <Button
              variant="outline"
              className="mt-3"
              onClick={() => setShowRanking(!showRanking)}
            >
              Show ranking
            </Button>
          </div>
        </Mdiv>
      )}
    </>
  );
}
