import { useEffect, useState } from 'react';

export type Breakpoint = 'mobile' | 'tablet' | 'desktop';

export const useBreakpoint = (): Breakpoint => {
  const [breakpoint, setBreakpoint] = useState<Breakpoint>('desktop');

  useEffect(() => {
    const updateBreakpoint = () => {
      const width = window.innerWidth;
      if (width < 768) {
        setBreakpoint('mobile');
      } else if (width < 1024) {
        setBreakpoint('tablet');
      } else {
        setBreakpoint('desktop');
      }
    };

    // Set initial breakpoint
    updateBreakpoint();

    // Add event listener
    window.addEventListener('resize', updateBreakpoint);

    // Cleanup
    return () => window.removeEventListener('resize', updateBreakpoint);
  }, []);

  return breakpoint;
};

// Helper functions
export const useIsMobile = () => useBreakpoint() === 'mobile';
export const useIsTablet = () => useBreakpoint() === 'tablet';
export const useIsDesktop = () => useBreakpoint() === 'desktop';
export const useIsMobileOrTablet = () => {
  const bp = useBreakpoint();
  return bp === 'mobile' || bp === 'tablet';
};
