"use client";

import { Button } from "@/components/ui/button";
import type { Item } from "@/trpc/queries";
import type { ColumnDef } from "@tanstack/react-table";
import { BsArrowsVertical } from "react-icons/bs";

export const columns: ColumnDef<Item>[] = [
  {
    accessorKey: "country",
    header: "Country",
  },
  {
    accessorKey: "data",
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
      const amount = parseFloat(row.getValue("data"));
      const formatted = new Intl.NumberFormat("es-ES", {
        style: "currency",
        currency: "EUR",
      }).format(amount);

      return <div className="text-right">{formatted}</div>;
    },
  },
];
