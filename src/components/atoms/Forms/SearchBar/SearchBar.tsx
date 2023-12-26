import { Input } from "@/components/atoms/Forms/Input/Input";
import type { SearchBarProps } from "./SearchBar.props";

export const SearchBar = (props: SearchBarProps) => {
  const { name, label, placeholder, type = "search", register } = props;
  return (
    <div className="mx-auto lg:max-w-[62.5rem]">
      <Input {...{ name, label, placeholder, type, register }} />
    </div>
  );
};
