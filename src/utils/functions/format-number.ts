export const formatNumber = (
  number: number,
  locale = "it-IT",
  options: Intl.NumberFormatOptions = { maximumFractionDigits: 0 }
) => {
  if (isNaN(number)) return "-";

  try {
    return new Intl.NumberFormat(locale, options).format(number);
  } catch (error) {
    console.error(`Error formatting number: ${error}`);
    return number;
  }
};
