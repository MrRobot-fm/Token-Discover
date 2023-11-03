import v from "voca";
import type { IconProps } from "@/components/atoms/Icon/Icon.props";
import { IconsList } from "@/assets/icons/icons-list";

export const getIconsListLowercase = () => {
  return Object.keys(IconsList).reduce(
    (result, key) => ({
      ...result,
      [v.camelCase(key)]: IconsList[key as keyof typeof IconsList],
    }),
    {} as IconProps
  );
};
