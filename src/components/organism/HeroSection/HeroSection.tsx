import { HeroCta } from "@/components/atoms/HeroCta/HeroCta";
import { HeroTitle } from "@/components/atoms/HeroTitle/HeroTitle";
import { HighlightedNFTCard } from "@/components/molecules/cards/HighlightedNFTCard/HighlightedNFTCard";
import { StatsCard } from "@/components/molecules/cards/StatsCard/StatsCard";
import { statsValue } from "@/public/mock/stats-value";

export const HeroSection = () => {
  return (
    <div className="flex justify-between gap-[4rem] py-[2.3rem] base:px-[3rem] md:flex-col md:items-start md:px-[5rem] lg:flex-row lg:items-center">
      <div className="flex flex-col justify-center base:gap-[4rem] md:items-stretch md:gap-[6rem] md:p-[5rem] lg:max-w-[50%] lg:items-start lg:gap-[4rem]  lg:p-0">
        <HeroTitle />
        <div className="w-full items-center justify-center base:flex lg:hidden">
          <HighlightedNFTCard author="Animakid" nftName="Space Walking" />
        </div>
        <HeroCta />
        <div className="flex base:justify-between md:justify-evenly lg:justify-start">
          {statsValue.map((value) => (
            <StatsCard key={value.id} stats={value.stat} label={value.label} />
          ))}
        </div>
      </div>
      <div className="base:hidden lg:flex">
        <HighlightedNFTCard author="Animakid" nftName="Space Walking" />
      </div>
    </div>
  );
};
