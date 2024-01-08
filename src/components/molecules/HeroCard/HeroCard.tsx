import { HERO_CARD_AVATAR_IMG, HERO_CARD_IMG } from "@/utils/constants/global";
import useBreakpoints from "@/hooks/use-breakpoints";
import { HighlightedNFTCard } from "@/components/molecules/cards/HighlightedNFTCard/HighlightedNFTCard";

export const HeroCard = () => {
  const { isBase, isMobile } = useBreakpoints();
  return (
    <HighlightedNFTCard
      nftName={isBase || isMobile ? "#2398" : "Mutant Ape Yacht Club #2398"}
      collectionName="Mutant Ape Yacht Club"
      cardImage={{
        src: HERO_CARD_IMG,
        alt: "#26-img",
        priority: true,
      }}
      avatarImage={{
        src: HERO_CARD_AVATAR_IMG,
        alt: "collection-img",
      }}
    />
  );
};
