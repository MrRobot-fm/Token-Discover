import { Section } from "@/components/molecules/Section/Section";
import { TrendingCollectionCard } from "@/components/molecules/cards/TrendingCollectionCard/TrendingCollectionCard";

export const TrendingCollectionSection = () => {
  return (
    <Section
      title="Trending Collection"
      subTitle="Checkout our weekly updated trending collection."
    >
      <div className="grid w-full base:grid-cols-1 base:gap-[8rem] md:grid-cols-2 md:gap-[4rem] lg:grid-cols-3 lg:flex-row lg:gap-[3rem]">
        {Array.from({ length: 3 }).map((_, index) => (
          <TrendingCollectionCard
            key={index}
            creator="Federico"
            collectionName="Rukawa"
            collectionLength={2000}
          />
        ))}
      </div>
    </Section>
  );
};
