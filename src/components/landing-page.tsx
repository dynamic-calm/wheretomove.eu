"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

import FlagCarousel from "@/components/flag-carousel";
import PoweredByEuroStat from "@/components/powered-by-eurostat";
import Mdiv from "@/components/motion-div";
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
          exit={{ opacity: 0, filter: "blur(1px)" }}
          transition={{ duration: 1 }}
        >
          <div className="flex flex-grow flex-col items-center justify-evenly">
            <div className="flex flex-col items-center justify-between gap-2 py-6 pt-11">
              <Mdiv>
                <h1 className="pb-11 text-center text-4xl font-bold tracking-tighter text-neutral-950 dark:text-neutral-50 lg:text-5xl ">
                  Where Should I Move?
                </h1>
                <Mdiv>
                  <FlagCarousel />
                </Mdiv>
              </Mdiv>
              <Mdiv>
                <DataTable columns={columns} data={data} />
              </Mdiv>
              <Mdiv>
                <p className="py-3 text-lg text-neutral-500 dark:text-neutral-400 lg:text-xl lg:font-medium">
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
