import type { MutableRefObject } from "react";
import type {
  FieldErrors,
  SubmitHandler,
  UseFormHandleSubmit,
  UseFormRegister,
} from "react-hook-form";

export type GetInTouchValues = {
  user_name: string;
  user_email: string;
  user_message: string;
};

export type GetInTouchFormProps = {
  register: UseFormRegister<GetInTouchValues>;
  handleSubmit: UseFormHandleSubmit<GetInTouchValues, undefined>;
  errors: FieldErrors<GetInTouchValues>;
  sendEmail: SubmitHandler<GetInTouchValues>;
  form: MutableRefObject<string | HTMLFormElement>;
};
