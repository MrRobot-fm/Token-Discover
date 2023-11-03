import { EXTERNAL_URL_REGEX } from "@/constants/regex";

export const checkIsExternal = (href?: string) => {
  if (!href) return false;

  return new RegExp(EXTERNAL_URL_REGEX).test(href);
};
