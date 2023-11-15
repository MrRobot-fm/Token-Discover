import { HTMLProps } from "react";
import type { IconName } from "@/types/icons";
import type { ButtonVariants } from "./button.variants";

export interface ButtonProps
  extends ButtonVariants,
    Pick<HTMLProps<HTMLButtonElement>, "onClick" | "className"> {
  url?: string;
  label?: string;
  icon?: IconName;
  type?: "button" | "submit" | "reset";
  buttonWrapperStyles?: HTMLProps<HTMLElement>["className"];
}
