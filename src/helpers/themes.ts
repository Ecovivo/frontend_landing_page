import type { GetBasicBy } from "@models/helpers/themes";

export const getBasicBy: GetBasicBy = (theme) => {
  if (theme === "success") {
    return "primary";
  }
  return "success";
};
