export type Metric = {
  label: string;
  value: string;
  delta?: "positive" | "negative" | "neutral";
};

export type Project = {
  sector: string;
  title: string;
  description: string;
  year: string;
  platform: string;
  metrics: Metric[];
  services: string[];
};

export const projects: Project[] = [
  {
    sector: "FMCG / Optics",
    title: "EMEA Commercial Reporting Overhaul",
    description:
      "Rebuilt the monthly performance reporting cycle for a global optics group across 8 EMEA market clusters — from raw data collection through to executive presentation-ready decks.",
    year: "2025",
    platform: "Excel / VBA · Power BI",
    metrics: [
      { label: "Monthly close", value: "5d → 1d", delta: "positive" },
      { label: "Country teams adopted", value: "30+", delta: "positive" },
    ],
    services: ["Performance reporting", "Dashboard development", "Executive narrative"],
  },
  {
    sector: "Retail",
    title: "Pan-European Market Sizing Framework",
    description:
      "Designed a standardised market sizing methodology for a pan-European retail group, enabling consistent cross-market benchmarking and performance normalisation for the first time.",
    year: "2025",
    platform: "Python · SQL · Tableau",
    metrics: [
      { label: "European markets covered", value: "12", delta: "neutral" },
      { label: "Benchmark consistency", value: "1:1", delta: "positive" },
    ],
    services: ["Market sizing", "Methodology design", "Cross-market benchmarking"],
  },
  {
    sector: "Financial Services",
    title: "KPI Automation Programme",
    description:
      "Automated the end-of-month KPI pack production for a financial services strategy team, eliminating manual data collection across 6 source systems and a fragile chain of Excel handoffs.",
    year: "2024",
    platform: "Excel / VBA · SharePoint · Power BI",
    metrics: [
      { label: "Analyst hours saved / month", value: "40+", delta: "positive" },
      { label: "Manual errors / 12 months", value: "0", delta: "positive" },
    ],
    services: ["Process automation", "KPI design", "Workflow redesign"],
  },
];
