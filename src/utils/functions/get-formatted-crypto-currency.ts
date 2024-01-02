import { formatNumber } from "./format-number";

export const getFormattedCryptoCurrency = ({
  value,
  currency,
  decimals,
}: {
  value: number;
  currency: string;
  decimals: number;
}) => {
  const conversionValue = Math.pow(10, decimals);

  if (!value) return "-";

  if (currency === "SOL")
    return ` ${formatNumber(value / conversionValue)} ${currency}`;

  if (currency === "ETH" || currency === "WETH")
    return ` ${formatNumber(value / conversionValue)} ${currency}`;
};
