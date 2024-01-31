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
  COL: "costOfLiving",
  GDP_PER_CAPITA: "gdpPerCapita",
  VIOLENCE: "violence",
  RELATIONSHIPS_SATISFACTION: "relationshipsSatisfaction",
} as const;

export type Ids = (typeof IDS)[keyof typeof IDS];
export interface Config {
  checkBoxDescription: string;
  weight: 1 | -1;
  euroStatArgs: EuroStatArgs;
  range: {
    min: number;
    max: number;
  };
}

export interface EuroStatArgs {
  dataSetCode: string;
  params: Record<string, string>;
  unit: string;
}
export const CONFIG: Record<Ids, Config> = {
  [IDS.SALARY]: {
    checkBoxDescription: "High income",
    weight: 1,
    range: {
      min: 3000,
      max: 50000,
    },
    euroStatArgs: {
      params: {
        age: "Y18-64",
        unit: "EUR",
        sex: "T",
        time: "2022",
        indic_il: "MED_E",
      },
      dataSetCode: "ilc_di03",
      unit: "EUR",
    },
  },
  [IDS.LIFE_SATISFACTION]: {
    checkBoxDescription: "Overall life satisfaction",
    weight: 1,
    range: {
      min: 0,
      max: 10,
    },
    euroStatArgs: {
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
    },
  },
  [IDS.UNEMPLOYMENT]: {
    checkBoxDescription: "Low unemployment",
    weight: -1,
    range: {
      min: 2,
      max: 13,
    },
    euroStatArgs: {
      params: {
        freq: "A",
        age: "Y15-74",
        unit: "PC_ACT",
        sex: "T",
        time: "2022",
      },
      dataSetCode: "tesem120",
      unit: "PC_ACT",
    },
  },
  [IDS.FINANCIAL_SATISFACTION]: {
    checkBoxDescription: "Financial satisfaction",
    weight: 1,
    range: {
      min: 0,
      max: 10,
    },
    euroStatArgs: {
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
    },
  },
  [IDS.GREEN_ZONES]: {
    range: {
      min: 0,
      max: 10,
    },
    checkBoxDescription: "Quality of green zones",
    weight: 1,
    euroStatArgs: {
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
    },
  },
  [IDS.RISK_OF_POVERTY]: {
    checkBoxDescription: "Low number of people at risk of poverty",
    weight: -1,
    range: {
      min: 0,
      max: 50,
    },
    euroStatArgs: {
      params: {
        time: "2022",
        unit: "PC",
        sex: "T",
        age: "TOTAL",
      },
      dataSetCode: "ilc_peps01n",
      unit: "PC_POP",
    },
  },
  [IDS.HOUSING_COSTS_OVERBURDEN_RATE]: {
    checkBoxDescription: "Housing costs not being more that 40% of income",
    weight: -1,
    range: {
      min: 2,
      max: 27,
    },
    euroStatArgs: {
      params: {
        time: "2022",
        unit: "PC",
        sex: "T",
        incgrp: "TOTAL",
        age: "TOTAL",
      },
      dataSetCode: "tespm140",
      unit: "PC",
    },
  },
  [IDS.COL]: {
    checkBoxDescription: "Low prices",
    weight: -1,
    range: {
      min: 40,
      max: 175,
    },
    euroStatArgs: {
      params: {
        time: "2022",
        na_item: "PLI_EU27_2020",
        ppp_cat: "E011",
      },
      dataSetCode: "tec00120",
      unit: "PPS",
    },
  },
  [IDS.GDP_PER_CAPITA]: {
    checkBoxDescription: "High GDP per capita",
    weight: 1,
    range: {
      min: 30,
      max: 260,
    },
    euroStatArgs: {
      params: {
        time: "2022",
        na_item: "VI_PPS_EU27_2020_HAB",
        ppp_cat: "GDP",
      },
      dataSetCode: "tec00114",
      unit: "PPS",
    },
  },
  [IDS.VIOLENCE]: {
    checkBoxDescription: "Low crime, violence or vandalism in the area",
    weight: -1,
    range: { min: 0, max: 20 },
    euroStatArgs: {
      params: {
        time: "2020",
        unit: "PC",
        hhtyp: "TOTAL",
        incgrp: "TOTAL",
      },
      dataSetCode: "ilc_mddw03",
      unit: "PC",
    },
  },
  [IDS.RELATIONSHIPS_SATISFACTION]: {
    checkBoxDescription: "Great personal relationships",
    weight: 1,
    range: {
      min: 0,
      max: 10,
    },
    euroStatArgs: {
      params: {
        time: "2018",
        unit: "RTG",
        indic_wb: "RELSAT",
        isced11: "TOTAL",
        sex: "T",
        age: "Y_GE16",
      },
      dataSetCode: "ilc_pw01",
      unit: "-",
    },
  },
};

export const COUNTRIES = new Map([
  ["Belgium", "🇧🇪"],
  ["Bulgaria", "🇧🇬"],
  ["Czechia", "🇨🇿"],
  ["Denmark", "🇩🇰"],
  ["Germany", "🇩🇪"],
  ["Estonia", "🇪🇪"],
  ["Ireland", "🇮🇪"],
  ["Greece", "🇬🇷"],
  ["Spain", "🇪🇸"],
  ["France", "🇫🇷"],
  ["Croatia", "🇭🇷"],
  ["Italy", "🇮🇹"],
  ["Cyprus", "🇨🇾"],
  ["Latvia", "🇱🇻"],
  ["Lithuania", "🇱🇹"],
  ["Luxembourg", "🇱🇺"],
  ["Hungary", "🇭🇺"],
  ["Malta", "🇲🇹"],
  ["Netherlands", "🇳🇱"],
  ["Austria", "🇦🇹"],
  ["Poland", "🇵🇱"],
  ["Portugal", "🇵🇹"],
  ["Romania", "🇷🇴"],
  ["Slovenia", "🇸🇮"],
  ["Slovakia", "🇸🇰"],
  ["Finland", "🇫🇮"],
  ["Sweden", "🇸🇪"],
  ["Iceland", "🇮🇸"],
  ["Norway", "🇳🇴"],
  ["Switzerland", "🇨🇭"],
  ["Montenegro", "🇲🇪"],
  ["Albania", "🇦🇱"],
  ["Serbia", "🇷🇸"],
  ["Türkiye", "🇹🇷"],
]);
