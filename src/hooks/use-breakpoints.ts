import { useBreakpoint } from "use-breakpoint";

const useBreakpoints = () => {
  const BREAKPOINTS = {
    base: 0,
    mobile: 375,
    tablet: 768,
    desktop: 1024,
    wide: 1440,
  };

  const { breakpoint } = useBreakpoint(BREAKPOINTS);

  const isBase = breakpoint === "base";
  const isMobile = breakpoint === "mobile";
  const isTablet = breakpoint === "tablet";
  const isDesktop = breakpoint === "desktop";
  const isLargeDesktop = breakpoint === "wide";
  return {
    isBase,
    isMobile,
    isTablet,
    isDesktop,
    isLargeDesktop,
  };
};

export default useBreakpoints;
