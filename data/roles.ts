// data/roles.ts
export type Role = {
  company: string;
  title: string;
  period: string;
  location: string;
  summary: string;
  highlights: string[];
  tools: string[];
};

export const roles: Role[] = [
  {
    company: "EssilorLuxottica",
    title: "Category Development Analyst – EMEA Lenses",
    period: "2024 – 2026",
    location: "Milan / Paris",
    summary:
      "Owned the EMEA Lenses performance reporting cycle across 8 market clusters, turning raw sales data into executive-ready narrative decks and dashboard insights. Acted as the link between Finance, BI, and local category teams to ensure accurate, timely analysis across 30+ countries.",
    highlights: [
      "Coordinated the monthly MBR process across 8 EMEA market clusters, synthesising net sales and volume data into executive-level narrative decks reviewed by EMEA leadership.",
      "Maintained and enhanced VBA-macro-driven Excel dashboards tracking net sales, volume, and ADS/ADV KPIs across 30+ countries.",
      "Built the delta days (working days effect) analytical framework used region-wide to normalise year-on-year performance comparisons.",
      "Ran monthly category review calls with 8 local cluster teams, converting field-level intelligence into EMEA-level insights for leadership decks.",
      "Supported the BI team in validating EDEN dashboard figures and coordinating the annual working-days data update across all clusters.",
    ],
    tools: ["Excel", "VBA", "Power BI", "ThinkCell", "SharePoint", "PowerPoint"],
  },
];
