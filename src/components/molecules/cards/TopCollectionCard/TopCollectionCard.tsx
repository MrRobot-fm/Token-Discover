"use client";

import Link from "next/link";
import { NftCardFooter } from "@/components/atoms/NftCardFooter/NftCardFooter";
import { TopCollectionContent } from "@/components/atoms/TopCollectionContent/TopCollectionContent";
import type { TopCollectionCardProps } from "./TopCollectionCard.props";
import { styles } from "./top-collection-card.styles";

export const TopCollectionCard = (props: TopCollectionCardProps) => {
  const { data } = props || {};

  return (
    <Link
      href={`/collections/${data?.nfts[0].collection?.collection_id}` || ""}
    >
      <div className={styles.cardWrapper}>
        <TopCollectionContent
          image={{
            src: data?.nfts[0]?.image_url || "",
            alt: data?.nfts[0]?.name || "nft-img",
            priority: true,
          }}
          size="md"
        />
        <div className={styles.mappedContentWrapper}>
          {data?.nfts?.slice(1, 4).map((item, index) => (
            <TopCollectionContent
              key={`${index}-${item?.nft_id}`}
              image={{
                src: item?.previews?.image_small_url,
                alt: item?.collection?.name,
              }}
              size="sm"
            />
          ))}
        </div>

        <NftCardFooter
          avatarImage={{
            src: data?.nfts[0]?.collection?.image_url || "",
            alt: data?.nfts[0]?.collection?.name || "collection-img",
          }}
          collectionName={data?.nfts[0]?.collection?.name || ""}
          footerWrapperStyles="p-0"
        />
      </div>
    </Link>
  );
};
