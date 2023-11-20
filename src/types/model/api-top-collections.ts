type PaymentToken = {
  payment_token_id: string;
  name: string;
  symbol: string;
  address: string | null;
  decimals: number;
};

type MarketplacePage = {
  marketplace_id: string;
  marketplace_name: string;
  marketplace_collection_id: string;
  collection_url: string;
  verified: boolean;
};

type FloorPrice = {
  marketplace_id: string;
  marketplace_name: string;
  value: number;
  payment_token: PaymentToken;
  value_usd_cents: number;
};

type TopBid = {
  marketplace_id: string;
  marketplace_name: string;
  value: number;
  payment_token: PaymentToken;
  value_usd_cents: number;
};

type CollectionDetails = {
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
  metaplex_mint: string | null;
  metaplex_first_verified_creator: string | null;
  floor_prices: FloorPrice[];
  top_bids: TopBid[];
  distinct_owner_count: number;
  distinct_nft_count: number;
  total_quantity: number;
  chains: string[];
  top_contracts: string[];
};

type CollectionModel = {
  collection_id: string;
  volume: number;
  volume_string: string;
  volume_usd_cents: number;
  transaction_count: number;
  payment_token: PaymentToken;
  collection_details: CollectionDetails;
};

export type GetTopCollectionsResponseModel = {
  next: string | null;
  next_cursor: string | null;
  previous: string | null;
  collections: CollectionModel[];
};

export type UseGetTopCollectionsApiParams = {
  chains: string;
  period?: string;
  referenceDate?: Date;
  includeTopContractDetails?: string;
  limit?: number;
  cursor?: string;
};

export type GetTopCollectionsSearchParams = {
  chains: string;
  time_period?: string;
  reference_date?: Date;
  include_top_contract_details?: string;
  limit?: number;
  cursor?: string;
};
