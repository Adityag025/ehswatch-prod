"use client";
import React, { useRef, useState } from "react";
import {
  useScroll,
  useTransform,
  motion,
  MotionValue,
  useMotionValueEvent,
} from "framer-motion";

// ─── ContainerScroll ─────────────────────────────────────────────────────────
export const ContainerScroll = ({
  titleComponent,
  children,
}: {
  titleComponent: string | React.ReactNode;
  children: React.ReactNode;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef });

  // Start true (mobile-first) so the initial render never shows 3D tilt on mobile
  const [isMobile, setIsMobile] = useState(true);
  const [isFlat,   setIsFlat]   = useState(false);

  React.useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    setIsFlat(v > 0.85);
  });

  // Mobile: stay flat (no tilt, no scale bounce)
  // Desktop: 3D tilt flattens over first 75% of scroll
  const rotate    = useTransform(scrollYProgress, [0, 0.75], isMobile ? [0, 0]       : [14, 0]);
  const scale     = useTransform(scrollYProgress, [0, 0.75], isMobile ? [1, 1]       : [1.03, 1]);
  const translate = useTransform(scrollYProgress, [0, 1],    [0, -60]);

  return (
    <div
      ref={containerRef}
      className="h-auto md:h-[80rem] flex items-start justify-center relative px-4 md:px-20 pt-[85px] md:pt-[98px] pb-14 md:pb-0"
    >
      {/* perspective only on desktop — on mobile it caused the card top to bleed into text */}
      <div
        className="w-full relative"
        style={isMobile ? {} : { perspective: "1200px" }}
      >
        <Header translate={translate} titleComponent={titleComponent} />
        <Card rotate={rotate} scale={scale} translate={translate} isFlat={isFlat && !isMobile}>
          {children}
        </Card>
      </div>
    </div>
  );
};

// ─── Header ──────────────────────────────────────────────────────────────────
export const Header = ({
  translate,
  titleComponent,
}: {
  translate: MotionValue<number>;
  titleComponent: React.ReactNode;
}) => (
  <motion.div
    style={{ translateY: translate }}
    className="max-w-5xl mx-auto text-center"
  >
    {titleComponent}
  </motion.div>
);

// ─── Card ────────────────────────────────────────────────────────────────────
export const Card = ({
  rotate,
  scale,
  isFlat,
  children,
}: {
  rotate: MotionValue<number>;
  scale: MotionValue<number>;
  translate: MotionValue<number>;
  isFlat: boolean;
  children: React.ReactNode;
}) => (
  // Outer: scroll-driven 3D tilt + scale (desktop only)
  <motion.div
    style={{
      rotateX: rotate,
      scale,
      boxShadow: "0 2px 8px rgba(0,0,0,0.03), 0 8px 20px rgba(0,0,0,0.04)",
    }}
    className="max-w-5xl mt-6 md:mt-4 mx-auto h-[300px] sm:h-[380px] md:h-[40rem] w-full"
  >
    {/* Inner: idle float once fully flat (desktop only — isFlat already false on mobile) */}
    <motion.div
      className="w-full h-full border-2 border-[#d1d5db] bg-white rounded-[22px] overflow-hidden"
      animate={
        isFlat
          ? {
              y: [0, -7, 0],
              boxShadow: [
                "0 2px 8px rgba(0,0,0,0.03), 0 8px 20px rgba(0,0,0,0.04)",
                "0 6px 20px rgba(0,0,0,0.05), 0 16px 36px rgba(0,0,0,0.05)",
                "0 2px 8px rgba(0,0,0,0.03), 0 8px 20px rgba(0,0,0,0.04)",
              ],
            }
          : { y: 0 }
      }
      transition={
        isFlat
          ? { duration: 4, repeat: Infinity, ease: "easeInOut", repeatType: "mirror" }
          : { duration: 0.4, ease: "easeOut" }
      }
    >
      {children}
    </motion.div>
  </motion.div>
);
