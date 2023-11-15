import type { ReactNode } from "react";
import type { FieldError } from "react-hook-form";

export type InputWrapperProps = {
  children: ReactNode;
  isError?: boolean;
  error?: FieldError;
  errorMessage?: string;
};
