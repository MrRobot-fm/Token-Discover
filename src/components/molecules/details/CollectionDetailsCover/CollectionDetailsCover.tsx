import type { GetCollectionByIdResponseModel } from "@/types/model/api-collection-by-id";
import { Avatar } from "@/components/atoms/Avatar/Avatar";
import { CustomImage } from "@/components/atoms/Image/CustomImage";
import { styles } from "./collection-details-cover.styles";

export const CollectionDetailsCover = ({
  data,
  isLoading,
}: {
  data?: GetCollectionByIdResponseModel;
  isLoading: boolean;
}) => {
  return (
    <div className={styles.collectionDetailsCoverWrapper}>
      <CustomImage
        src={data?.collections[0]?.banner_image_url || ""}
        alt={data?.collections[0]?.name || ""}
        isLoading={isLoading}
      />

      <Avatar
        size="lg"
        className={styles.collectionDetailsCover_avatar}
        src={data?.collections[0]?.image_url || ""}
        alt={data?.collections[0]?.name || ""}
        isLoading={isLoading}
      />
    </div>
  );
};
