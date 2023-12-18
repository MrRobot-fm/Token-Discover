"use client";

import { useGetNftByTokenId } from "@/api/NFT/hooks/use-get-nft-by-token-id";
import { DetailsPageCover } from "@/components/molecules/details/DetailsPageCover/DetailsPageCover";
import { NFTDetailsInfo } from "@/components/molecules/details/NFTDetailsInfo/NFTDetailsInfo";

export const NTFDetailsSection = ({
  chain,
  contractAddress,
  tokenId,
}: {
  chain: string;
  contractAddress: string;
  tokenId: string;
}) => {
  const { data, isLoading } = useGetNftByTokenId({
    chain,
    contractAddress,
    tokenId,
  });

  return (
    <div className="flex flex-col">
      <DetailsPageCover
        isLoading={isLoading}
        bannerProps={{
          src: data?.collection?.banner_image_url || "",
          alt: data?.collection?.name || "",
        }}
        avatarProps={{ src: data?.image_url || "", alt: data?.name || "" }}
      />
      <NFTDetailsInfo data={data} />
    </div>
  );
};
