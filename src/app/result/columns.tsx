"use client";

import HeaderSortable from "@/components/table-header-sortable";
import { IDS } from "@/config";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "@radix-ui/react-dropdown-menu";
import { MoreHorizontal } from "lucide-react";
import type { ColumnDef } from "@tanstack/react-table";
import type { Country } from "@/lib/utils";

export const columns: ColumnDef<Country>[] = [
  {
    accessorKey: "country",
    header: "Country",
  },
  {
    id: IDS.SALARY,
    accessorFn: (row) => row.data.salary?.value ?? null,
    header: ({ column }) => (
      <HeaderSortable text="Median salary" column={column} />
    ),

    cell: ({ row }) => {
      const value = row.getValue(IDS.SALARY) as string;
      if (!value) {
        return <div className="text-right">-</div>;
      }

      const amount = parseFloat(value);
      const formatted = new Intl.NumberFormat("es-ES", {
        style: "currency",
        currency: "EUR",
      }).format(amount);

      return <div className="text-right">{`${formatted}/yr`}</div>;
    },
  },

  {
    id: IDS.UNEMPLOYMENT,
    accessorFn: (row) => row.data.unemployment?.value ?? null,
    header: ({ column }) => (
      <HeaderSortable text="Unemployment rate" column={column} />
    ),

    cell: ({ row }) => {
      const value = row.getValue(IDS.UNEMPLOYMENT) as string;
      if (!value) {
        return <div className="text-right">-</div>;
      }

      const amount = parseFloat(value);
      const formatted = new Intl.NumberFormat("es-ES", {
        style: "percent",
        minimumFractionDigits: 1,
      }).format(amount / 100);

      return <div className="text-right">{formatted}</div>;
    },
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const country = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() =>
                navigator.clipboard.writeText(JSON.stringify(country))
              }
            >
              Copy
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
