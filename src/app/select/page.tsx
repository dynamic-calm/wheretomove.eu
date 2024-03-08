"use client";

import Mdiv from "@/components/motion-div";
import { CheckBoxForm } from "@/components/checkbox-form";
import { Skeleton } from "@/components/ui/skeleton";
import { CONFIG } from "@/config";
import { Suspense } from "react";

export default function Start() {
  const fallBack = (
    <div className="flex flex-col space-y-3">
      <Skeleton className="h-[125px] w-[250px] rounded-xl" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-[250px]" />
        <Skeleton className="h-4 w-[200px]" />
      </div>
    </div>
  );

  return (
    <>
      <Suspense fallback={fallBack}>
        <Mdiv>
          <CheckBoxForm
            title="What matters"
            description="Select what you value the most in a country."
            items={CONFIG}
          />
        </Mdiv>
      </Suspense>
    </>
  );
}
