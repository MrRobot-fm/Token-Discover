import React from "react";
import { HighlightedNFTCard } from "@/components/molecules/cards/HighlightedNFTCard/HighlightedNFTCard";
import NftCardPlaceholder from "@/assets/placeholders/Nft-card-placeholder.svg";

export default function HighlightedNFTCardPage() {
  return (
    <div className="flex h-screen items-center justify-center">
      <HighlightedNFTCard
        collectionName="Animakid"
        nftName="Space Walking"
        cardImage={{ src: NftCardPlaceholder, alt: "card-img" }}
      />
    </div>
  );
}
