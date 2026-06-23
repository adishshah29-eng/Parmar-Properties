import React, { ElementType } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

interface ScrollRevealProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  distance?: number;
  className?: string;
  style?: React.CSSProperties;
  as?: ElementType;
  triggerOnce?: boolean;
}

export const ScrollReveal = ({
  children,
  delay = 0,
  duration = 1200,
  direction = "up",
  distance = 64,
  className = "",
  style: customStyle = {},
  as: Component = "div",
  triggerOnce = true,
}: ScrollRevealProps) => {
  const { ref, isVisible } = useScrollReveal({ triggerOnce });

  const getTransform = () => {
    switch (direction) {
      case "up":
        return `translateY(${distance}px) scale(0.96) skewY(1deg)`;
      case "down":
        return `translateY(-${distance}px) scale(0.96) skewY(-1deg)`;
      case "left":
        return `translateX(${distance}px) scale(0.98) skewX(-2deg)`;
      case "right":
        return `translateX(-${distance}px) scale(0.98) skewX(2deg)`;
      default:
        return "scale(0.96)";
    }
  };

  const style: React.CSSProperties = {
    ...customStyle,
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? "translate(0) scale(1) skew(0)" : getTransform(),
    filter: isVisible ? "blur(0px)" : "blur(8px)",
    transition: `opacity ${duration}ms cubic-bezier(0.16, 1, 0.3, 1), transform ${duration}ms cubic-bezier(0.16, 1, 0.3, 1), filter ${duration}ms cubic-bezier(0.16, 1, 0.3, 1)`,
    transitionDelay: `${delay}ms`,
    willChange: "transform, opacity, filter",
  };

  return (
    <Component ref={ref} style={style} className={className}>
      {children}
    </Component>
  );
};
