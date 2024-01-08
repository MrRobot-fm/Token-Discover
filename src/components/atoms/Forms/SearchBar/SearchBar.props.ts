import { HTMLProps } from "react";
import type { InputProps } from "@/components/atoms/Forms/Input/Input.props";

export interface SearchBarProps
  extends Omit<InputProps, "name" | "onSubmit">,
    Pick<HTMLProps<HTMLFormElement>, "onSubmit"> {
  name: "searchValue";
}
