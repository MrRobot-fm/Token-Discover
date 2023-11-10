import React from "react";
import { Section } from "@/components/molecules/Section/Section";
import { CreatorCard } from "@/components/molecules/cards/CreatorCard/CreatorCard";

export const TopCreatorSection = () => {
  return (
    <Section
      title="Top creators"
      subTitle="Checkout Top Rated Creators on the NFT Marketplace"
      hasCta
      ctaProps={{ icon: "rocket", label: "View Rankings" }}
    >
      <div className="grid w-full gap-[3rem] base:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
        {Array.from({ length: 12 }).map((_, index) => (
          <CreatorCard
            key={index}
            creatorName="animaKid"
            totalSales={34.53}
            criptoCurrency="ETH"
            avatarStyle={{ size: { base: "md", md: "lg" } }}
          />
        ))}
      </div>
    </Section>
  );
};
