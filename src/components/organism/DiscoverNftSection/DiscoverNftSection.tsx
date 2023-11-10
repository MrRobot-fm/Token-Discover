import { Section } from "@/components/molecules/Section/Section";
import { HighlightedNFTCard } from "@/components/molecules/cards/HighlightedNFTCard/HighlightedNFTCard";

export const DiscoverNftSection = () => {
  return (
    <Section
      title="Discover More NFTs"
      subTitle="Explore new trending NFTs"
      ctaProps={{ label: "see all", icon: "eye" }}
      hasCta
    >
      <div className="grid w-full gap-[3rem] base:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 3 }).map((_, index) => (
          <HighlightedNFTCard
            key={index}
            variant="nft"
            creator="mr fox"
            nftPrice={1.63}
            nftHighBid={0.33}
            criptoCurrency="ETH"
            hasDetails
          />
        ))}
      </div>
    </Section>
  );
};
