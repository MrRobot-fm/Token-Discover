"use client";

import { useQuery } from "@tanstack/react-query";
import { getData } from "../get-data";

export const useGetData = () => {
  return useQuery({
    queryKey: ["data"],
    queryFn: getData,
  });
};
