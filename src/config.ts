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

export const SALARY_ID = "salary";
export const COST_OF_LIVING_ID = "cost-of-living";
export const MEDIAN_PURCHASING_POWER_ID = "median-purchasing-power";
export const GDP_ID = "gdp";

export type Ids =
  | typeof SALARY_ID
  | typeof COST_OF_LIVING_ID
  | typeof MEDIAN_PURCHASING_POWER_ID
  | typeof GDP_ID;

export const IDS = new Set([
  SALARY_ID,
  COST_OF_LIVING_ID,
  MEDIAN_PURCHASING_POWER_ID,
  GDP_ID,
]);
