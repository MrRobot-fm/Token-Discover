import { TopNftSoldCard } from "@/components/molecules/cards/TopNftSoldCard/TopNftSoldCard";

export default function ArtistCardPage() {
  return (
    <div className="flex h-screen flex-col flex-wrap items-center justify-center gap-[3rem] base:px-[3rem] md:px-[5rem]">
      <TopNftSoldCard
        nftName="animaKid"
        price={34.53}
        criptoCurrency="ETH"
        avatarStyle={{ size: { base: "md", lg: "lg" } }}
        image={{ src: "", alt: "" }}
      />
      <TopNftSoldCard
        nftName="GravityOne"
        price={28.93}
        criptoCurrency="ETH"
        avatarStyle={{ size: { base: "md", lg: "lg" } }}
        image={{ src: "", alt: "" }}
      />
    </div>
  );
}
