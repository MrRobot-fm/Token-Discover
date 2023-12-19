import { useCallback } from "react";

export const useScrollBehavior = () => {
  const scrollTop = window.scrollX || document.documentElement.scrollTop;
  const scrollLeft = window.scrollX || document.documentElement.scrollLeft;

  const disableScroll = useCallback(() => {
    window.onscroll = () => {
      window.scrollTo(scrollLeft, scrollTop);
    };
  }, [scrollLeft, scrollTop]);

  const enableScroll = useCallback(() => {
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    window.onscroll = () => {};
  }, []);

  return { disableScroll, enableScroll };
};
