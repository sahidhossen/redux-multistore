
import { useEffect, useLayoutEffect } from 'react';

 /**
  * Preferred over direct usage of `useLayoutEffect` when supporting
  * server rendered components (SSR) because currently React
  * throws a warning when using useLayoutEffect in that environment.
  */
 const useIsomorphicLayoutEffect =
     typeof window !== 'undefined' ? useLayoutEffect : useEffect;
 
 export default useIsomorphicLayoutEffect;
 