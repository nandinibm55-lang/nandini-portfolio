export interface Artwork {
  id: string;
  title: string;
  category: string;
  description: string;
  size: "large" | "small" | "wide";
  placeholder: true;
}

// No artwork files were supplied, so every entry is an explicitly
// labelled placeholder rather than invented creative work.
export const artworks: Artwork[] = [
  {
    id: "artwork-1",
    title: "Artwork Preview",
    category: "Poster Design",
    description: "Details to be added.",
    size: "large",
    placeholder: true,
  },
  {
    id: "artwork-2",
    title: "Artwork Preview",
    category: "Digital Illustration",
    description: "Details to be added.",
    size: "small",
    placeholder: true,
  },
  {
    id: "artwork-3",
    title: "Artwork Preview",
    category: "Social Media Graphic",
    description: "Details to be added.",
    size: "small",
    placeholder: true,
  },
  {
    id: "artwork-4",
    title: "Artwork Preview",
    category: "Vector Composition",
    description: "Details to be added.",
    size: "wide",
    placeholder: true,
  },
];
