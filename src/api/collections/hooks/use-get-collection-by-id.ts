import { UseQueryOptions, useQuery } from "@tanstack/react-query";
import { useMemo } from "react";
import { getCollectionById } from "@/api/collections/get-collection-by-id";
import {
  GetCollectionByIdResponseModel,
  GetCollectionByIdSearchParams,
  UseGetCollectionByIdApiParams,
} from "@/types/model/api-collection-by-id";

export const useGetCollectionById = (
  apiParams: UseGetCollectionByIdApiParams,
  queryOptions?: UseQueryOptions<GetCollectionByIdResponseModel>
) => {
  const { collectionId, includeTopContractDetails } = apiParams || {};

  const parsedParams: GetCollectionByIdSearchParams = useMemo(() => {
    return {
      collection_ids: collectionId,
      ...(includeTopContractDetails && {
        include_top_contract_details: includeTopContractDetails,
      }),
    };
  }, [apiParams]);
  return useQuery({
    queryKey: ["collection-by-id", parsedParams],
    queryFn: () => getCollectionById(parsedParams),
    ...queryOptions,
  });
};
