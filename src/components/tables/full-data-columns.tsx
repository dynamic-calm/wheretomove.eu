"use client";

import HeaderSortable from "@/components/table-header-sortable";
import { IDS } from "@/config";
import type { ColumnDef } from "@tanstack/react-table";
import type { Country } from "@/lib/utils";

export const columns: ColumnDef<Country>[] = [
  {
    accessorKey: "country",
    header: "Country",
    enableHiding: false,
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
    id: IDS.LIFE_SATISFACTION,
    accessorFn: (row) => row.data.lifeSatisfaction?.value ?? null,
    header: ({ column }) => (
      <HeaderSortable text="Overall life satisfaction" column={column} />
    ),

    cell: ({ row }) => {
      const value = row.getValue(IDS.LIFE_SATISFACTION) as string;
      if (!value) {
        return <div className="text-right">-</div>;
      }

      const amount = parseFloat(value);
      return <div className="text-right">{amount}</div>;
    },
  },
  {
    id: IDS.FINANCIAL_SATISFACTION,
    accessorFn: (row) => row.data.financialSatisfaction?.value ?? null,
    header: ({ column }) => (
      <HeaderSortable text="Financial satisfaction" column={column} />
    ),

    cell: ({ row }) => {
      const value = row.getValue(IDS.FINANCIAL_SATISFACTION) as string;
      if (!value) {
        return <div className="text-right">-</div>;
      }

      const amount = parseFloat(value);
      return <div className="text-right">{amount}</div>;
    },
  },

  {
    id: IDS.GREEN_ZONES,
    accessorFn: (row) => row.data.greenZones?.value ?? null,
    header: ({ column }) => (
      <HeaderSortable text="Green zones" column={column} />
    ),

    cell: ({ row }) => {
      const value = row.getValue(IDS.GREEN_ZONES) as string;
      if (!value) {
        return <div className="text-right">-</div>;
      }

      const amount = parseFloat(value);
      return <div className="text-right">{amount}</div>;
    },
  },
];
