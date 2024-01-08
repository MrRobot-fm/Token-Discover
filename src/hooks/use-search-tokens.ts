import { SubmitHandler, useForm } from "react-hook-form";
import { StringParam, useQueryParam } from "use-query-params";

export const useSearchTokens = () => {
  const { register, handleSubmit, reset } = useForm<{
    searchValue: string;
  }>({
    defaultValues: { searchValue: "" },
  });

  const [search, setSearch] = useQueryParam("search", StringParam);

  const handleSearch: SubmitHandler<{ searchValue: string }> = (data) => {
    if (data?.searchValue) {
      setSearch(data?.searchValue);
    } else {
      setSearch(null);
    }
    reset();
  };

  return { search, handleSearch, register, handleSubmit };
};
