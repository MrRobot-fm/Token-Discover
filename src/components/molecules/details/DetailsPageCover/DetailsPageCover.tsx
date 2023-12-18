import { motion } from "framer-motion";
import { useParallax } from "@/hooks/use-parallax";
import { Avatar } from "@/components/atoms/Avatar/Avatar";
import { CustomImage } from "@/components/atoms/Image/CustomImage";
import { DetailsPageCoverProps } from "./DetailsPageCover.props";
import { styles } from "./details-page-cover.styles";

export const DetailsPageCover = (props: DetailsPageCoverProps) => {
  const { bannerProps, avatarProps, isLoading } = props;

  const { ref, background } = useParallax();

  return (
    <div className={styles.collectionDetailsCover} ref={ref}>
      <motion.div
        className={styles.collectionDetailsCoverWrapper}
        style={{ y: background }}
      >
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
      </motion.div>
    </div>
  );
};
