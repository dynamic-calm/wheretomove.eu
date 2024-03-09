"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";
import { ArrowLeftIcon } from "@radix-ui/react-icons";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  toast({
    title: "Error:",
    description: (
      <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
        <code className="text-red-600">
          {error.message}
          {error.digest ? (
            <>
              <br />
              <small className="text-red-700">{error.digest}</small>
            </>
          ) : null}
        </code>
      </pre>
    ),
  });

  return (
    <div className="flex min-h-[calc(100vh-8rem)] flex-col items-center justify-center">
      <h2 className="pb-4">Something went wrong.</h2>
      <div className="flex items-center justify-around">
        <Button onClick={() => reset()}>Try again</Button>
        <Button variant="link" className="pl-7">
          <Link href="/">
            <p className="pr-1">Go back</p>
          </Link>
          <ArrowLeftIcon />
        </Button>
      </div>
    </div>
  );
}
