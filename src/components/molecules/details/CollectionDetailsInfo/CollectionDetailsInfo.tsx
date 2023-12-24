import type { GetCollectionByIdResponseModel } from "@/types/model/api-collection-by-id";
import { Button } from "@/components/atoms/Button/Button";
import { styles } from "./collection-details-info.styles";

export const CollectionDetailsInfo = ({
  data,
}: {
  data?: GetCollectionByIdResponseModel;
}) => {
  return (
    <div className={styles.collectionDetailsInfoWrapper}>
      <h2>{data?.collections[0]?.name}</h2>
      <div>
        <h5 className={styles.collectionDetailsInfo}>Description</h5>
        <p>{data?.collections[0]?.description}</p>
      </div>
      <div>
        <h5 className={styles.collectionDetailsInfo}>chains</h5>
        <p className={styles.collectionDetailsInfo_chainInfo}>
          {data?.collections[0]?.chains[0]}
        </p>
      </div>
      <div>
        <h5 className={styles.collectionDetailsInfo}>Links</h5>
        <Button
          size="lg"
          variant="link"
          icon="globe"
          label="marketplace url"
          href={data?.collections[0]?.marketplace_pages[0]?.collection_url}
        />
        <Button
          size="lg"
          variant="link"
          icon="globe"
          label="discord url"
          href={data?.collections[0]?.discord_url}
        />
      </div>
    </div>
  );
};
