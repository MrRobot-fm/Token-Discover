import { Section } from "@/components/molecules/Section/Section";
import { TrendingCollectionCard } from "@/components/molecules/cards/TrendingCollectionCard/TrendingCollectionCard";

export const TrendingCollectionSection = () => {
  return (
    <Section
      title="Trending Collection"
      subTitle="Checkout our weekly updated trending collection."
      ctaProps={{ label: "View Rankings", icon: "rocket" }}
      hasCta
    >
      <div className="flex w-full base:flex-col base:gap-[8rem] lg:flex-row lg:gap-[3rem]">
        {Array.from({ length: 3 }).map((_, index) => (
          <TrendingCollectionCard
            key={index}
            author="Federico"
            collectionName="Rukawa"
            collectionLength={2000}
          />
        ))}
      </div>
    </Section>
  );
};
