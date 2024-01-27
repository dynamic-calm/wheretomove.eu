import { twMerge } from "tailwind-merge";
import { serverClient } from "@/trpc/client";
import { type ClassValue, clsx } from "clsx";
import { type Ids } from "@/config";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export interface Country {
  country: string;
  data: CountryData;
}

type CountryData = Record<
  Ids,
  {
    value: number;
    unit: "EUR" | "PC_ACT";
  }
>;

type AllData = Awaited<ReturnType<typeof serverClient.getData>>[];

export function transformData(allData: AllData): Country[] {
  const countryMap = allData.reduce<Record<string, CountryData>>(
    (acc, dataSet) => {
      Object.entries(dataSet).forEach(([dataId, items]) => {
        items.forEach(({ country, value, unit }) => {
          if (!acc[country]) {
            acc[country] = {} as CountryData;
          }
          acc[country][dataId as Ids] = { value, unit };
        });
      });
      return acc;
    },
    {},
  );

  return Object.entries(countryMap).map(([country, data]) => ({
    country,
    data,
  }));
}
