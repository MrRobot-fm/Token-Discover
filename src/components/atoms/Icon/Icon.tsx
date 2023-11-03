import v from "voca";
import type { IconProps } from "@/components/atoms/Icon/Icon.props";
import { IconsList } from "@/assets/icons/icons-list";

export const Icon = (props: IconProps) => {
  const { name, className: cn } = props;

  const obj = Object.keys(IconsList).reduce(
    (result, key) => ({
      ...result,
      [v.camelCase(key)]: IconsList[key as keyof typeof IconsList],
    }),
    {} as IconProps
  );

  const Element = name ? obj[name as keyof typeof obj] : <></>;

  if (!Element) return <></>;

  return (
    <div className={cn}>{<Element w="auto" h="auto" fontSize="unset" />}</div>
  );
};
