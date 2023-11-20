import { CarouselItemProps } from "./Carousel.props";
import { carousel } from "./carousel.variants";

export const CarouselItem = (props: CarouselItemProps) => {
  const { children, configStyles, variant } = props;

  const { carouselSlide } = carousel({ variant });

  return (
    <div className={carouselSlide({ className: configStyles })}>{children}</div>
  );
};
