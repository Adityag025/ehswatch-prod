"use client";

import { useState } from "react";

const FAQS = [
  "What is EHSWatch Action Tracker?",
  "Can Action Tracker be configured for our specific workflow?",
  "Does it integrate with other EHSWatch modules?",
  "Who typically uses Action Tracker?",
  "How does it support compliance and audit requirements?",
  "Is Action Tracker accessible on mobile devices?",
];

export default function FaqAccordion() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="flex flex-col divide-y divide-[#e5eaf2]">
      {FAQS.map((q, i) => (
        <div key={i} className="py-5">
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="w-full flex items-center justify-between gap-4 text-left"
          >
            <span className="font-[family-name:var(--font-gothic-a1)] font-semibold text-[15px] sm:text-[16px] text-[#0a0f1e]">
              {q}
            </span>
            <div
              className="w-7 h-7 rounded-full shrink-0 flex items-center justify-center transition-colors duration-200"
              style={{ background: "#e5eaf2" }}
            >
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                style={{
                  transform: open === i ? "rotate(180deg)" : "none",
                  transition: "transform 0.2s ease",
                }}
              >
                <path
                  d="M2 4l4 4 4-4"
                  stroke="#374151"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </button>
        </div>
      ))}
    </div>
  );
}
