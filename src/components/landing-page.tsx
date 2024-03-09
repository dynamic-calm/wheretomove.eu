"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

import FlagCarousel from "@/components/flag-carousel";
import PoweredByEuroStat from "@/components/powered-by-eurostat";
import Mdiv from "@/components/motion-div";
import IndecisionAnimation from "@/components/indecision-animation";
import { DataTable } from "@/components/tables/data-table";
import { columns } from "@/components/tables/full-data-columns";
import { Button } from "@/components/ui/button";

import type { Country } from "@/lib/utils";

export default function LandingPage({ data }: { data: Country[] }) {
  const [isVisible, setIsVisible] = useState(true);
  const router = useRouter();

  const handleStartClick = () => {
    setIsVisible(false);
    setTimeout(() => {
      router.push("/select");
    }, 1000);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, filter: "blur(3px)" }}
          transition={{ duration: 1 }}
        >
          <div className="flex flex-grow flex-col items-center justify-evenly">
            <div className="flex flex-col items-center justify-between gap-2 py-6 pt-11">
              <Mdiv>
                <h1 className="pb-11 text-center text-4xl font-bold tracking-tighter text-slate-950 dark:text-slate-50 lg:text-7xl ">
                  Where Should I Move?
                </h1>
              </Mdiv>
              <Mdiv>
                <DataTable columns={columns} data={data} />
              </Mdiv>
              <Mdiv>
                <p className="py-3 text-xl text-slate-500 dark:text-slate-400 lg:text-2xl lg:font-medium">
                  Discover your ideal country based on data.
                </p>
              </Mdiv>
              <Mdiv>
                <Button
                  size="lg"
                  className="font-semibold"
                  onClick={handleStartClick}
                >
                  Get Started
                </Button>
              </Mdiv>
              <Mdiv>
                <FlagCarousel />
              </Mdiv>
            </div>
            <div className="flex h-auto w-screen flex-col items-center justify-center gap-2 bg-slate-100 py-6 dark:bg-slate-900">
              <div className="flex flex-col items-center justify-center space-y-10 py-16 md:flex-row md:space-x-12 lg:space-x-32">
                <Mdiv>
                  <div className="flex w-96 flex-col items-center justify-evenly md:w-60 md:items-start lg:w-96">
                    <Mdiv>
                      <h1 className="mdtext-left pb-2 pt-5 text-4xl font-bold tracking-tighter text-slate-950 dark:text-slate-50 lg:text-6xl lg:leading-none">
                        Decide
                      </h1>
                    </Mdiv>
                    <Mdiv>
                      <p className="pb-5 text-xl text-slate-500 dark:text-slate-400 lg:text-2xl lg:font-medium">
                        Weight your choices, leverage algorithms.
                      </p>
                    </Mdiv>
                    <Mdiv>
                      <Button
                        size="lg"
                        className="font-semibold"
                        onClick={handleStartClick}
                      >
                        Get Started
                      </Button>
                    </Mdiv>
                  </div>
                </Mdiv>
                <Mdiv>
                  <IndecisionAnimation />
                </Mdiv>
              </div>
            </div>
            <Mdiv>
              <PoweredByEuroStat />
            </Mdiv>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
