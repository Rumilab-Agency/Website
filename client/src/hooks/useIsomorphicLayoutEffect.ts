import { useEffect, useLayoutEffect } from 'react';

// useLayoutEffect in the browser; useEffect during the build-time pre-render,
// where layout effects can't run (and React warns about them).
export const useIsomorphicLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect;
