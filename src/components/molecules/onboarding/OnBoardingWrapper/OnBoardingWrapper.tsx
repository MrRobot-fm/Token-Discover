"use client";

import { FormProvider, useForm } from "react-hook-form";
import type {
  SignInValues,
  SignUpValues,
} from "@/components/atoms/Forms/Input/Input.props";
import { OnBoardingHeading } from "@/components/atoms/onboarding/OnboardingHeading/OnBoardingHeading";
import { SingInForm } from "../SignInForm/SignInForm";
import { SingUpForm } from "../SingUpForm/SingUpForm";
import { styles } from "../onboarding.styles";

export const OnBoardingWrapper = ({
  isSignUp = false,
  isSignIn = false,
}: {
  isSignUp?: boolean;
  isSignIn?: boolean;
}) => {
  const singUpForm = useForm<SignUpValues>();
  const signInForm = useForm<SignInValues>();

  return (
    <div className={styles.onboarding}>
      <div className={styles.onboarding__heading}>
        <OnBoardingHeading
          title={isSignUp ? "Create account" : "Login"}
          subTitle="Welcome, enter your details and start discovering NFTs!"
        />
      </div>
      <div className={styles.onboarding__form_section}>
        {isSignUp && (
          <FormProvider {...singUpForm}>
            <SingUpForm />
          </FormProvider>
        )}
        {isSignIn && (
          <FormProvider {...signInForm}>
            <SingInForm />
          </FormProvider>
        )}
      </div>
    </div>
  );
};
