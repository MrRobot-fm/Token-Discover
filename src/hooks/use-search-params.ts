import { FieldValues, UseFormReset } from "react-hook-form";
import { StringParam, useQueryParam, withDefault } from "use-query-params";

export const useSearchParams = <T extends FieldValues>({
  formValue,
  defaultParam,
  reset,
}: {
  formValue: string | null;
  defaultParam?: string;
  reset: UseFormReset<T>;
}) => {
  const [search, setSearch] = useQueryParam(
    "search",
    withDefault(StringParam, defaultParam)
  );

  const handleSearch = () => {
    if (formValue) {
      setSearch(formValue);
    } else {
      setSearch(null);
    }
    reset();
  };

  return { search, handleSearch };
};
