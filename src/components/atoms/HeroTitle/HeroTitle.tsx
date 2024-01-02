import { motion } from "framer-motion";
import { heroRotate } from "@/utils/animations/variants";

export const HeroTitle = ({
  title = "Discover digital art & Collect NFTs",
  subTitle = "Digital platform for crypto collectibles and non-fungible tokens, get started and discover your exclusive digital assets.",
}: {
  title?: string;
  subTitle?: string;
}) => {
  return (
    <div className="flex flex-col gap-[1rem] overflow-hidden">
      <div className="overflow-hidden">
        <motion.h1
          className="base:heading2 md:heading1 drop-shadow-alpha4"
          initial="initial"
          animate="rotate"
          variants={heroRotate}
        >
          {title}
        </motion.h1>
      </div>
      <div className="overflow-hidden">
        <motion.h3
          className="heading5 font-normal lowercase drop-shadow-alpha4 first-letter:uppercase"
          initial="initial"
          animate="rotate"
          variants={heroRotate}
        >
          {subTitle}
        </motion.h3>
      </div>
    </div>
  );
};
