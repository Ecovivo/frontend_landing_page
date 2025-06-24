const Traffic = ["warning", "danger"];
const BasicThemes = ["success", "primary"] as const;
const Themes = [...BasicThemes, ...Traffic, "block", "inline"] as const;

export type Theme = (typeof Themes)[number];
export type BasicTheme = (typeof BasicThemes)[number];

const Sizes = ["sm", "md", "lg"] as const;
export type Size = (typeof Sizes)[number];

const Types = ["outline", "classic", "link"] as const;
export type Type = (typeof Types)[number];

const Pallettes = ["card", "light", "dark"];
export type Pallette = (typeof Pallettes)[number];
