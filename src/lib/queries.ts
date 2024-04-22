import JSONstat from "jsonstat-toolkit";
import { CONFIG, COUNTRIES, EUROSTAT_HOST, IDS, type Ids } from "@/config";

export interface Item {
  country: string;
  value: number;
  unit: "EUR" | "PC_ACT";
}

export interface QueryArgs {
  dataSetCode: string;
  params: Record<string, string>;
  unit: string;
  id: Ids;
}

function generateQuery({ dataSetCode, params, unit, id }: QueryArgs) {
  return async () => {
    const parsedParams = new URLSearchParams(params);
    const filter = toFilter(params);
    const url = `${EUROSTAT_HOST}/${dataSetCode}?${parsedParams.toString()}`;
    const jst = await JSONstat(url);
    const data = jst
      .Dataset(0)
      .Dice(filter)
      .toTable()
      .flatMap((item: unknown[]) => processItem(item, unit))
      .sort((a: Item, b: Item) => b.value - a.value);

    return { [id]: data } as Record<Ids, Item[]>;
  };
}

function toFilter(params: Record<string, string>) {
  return Object.entries(params).reduce((acc, [key, value]) => {
    return { ...acc, [key]: [value] };
  }, {});
}

function processItem(item: unknown[], unit: string) {
  const country = item.at(-3);
  const value = item.at(-1);
  return COUNTRIES.has(country as string) && value
    ? [{ country, value, unit }]
    : [];
}

const QUERIES = new Map<Ids, () => Promise<Record<Ids, Item[]>>>();

for (const id of Object.values(IDS)) {
  const { euroStatArgs } = CONFIG[id];
  if (euroStatArgs) {
    QUERIES.set(id, generateQuery({ ...euroStatArgs, id }));
  }
}

export default QUERIES;
