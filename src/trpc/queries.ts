import JSONstat from "jsonstat-toolkit";
import { COUNTRIES, IDS, Ids } from "@/config";

interface Item {
  country: string;
  data: number;
}

async function salary() {
  const url =
    "https://ec.europa.eu/eurostat/api/dissemination/statistics/1.0/data/ilc_di03?unit=EUR&sex=T&indic_il=MED_E&age=Y18-64&lang=en";

  const filter = {
    age: ["Y18-64"],
    unit: ["EUR"],
    sex: ["T"],
    time: ["2022"],
    indic_il: ["MED_E"],
  };

  const jst = await JSONstat(url);
  const data = jst
    .Dataset(0)
    .Dice(filter)
    .toTable()
    .flatMap((item: unknown[]) => {
      const el = item.at(-3);
      const country = typeof el === "string" ? el : "";
      const data = item.at(-1) ?? 0;
      return !COUNTRIES.has(country) || !data ? [] : [{ country, data }];
    })
    .sort((a: Item, b: Item) => b.data - a.data);

  console.log("salary query ", { data });
  return { [IDS.SALARY]: data } as Record<Ids, Item[]>;
}

async function unemployment() {
  const url =
    "https://ec.europa.eu/eurostat/api/dissemination/statistics/1.0/data/tesem120?lang=en&lastTimePeriod=5";

  const filter = {
    freq: ["A"],
    age: ["Y15-74"],
    unit: ["PC_ACT"],
    sex: ["T"],
    time: ["2022"],
  };

  const jst = await JSONstat(url);
  const data = jst
    .Dataset(0)
    .Dice(filter)
    .toTable()
    .flatMap((item: unknown[]) => {
      const el = item.at(-3);
      const country = typeof el === "string" ? el : "";
      const data = item.at(-1) ?? 0;
      return !COUNTRIES.has(country) || !data ? [] : [{ country, data }];
    })
    .sort((a: Item, b: Item) => b.data - a.data);

  console.log("unemployment query", { data });

  return { [IDS.UNEMPLOYMENT]: data } as Record<Ids, Item[]>;
}

const QUERIES = new Map<Ids, () => Promise<Record<Ids, Item[]>>>([
  [IDS.SALARY, salary],
  [IDS.UNEMPLOYMENT, unemployment],
]);

export default QUERIES;
