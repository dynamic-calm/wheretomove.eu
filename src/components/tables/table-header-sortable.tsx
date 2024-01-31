import { Column } from "@tanstack/react-table";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CaretSortIcon } from "@radix-ui/react-icons";
import type { Country } from "@/lib/utils";

export default function HeaderSortable({
  text,
  year,
  column,
}: {
  text: string;
  year?: number;
  column:
    | Column<Country, unknown>
    | Column<
        {
          country: string;
          score: number;
          position: number;
        },
        unknown
      >;
}) {
  return (
    <div className="text-right">
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        className="pl-3 text-xs font-normal"
      >
        {text}
        {year && (
          <Badge
            variant="outline"
            className="mx-2 p-0.5 text-[10px] text-neutral-900 dark:text-neutral-200"
          >
            {year}
          </Badge>
        )}
        <CaretSortIcon />
      </Button>
    </div>
  );
}
