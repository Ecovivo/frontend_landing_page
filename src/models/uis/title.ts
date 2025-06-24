import type { ThemeAble } from "@models/uis/basics/themeable";
import type { PalletteAble } from "@models/uis/basics/palletteable";

export interface Title {
  title: string;
}

export interface DualTitle extends ThemeAble, PalletteAble, Title {}
