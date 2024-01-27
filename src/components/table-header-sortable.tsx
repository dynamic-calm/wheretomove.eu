import { Column } from "@tanstack/react-table";
import { Button } from "./ui/button";
import { BsArrowsVertical } from "react-icons/bs";
import type { Country } from "@/lib/utils";

export default function HeaderSortable({
  text,
  column,
}: {
  text: string;
  column: Column<Country, unknown>;
}) {
  return (
    <div className="text-right">
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        className="p-0"
      >
        {text}
        <BsArrowsVertical className="ml-1 h-3 w-3" />
      </Button>
    </div>
  );
}
