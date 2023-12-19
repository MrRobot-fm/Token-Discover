import type { ReactNode } from "react";
import { discoverTabsMaps } from "@/utils/constants/discover-tabs-object-map";
import { DiscoverTab } from "@/components/atoms/DiscoverTab/DiscoverTab";
import { ScrollToTop } from "@/components/atoms/ScrollToTop/ScrollToTop";
import { Section } from "@/components/molecules/Section/Section";

export default function DiscoverLayoutPage({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="flex w-full justify-center">
      <Section
        title="Discover our NFTs and Collections"
        subTitle="Browse through top sold and trending NTFs and our weekly top collection."
        sectionStyles="base:px-[3rem] md:px-[10rem] lg:px-[5rem] base:py-[3.5rem] md:py-[7rem]"
        titleProps={{
          titleStyles: "base:heading3 md:heading2",
          subtitleStyles: "lowercase first-letter:uppercase font-normal",
        }}
      >
        <DiscoverTab discoverTabsMap={discoverTabsMaps} />
        {children}
      </Section>
      <ScrollToTop />
    </div>
  );
}
