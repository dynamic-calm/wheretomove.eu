import type { QueryArgs } from "./trpc/queries";

export const EUROSTAT_HOST =
  "https://ec.europa.eu/eurostat/api/dissemination/statistics/1.0/data";

export const IDS = {
  SALARY: "salary",
  UNEMPLOYMENT: "unemployment",
  LIFE_SATISFACTION: "lifeSatisfaction",
  FINANCIAL_SATISFACTION: "financialSatisfaction",
} as const;

export const CHECKBOX_ITEMS = new Map([
  [IDS.SALARY, "Salary"],
  [IDS.UNEMPLOYMENT, "Unemployment"],
  [IDS.LIFE_SATISFACTION, "Overall life satisfaction"],
]);

export type Ids = (typeof IDS)[keyof typeof IDS];

export const IDS_SET = new Set(Object.values(IDS));

export const QUERY_ARGS = new Map<Ids, QueryArgs>([
  [
    IDS.SALARY,
    {
      params: {
        age: "Y18-64",
        unit: "EUR",
        sex: "T",
        time: "2022",
        indic_il: "MED_E",
      },
      dataSetCode: "ilc_di03",
      unit: "EUR",
      id: IDS.SALARY,
    },
  ],
  [
    IDS.LIFE_SATISFACTION,
    {
      params: {
        time: "2022",
        unit: "RTG",
        indic_wb: "LIFESAT",
        isced11: "TOTAL",
        sex: "T",
        age: "Y_GE16",
      },
      dataSetCode: "ilc_pw01",
      unit: "-",
      id: IDS.LIFE_SATISFACTION,
    },
  ],
  [
    IDS.UNEMPLOYMENT,
    {
      params: {
        freq: "A",
        age: "Y15-74",
        unit: "PC_ACT",
        sex: "T",
        time: "2022",
      },
      dataSetCode: "tesem120",
      unit: "PC_ACT",
      id: IDS.UNEMPLOYMENT,
    },
  ],
  [
    IDS.FINANCIAL_SATISFACTION,
    {
      params: {
        time: "2018",
        unit: "RTG",
        indic_wb: "FINSAT",
        isced11: "TOTAL",
        sex: "T",
        age: "Y_GE16",
      },
      dataSetCode: "ilc_pw01",
      unit: "-",
      id: IDS.FINANCIAL_SATISFACTION,
    },
  ],
]);

export const COUNTRIES = new Set([
  "Belgium",
  "Bulgaria",
  "Czechia",
  "Denmark",
  "Germany",
  "Estonia",
  "Ireland",
  "Greece",
  "Spain",
  "France",
  "Croatia",
  "Italy",
  "Cyprus",
  "Latvia",
  "Lithuania",
  "Luxembourg",
  "Hungary",
  "Malta",
  "Netherlands",
  "Austria",
  "Poland",
  "Portugal",
  "Romania",
  "Slovenia",
  "Slovakia",
  "Finland",
  "Sweden",
  "Iceland",
  "Norway",
  "Switzerland",
  "Montenegro",
  "North Macedonia",
  "Albania",
  "Serbia",
  "Türkiye",
  "Kosovo*",
]);
