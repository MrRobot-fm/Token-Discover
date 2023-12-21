import type { HTMLProps, ReactNode } from "react";
import type { FieldError } from "react-hook-form";

export type InputWrapperProps = {
  children: ReactNode;
  isError?: boolean;
  error?: FieldError;
  errorMessage?: string;
  inputWrapperStyles?: HTMLProps<HTMLInputElement>["className"];
};
