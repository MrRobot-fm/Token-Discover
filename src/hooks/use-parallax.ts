import { useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export const useParallax = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const background = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return { ref, background };
};
