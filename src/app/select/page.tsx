"use client";

import { CheckBoxForm } from "@/components/checkbox-form";
import { CHECKBOX_ITEMS } from "@/config";

export default function Start() {
  return (
    <>
      <CheckBoxForm
        title="What matters"
        description="Select what you value the most in a country."
        items={CHECKBOX_ITEMS}
      />
    </>
  );
}
