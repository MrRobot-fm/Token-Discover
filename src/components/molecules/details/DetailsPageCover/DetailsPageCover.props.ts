import type { ImageProps } from "next/image";

export type DetailsPageCoverProps = {
  bannerProps: Pick<ImageProps, "src" | "alt">;
  avatarProps: Pick<ImageProps, "src" | "alt">;
  isLoading?: boolean;
};
