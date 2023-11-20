import { TopCollectionCard } from "@/components/molecules/cards/TopCollectionCard/TopCollectionCard";
import NftCardPlaceholder from "@/assets/placeholders/Nft-card-placeholder.svg";

export default function TopCollectionCardPage() {
  return (
    <div className="flex h-screen flex-wrap items-center justify-center gap-[3rem] base:px-[3rem] md:px-[5rem]">
      {Array.from({ length: 3 }).map((_, index) => (
        <TopCollectionCard
          key={index}
          creator="MrFox"
          collectionName="DSGN Animals"
          collectionLength={1025}
          image={NftCardPlaceholder}
        />
      ))}
    </div>
  );
}
