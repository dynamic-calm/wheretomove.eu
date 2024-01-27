"use client";

import { Button } from "@/components/ui/button";
import { BsArrowsVertical } from "react-icons/bs";
import type { ColumnDef } from "@tanstack/react-table";
import type { Country } from "@/lib/utils";

export const columns: ColumnDef<Country>[] = [
  {
    accessorKey: "country",
    header: "Country",
  },
  {
    accessorKey: "value",
    header: ({ column }) => {
      return (
        <div className="text-right">
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
            className="p-0"
          >
            Salary/yr
            <BsArrowsVertical className="ml-2 h-3 w-3" />
          </Button>
        </div>
      );
    },
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("value"));
      const formatted = new Intl.NumberFormat("es-ES", {
        style: "currency",
        currency: "EUR",
      }).format(amount);

      return <div className="text-right">{formatted}</div>;
    },
  },
];
