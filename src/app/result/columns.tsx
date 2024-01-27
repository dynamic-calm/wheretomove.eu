"use client";

import HeaderSortable from "@/components/table-header-sortable";
import { getScore } from "@/lib/utils";
import type { ColumnDef } from "@tanstack/react-table";

type Result = ReturnType<typeof getScore>[number];

export const columns: ColumnDef<Result>[] = [
  {
    accessorKey: "country",
    header: "Country",
    enableHiding: false,
  },
  {
    accessorKey: "score",
    header: ({ column }) => <HeaderSortable text="Score" column={column} />,

    cell: ({ row }) => {
      const value = row.getValue("score") as string;
      if (!value) {
        return <div className="text-right">-</div>;
      }

      const amount = parseFloat(value);
      const formatted = new Intl.NumberFormat("es-ES", {
        maximumFractionDigits: 2,
      }).format(amount);

      return <div className="text-right">{formatted}</div>;
    },
  },
];
