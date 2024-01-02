type Trait = {
  type: string;
  value: string;
  percentage: number;
};

type Price = {
  value: number;
  usd: number;
  payment_token: {
    address: string;
    symbol: string;
    decimals: number;
  };
  raw_value: string;
};

type LastSale = {
  price: Price;
  time: number;
  tx_hash: string;
  tx_url: string;
};

type BestOffer = {
  value: number;
  usd: number;
  raw_value: string;
  payment_token: {
    address: string;
    symbol: string;
    decimals: number;
  };
};

type Rarity = {
  rank: number;
  total: number;
  score: number;
};

type NFT = {
  blockchain: string;
  name: string;
  description: string | null;
  image: string;
  traits: Trait[];
  suspicious: boolean;
  rarity: Rarity;
  contract_address: string;
  token_id: string;
  animation_url: string | null;
  last_sale: LastSale;
  best_listing: null;
  best_offer: BestOffer;
  collection_name: string;
  collection_slug: string;
  collection_opensea_slug: string;
  contract_type: string;
  owner_addresses: string[];
};

export type GetNFTsByCollectionsAddressResponseModel = {
  total: number;
  nfts: NFT[];
  next_cursor: string;
};

export type GetInfiniteNFTsByCollectionsAddressResponseModel = {
  pageParams: string[];
  pages: GetNFTsByCollectionsAddressResponseModel[];
};

export type GetNFTsByCollectionAddressSearchParams = {
  contractAddress: string;
  sort_by?:
    | "listing_price_low_to_high"
    | "listing_price_high_to_low"
    | "last_price_low_to_high"
    | "last_price_high_to_low";
  cursor?: string;
  limit?: number;
  key_word?: string;
  is_listing?: boolean;
};

export type UseGetNFTsByCollectionAddressApiParams = {
  contractAddress: string;
  sortBy?:
    | "listing_price_low_to_high"
    | "listing_price_high_to_low"
    | "last_price_low_to_high"
    | "last_price_high_to_low";
  cursor?: string;
  limit?: number;
  keyword?: string;
  isListing?: boolean;
};
