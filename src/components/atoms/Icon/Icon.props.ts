import type { HTMLChakraProps, ThemingProps } from "@chakra-ui/react";
import type { IconName } from "@/types/icons";

export interface IconProps extends ThemingProps, HTMLChakraProps<"div"> {
  name: IconName | string;
}
