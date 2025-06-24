import type { ThemeAble } from "@models/uis/basics/themeable";
import type { PalletteAble } from "@models/uis/basics/palletteable";

export interface Pill {
  additional_text: string;
}

export interface DualPill extends ThemeAble, PalletteAble, Pill {}
