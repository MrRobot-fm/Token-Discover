import { SubmitHandler, useFormContext } from "react-hook-form";
import { PAGES_PATH } from "@/utils/constants/pages-path";
import {
  emailFormValidation,
  passwordFormValidation,
} from "@/utils/validation/forms-validation";
import { Button } from "@/components/atoms/Button/Button";
import { Input } from "@/components/atoms/Forms/Input/Input";
import type { SignInValues } from "@/components/atoms/Forms/Input/Input.props";
import { InputPassword } from "@/components/atoms/Forms/InputPassword/InputPassword";
import { OnBoardingFooter } from "@/components/atoms/onboarding/OnBoardingFooter/OnBoardingFooter";
import { styles } from "../onboarding.styles";

export const SingInForm = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useFormContext<SignInValues>();

  const handleSignInSubmit: SubmitHandler<SignInValues> = (data) =>
    // eslint-disable-next-line no-console
    console.log(data);

  return (
    <form
      onSubmit={handleSubmit(handleSignInSubmit)}
      className={styles.form}
      noValidate
    >
      <Input
        name="email"
        type="email"
        placeholder="email"
        inputWrapperProps={{ error: errors.email }}
        validationRules={emailFormValidation}
        {...{ register }}
      />
      <InputPassword
        name="password"
        type="password"
        placeholder="password"
        inputWrapperProps={{ error: errors.password }}
        validationRules={passwordFormValidation}
        {...{ register }}
      />

      <Button type="submit" label="Sign in" buttonWrapperStyles="mt-[1rem]" />
      <OnBoardingFooter
        href={PAGES_PATH.SIGN_UP}
        label="Do you already have an account?"
        cta="sing up"
      />
    </form>
  );
};
