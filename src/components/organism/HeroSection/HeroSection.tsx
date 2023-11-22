"use client";

import { useGetNftByTokenId } from "@/api/NFT/hooks/use-get-nft-by-token-id";
import { HeroTitle } from "@/components/atoms/HeroTitle/HeroTitle";
import { SectionCta } from "@/components/atoms/SectionCta/SectionCta";
import { CardSkeleton } from "@/components/molecules/cards/CardSkeleton/CardSkeleton";
import { HighlightedNFTCard } from "@/components/molecules/cards/HighlightedNFTCard/HighlightedNFTCard";
import { StatsCard } from "@/components/molecules/cards/StatsCard/StatsCard";
import { statsValue } from "@/public/mock/stats-value";

export const HeroSection = () => {
  const { data: nftData, isLoading } = useGetNftByTokenId({
    chain: "ethereum",
    contractAddress: "0xBC4CA0EdA7647A8aB7C2061c2E118A18a936f13D",
    tokenId: "4160",
  });

  return (
    <main className="flex max-w-[144rem] justify-between gap-[4rem] py-[2.5rem] md:flex-col md:items-start lg:flex-row lg:items-center lg:pb-[8rem] xl:py-[8rem]">
      <div className="flex flex-col justify-center base:gap-[4rem] md:items-stretch md:gap-[6rem] md:py-[5rem] lg:w-[55%] lg:items-start lg:gap-[4rem] lg:p-0">
        <HeroTitle />
        <div className="w-full items-center justify-center base:flex lg:hidden">
          {isLoading ? (
            <CardSkeleton />
          ) : (
            <HighlightedNFTCard
              nftName={`#${nftData?.token_id}` || ""}
              collectionName={nftData?.collection?.name || ""}
              cardImage={{
                src: nftData?.image_url || "",
                alt: nftData?.token_id || "nft-img",
              }}
              avatarImage={{
                src: nftData?.collection?.image_url || "",
                alt: nftData?.collection?.name || "",
              }}
            />
          )}
        </div>
        <SectionCta />
        <div className="flex base:justify-between md:justify-evenly lg:justify-start">
          {statsValue.map((value) => (
            <StatsCard key={value.id} stats={value.stat} label={value.label} />
          ))}
        </div>
      </div>
      <div className="w-[45%] items-start justify-end base:hidden lg:flex">
        {isLoading ? (
          <CardSkeleton />
        ) : (
          <HighlightedNFTCard
            nftName={`#${nftData?.token_id}`}
            collectionName={nftData?.collection?.name || ""}
            cardImage={{
              src: nftData?.image_url || "",
              alt: nftData?.token_id || "nft-img",
            }}
            avatarImage={{
              src: nftData?.collection?.image_url || "",
              alt: nftData?.collection?.name || "",
            }}
          />
        )}
      </div>
    </main>
  );
};
