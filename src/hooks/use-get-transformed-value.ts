import { useMotionValueEvent, useTime, useTransform } from "framer-motion";
import { useMemo, useState } from "react";

export const useGetTransformedValue = ({ value }: { value: number }) => {
  const [transformedValue, setTransformedValue] = useState<number>(value);

  const time = useTime();

  const transformNumber = useTransform(time, [0, 2000], [0, value], {
    clamp: true,
  });

  useMotionValueEvent(transformNumber, "change", (latest) => {
    setTransformedValue(latest);
  });

  const motionValue = useMemo(() => {
    if (transformedValue > 1000)
      return `${Math.floor(transformedValue / 1000)}k +`;

    if (transformedValue < 1000) return `${Math.floor(transformedValue)} +`;
  }, [transformedValue]);

  return { motionValue };
};
