"use client";

import { CheckBoxForm } from "@/components/checkbox-form";
import { CHECKBOX_ITEMS } from "@/config";

export default function Start() {
  return (
    <main className="flex min-h-[calc(100vh-8rem)] flex-col items-center justify-center">
      <CheckBoxForm
        title="What matters"
        description="Select the things that are important to you in a country."
        items={CHECKBOX_ITEMS}
      />
    </main>
  );
}
