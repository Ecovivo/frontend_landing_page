import type { GetIcon } from "@models/services";
import { mapperIcon } from "@models/icons";

export const getIcon: GetIcon = (icon, size, color, className = "") => {
  const width = `${size}px`;
  const height = `${size}px`;
  const viewBox = mapperIcon[icon];
  if (className && color) {
    return { width, height, viewBox, className, fill: `#${color}` };
  }
  if (color) {
    return { width, height, viewBox, fill: `#${color}` };
  }
  if (className) {
    return { width, height, viewBox, className };
  }
  return { width, height, viewBox };
};
