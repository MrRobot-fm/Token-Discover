import { HTMLProps } from "react";
import type { InputProps } from "@/components/atoms/Forms/Input/Input.props";

export type SearchInputName =
  | "nftName"
  | "collectionSearchValue"
  | "collectionName";

export interface SearchBarProps
  extends Omit<InputProps, "name" | "onSubmit">,
    Pick<HTMLProps<HTMLFormElement>, "onSubmit"> {
  name: SearchInputName;
}
