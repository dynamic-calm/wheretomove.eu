import JSONstat from "jsonstat-toolkit";
import { COUNTRIES, EUROSTAT_HOST, IDS, QUERY_ARGS, type Ids } from "@/config";

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

const salary = generateQuery(QUERY_ARGS.get(IDS.SALARY)!);
const lifeSatisfaction = generateQuery(QUERY_ARGS.get(IDS.LIFE_SATISFACTION)!);
const unemployment = generateQuery(QUERY_ARGS.get(IDS.UNEMPLOYMENT)!);
const greenZones = generateQuery(QUERY_ARGS.get(IDS.GREEN_ZONES)!);
const riskOfPoverty = generateQuery(QUERY_ARGS.get(IDS.RISK_OF_POVERTY)!);
const housingCostsOverburdenRate = generateQuery(
  QUERY_ARGS.get(IDS.HOUSING_COSTS_OVERBURDEN_RATE)!,
);
const financialSatisfaction = generateQuery(
  QUERY_ARGS.get(IDS.FINANCIAL_SATISFACTION)!,
);
const priceOfGoods = generateQuery(QUERY_ARGS.get(IDS.PRICE_OF_GOODS)!);

const QUERIES = new Map<Ids, () => Promise<Record<Ids, Item[]>>>([
  [IDS.SALARY, salary],
  [IDS.UNEMPLOYMENT, unemployment],
  [IDS.LIFE_SATISFACTION, lifeSatisfaction],
  [IDS.GREEN_ZONES, greenZones],
  [IDS.FINANCIAL_SATISFACTION, financialSatisfaction],
  [IDS.RISK_OF_POVERTY, riskOfPoverty],
  [IDS.HOUSING_COSTS_OVERBURDEN_RATE, housingCostsOverburdenRate],
  [IDS.PRICE_OF_GOODS, priceOfGoods],
]);

export default QUERIES;
