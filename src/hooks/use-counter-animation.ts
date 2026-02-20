import { useEffect, useState } from "react";

interface UseCounterAnimationOptions {
  end: number;
  duration?: number;
  isVisible: boolean;
  prefix?: string;
  suffix?: string;
}

export function useCounterAnimation({
  end,
  duration = 1500,
  isVisible,
  prefix = "",
  suffix = "",
}: UseCounterAnimationOptions): string {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (!isVisible || hasAnimated) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      setCount(end);
      setHasAnimated(true);
      return;
    }

    setHasAnimated(true);
    const startTime = performance.now();

    const tick = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * end));

      if (progress < 1) {
        requestAnimationFrame(tick);
      }
    };

    requestAnimationFrame(tick);
  }, [isVisible, end, duration, hasAnimated]);

  return `${prefix}${count.toLocaleString()}${suffix}`;
}
