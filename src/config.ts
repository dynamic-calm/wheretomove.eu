export const IDS = {
  SALARY: "salary",
  COST_OF_LIVING: "cost-of-living",
  MEDIAN_PURCHASING_POWER: "median-purchasing-power",
  GDP: "gdp",
} as const;

export const CHECKBOX_ITEMS = new Map([
  [IDS.SALARY, "Salary"],
  [IDS.COST_OF_LIVING, "Cost of living"],
  [IDS.MEDIAN_PURCHASING_POWER, "Median purchasing power"],
  [IDS.GDP, "GDP"],
]);

export type Ids = typeof IDS[keyof typeof IDS];

export const IDS_SET = new Set(Object.values(IDS));

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
  "United Kingdom",
  "Montenegro",
  "North Macedonia",
  "Albania",
  "Serbia",
  "Türkiye",
  "Kosovo*",
]);
