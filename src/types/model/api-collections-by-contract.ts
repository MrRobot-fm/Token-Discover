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

type Collection = {
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
  metaplex_mint: null;
  metaplex_candy_machine: null;
  metaplex_first_verified_creator: null;
  floor_prices: FloorPrice[];
  top_bids: string[];
  distinct_owner_count: number;
  distinct_nft_count: number;
  total_quantity: number;
  chains: string[];
  top_contracts: string[];
};

export type GetCollectionByContractResponseModel = {
  next_cursor: string;
  next: string;
  previous: string | null;
  collections: Collection[];
};

export type UseGetCollectionByContractApiParams = {
  chain: string;
  contractAddress: string;
  includeDetails?: string;
  cursor?: string;
  limit?: string;
};

export type GetCollectionsByContractSearchParams = {
  chain: string;
  contract_address: string;
  include_top_contract_details?: string;
  cursor?: string;
  limit?: string;
};
