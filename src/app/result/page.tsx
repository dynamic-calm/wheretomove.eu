import { COUNTRIES } from "@/config";
import JSONstat from "jsonstat-toolkit";

export default async function ResultPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const items = JSON.parse(searchParams.items as string);
  // if any of the items are not on the items IDs show error
  const promises = items.map((item: string) => getData(item));

  const results = await getData(items[0]);
  console.log({ results });
  return (
    <div>
      {results.slice(0, 5).map((result) => {
        return (
          <div key={result.country}>
            {result.country} <p>{result.data}</p>
          </div>
        );
      })}
    </div>
  );
}

async function getData(id: string) {
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

  return processedData;
}

interface FItem {
  country: string;
  data: number;
}
