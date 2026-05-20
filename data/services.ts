export type Service = {
  number: string;
  title: string;
  description: string;
  capabilities: string[];
};

export const services: Service[] = [
  {
    number: "01",
    title: "Strategy & Advisory",
    description:
      "Market intelligence, competitive analysis, and go-to-market planning for complex EMEA markets.",
    capabilities: [
      "Market sizing",
      "Competitive benchmarking",
      "Commercial strategy",
      "Executive reporting",
    ],
  },
  {
    number: "02",
    title: "Data & Analytics",
    description:
      "End-to-end analytics solutions — from KPI frameworks to executive dashboards that decision-makers actually use.",
    capabilities: [
      "KPI design",
      "Dashboard development",
      "Performance reporting",
      "Data visualisation",
    ],
  },
  {
    number: "03",
    title: "Operations Excellence",
    description:
      "Process redesign and workflow automation that measurably reduces overhead and reporting friction.",
    capabilities: [
      "Process mapping",
      "Workflow automation",
      "Reporting cadence design",
      "Team enablement",
    ],
  },
  {
    number: "04",
    title: "Business Intelligence",
    description:
      "BI architecture, data pipelines, and scalable reporting infrastructure built for growth.",
    capabilities: [
      "BI architecture",
      "Data pipelines",
      "ETL design",
      "Tool integration",
    ],
  },
];
