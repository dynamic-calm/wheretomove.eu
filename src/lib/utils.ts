import { twMerge } from "tailwind-merge";
import { serverClient } from "@/lib/trpc/client";
import { METRIC_RANGES, METRIC_WEIGHTS, type Ids } from "@/config";
import { type ClassValue, clsx } from "clsx";

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

export function getScore(allCountryData: Country[], dataIds: Ids[]) {
  const data = allCountryData.flatMap(({ country, data }) => {
    // If any of the data selected by the user is missing in a country, skip it.
    if (dataIds.some((id) => !data[id])) {
      return [];
    }

    const score = Object.entries(data).reduce((sum, [id, { value }]) => {
      const range = METRIC_RANGES[id as Ids];
      const normalizedValue =
        METRIC_WEIGHTS.get(id as Ids)! < 0
          ? ((range.max - value) / (range.max - range.min)) * 10
          : ((value - range.min) / (range.max - range.min)) * 10;

      return sum + normalizedValue;
    }, 0);

    return { country, score };
  });

  return data.sort((a, b) => b.score - a.score);
}
