const SALARY_ID = "salary";
const COST_OF_LIVING_ID = "cost-of-living";
const MEDIAN_PURCHASING_POWER_ID = "median-purchasing-power";
const GDP_ID = "gdp";

const items = [
  {
    id: SALARY_ID,
    label: "Salary",
  },
  {
    id: COST_OF_LIVING_ID,
    label: "Cost of living",
  },
  {
    id: MEDIAN_PURCHASING_POWER_ID,
    label: "Median purchasing power",
  },
  {
    id: GDP_ID,
    label: "GDP",
  },
] as const;

export default items;
