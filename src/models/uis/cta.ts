import type { ThemeAble, BasicThemeAble } from "@models/uis/basics/themeable";
import type { PalletteAble } from "@models/uis/basics/palletteable";

export interface CtaOptions extends ThemeAble, PalletteAble {}
export interface Cta {
  title: string;
  description: string;
  primary_action: string;
  secondary_action: string;
}

export interface Items {
  icon: string;
  text: string;
}

export interface DualCtaOptions extends BasicThemeAble, PalletteAble {}
export interface DualCta extends Cta {
  items: Items[];
  additional_text: string;
}
