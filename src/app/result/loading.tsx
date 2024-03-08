import Mdiv from "@/components/motion-div";
import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <Mdiv>
      <div className="flex flex-col items-center justify-center space-y-5">
        <Skeleton className="h-7 w-44" />
        <Skeleton className="h-14 w-72 rounded-xl" />
        <Skeleton className="h-7 w-40" />
      </div>
    </Mdiv>
  );
}
