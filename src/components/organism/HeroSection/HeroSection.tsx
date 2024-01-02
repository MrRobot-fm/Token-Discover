"use client";

import { motion } from "framer-motion";
import { PAGES_PATH } from "@/utils/constants/pages-path";
import { useParallax } from "@/hooks/use-parallax";
import { HeroTitle } from "@/components/atoms/HeroTitle/HeroTitle";
import { SectionCta } from "@/components/atoms/SectionCta/SectionCta";
import { HeroCard } from "@/components/molecules/HeroCard/HeroCard";
import { StatsCard } from "@/components/molecules/cards/StatsCard/StatsCard";
import { statsValue } from "@/public/mock/stats-value";
import { styles } from "./hero-section.styles";

export const HeroSection = () => {
  const { ref, background } = useParallax();

  return (
    <main className={styles.main} ref={ref}>
      <motion.div
        className={styles.mobileSectionWrapper}
        style={{ y: background }}
      >
        <HeroTitle />
        <div className={styles.mobileSectionWrapper_cardWrapper}>
          <HeroCard />
        </div>
        <SectionCta href={PAGES_PATH.DISCOVER_COLLECTIONS} />
        <div className={styles.mobileSectionWrapper_statsCardWrapper}>
          {statsValue.map((value) => (
            <StatsCard key={value.id} stats={value.stat} label={value.label} />
          ))}
        </div>
      </motion.div>
      <motion.div
        className={styles.desktopCardWrapper}
        style={{ y: background }}
      >
        <HeroCard />
      </motion.div>
    </main>
  );
};
