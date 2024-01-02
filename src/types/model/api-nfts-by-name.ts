type TokenTraits = {
  type: string;
  value: string;
};

type PaymentToken = {
  address: string;
  symbol: string;
  decimals: number;
};

type PriceDetails = {
  value: number;
  crypto_unit: string;
  usd: number;
  eth_value: number;
  payment_token: PaymentToken;
};

type LastSale = {
  tx_hash: string;
  price_token: number;
  token_symbol: string;
  token_contract_address: string;
  price_usd: number;
  is_wash_trade: boolean;
  price: PriceDetails;
  tx_url: string;
  time: number;
};

export type GetNFTsByNameResponseModel = {
  blockchain: string;
  collection_name: string;
  collection_slug: string;
  collection_opensea_slug: string;
  collection_logo: string;
  contract_type: string;
  contract_address: string;
  token_id: string;
  name: string;
  image: string;
  traits: TokenTraits[];
  suspicious: boolean;
  last_sale: LastSale;
}[];
