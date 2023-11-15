import { CreatorCard } from "@/components/molecules/cards/CreatorCard/CreatorCard";

export default function ArtistCardPage() {
  return (
    <div className="flex h-screen flex-col flex-wrap items-center justify-center gap-[3rem] base:px-[3rem] md:px-[5rem]">
      <CreatorCard
        creatorName="animaKid"
        totalSales={34.53}
        criptoCurrency="ETH"
        avatarStyle={{ size: { base: "md", lg: "lg" } }}
      />
      <CreatorCard
        creatorName="GravityOne"
        totalSales={28.93}
        criptoCurrency="ETH"
        avatarStyle={{ size: { base: "md", lg: "lg" } }}
      />
    </div>
  );
}
