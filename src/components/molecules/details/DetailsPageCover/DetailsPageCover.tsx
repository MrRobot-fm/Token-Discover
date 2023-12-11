import { Avatar } from "@/components/atoms/Avatar/Avatar";
import { CustomImage } from "@/components/atoms/Image/CustomImage";
import { DetailsPageCoverProps } from "./DetailsPageCover.props";
import { styles } from "./details-page-cover.styles";

export const DetailsPageCover = (props: DetailsPageCoverProps) => {
  const { bannerProps, avatarProps, isLoading } = props;

  return (
    <div className={styles.collectionDetailsCoverWrapper}>
      <CustomImage
        src={bannerProps?.src}
        alt={bannerProps?.alt}
        isLoading={isLoading}
        priority
      />

      <Avatar
        size="lg"
        className={styles.collectionDetailsCover_avatar}
        src={avatarProps?.src}
        alt={avatarProps?.alt}
        isLoading={isLoading}
      />
    </div>
  );
};
