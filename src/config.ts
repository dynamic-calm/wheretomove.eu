import type { QueryArgs } from "./lib/trpc/queries";

export const EUROSTAT_HOST =
  "https://ec.europa.eu/eurostat/api/dissemination/statistics/1.0/data";

export const IDS = {
  SALARY: "salary",
  UNEMPLOYMENT: "unemployment",
  LIFE_SATISFACTION: "lifeSatisfaction",
  FINANCIAL_SATISFACTION: "financialSatisfaction",
  GREEN_ZONES: "greenZones",
} as const;

export const CHECKBOX_ITEMS = new Map([
  [IDS.SALARY, "Median salary"],
  [IDS.UNEMPLOYMENT, "Low unemployment"],
  [IDS.LIFE_SATISFACTION, "Overall life satisfaction"],
  [IDS.FINANCIAL_SATISFACTION, "Financial satisfaction"],
  [IDS.GREEN_ZONES, "Green zones"],
]);

export const METRIC_WEIGHTS = new Map([
  [IDS.SALARY, 1],
  [IDS.UNEMPLOYMENT, -1],
  [IDS.LIFE_SATISFACTION, 1],
  [IDS.FINANCIAL_SATISFACTION, 1],
  [IDS.GREEN_ZONES, 1],
]);

export const METRIC_RANGES = {
  [IDS.SALARY]: {
    min: 3000,
    max: 50000,
  },
  [IDS.UNEMPLOYMENT]: {
    min: 2,
    max: 13,
  },
  [IDS.LIFE_SATISFACTION]: {
    min: 0,
    max: 10,
  },
  [IDS.FINANCIAL_SATISFACTION]: {
    min: 0,
    max: 10,
  },
  [IDS.GREEN_ZONES]: {
    min: 0,
    max: 10,
  },
};

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
  [
    IDS.GREEN_ZONES,
    {
      params: {
        time: "2013",
        unit: "RTG",
        indic_wb: "GREENSAT",
        isced11: "TOTAL",
        sex: "T",
        age: "Y_GE16",
      },
      dataSetCode: "ilc_pw01",
      unit: "-",
      id: IDS.GREEN_ZONES,
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
  "Albania",
  "Serbia",
  "Türkiye",
]);
