import { HighlightedNFTCard } from "@/components/molecules/cards/HighlightedNFTCard/HighlightedNFTCard";

export const HeroCard = () => {
  return (
    <HighlightedNFTCard
      nftName="#26"
      collectionName="Mutant Ape Yacht Club"
      cardImage={{
        src: "https://cdn.simplehash.com/assets/5d3fd2e902eb5ff4a8f2a8f6dfb27f70dcf73527358f8fae013c6088f1d3a33d.png",
        alt: "#26-img",
        priority: true,
      }}
      avatarImage={{
        src: "https://lh3.googleusercontent.com/C_fjl1iM5iRwuk74N9DBrOmU-1-_lc_8x66BsWU8votTb3iwXiVJwmqJ2qd8BUI1DSDo_9KxcNcNJrdpnnxebLwpeJB7eiYSeI8",
        alt: "collection-img",
      }}
    />
  );
};
