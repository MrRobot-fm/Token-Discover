import { useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import useBreakpoints from "./use-breakpoints";

export const useParallax = () => {
  const { isDesktop, isLargeDesktop } = useBreakpoints();

  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const background = useTransform(
    scrollYProgress,
    [0, 1],
    isDesktop || isLargeDesktop ? ["0%", "100%"] : ["0%", "0%"]
  );

  return { ref, background };
};
