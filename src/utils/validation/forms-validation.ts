import type { Message, RegisterOptions, ValidationRule } from "react-hook-form";
import { EMAIL_REGEX, PASSWORD_REGEX } from "@/utils/constants/regex";
import { INPUT_MIN_LENGTH } from "@/utils/constants/validation";

export const sharedFormValidation: {
  required: Message | ValidationRule<boolean>;
} = {
  required: {
    value: true,
    message: "Field is required",
  },
};

export const textFormValidation: RegisterOptions = {
  minLength: {
    value: INPUT_MIN_LENGTH,
    message: "Field must be at least 4 characters",
  },
  ...sharedFormValidation,
};

export const emailFormValidation: RegisterOptions = {
  pattern: {
    value: EMAIL_REGEX,
    message: "Please enter a valid email",
  },
  ...sharedFormValidation,
};

export const passwordFormValidation: RegisterOptions = {
  pattern: {
    value: PASSWORD_REGEX,
    message:
      "Password must contain one lowercase letter, one number and one special character",
  },
  ...sharedFormValidation,
};
