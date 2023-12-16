/* eslint-disable @typescript-eslint/no-explicit-any */
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

type CollectionDetails = {
  collection_id: string;
  name: string;
  description: string | null;
  image_url: string | null;
  banner_image_url: string | null;
  category: string | null;
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
  floor_prices: any[];
  top_bids: any[];
  distinct_owner_count: number;
  distinct_nft_count: number;
  total_quantity: number;
  chains: string[];
  top_contracts: string[];
};

type Collection = {
  collection_id: string;
  volume: number;
  volume_string: string;
  volume_usd_cents: number;
  volume_percent_change: number;
  transaction_count: number;
  transaction_count_percent_change: number;
  payment_token: PaymentToken;
  collection_details: CollectionDetails;
};

export type GetTrendingCollectionsResponseModel = {
  next: string;
  next_cursor: string;
  previous: string;
  collections: Collection[];
};

export type GetTrendingCollectionsSearchParams = {
  chain?: string;
  time_period?: string;
  include_top_contract_details?: string;
  limit?: number;
  cursor?: string;
};

export type UseGetTrendingCollectionsApiParams = {
  chain?: string;
  interval?: string;
  includeContractDetails?: string;
  limit?: number;
  cursor?: string;
};
