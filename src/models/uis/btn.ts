import type { SizeAble } from "@models/uis/basics/sizeable";
import type { TypeAble } from "@models/uis/basics/typeable";
import type { ThemeAble } from "@models/uis/basics/themeable";
import type { PalletteAble } from "@models/uis/basics/palletteable";

export interface BtnOptions
  extends PalletteAble,
    ThemeAble,
    TypeAble,
    SizeAble {}

export interface Btn {
  label: string;
}
