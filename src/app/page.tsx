import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "@radix-ui/react-icons";

export default function Home() {
  return (
    <main className="flex min-h-[calc(100vh-7rem)] flex-col items-center justify-center">
      <div className="flex flex-col items-center px-10 text-center md:w-2/3">
        <h2 className="text-4xl font-bold">
          Discover your ideal country based on data.
        </h2>
        <h3 className="py-4 text-xl font-semibold">
          Embark on a journey of informed choices.
        </h3>
      </div>
      <Button>
        <p className="pr-2 text-lg">Start exploring</p> <ArrowRightIcon />
      </Button>
    </main>
  );
}
