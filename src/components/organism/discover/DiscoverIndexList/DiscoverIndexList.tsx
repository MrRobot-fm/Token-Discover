import useBreakpoints from "@/hooks/use-breakpoints";
import { Button } from "@/components/atoms/Button/Button";
import { Skeleton } from "@/components/molecules/Skeleton/Skeleton";
import type { DiscoverIndexListProps } from "./DiscoverIndexList.props";
import { styles } from "./discover-index-list.styles";
import { useDiscoverIndexList } from "./use-discover-index-list";

export const DiscoverIndexList = (props: DiscoverIndexListProps) => {
  const { items, isLoading, skeletonVariant } = props;

  const { isBase, isMobile, isTablet } = useBreakpoints();
  const { handleItemToLoad, loadedItems } = useDiscoverIndexList();

  return (
    <div className={styles.listWrapper}>
      {isLoading
        ? Array.from({ length: items.length }).map((_, index) => (
            <Skeleton key={index} variant={skeletonVariant} barCount={2} />
          ))
        : (items || [])
            .slice(0, loadedItems)
            .map((item, index) => <div key={index}>{item}</div>)}
      {(isBase || isMobile || isTablet) && (
        <Button
          label="load more"
          onClick={handleItemToLoad}
          buttonWrapperStyles="col-span-full"
        />
      )}
    </div>
  );
};
