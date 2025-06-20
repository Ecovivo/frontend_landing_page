const edit = ["asterisk", "copy"];

const Icons = [...edit] as const;
export type Icon = (typeof Icons)[number];
