import { formatNumber } from "./format-number";

export const getFormattedCryptoCurrency = ({
  value,
  currency,
}: {
  value: number;
  currency: string;
}) => {
  if (!value) return "-";
  if (currency === "SOL")
    return ` ${formatNumber(value / 1000000000)} ${currency}`;

  if (currency === "ETH" || currency === "WETH")
    return ` ${formatNumber(value / 1000000000000000000)} ${currency}`;
};
