import { useCallback } from 'react';
import Scroll from 'react-scroll';

export const useScroll = () => {
  const ScrollTo = useCallback((goTo: string) => {
    Scroll.scroller.scrollTo(goTo, {
      duration: 800,
      delay: 100,
      smooth: 'easeInOutQuart',
    });
  }, []);

  return {
    ScrollTo,
  };
};

export type ScrollTo = ReturnType<typeof useScroll>['ScrollTo'];
