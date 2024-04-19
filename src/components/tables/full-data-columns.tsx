"use client";

import HeaderSortable from "@/components/tables/table-header-sortable";
import { IDS, Ids } from "@/config";
import type { ColumnDef } from "@tanstack/react-table";
import type { Country } from "@/lib/utils";

import { CONFIG } from "@/config";

function getYear(column: ColumnDef<Country>) {
  return Number(CONFIG[column.id as Ids].euroStatArgs.params.time);
}

export const columns: ColumnDef<Country>[] = [
  {
    accessorKey: "country",
    header: () => <p className="text-xs">Country</p>,
    enableHiding: false,
  },
  // {
  //   id: IDS.UNEMPLOYMENT,
  //   accessorFn: (row) => row.data.unemployment?.value ?? null,
  //   header: ({ column }) => (
  //     <HeaderSortable
  //       text="Unemployment rate"
  //       column={column}
  //       year={getYear(column)}
  //     />
  //   ),

  //   cell: ({ row }) => {
  //     const value = row.getValue(IDS.UNEMPLOYMENT) as string;
  //     if (!value) {
  //       return <div className="text-right">-</div>;
  //     }

  //     const amount = parseFloat(value);
  //     const formatted = new Intl.NumberFormat("es-ES", {
  //       style: "percent",
  //       minimumFractionDigits: 1,
  //     }).format(amount / 100);

  //     return <div className="text-right">{formatted}</div>;
  //   },
  // },
  {
    id: IDS.SALARY,
    accessorFn: (row) => row.data.salary?.value ?? null,
    header: ({ column }) => (
      <HeaderSortable
        text="Median salary"
        column={column}
        year={getYear(column)}
      />
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
        maximumFractionDigits: 0,
      }).format(amount);

      return <div className="text-right">{`${formatted}/yr`}</div>;
    },
  },
  {
    id: IDS.LIFE_SATISFACTION,
    accessorFn: (row) => row.data.lifeSatisfaction?.value ?? null,
    header: ({ column }) => (
      <HeaderSortable
        text="Overall life satisfaction"
        column={column}
        year={getYear(column)}
      />
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
    id: IDS.RISK_OF_POVERTY,
    accessorFn: (row) => row.data.peopleAtRiskOfPoverty?.value ?? null,
    header: ({ column }) => (
      <HeaderSortable
        text="People at risk of poverty"
        column={column}
        year={getYear(column)}
      />
    ),

    cell: ({ row }) => {
      const value = row.getValue(IDS.RISK_OF_POVERTY) as string;
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
    id: IDS.HOUSING_COSTS_OVERBURDEN_RATE,
    accessorFn: (row) => row.data.housingCostsOverburdenRate?.value ?? null,
    header: ({ column }) => (
      <HeaderSortable
        text="Housing costs overburden rate"
        column={column}
        year={getYear(column)}
      />
    ),

    cell: ({ row }) => {
      const value = row.getValue(IDS.HOUSING_COSTS_OVERBURDEN_RATE) as string;
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
    id: IDS.COL,
    accessorFn: (row) => row.data.costOfLiving?.value ?? null,
    header: ({ column }) => (
      <HeaderSortable
        text="Cost of living"
        column={column}
        year={getYear(column)}
      />
    ),

    cell: ({ row }) => {
      const value = row.getValue(IDS.COL) as string;
      if (!value) {
        return <div className="text-right">-</div>;
      }

      const amount = parseFloat(value);
      const formatted = new Intl.NumberFormat("es-ES", {
        maximumFractionDigits: 1,
        minimumFractionDigits: 1,
      }).format(amount);

      return (
        <div className="text-right">
          <p>{formatted} PPPs</p>
        </div>
      );
    },
  },
  {
    id: IDS.GDP_PER_CAPITA,
    accessorFn: (row) => row.data.gdpPerCapita?.value ?? null,
    header: ({ column }) => (
      <HeaderSortable
        text="GDP per capita"
        column={column}
        year={getYear(column)}
      />
    ),

    cell: ({ row }) => {
      const value = row.getValue(IDS.GDP_PER_CAPITA) as string;
      if (!value) {
        return <div className="text-right">-</div>;
      }

      const amount = parseFloat(value);
      const formatted = new Intl.NumberFormat("es-ES", {
        maximumFractionDigits: 1,
        minimumFractionDigits: 1,
      }).format(amount);

      return (
        <div className="text-right">
          <p>{formatted} PPs</p>
        </div>
      );
    },
  },
  {
    id: IDS.VIOLENCE,
    accessorFn: (row) => row.data.violence?.value ?? null,
    header: ({ column }) => (
      <HeaderSortable
        text="Crime, violence or vandalism"
        column={column}
        year={getYear(column)}
      />
    ),

    cell: ({ row }) => {
      const value = row.getValue(IDS.VIOLENCE) as string;
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
