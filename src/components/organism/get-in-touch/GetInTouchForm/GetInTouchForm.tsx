"use client";

import { MutableRefObject } from "react";
import {
  emailFormValidation,
  textFormValidation,
} from "@/utils/validation/forms-validation";
import { Button } from "@/components/atoms/Button/Button";
import { Input } from "@/components/atoms/Forms/Input/Input";
import { Textarea } from "@/components/atoms/Forms/Textarea/Textarea";
import type { GetInTouchFormProps } from "./GetInTouchForm.props";

export const GetInTouchForm = (props: GetInTouchFormProps) => {
  const { register, handleSubmit, errors, form, sendEmail } = props;

  return (
    <form
      ref={form as MutableRefObject<HTMLFormElement | null>}
      onSubmit={handleSubmit(sendEmail)}
      className="h-full w-full space-y-[0.5rem] lg:max-w-[90%] xl:max-w-[80%]"
      noValidate
    >
      <Input
        name="user_name"
        placeholder="Your name"
        inputWrapperProps={{ error: errors.user_name }}
        validationRules={textFormValidation}
        {...{ register }}
      />
      <Input
        name="user_email"
        type="email"
        placeholder="Your email"
        inputWrapperProps={{ error: errors.user_email }}
        validationRules={emailFormValidation}
        {...{ register }}
      />
      <Textarea
        name="user_message"
        placeholder="Write here your message..."
        inputWrapperProps={{
          error: errors.user_message,
          inputWrapperStyles: "min-h-[12rem]",
        }}
        validationRules={textFormValidation}
        {...{ register }}
      />
      <Button type="submit" label="Send me a email" />
    </form>
  );
};
