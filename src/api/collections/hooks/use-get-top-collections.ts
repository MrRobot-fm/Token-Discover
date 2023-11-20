import { UseQueryOptions, useQuery } from "@tanstack/react-query";
import { useMemo } from "react";
import { getTopCollections } from "@/api/collections/get-top-collections";
import {
  GetTopCollectionsResponseModel,
  UseGetTopCollectionsApiParams,
} from "@/types/model/api-top-collections";

export const useGetTopCollections = (
  apiParams: UseGetTopCollectionsApiParams,
  queryOptions?: UseQueryOptions<GetTopCollectionsResponseModel>
) => {
  const {
    chains,
    cursor,
    includeTopContractDetails,
    limit,
    period,
    referenceDate,
  } = apiParams || {};

  const parsedParams: UseGetTopCollectionsApiParams = useMemo(() => {
    return {
      chains,
      ...(limit && { limit }),
      ...(cursor && { cursor }),
      ...(includeTopContractDetails && {
        include_top_contract_details: includeTopContractDetails,
      }),
      ...(period && { time_period: period }),
      ...(referenceDate && { reference_date: referenceDate }),
    };
  }, [apiParams]);

  return useQuery({
    queryKey: ["top-collections", parsedParams],
    queryFn: () => getTopCollections(parsedParams),
    ...queryOptions,
  });
};
