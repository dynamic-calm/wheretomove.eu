export const IDS = {
  SALARY: "salary",
  UNEMPLOYMENT: "unemployment",
} as const;

export const CHECKBOX_ITEMS = new Map([
  [IDS.SALARY, "Salary"],
  [IDS.UNEMPLOYMENT, "Unemployment"],
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
