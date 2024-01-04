"use client";

import NextAdapterApp from "next-query-params/app";
import { type ReactNode, Suspense } from "react";
import { QueryParamProvider } from "use-query-params";

export const QueryParamsProvider = ({ children }: { children: ReactNode }) => {
  return (
    <Suspense fallback={<>Loading</>}>
      <QueryParamProvider adapter={NextAdapterApp}>
        {children}
      </QueryParamProvider>
    </Suspense>
  );
};
