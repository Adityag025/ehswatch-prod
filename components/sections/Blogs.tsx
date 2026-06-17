"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Reveal from "@/components/ui/Reveal";
import GlareButton from "@/components/ui/GlareButton";

const BLOGS = [
  {
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
    category: "Risk & Analytics",
    title: "5 Leading Indicators Every Safety Manager Should Be Tracking",
    href: "/blog/leading-indicators-safety",
    readTime: "5 min read",
    date: "Apr 14, 2026",
  },
  {
    img: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=800&q=80",
    category: "Operations",
    title: "The Hidden Cost of Manual Incident Reporting",
    href: "/blog/cost-manual-incident-reporting",
    readTime: "7 min read",
    date: "Apr 2, 2026",
  },
  {
    img: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=80",
    category: "Contractor Management",
    title: "Contractor Safety Management: Where Most Programmes Fall Short",
    href: "/blog/contractor-safety-management",
    readTime: "9 min read",
    date: "Mar 18, 2026",
  },
  {
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    category: "Risk & Analytics",
    title: "From Lagging to Leading: Rethinking Your Safety Metrics",
    href: "/blog/lagging-to-leading-metrics",
    readTime: "6 min read",
    date: "Mar 5, 2026",
  },
];

/* ── Individual card — full-bleed image with overlay content ── */
function BlogCard({ blog }: { blog: typeof BLOGS[0] }) {
  const [hovered, setHovered] = useState(false);

  return (
    <Link
      href={blog.href}
      aria-label={`Read: ${blog.title}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative flex flex-col overflow-hidden"
      style={{
        borderRadius: 8,
        height: 360,
        boxShadow: hovered
          ? "0 24px 52px rgba(0,0,0,0.28)"
          : "0 4px 16px rgba(0,0,0,0.12)",
        transform: hovered ? "translateY(-6px) scale(1.01)" : "translateY(0) scale(1)",
        transition: "transform 400ms cubic-bezier(.22,1,.36,1), box-shadow 400ms ease",
      }}
    >
      {/* Background image */}
      <Image
        src={blog.img}
        alt={blog.title}
        fill
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        className="object-cover object-center"
        style={{
          transform: hovered ? "scale(1.07)" : "scale(1)",
          transition: "transform 700ms cubic-bezier(.22,1,.36,1)",
        }}
      />

      {/* Gradient overlay — subtle at top, strong at bottom */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, rgba(0,0,0,0.08) 0%, rgba(0,0,0,0.18) 40%, rgba(0,0,0,0.72) 75%, rgba(0,0,0,0.88) 100%)",
          transition: "opacity 300ms ease",
        }}
      />

      {/* Bottom content */}
      <div className="absolute bottom-0 left-0 right-0 z-10 px-4 pb-4 pt-6 flex flex-col gap-2">
        {/* Date + read time */}
        <p className="font-[family-name:var(--font-dm-sans)] text-[10.5px] text-white/60">
          {blog.date}
          <span className="mx-1.5 text-white/30">•</span>
          {blog.readTime}
        </p>

        {/* Title */}
        <h3
          className="font-[family-name:var(--font-gothic-a1)] font-bold text-[15px] leading-[1.38] text-white line-clamp-3"
          style={{ textWrap: "pretty" } as React.CSSProperties}
        >
          {blog.title}
        </h3>

        {/* Read more */}
        <div
          className="mt-1 flex items-center gap-1 font-[family-name:var(--font-dm-sans)] font-semibold text-[12px]"
          style={{
            color: hovered ? "#ff9a5c" : "rgba(255,255,255,0.75)",
            transition: "color 220ms ease",
          }}
        >
          Read more
          <span
            style={{
              display: "inline-block",
              transform: hovered ? "translateX(4px)" : "translateX(0)",
              transition: "transform 260ms ease",
            }}
          >
            →
          </span>
        </div>
      </div>
    </Link>
  );
}

/* ── Section ── */
export default function Blogs() {
  return (
    <section className="bg-[#f8fbff] py-14 md:py-[90px] px-4 md:px-6">
      <div className="max-w-[1200px] mx-auto">

        {/* Centred heading */}
        <Reveal variant="fade-up" duration={700}>
          <div className="text-center mb-10 md:mb-12">
            <h2 className="font-[family-name:var(--font-gothic-a1)] font-bold text-[28px] sm:text-[36px] md:text-[42px] leading-[1.1] text-[#0f1728]">
              From the{" "}
              <span className="text-[#155eef]">EHSWatch</span> Blog
            </h2>
          </div>
        </Reveal>

        {/* 4-column card grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
          {BLOGS.map((blog, i) => (
            <Reveal key={blog.title + i} variant="soft-up" delay={i * 90} duration={800}>
              <BlogCard blog={blog} />
            </Reveal>
          ))}
        </div>

        {/* View All CTA */}
        <Reveal variant="fade-up" duration={600} delay={200}>
          <div className="flex justify-center mt-10 md:mt-12">
            <GlareButton
              href="/blog"
              fillColor="#FF6D00"
              hoverTextColor="#ffffff"
              className="gap-2 font-[family-name:var(--font-dm-sans)] font-semibold text-[14px] text-[#ff6d00] border border-[#ffd9b8] bg-white rounded-full px-7 py-3"
            >
              View All Articles
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </GlareButton>
          </div>
        </Reveal>

      </div>
    </section>
  );
}
