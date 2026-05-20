export type Project = {
  sector: string;
  title: string;
  description: string;
  outcome: string;
  tools: string[];
};

export const projects: Project[] = [
  {
    sector: "FMCG / Optics",
    title: "EMEA Commercial Reporting Overhaul",
    description:
      "Rebuilt the monthly performance reporting cycle for a global optics group across 8 EMEA market clusters — from raw data collection through to executive presentation-ready decks.",
    outcome: "Monthly close reduced from 5 days to 1. Adopted by 30+ country teams.",
    tools: ["Power BI", "Excel / VBA", "ThinkCell", "SharePoint"],
  },
  {
    sector: "Retail",
    title: "Pan-European Market Sizing Framework",
    description:
      "Designed and deployed a standardised market sizing methodology for a pan-European retail group, enabling consistent cross-market benchmarking and performance normalisation for the first time.",
    outcome: "Framework adopted across 12 European markets.",
    tools: ["Python", "SQL", "Tableau"],
  },
  {
    sector: "Financial Services",
    title: "KPI Automation Programme",
    description:
      "Automated the end-of-month KPI pack production for a financial services firm's strategy team, eliminating manual data collection across 6 source systems and a fragile chain of Excel handoffs.",
    outcome: "40+ hours saved per analyst per month. Zero manual errors in 12 months.",
    tools: ["Excel / VBA", "SharePoint", "Power BI"],
  },
];
