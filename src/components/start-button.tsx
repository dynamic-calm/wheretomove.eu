import Link from "next/link";
import { ArrowRightIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function StartButton() {
  return (
    <Link href="/select" className="pb-8">
      <Button className="pt-2">
        <p className="pr-2">Start</p>
        <ArrowRightIcon />
      </Button>
    </Link>
  );
}
