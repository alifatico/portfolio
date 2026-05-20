// data/skills.ts
export type SkillGroup = {
  label: string;
  skills: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    label: "Analytics & Reporting",
    skills: ["Excel / VBA", "Power BI", "ThinkCell", "SQL"],
  },
  {
    label: "Strategy & Ops",
    skills: ["MBR coordination", "Business reviews", "Stakeholder management"],
  },
  {
    label: "Tools",
    skills: ["SharePoint", "Python", "Git", "Apify"],
  },
  {
    label: "Languages",
    skills: ["Italian (native)", "English (fluent)", "French (working)"],
  },
];
