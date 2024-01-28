import { Column } from "@tanstack/react-table";
import { Button } from "../ui/button";
import { ArrowUpDown } from "lucide-react";
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
        className="font-normal"
      >
        {text}
        <ArrowUpDown className="ml-1 h-3 w-3" />
      </Button>
    </div>
  );
}
