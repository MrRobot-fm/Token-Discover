import { Skeleton } from "@/components/molecules/Skeleton/Skeleton";
import type { DiscoverIndexListProps } from "./DiscoverIndexList.props";
import { styles } from "./discover-index-list.styles";

export const DiscoverIndexList = (props: DiscoverIndexListProps) => {
  const { items, isLoading, skeletonVariant } = props;

  return (
    <div className={styles.listWrapper}>
      {isLoading
        ? Array.from({ length: items?.length || 10 }).map((_, index) => (
            <Skeleton key={index} variant={skeletonVariant} barCount={2} />
          ))
        : (items || []).map((item, index) => <div key={index}>{item}</div>)}
    </div>
  );
};
