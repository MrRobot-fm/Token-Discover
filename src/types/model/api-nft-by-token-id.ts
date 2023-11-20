type Preview = {
  image_small_url: string;
  image_medium_url: string;
  image_large_url: string;
  image_opengraph_url: string;
  blurhash: string;
  predominant_color: string;
};

type ImageProperties = {
  width: number;
  height: number;
  size: number;
  mime_type: string;
};

type Owner = {
  owner_address: string;
  quantity: number;
  quantity_string: string;
  first_acquired_date: string;
  last_acquired_date: string;
};

type PaymentToken = {
  payment_token_id: string;
  name: string;
  symbol: string;
  address: string | null;
  decimals: number;
};

type FloorPrice = {
  marketplace_id: string;
  marketplace_name: string;
  value: number;
  payment_token: PaymentToken;
  value_usd_cents: number;
};

type Contract = {
  type: string;
  name: string;
  symbol: string;
  deployed_by: string;
  deployed_via_contract: string | null;
  owned_by: string;
  has_multiple_collections: boolean;
};

type MarketPage = {
  marketplace_id: string;
  marketplace_name: string;
  marketplace_collection_id: string;
  nft_url: string;
  collection_url: string;
  verified: boolean;
};

type FirstCreated = {
  minted_to: string;
  quantity: number;
  timestamp: string;
  block_number: number;
  transaction: string;
  transaction_initiator: string;
};

type Rarity = {
  rank: number;
  score: number;
  unique_attributes: number;
};

type Recipient = {
  address: string;
  percentage: number;
  basis_points: number;
};

type Royalty = {
  source: string;
  total_creator_fee_basis_points: number;
  recipients: Recipient[];
};

type Attribute = {
  trait_type: string;
  value: string;
  display_type: string | null;
};

type ExtraMetadata = {
  attributes: Attribute[];
  image_original_url: string;
  animation_original_url: string | null;
  metadata_original_url: string;
};

type Collection = {
  collection_id: string;
  name: string;
  description: string;
  image_url: string;
  banner_image_url: string;
  category: string;
  is_nsfw: boolean;
  external_url: string;
  twitter_username: string | null;
  discord_url: string;
  instagram_username: string | null;
  medium_username: string | null;
  telegram_url: string | null;
  marketplace_pages: MarketPage[];
  metaplex_mint: null;
  metaplex_first_verified_creator: null;
  floor_prices: FloorPrice[];
  top_bids: {
    marketplace_id: string;
    marketplace_name: string;
    value: number;
    payment_token: {
      payment_token_id: string;
      name: string;
      symbol: string;
      address: string | null;
      decimals: number;
    };
    value_usd_cents: number;
  }[];
  distinct_owner_count: number;
  distinct_nft_count: number;
  total_quantity: number;
  chains: string[];
  top_contracts: string[];
};

export interface GetNftByTokenIdResponseModel {
  nft_id: string;
  chain: string;
  contract_address: string;
  token_id: string;
  name: string;
  description: string | null;
  previews: Preview;
  image_url: string;
  image_properties: ImageProperties;
  video_url: string | null;
  video_properties: null;
  audio_url: string | null;
  audio_properties: null;
  model_url: string | null;
  model_properties: null;
  other_url: string | null;
  other_properties: null;
  background_color: string | null;
  external_url: string | null;
  created_date: string;
  status: string;
  token_count: number;
  owner_count: number;
  owners: Owner[];
  contract: Contract;
  collection: Collection;
  last_sale: null;
  first_created: FirstCreated;
  rarity: Rarity;
  royalty: Royalty[];
  extra_metadata: ExtraMetadata;
}

export type GetNftByTokenIdSearchParams = {
  chain: string;
  contract_address: string;
  token_id: string;
};

export type UseGetNftByTokenIdApiParams = {
  chain: string;
  contractAddress: string;
  tokenId: string;
};
