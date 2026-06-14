import React, { ElementType } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

interface SplitTextRevealProps {
  text: string;
  delayPerWord?: number;
  initialDelay?: number;
  duration?: number;
  className?: string;
  as?: ElementType;
}

export const SplitTextReveal = ({
  text,
  delayPerWord = 60,
  initialDelay = 0,
  duration = 700,
  className = "",
  as: Component = "h2",
}: SplitTextRevealProps) => {
  const { ref, isVisible } = useScrollReveal();
  const words = text.split(" ");

  return (
    <Component ref={ref} className={className}>
      {words.map((word, index) => {
        const style: React.CSSProperties = {
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? "translateY(0)" : "translateY(100%)",
          filter: isVisible ? "blur(0px)" : "blur(4px)",
          transition: `opacity ${duration}ms ease, transform ${duration}ms cubic-bezier(0.16, 1, 0.3, 1), filter ${duration}ms ease`,
          transitionDelay: `${initialDelay + index * delayPerWord}ms`,
          willChange: "transform, opacity, filter",
          display: "inline-block",
        };

        return (
          <span
            key={index}
            style={{
              overflow: "hidden",
              display: "inline-block",
              marginRight: "0.25em",
            }}
          >
            <span style={style}>{word}</span>
          </span>
        );
      })}
    </Component>
  );
};
