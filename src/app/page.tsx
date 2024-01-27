import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-[calc(100vh-8rem)] flex-col items-center justify-center">
      <div className="flex flex-col items-center px-10 text-center md:w-2/3">
        <h2 className="text-4xl font-semibold">Where should I move to?</h2>
        <h3 className="pb-4 pt-3 text-xl">
          Discover your ideal country based on data.
        </h3>
      </div>
      <Link href="/select">
        <Button className="pt-2">
          <p className="pr-2">Start</p>
          <ArrowRightIcon />
        </Button>
      </Link>
    </main>
  );
}
