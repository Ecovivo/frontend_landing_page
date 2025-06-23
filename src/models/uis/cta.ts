import type { ThemeAble } from "@models/uis/basics/themeable";
import type { PalletteAble } from "@models/uis/basics/palletteable";

export interface CtaOptions extends ThemeAble, PalletteAble {}
export interface Cta {
  title: string;
  description: string;
  primary_action: string;
  secondary_action: string;
}
