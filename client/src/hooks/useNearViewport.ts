import { useEffect, useRef, useState } from 'react';

// True once the element comes within `margin` of the viewport, and the browser
// has a quiet moment (requestIdleCallback). Used to hold back WebGL effects so
// they don't set up during the first load, or at all if nobody scrolls to them.
// Once true it stays true.
export function useNearViewport<T extends Element>(margin = '600px') {
  const ref = useRef<T>(null);
  const [near, setNear] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let idleId = 0;
    let timer: ReturnType<typeof setTimeout> | undefined;
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      observer.disconnect();
      if (typeof window.requestIdleCallback === 'function') {
        idleId = window.requestIdleCallback(() => setNear(true), { timeout: 1500 });
      } else {
        // Safari has no requestIdleCallback
        timer = setTimeout(() => setNear(true), 200);
      }
    }, { rootMargin: `${margin} 0px` });
    observer.observe(el);
    return () => {
      observer.disconnect();
      if (idleId) window.cancelIdleCallback(idleId);
      clearTimeout(timer);
    };
  }, [margin]);

  return [ref, near] as const;
}
