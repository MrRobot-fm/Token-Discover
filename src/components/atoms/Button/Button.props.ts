import type { HTMLProps } from "react";
import type { IconName } from "@/types/icons";
import type { IconVariants } from "../Icon/Icon.variants";
import type { ButtonVariants } from "./button.variants";

export interface ButtonProps
  extends Omit<ButtonVariants, "size">,
    Pick<
      HTMLProps<HTMLButtonElement>,
      | "onClick"
      | "className"
      | "value"
      | "name"
      | "defaultValue"
      | "ref"
      | "data"
    > {
  size?: ButtonVariants["size"];
  iconSize?: IconVariants["size"];
  href?: string;
  label?: string;
  icon?: IconName;
  type?: "button" | "submit" | "reset";
  buttonWrapperStyles?: HTMLProps<HTMLElement>["className"];
}
