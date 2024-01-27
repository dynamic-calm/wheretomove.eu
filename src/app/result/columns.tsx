"use client";

import type { ColumnDef } from "@tanstack/react-table";
import type { Country } from "@/lib/utils";
import HeaderSortable from "@/components/table-header-sortable";
import { IDS } from "@/config";

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
];
