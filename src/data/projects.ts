export interface Project {
  id: string;
  name: string;
  description: string;
  technologies: string[];
  github?: string;
  liveDemo?: string;
  placeholder?: boolean;
}

// No verified project details were supplied yet. These entries are
// clearly marked placeholders so the section never overstates
// Nandini's work — replace with real projects as they're documented.
export const projects: Project[] = [
  {
    id: "project-placeholder-1",
    name: "AI / Data Science Project",
    description: "Details to be added.",
    technologies: ["Python"],
    placeholder: true,
  },
  {
    id: "project-placeholder-2",
    name: "Creative Technology Project",
    description: "Details to be added.",
    technologies: ["2D Graphics"],
    placeholder: true,
  },
];
