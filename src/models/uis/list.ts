import type { ThemeAble } from "@models/uis/basics/themeable";
import type { PalletteAble } from "@models/uis/basics/palletteable";

export interface List {
  icon: string;
  text: string;
}

export interface DualList extends ThemeAble, PalletteAble, List {}
