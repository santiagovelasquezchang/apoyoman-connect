import { type ReactNode } from "react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { cn } from "@/lib/utils";

type AnimationVariant =
  | "fade-up"
  | "slide-left"
  | "slide-right"
  | "scale-up"
  | "fade-in";

interface ScrollRevealProps {
  children: ReactNode;
  variant?: AnimationVariant;
  delay?: number;
  className?: string;
  threshold?: number;
}

const variantClasses: Record<
  AnimationVariant,
  { initial: string; animate: string }
> = {
  "fade-up": {
    initial: "opacity-0 translate-y-6",
    animate: "opacity-100 translate-y-0",
  },
  "slide-left": {
    initial: "opacity-0 -translate-x-8",
    animate: "opacity-100 translate-x-0",
  },
  "slide-right": {
    initial: "opacity-0 translate-x-8",
    animate: "opacity-100 translate-x-0",
  },
  "scale-up": {
    initial: "opacity-0 scale-95",
    animate: "opacity-100 scale-100",
  },
  "fade-in": {
    initial: "opacity-0",
    animate: "opacity-100",
  },
};

export function ScrollReveal({
  children,
  variant = "fade-up",
  delay = 0,
  className,
  threshold = 0.15,
}: ScrollRevealProps) {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>({ threshold });
  const { initial, animate } = variantClasses[variant];

  return (
    <div
      ref={ref}
      className={cn(
        "transition-all duration-700 ease-out",
        isVisible ? animate : initial,
        className
      )}
      style={delay > 0 ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  );
}
