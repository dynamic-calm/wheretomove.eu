import { Column } from "@tanstack/react-table";
import { Button } from "../ui/button";
import { CaretSortIcon } from "@radix-ui/react-icons";
import type { Country } from "@/lib/utils";

export default function HeaderSortable({
  text,
  column,
}: {
  text: string;
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
        <CaretSortIcon />
      </Button>
    </div>
  );
}
