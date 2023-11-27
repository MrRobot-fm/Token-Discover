interface PaymentToken {
  payment_token_id: string;
  name: string;
  symbol: string;
  address: string | null;
  decimals: number;
}

interface SaleDetails {
  marketplace_id: string;
  marketplace_name: string;
  is_bundle_sale: boolean;
  payment_token: PaymentToken;
  unit_price: number;
  total_price: number;
  unit_price_usd_cents: number;
}

interface OwnerDetails {
  owner_address: string;
  quantity: number;
  quantity_string: string;
  first_acquired_date: string;
  last_acquired_date: string;
}

interface ContractDetails {
  type: string;
  name: string;
  symbol: string;
  deployed_by: string;
  deployed_via_contract: string | null;
  owned_by: string;
  has_multiple_collections: boolean;
}

interface CollectionDetails {
  collection_id: string;
  name: string;
  description: string;
  image_url: string;
  banner_image_url: string;
  category: string;
  is_nsfw: boolean;
  external_url: string | null;
  twitter_username: string | null;
  discord_url: string | null;
  instagram_username: string | null;
  medium_username: string | null;
  telegram_url: string | null;
  marketplace_pages: MarketplacePage[];
}

interface MarketplacePage {
  marketplace_id: string;
  marketplace_name: string;
  marketplace_collection_id: string;
  nft_url: string;
  collection_url: string;
  verified: boolean;
}

interface LastSaleDetails {
  from_address: string;
  to_address: string;
  quantity: number;
  quantity_string: string;
  timestamp: string;
  transaction: string;
  marketplace_id: string;
  marketplace_name: string;
  is_bundle_sale: boolean;
  payment_token: PaymentToken;
  unit_price: number;
  total_price: number;
  unit_price_usd_cents: number;
}

interface RarityDetails {
  rank: number;
  score: number;
  unique_attributes: number;
}

interface RoyaltyRecipient {
  address: string;
  percentage: number;
  basis_points: number;
}

interface RoyaltyDetails {
  source: string;
  total_creator_fee_basis_points: number;
  recipients: RoyaltyRecipient[];
}

interface ExtraMetadata {
  attributes: Attribute[];
  image_original_url: string;
  animation_original_url: string | null;
  metadata_original_url: string;
}

interface Attribute {
  trait_type: string;
  value: string;
  display_type: string | null;
}

interface NFTDetails {
  nft_id: string;
  chain: string;
  contract_address: string;
  token_id: string;
  name: string;
  description: string;
  previews: Previews;
  contract: ContractDetails;
  collection: CollectionDetails;
  owners: OwnerDetails[];
  image_url: string;
  image_properties: ImageProperties;
  rarity: RarityDetails;
  royalty: RoyaltyDetails[];
  extra_metadata: ExtraMetadata;
}

interface Previews {
  image_small_url: string;
  image_medium_url: string;
  image_large_url: string;
  image_opengraph_url: string;
  blurhash: string;
  predominant_color: string;
}

interface ImageProperties {
  width: number;
  height: number;
  size: number;
  mime_type: string;
}

interface TopSale {
  nft_id: string;
  chain: string;
  contract_address: string;
  token_id: string;
  collection_id: string;
  event_type: string;
  from_address: string;
  to_address: string;
  quantity: number;
  quantity_string: string;
  timestamp: string;
  block_number: number;
  block_hash: string;
  transaction: string;
  transaction_initiator: string;
  log_index: number;
  batch_transfer_index: number;
  sale_details: SaleDetails;
  nft_details: NFTDetails;
  last_sale: LastSaleDetails;
  first_created: FirstCreatedDetails;
}

interface FirstCreatedDetails {
  minted_to: string;
  quantity: number;
  quantity_string: string;
  timestamp: string;
  block_number: number;
  transaction: string;
  transaction_initiator: string;
}

export type GetTopSalesByCollectionSearchParams = {
  collection_id: string;
  include_nft_details?: string;
  cursor?: string;
  limit?: number;
};

export type UseGetTopSalesByCollectionsApiParams = {
  collectionId: string[];
  nftDetails?: string;
  cursor?: string;
  limit?: number;
};

export type GetTopSalesByCollectionResponseModel = {
  next_cursor: string;
  next: string;
  previous: string;
  top_sales: TopSale[];
};
