import type { InputProps } from "@/components/atoms/Forms/Input/Input.props";

type SearchInputName = "nftSearchValue" | "collectionSearchValue";

export interface SearchBarProps extends Omit<InputProps, "name"> {
  name: SearchInputName;
}
