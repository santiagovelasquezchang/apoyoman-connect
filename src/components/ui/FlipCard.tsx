import { useState } from "react";
import { cn } from "@/lib/utils";

interface FlipCardProps {
  front: React.ReactNode;
  back: React.ReactNode;
  className?: string;
}

export function FlipCard({ front, back, className }: FlipCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className={cn("group [perspective:1000px]", className)}
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
      onClick={() => setIsFlipped((prev) => !prev)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          setIsFlipped((prev) => !prev);
        }
      }}
    >
      <div
        className={cn(
          "relative w-full h-full [transform-style:preserve-3d]",
          isFlipped && "[transform:rotateY(180deg)]"
        )}
        style={{ transition: "transform 600ms cubic-bezier(0.4, 0, 0.2, 1)" }}
      >
        {/* Front */}
        <div className="absolute inset-0 [backface-visibility:hidden] rounded-xl border border-border bg-card flex items-center justify-center p-8">
          {front}
        </div>
        {/* Back */}
        <div className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)] rounded-xl border border-border bg-primary flex items-center justify-center p-8">
          {back}
        </div>
      </div>
    </div>
  );
}
