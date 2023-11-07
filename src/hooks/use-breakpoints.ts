import { useBreakpoint } from "use-breakpoint";

const useBreakpoints = () => {
  const BREAKPOINTS = { mobile: 0, tablet: 768, desktop: 1024, wide: 1440 };

  const { breakpoint } = useBreakpoint(BREAKPOINTS);

  const isMobile = breakpoint === "mobile";
  const isTablet = breakpoint === "tablet";
  const isDesktop = breakpoint === "desktop";
  const isLargeDesktop = breakpoint === "wide";
  return {
    isMobile,
    isTablet,
    isDesktop,
    isLargeDesktop,
  };
};

export default useBreakpoints;
