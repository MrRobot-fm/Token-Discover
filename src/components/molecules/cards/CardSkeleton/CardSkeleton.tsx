import type { CardSkeletonProps } from "./CardSkeleton.props";
import { cardSkeleton } from "./card-skeleton.variants";

export const CardSkeleton = (props: CardSkeletonProps) => {
  const { variant, barCount = 4 } = props;

  const {
    skeletonRoot,
    skeletonHeader,
    skeletonCircle,
    skeletonHeaderBarWrapper,
    skeletonBody,
    skeletonBar,
  } = cardSkeleton({ variant });
  return (
    <div className={skeletonRoot()}>
      <div className={skeletonHeader()}>
        <div className={skeletonCircle()} />
        <div className={skeletonHeaderBarWrapper()}>
          {Array.from({ length: 2 }).map((_, index) => (
            <div key={index} className={skeletonBar()} />
          ))}
        </div>
      </div>
      <div className={skeletonBody()}>
        {Array.from({ length: barCount }).map((_, index) => (
          <div key={index} className={skeletonBar()} />
        ))}
      </div>
    </div>
  );
};
