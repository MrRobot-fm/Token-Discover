import { HeroTitle } from "@/components/atoms/HeroTitle/HeroTitle";
import { SectionCta } from "@/components/atoms/SectionCta/SectionCta";
import { HeroCard } from "@/components/molecules/HeroCard/HeroCard";
import { StatsCard } from "@/components/molecules/cards/StatsCard/StatsCard";
import { statsValue } from "@/public/mock/stats-value";
import { styles } from "./hero-section.styles";

export const HeroSection = () => {
  return (
    <main className={styles.main}>
      <div className={styles.mobileSectionWrapper}>
        <HeroTitle />
        <div className={styles.mobileSectionWrapper_cardWrapper}>
          <HeroCard />
        </div>
        <SectionCta />
        <div className={styles.mobileSectionWrapper_statsCardWrapper}>
          {statsValue.map((value) => (
            <StatsCard key={value.id} stats={value.stat} label={value.label} />
          ))}
        </div>
      </div>
      <div className={styles.desktopCardWrapper}>
        <HeroCard />
      </div>
    </main>
  );
};
