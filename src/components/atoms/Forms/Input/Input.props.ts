/* eslint-disable @typescript-eslint/no-explicit-any */
import type { HTMLProps } from "react";
import type { Path, RegisterOptions, UseFormRegister } from "react-hook-form";
import type { InputWrapperProps } from "@/components/atoms/Forms/InputWrapper/InputWrapper.props";

export interface SignUpValues {
  username: string;
  password: string;
  "confirm password": string;
  email: string;
}

export interface SignInValues {
  password: string;
  email: string;
}

type ReactHookFormInputProps = {
  name?: Path<any>;
  register?: UseFormRegister<any>;
};

export interface InputProps
  extends Omit<HTMLProps<HTMLInputElement>, "required" | "name">,
    ReactHookFormInputProps {
  inputWrapperProps?: Omit<InputWrapperProps, "children">;
  validationRules?: RegisterOptions;
}
