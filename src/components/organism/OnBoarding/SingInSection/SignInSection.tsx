import { OnBoardingImage } from "@/components/atoms/onboarding/OnBoardingImage/OnBoardingImage";
import { OnBoardingWrapper } from "@/components/molecules/onboarding/OnBoardingWrapper/OnBoardingWrapper";

export const SignInSection = () => {
  return (
    <>
      <OnBoardingImage />
      <OnBoardingWrapper isSignIn />
    </>
  );
};
