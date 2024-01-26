import { COUNTRIES } from "@/config";
import { publicProcedure, router } from "./init";
import JSONstat from "jsonstat-toolkit";

export const appRouter = router({
  getTodos: publicProcedure.query(async () => {
    return "Hello world";
  }),
  getData: publicProcedure.query(getData),
});

async function getData() {
  const url =
    "https://ec.europa.eu/eurostat/api/dissemination/statistics/1.0/data/ilc_di03?format=JSON&unit=EUR&sex=T&indic_il=MED_E&age=Y18-64&lang=en";

  const jst = await JSONstat(url);
  const ds = jst.Dataset(0);
  const filter = {
    age: ["Y18-64"],
    unit: ["EUR"],
    sex: ["T"],
    time: ["2022"],
    indic_il: ["MED_E"],
  };

  const filtered = ds.Dice(filter);
  const data = filtered.toTable();
  const processedData = data
    .flatMap((item: unknown[]) => {
      const el = item.at(-3);
      const country = typeof el === "string" ? el : "";
      const data = item.at(-1) ?? 0;
      return !COUNTRIES.has(country) || !data ? [] : [{ country, data }];
    })
    .sort((a: FItem, b: FItem) => b.data - a.data);

  return processedData as FItem[];
}

interface FItem {
  country: string;
  data: number;
}

export type AppRouter = typeof appRouter;
