import { DehydratedState, QueryClient, dehydrate } from "@tanstack/react-query";
import { getTopCollections } from "@/api/collections/get-trending-collections";

export const prefetchData = async (): Promise<{
  dehydrateState: DehydratedState;
}> => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["trending-collections"],
    queryFn: getTopCollections,
  });

  const dehydrateState = dehydrate(queryClient);

  return { dehydrateState };
};
