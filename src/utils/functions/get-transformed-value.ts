export const getTransformedValue = ({ value }: { value: number }) => {
  if (!value) return "-";

  if (value >= 1000) return `${Math.floor(value / 1000)}k +`;

  if (value < 1000) return `${Math.floor(value)} +`;
};
