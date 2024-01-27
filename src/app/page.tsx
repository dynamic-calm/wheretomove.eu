import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-[calc(100vh-8rem)] flex-col items-center justify-center">
      <div className="flex flex-col items-center px-10 text-center md:w-2/3">
        <h2 className="text-4xl font-semibold">
          Discover your ideal country based on data.
        </h2>
        <h3 className="py-4 text-xl">
          Embark on a journey of informed choices.
        </h3>
      </div>
      <Link href="/data">
        <Button>
          <p className="pr-2">Check the numbers</p> <ArrowRightIcon />
        </Button>
      </Link>
    </main>
  );
}
