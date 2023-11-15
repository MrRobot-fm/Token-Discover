import { HighlightedNFTCard } from "@/components/molecules/cards/HighlightedNFTCard/HighlightedNFTCard";

export default function NftCardPage() {
  return (
    <div className="flex h-screen flex-col flex-wrap items-center justify-center gap-[3rem] base:px-[3rem] md:px-[5rem]">
      <HighlightedNFTCard
        creator="animaKid"
        nftName="Distant Galaxy"
        nftPrice={1.63}
        criptoCurrency="ETH"
        nftHighBid={0.33}
        hasDetails
      />
    </div>
  );
}
