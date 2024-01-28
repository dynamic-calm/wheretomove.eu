import type { QueryArgs } from "./lib/trpc/queries";

export const EUROSTAT_HOST =
  "https://ec.europa.eu/eurostat/api/dissemination/statistics/1.0/data";

export const IDS = {
  SALARY: "salary",
  UNEMPLOYMENT: "unemployment",
  LIFE_SATISFACTION: "lifeSatisfaction",
  FINANCIAL_SATISFACTION: "financialSatisfaction",
  GREEN_ZONES: "greenZones",
  RISK_OF_POVERTY: "peopleAtRiskOfPoverty",
  HOUSING_COSTS_OVERBURDEN_RATE: "housingCostsOverburdenRate",
  PRICE_OF_GOODS: "priceOfGoods",
} as const;

export const CHECKBOX_ITEMS = new Map([
  [IDS.SALARY, "High median salary"],
  [IDS.UNEMPLOYMENT, "Low unemployment"],
  [IDS.LIFE_SATISFACTION, "Overall life satisfaction"],
  [IDS.FINANCIAL_SATISFACTION, "Financial satisfaction"],
  [IDS.GREEN_ZONES, "Satisfaction with green zones"],
  [IDS.RISK_OF_POVERTY, "Low number of people at risk of poverty"],
  [
    IDS.HOUSING_COSTS_OVERBURDEN_RATE,
    "Housing costs not being more that 40% of income",
  ],
  [IDS.PRICE_OF_GOODS, "Low prices"],
]);

export const METRIC_WEIGHTS = new Map([
  [IDS.SALARY, 1],
  [IDS.UNEMPLOYMENT, -1],
  [IDS.LIFE_SATISFACTION, 1],
  [IDS.FINANCIAL_SATISFACTION, 1],
  [IDS.GREEN_ZONES, 1],
  [IDS.RISK_OF_POVERTY, -1],
  [IDS.HOUSING_COSTS_OVERBURDEN_RATE, -1],
  [IDS.PRICE_OF_GOODS, -1],
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
  [IDS.RISK_OF_POVERTY]: {
    min: 0,
    max: 50,
  },
  [IDS.HOUSING_COSTS_OVERBURDEN_RATE]: {
    min: 2,
    max: 27,
  },
  [IDS.PRICE_OF_GOODS]: {
    min: 40,
    max: 175,
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
  [
    IDS.RISK_OF_POVERTY,
    {
      params: {
        time: "2022",
        unit: "PC",
        sex: "T",
        age: "TOTAL",
      },
      dataSetCode: "ilc_peps01n",
      unit: "PC_POP",
      id: IDS.RISK_OF_POVERTY,
    },
  ],
  [
    IDS.HOUSING_COSTS_OVERBURDEN_RATE,
    {
      params: {
        time: "2022",
        unit: "PC",
        sex: "T",
        incgrp: "TOTAL",
        age: "TOTAL",
      },
      dataSetCode: "tespm140",
      unit: "PC",
      id: IDS.HOUSING_COSTS_OVERBURDEN_RATE,
    },
  ],
  [
    IDS.PRICE_OF_GOODS,
    {
      params: {
        time: "2022",
        na_item: "PLI_EU27_2020",
        ppp_cat: "E011",
      },
      dataSetCode: "tec00120",
      unit: "PPS",
      id: IDS.PRICE_OF_GOODS,
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
