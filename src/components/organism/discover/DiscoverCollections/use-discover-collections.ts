import { useMemo } from "react";
import v from "voca";
import useBreakpoints from "@/hooks/use-breakpoints";
import { GetCollectionsByNameResponseModel } from "@/types/model/api-collection-by-name";
import { TopNftSoldCardProps } from "@/components/molecules/cards/TopNftSoldCard/TopNftSoldCard.props";

export const useDiscoverCollections = ({
  data,
}: {
  data: GetCollectionsByNameResponseModel | undefined;
}) => {
  const { isBase, isMobile } = useBreakpoints();

  const loadedItems = isBase || isMobile ? 10 : 30;

  const parsedItems: TopNftSoldCardProps[] = useMemo(() => {
    if (!data) return [];

    return data?.collections?.map((item) => {
      const { name, blockchain, contracts, logo, total_supply } = item || {};

      return {
        nftName: name,
        href:
          `/collections/${v.kebabCase(name) || null}/${
            blockchain?.toLowerCase() === "eth" && "ethereum"
          }/${contracts[0]}` || "",
        image: {
          src: logo || "",
          alt: `${name}-img`,
        },
        avatarStyle: { size: { base: "md", md: "lg" } },
        totalSupply: total_supply,
        hasFooter: false,
        hasPrice: false,
        hasSupply: true,
      };
    });
  }, [data]);

  const filteredItems = useMemo(() => {
    return parsedItems
      ?.filter((item) => item?.nftName !== "" && item?.image?.src !== "")
      .slice(0, loadedItems);
  }, [loadedItems, parsedItems]);

  return { filteredItems };
};
