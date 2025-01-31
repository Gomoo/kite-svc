/* eslint-disable react-hooks/exhaustive-deps */
import { RefObject, useEffect, useState } from 'react';

export function useIsVisible<T>(ref: RefObject<T>) {
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIntersecting(entry.isIntersecting);
    });

    if (ref.current instanceof Element) {
      observer.observe(ref.current);
    }
    return () => {
      if (ref.current instanceof Element) {
        observer.disconnect();
      }
    };
  }, [ref]);

  return isIntersecting;
}
