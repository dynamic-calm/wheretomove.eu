"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";

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
      <pre className="mt-2 w-[340px] rounded-md bg-neutral-950 p-4">
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
      <h2 className="pb-2">Something went wrong.</h2>
      <div className="flex items-center justify-around">
        <Button onClick={() => reset()}>Try again</Button>
        <Button variant="link" className="pl-3">
          <Link href="/start">Go back.</Link>
        </Button>
      </div>
    </div>
  );
}
