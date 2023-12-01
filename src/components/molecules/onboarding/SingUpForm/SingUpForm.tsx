import { SubmitHandler, useFormContext } from "react-hook-form";
import { PAGES_PATH } from "@/utils/constants/pages-path";
import {
  emailFormValidation,
  passwordFormValidation,
  textFormValidation,
} from "@/utils/validation/forms-validation";
import { Button } from "@/components/atoms/Button/Button";
import { Input } from "@/components/atoms/Forms/Input/Input";
import { SignUpValues } from "@/components/atoms/Forms/Input/Input.props";
import { InputPassword } from "@/components/atoms/Forms/InputPassword/InputPassword";
import { OnBoardingFooter } from "@/components/atoms/onboarding/OnBoardingFooter/OnBoardingFooter";
import { styles } from "../onboarding.styles";

export const SingUpForm = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useFormContext<SignUpValues>();

  const handleSignUpSubmit: SubmitHandler<SignUpValues> = (data) =>
    // eslint-disable-next-line no-console
    console.log(data);

  return (
    <form
      onSubmit={handleSubmit(handleSignUpSubmit)}
      className={styles.form}
      noValidate
    >
      <Input
        name="username"
        type="text"
        placeholder="username"
        {...{ register }}
        inputWrapperProps={{ error: errors.username }}
        validationRules={textFormValidation}
      />
      <Input
        name="email"
        type="email"
        placeholder="email"
        {...{ register }}
        inputWrapperProps={{ error: errors.email }}
        validationRules={emailFormValidation}
      />
      <InputPassword
        name="password"
        type="password"
        placeholder="password"
        {...{ register }}
        inputWrapperProps={{ error: errors.password }}
        validationRules={passwordFormValidation}
      />
      <InputPassword
        name="confirm password"
        type="password"
        placeholder="confirm password"
        {...{ register }}
        inputWrapperProps={{ error: errors["confirm password"] }}
        validationRules={passwordFormValidation}
      />
      <Button
        type="submit"
        label="create account"
        buttonWrapperStyles="mt-[1rem]"
      />
      <OnBoardingFooter
        href={PAGES_PATH.SIGN_IN}
        label="Do not have an account?"
        cta="sign in"
      />
    </form>
  );
};
