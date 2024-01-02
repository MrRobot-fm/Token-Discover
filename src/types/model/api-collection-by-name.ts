type Contract = {
  address: string;
  symbol: string;
  decimals: number;
};

type PaymentToken = Contract;

type FloorPrice = {
  value: number;
  usd: number;
  raw_value: string;
  payment_token: PaymentToken;
};

type Collection = {
  name: string;
  slug: string;
  blockchain: string;
  description: string;
  contracts: string[];
  categories: string[];
  logo: string;
  collection_id: string;
  opensea_slug: string;
  has_rarity: boolean;
  discord_url: string;
  instagram_url?: string; // Potrebbe non essere sempre presente
  twitter_url: string;
  official_website_url: string;
  opensea_url: string;
  floor_price: FloorPrice;
  total_supply: number;
};

export type GetCollectionsByNameResponseModel = {
  total: number;
  collections: Collection[];
};
