import { CustomImage } from "@/components/atoms/Image/CustomImage";
import Placeholder from "@/assets/placeholders/Nft-card-placeholder.svg";

export const OnBoardingImage = () => {
  return (
    <div className="base:aspect-[5/3] base:w-full lg:aspect-auto lg:h-screen lg:w-[50%]">
      <CustomImage src={Placeholder} alt="image" />
    </div>
  );
};
