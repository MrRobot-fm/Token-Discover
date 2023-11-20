import { Button } from "@/components/atoms/Button/Button";
import { CarouselButtonProps } from "./Carousel.props";

export const CarouselButton = (props: CarouselButtonProps) => {
  const { icon, variant, buttonWrapperStyles, ...rest } = props;
  return <Button {...{ icon, variant, buttonWrapperStyles, ...rest }} />;
};
