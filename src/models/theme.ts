const PartTheme = ["success", "warning", "danger", "inline", "primary"];
const Themes = [...PartTheme, "block"] as const;

export type Theme = (typeof Themes)[number];

const Sizes = ["sm", "md", "lg"] as const;
export type Size = (typeof Sizes)[number];

const Types = ["outline", "classic", "link"] as const;
export type Type = (typeof Types)[number];

const Pallettes = ["card", "light", "dark"];
export type Pallette = (typeof Pallettes)[number];
