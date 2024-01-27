import { twMerge } from "tailwind-merge";
import { serverClient } from "@/trpc/client";
import { type ClassValue, clsx } from "clsx";
import { METRIC_WEIGHTS, type Ids } from "@/config";

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

export function paramsToFilter(params: Record<string, string>) {
  return Object.entries(params).reduce((acc, [key, value]) => {
    return { ...acc, [key]: [value] };
  }, {});
}

export function getScore(allCountryData: Country[], dataIds: Ids[]) {
  const metricRanges = dataIds.reduce(
    (acc, id) => {
      acc[id] = { min: Infinity, max: -Infinity };
      return acc;
    },
    {} as Record<Ids, { min: number; max: number }>,
  );

  allCountryData.forEach((country) => {
    Object.entries(country.data).forEach(([id, { value }]) => {
      if (value < metricRanges[id as Ids].min) {
        metricRanges[id as Ids].min = value;
      }
      if (value > metricRanges[id as Ids].max) {
        metricRanges[id as Ids].max = value;
      }
    });
  });

  const scores = allCountryData.map(({ data, country }) => {
    const score = Object.entries(data).reduce((sum, [id, { value }]) => {
      const range = metricRanges[id as Ids];
      const normalizedValue =
        ((value - range.min) / (range.max - range.min)) * 10;
      const weight = METRIC_WEIGHTS.get(id as Ids)!;
      return sum + normalizedValue * weight;
    }, 0);

    return { country, score: score / dataIds.length };
  });

  return scores;
}
