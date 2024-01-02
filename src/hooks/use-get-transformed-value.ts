import { useMotionValueEvent, useTime, useTransform } from "framer-motion";
import { useMemo, useState } from "react";
import { getTransformedValue } from "@/utils/functions/get-transformed-value";

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
    return getTransformedValue({ value: transformedValue });
  }, [transformedValue]);

  return { motionValue };
};
