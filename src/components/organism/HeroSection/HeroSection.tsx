"use client";

import { useGetNftByTokenId } from "@/api/NFT/hooks/use-get-nft-by-token-id";
import { HeroTitle } from "@/components/atoms/HeroTitle/HeroTitle";
import { SectionCta } from "@/components/atoms/SectionCta/SectionCta";
import { CardSkeleton } from "@/components/molecules/cards/CardSkeleton/CardSkeleton";
import { HighlightedNFTCard } from "@/components/molecules/cards/HighlightedNFTCard/HighlightedNFTCard";
import { StatsCard } from "@/components/molecules/cards/StatsCard/StatsCard";
import { statsValue } from "@/public/mock/stats-value";
import { styles } from "./hero-section.styles";

export const HeroSection = () => {
  const { data: nftData, isLoading } = useGetNftByTokenId({
    chain: "ethereum",
    contractAddress: "0xBC4CA0EdA7647A8aB7C2061c2E118A18a936f13D",
    tokenId: "4160",
  });

  return (
    <main className={styles.main}>
      <div className={styles.mobileSectionWrapper}>
        <HeroTitle />
        <div className={styles.mobileSectionWrapper_cardWrapper}>
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
        <div className={styles.mobileSectionWrapper_statsCardWrapper}>
          {statsValue.map((value) => (
            <StatsCard key={value.id} stats={value.stat} label={value.label} />
          ))}
        </div>
      </div>
      <div className={styles.desktopCardWrapper}>
        {isLoading ? (
          <CardSkeleton />
        ) : (
          <HighlightedNFTCard
            nftName={`#${nftData?.token_id}`}
            collectionName={nftData?.collection?.name || ""}
            cardImage={{
              src: nftData?.image_url || "",
              alt: nftData?.token_id || "",
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
