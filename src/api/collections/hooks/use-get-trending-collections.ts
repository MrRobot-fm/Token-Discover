import { useQuery } from "@tanstack/react-query";
import { getTopCollections } from "../get-trending-collections";

export const useGetTopCollections = () => {
  return useQuery({
    queryKey: ["trending-collections"],
    queryFn: () => getTopCollections(),
  });
};
