import React, { ElementType } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

interface ScrollRevealProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  distance?: number;
  className?: string;
  as?: ElementType;
  triggerOnce?: boolean;
}

export const ScrollReveal = ({
  children,
  delay = 0,
  duration = 700,
  direction = "up",
  distance = 48,
  className = "",
  as: Component = "div",
  triggerOnce = true,
}: ScrollRevealProps) => {
  const { ref, isVisible } = useScrollReveal({ triggerOnce });

  const getTransform = () => {
    switch (direction) {
      case "up":
        return `translateY(${distance}px) scale(0.96)`;
      case "down":
        return `translateY(-${distance}px) scale(0.96)`;
      case "left":
        return `translateX(${distance}px) scale(0.96)`;
      case "right":
        return `translateX(-${distance}px) scale(0.96)`;
      default:
        return "scale(0.96)";
    }
  };

  const style: React.CSSProperties = {
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? "translate(0) scale(1)" : getTransform(),
    transition: `opacity ${duration}ms ease, transform ${duration}ms cubic-bezier(0.22, 1, 0.36, 1)`,
    transitionDelay: `${delay}ms`,
    willChange: "transform, opacity",
  };

  return (
    <Component ref={ref} style={style} className={className}>
      {children}
    </Component>
  );
};
