import {
  COST_OF_LIVING_ID,
  GDP_ID,
  MEDIAN_PURCHASING_POWER_ID,
  SALARY_ID,
} from "@/config";

const ITEMS = new Map([
  [SALARY_ID, "Salary"],
  [COST_OF_LIVING_ID, "Cost of living"],
  [MEDIAN_PURCHASING_POWER_ID, "Median purchasing power"],
  [GDP_ID, "GDP"],
]);

export default ITEMS;
