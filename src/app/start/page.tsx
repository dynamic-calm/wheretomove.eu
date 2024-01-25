"use client";

import { CheckBoxForm } from "@/components/checkbox-form";

export default function Start() {
  return (
    <main className="flex min-h-[calc(100vh-8rem)] flex-col items-center justify-center">
      <CheckBoxForm
        title="What matters"
        description="Select the things you value the most."
      />
    </main>
  );
}
