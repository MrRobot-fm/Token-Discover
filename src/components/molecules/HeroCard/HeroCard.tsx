import { HERO_CARD_AVATAR_IMG, HERO_CARD_IMG } from "@/utils/constants/global";
import { HighlightedNFTCard } from "@/components/molecules/cards/HighlightedNFTCard/HighlightedNFTCard";

export const HeroCard = () => {
  return (
    <HighlightedNFTCard
      nftName="#26"
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
