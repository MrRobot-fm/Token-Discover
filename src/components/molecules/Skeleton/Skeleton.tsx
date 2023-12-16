import type { SkeletonProps } from "./Skeleton.props";
import { skeleton } from "./skeleton.variants";

export const Skeleton = (props: SkeletonProps) => {
  const { variant, barCount = 4, children, className } = props;

  const {
    skeletonRoot,
    skeletonHeader,
    skeletonCircle,
    skeletonHeaderBarWrapper,
    skeletonBody,
    skeletonBar,
  } = skeleton({ variant, className });
  return (
    <div className={skeletonRoot()}>
      <div className={skeletonHeader()}>
        <div className={skeletonCircle()} />
        <div className={skeletonHeaderBarWrapper()}>
          {Array.from({ length: 2 }).map((_, index) => (
            <div key={index} className={skeletonBar()} />
          ))}
        </div>
        {children}
      </div>
      <div className={skeletonBody()}>
        {Array.from({ length: barCount }).map((_, index) => (
          <div key={index} className={skeletonBar()} />
        ))}
      </div>
    </div>
  );
};
