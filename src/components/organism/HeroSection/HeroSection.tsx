import { HeroTitle } from "@/components/atoms/HeroTitle/HeroTitle";
import { SectionCta } from "@/components/atoms/SectionCta/SectionCta";
import { HighlightedNFTCard } from "@/components/molecules/cards/HighlightedNFTCard/HighlightedNFTCard";
import { StatsCard } from "@/components/molecules/cards/StatsCard/StatsCard";
import { statsValue } from "@/public/mock/stats-value";

export const HeroSection = () => {
  return (
    <main className="flex max-w-[144rem] justify-between gap-[4rem] py-[2.5rem] md:flex-col md:items-start lg:flex-row lg:items-center lg:pb-[8rem] xl:py-[8rem]">
      <div className="flex flex-col justify-center base:gap-[4rem] md:items-stretch md:gap-[6rem] md:py-[5rem] lg:w-[50%] lg:items-start lg:gap-[4rem] lg:p-0">
        <HeroTitle />
        <div className="w-full items-center justify-center base:flex lg:hidden">
          <HighlightedNFTCard creator="Animakid" nftName="Space Walking" />
        </div>
        <SectionCta />
        <div className="flex base:justify-between md:justify-evenly lg:justify-start">
          {statsValue.map((value) => (
            <StatsCard key={value.id} stats={value.stat} label={value.label} />
          ))}
        </div>
      </div>
      <div className=" w-[50%] items-start justify-center base:hidden lg:flex">
        <HighlightedNFTCard creator="Animakid" nftName="Space Walking" />
      </div>
    </main>
  );
};
