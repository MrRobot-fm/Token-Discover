import { useMemo, useState } from "react";
import useBreakpoints from "@/hooks/use-breakpoints";

export const useDiscoverIndexList = () => {
  const { isBase, isMobile, isTablet } = useBreakpoints();

  const initialLoadedItems = 10;

  const [itemToLoad, setItemToLoad] = useState<number>(initialLoadedItems);

  const handleItemToLoad = () => {
    setItemToLoad((prev) => prev + initialLoadedItems);
  };

  const loadedItems = useMemo(() => {
    if (isBase || isMobile || isTablet) {
      return itemToLoad;
    }

    return -1;
  }, [isBase, isMobile, isTablet, itemToLoad]);

  return {
    handleItemToLoad,
    loadedItems,
  };
};
