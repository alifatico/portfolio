export type Metric = {
  label: string;
  value: string;
  delta?: "positive" | "negative" | "neutral";
};

export type Project = {
  partner: string;
  sector: string;
  title: string;
  year: string;
  platform: string;
  metrics: Metric[];
  services: string[];
  image: string;
};

export const projects: Project[] = [
  {
    partner: "Global optics group",
    sector: "FMCG / Optics",
    title: "EMEA Commercial Reporting Overhaul",
    year: "2025",
    platform: "Excel / VBA · Power BI",
    metrics: [
      { label: "Monthly close", value: "5d → 1d", delta: "positive" },
      { label: "Country teams adopted", value: "30+", delta: "positive" },
    ],
    services: [
      "Performance reporting",
      "Dashboard development",
      "Executive narrative",
    ],
    image: "/images/projects/emea.jpg",
  },
  {
    partner: "Pan-European retail group",
    sector: "Retail",
    title: "Pan-European Market Sizing Framework",
    year: "2025",
    platform: "Python · SQL · Tableau",
    metrics: [
      { label: "European markets covered", value: "12", delta: "neutral" },
      { label: "Benchmark consistency", value: "1:1", delta: "positive" },
    ],
    services: [
      "Market sizing",
      "Methodology design",
      "Cross-market benchmarking",
    ],
    image: "/images/projects/sizing.jpg",
  },
  {
    partner: "Financial services strategy team",
    sector: "Financial Services",
    title: "KPI Automation Programme",
    year: "2024",
    platform: "Excel / VBA · SharePoint · Power BI",
    metrics: [
      { label: "Analyst hours saved / month", value: "40+", delta: "positive" },
      { label: "Manual errors / 12 months", value: "0", delta: "positive" },
    ],
    services: ["Process automation", "KPI design", "Workflow redesign"],
    image: "/images/projects/kpi.jpg",
  },
];
