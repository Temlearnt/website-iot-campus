"use client";

import React, { useRef } from "react";
import { motion, useInView } from "motion/react";
import { cn } from "@/lib/utils";

interface SectionWrapperProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
  direction?: "up" | "left" | "right" | "flip";
  delay?: number;
}

export function SectionWrapper({
  children,
  id,
  className,
  direction = "up",
  delay = 0,
}: SectionWrapperProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const getVariants = () => {
    switch (direction) {
      case "left":
        return {
          hidden: {
            opacity: 0,
            x: -60,
            rotateY: 18,
            transformPerspective: 1200,
          },
          visible: {
            opacity: 1,
            x: 0,
            rotateY: 0,
            transformPerspective: 1200,
            transition: {
              duration: 0.85,
              delay,
              ease: [0.22, 1, 0.36, 1],
            },
          },
        };
      case "right":
        return {
          hidden: {
            opacity: 0,
            x: 60,
            rotateY: -18,
            transformPerspective: 1200,
          },
          visible: {
            opacity: 1,
            x: 0,
            rotateY: 0,
            transformPerspective: 1200,
            transition: {
              duration: 0.85,
              delay,
              ease: [0.22, 1, 0.36, 1],
            },
          },
        };
      case "flip":
        return {
          hidden: {
            opacity: 0,
            rotateX: 25,
            scale: 0.95,
            y: 40,
            transformPerspective: 1200,
          },
          visible: {
            opacity: 1,
            rotateX: 0,
            scale: 1,
            y: 0,
            transformPerspective: 1200,
            transition: {
              duration: 0.9,
              delay,
              ease: [0.22, 1, 0.36, 1],
            },
          },
        };
      case "up":
      default:
        return {
          hidden: {
            opacity: 0,
            y: 50,
            rotateX: 14,
            scale: 0.97,
            transformPerspective: 1200,
          },
          visible: {
            opacity: 1,
            y: 0,
            rotateX: 0,
            scale: 1,
            transformPerspective: 1200,
            transition: {
              duration: 0.85,
              delay,
              ease: [0.22, 1, 0.36, 1],
            },
          },
        };
    }
  };

  const variants = getVariants();

  return (
    <div
      ref={ref}
      id={id}
      className={cn("relative overflow-hidden", className)}
      style={{ perspective: 1200 }}
    >
      <motion.div
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={variants}
        style={{ transformStyle: "preserve-3d", willChange: "transform, opacity" }}
      >
        {children}
      </motion.div>
    </div>
  );
}
