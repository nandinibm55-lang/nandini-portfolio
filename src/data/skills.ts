export interface SkillGroup {
  category: string;
  description: string;
  items: string[];
}

// Skill areas reflect Nandini's declared academic specialization
// (B.Tech CSE — Artificial Intelligence & Data Science) and her
// creative identity as a 2D graphics editor. Specific third-party
// tools are intentionally omitted until verified.
export const skillGroups: SkillGroup[] = [
  {
    category: "AI & Data Science",
    description: "Core focus areas within her specialization.",
    items: ["Python", "Machine Learning Fundamentals", "Data Analysis", "Data Visualization", "Statistics"],
  },
  {
    category: "Programming",
    description: "Languages studied as part of the CSE curriculum.",
    items: ["Python", "Java", "C", "C++"],
  },
  {
    category: "Web & Technical",
    description: "Foundational web technologies.",
    items: ["HTML", "CSS", "JavaScript"],
  },
  {
    category: "2D Graphics & Creative Design",
    description: "Visual design practice alongside technical study.",
    items: [
      "2D Graphics Editing",
      "Digital Illustration",
      "Vector Design",
      "Visual Composition",
      "Layout Design",
      "Color Theory",
    ],
  },
];
