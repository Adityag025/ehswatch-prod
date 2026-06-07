import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { basePath } from "@/lib/basePath";
import FaqAccordion from "./FaqAccordion";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Action Tracker — EHSWatch",
  description:
    "No more lost actions or endless email chains. EHSWatch Action Tracker gives every corrective and preventive action a clear owner, a firm deadline and a transparent audit trail.",
};

const GRID_BOXES = [
  { left: 1,   top: 1,   color: "#EFF6FF", dur: 4, delay: 0 },
  { left: 851, top: 1,   color: "#DBEAFE", dur: 8, delay: 5.1 },
  { left: 701, top: 51,  color: "#BFDBFE", dur: 6, delay: 10.2 },
  { left: 551, top: 101, color: "#93C5FD", dur: 4, delay: 3.3 },
  { left: 401, top: 151, color: "#EFF6FF", dur: 8, delay: 8.4 },
  { left: 251, top: 201, color: "#DBEAFE", dur: 6, delay: 1.5 },
  { left: 101, top: 251, color: "#BFDBFE", dur: 4, delay: 6.6 },
  { left: 951, top: 251, color: "#93C5FD", dur: 8, delay: 11.7 },
  { left: 801, top: 301, color: "#EFF6FF", dur: 6, delay: 4.8 },
  { left: 651, top: 351, color: "#DBEAFE", dur: 4, delay: 9.9 },
  { left: 501, top: 401, color: "#BFDBFE", dur: 8, delay: 3.0 },
  { left: 351, top: 451, color: "#93C5FD", dur: 6, delay: 8.1 },
];

const FEATURES = [
  {
    color: "#155eef",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="1.6" />
        <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        <path d="M19 4l1.5 1.5L23 3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Instant Assignment",
    desc: "Create actions with a defined owner, due date and priority level the moment a finding is raised — no separate task or email required.",
  },
  {
    color: "#059669",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="3" y="3" width="18" height="18" rx="3" stroke="currentColor" strokeWidth="1.6" />
        <path d="M3 9h18" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
        <path d="M9 3v6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
        <path d="M15 3v6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
        <path d="M7 14h3M7 17h5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
        <circle cx="17" cy="15.5" r="3" stroke="currentColor" strokeWidth="1.4" />
        <path d="M16 15.5l.8.8 1.7-1.7" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Real-Time Status",
    desc: "Monitor all open, overdue and completed actions across every site and team from a single live dashboard. Filter by owner, module, location or priority.",
  },
  {
    color: "#f59e0b",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
        <path d="M13.73 21a2 2 0 0 1-3.46 0" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    ),
    title: "Automated Notifications",
    desc: "Configurable email and in-app alerts notify owners when actions are assigned, approaching their deadline or overdue. Escalation paths ensure nothing stalls silently.",
  },
  {
    color: "#7c3aed",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        <circle cx="7" cy="6" r="1.5" fill="currentColor" />
        <circle cx="12" cy="12" r="1.5" fill="currentColor" />
        <circle cx="17" cy="18" r="1.5" fill="currentColor" />
      </svg>
    ),
    title: "Custom Workflows",
    desc: "Define multi-step approval and review workflows that match your organisation's processes — from simple two-step closures to complex multi-team sign-off chains.",
  },
  {
    color: "#0891b2",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="5" y="2" width="14" height="20" rx="3" stroke="currentColor" strokeWidth="1.6" />
        <path d="M9 7h6M9 11h4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
        <path d="M9 15h2" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
        <circle cx="16" cy="16" r="3.5" fill="white" stroke="currentColor" strokeWidth="1.4" />
        <path d="M16 14.5v2l1 1" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Mobile-First",
    desc: "Assign, update, comment on or approve actions from any smartphone or tablet, online or offline. Ideal for field teams and multi-site operations.",
  },
  {
    color: "#155eef",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Connected Platform",
    desc: "Actions auto-link to their originating record — whether an incident, audit finding, observation or risk assessment — with no manual re-entry and no data duplication.",
  },
];

const DIFFERENTIATORS = [
  "Rapid deployment with no IT dependency — configure workflows, approvals and notifications without development resource.",
  "Built by EHS experts who understand what safety teams need in the field.",
  "Scales from small teams to enterprise-wide multi-site deployments.",
  "ISO 45001-aligned audit trail supports external audits, regulatory inspections and certification reviews.",
];

const OTHER_MODULES = [
  {
    color: "#ef4444",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M10 3L18 17H2L10 3z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M10 9v3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="10" cy="14.5" r="0.8" fill="currentColor" />
      </svg>
    ),
    title: "Incident Management",
    desc: "Capture, investigate and close incidents faster with structured workflows and root cause analysis.",
    href: "#",
  },
  {
    color: "#6366f1",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <rect x="4" y="4" width="12" height="14" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <path d="M7 4V3.5A1.5 1.5 0 0 1 8.5 2h3A1.5 1.5 0 0 1 13 3.5V4" stroke="currentColor" strokeWidth="1.5" />
        <path d="M7 9h6M7 12h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    title: "Audit Management",
    desc: "Plan, conduct and follow up on compliance, supplier and internal audits from one connected platform.",
    href: "#",
  },
  {
    color: "#6366f1",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M10 2L3 5.5v5C3 14.1 6 17.4 10 18c4-0.6 7-3.9 7-7.5v-5L10 2z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M7 10l2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Risk Assessment",
    desc: "Identify hazards, assess risk levels and document controls before incidents occur.",
    href: "#",
  },
  {
    color: "#f59e0b",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M2 10s3-6 8-6 8 6 8 6-3 6-8 6-8-6-8-6z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <circle cx="10" cy="10" r="2.5" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
    title: "HSE Observations",
    desc: "Report unsafe acts, unsafe conditions and positive safety behaviours in real time from the field.",
    href: "#",
  },
  {
    color: "#6366f1",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M10 2l1.5 6L18 10l-6.5 2L10 18l-1.5-6L2 10l6.5-2L10 2z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      </svg>
    ),
    title: "IRIS AI",
    desc: "Let EHSWatch's AI surface patterns, recommend actions and generate insights your team would otherwise miss.",
    href: `${basePath}/iris/`,
  },
];

export default function ActionTrackerPage() {
  return (
    <>
      <Navbar lightHero={true} />
      <main>
        <style>{`
          .at-grid-container {
            background-image:
              linear-gradient(rgba(59,130,246,0.08) 1px, transparent 1px),
              linear-gradient(90deg, rgba(59,130,246,0.08) 1px, transparent 1px);
            background-size: 50px 50px;
          }
          @keyframes atGridBoxFill {
            0%, 100% { opacity: 0; }
            50%       { opacity: 0.6; }
          }
          .at-grid-box {
            position: absolute;
            width: 48px;
            height: 48px;
          }
          .at-feature-card {
            transition: box-shadow 0.22s ease, transform 0.22s ease;
          }
          .at-feature-card:hover {
            transform: translateY(-3px);
            box-shadow: 0 8px 28px rgba(0,0,0,0.08) !important;
          }
          .at-module-card {
            transition: border-color 0.18s ease, box-shadow 0.18s ease, transform 0.18s ease;
          }
          .at-module-card:hover {
            border-color: #93c5fd !important;
            box-shadow: 0 4px 16px rgba(59,130,246,0.10);
            transform: translateY(-2px);
          }
          @media (min-width: 640px) and (max-width: 1023px) {
            .features-row > *:nth-child(2n) { border-right: none !important; }
          }
        `}</style>

        {/* ── Hero ─────────────────────────────────────────────── */}
        <section
          className="relative overflow-hidden flex items-center justify-center px-4 sm:px-6 pt-[90px] sm:pt-[120px] md:pt-[148px] pb-[60px] sm:pb-[80px] md:pb-[100px]"
          style={{
            minHeight: "58vh",
            background: "linear-gradient(to bottom, white 0%, white 85%, rgba(248,250,252,0.5) 100%)",
          }}
        >
          <div className="absolute inset-0 overflow-hidden at-grid-container pointer-events-none">
            {GRID_BOXES.map((b, i) => (
              <div
                key={i}
                className="at-grid-box"
                style={{
                  left: b.left,
                  top: b.top,
                  backgroundColor: b.color,
                  animation: `atGridBoxFill ${b.dur}s ease-in-out infinite`,
                  animationDelay: `${b.delay}s`,
                }}
              />
            ))}
            <div
              className="absolute bottom-0 left-0 right-0 h-40 pointer-events-none"
              style={{
                background: "linear-gradient(to bottom, transparent 0%, rgba(255,255,255,0.85) 70%, white 100%)",
              }}
            />
          </div>

          <div className="relative z-20 max-w-[800px] w-full mx-auto text-center flex flex-col items-center gap-5 md:gap-6">
            <h1 className="font-[family-name:var(--font-gothic-a1)] font-bold text-[36px] sm:text-[50px] md:text-[58px] leading-[1.06] text-[#0a0f1e] tracking-[-0.03em]">
              Turn Findings Into{" "}
              <span style={{ color: "#1d4ed8" }}>Results</span>
            </h1>
            <p className="font-[family-name:var(--font-dm-sans)] text-[15px] sm:text-[17px] md:text-[18px] text-[#4b5563] leading-[1.75] max-w-[860px] text-pretty">
              No more lost actions or endless email chains. EHSWatch Action Tracker gives every corrective and
              preventive action a clear owner, a firm deadline and a transparent audit trail — from the moment a
              finding is raised to the moment it is closed.
            </p>
            <p className="font-[family-name:var(--font-gothic-a1)] font-semibold text-[16px] sm:text-[17px] text-[#0a0f1e]">
              Stop chasing actions. Start closing them.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={`${basePath}/support/`}
                className="inline-flex items-center gap-2 px-8 py-[12px] rounded-full font-[family-name:var(--font-dm-sans)] font-semibold text-[15px] text-white hover:opacity-90 transition-all duration-200 hover:shadow-lg"
                style={{
                  backgroundImage: "linear-gradient(102.8deg, #ffa964 0.12%, #ff8e37 34.34%, #ff7812 50.27%, #ff6d00 119.92%)",
                  boxShadow: "0 4px 24px rgba(249,115,22,0.30)",
                }}
              >
                Book a Demo
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
              <a
                href="#features"
                className="inline-flex items-center gap-2 px-8 py-[11px] rounded-full font-[family-name:var(--font-dm-sans)] font-medium text-[15px] border hover:bg-gray-50 transition-all duration-200"
                style={{ borderColor: "#d1d5db", color: "#374151" }}
              >
                See Key Features
              </a>
            </div>
          </div>
        </section>

        {/* ── Why Action Tracker ───────────────────────────────── */}
        <section className="py-[70px] md:py-[90px] px-4 md:px-6" style={{ background: "#F8FBFF" }}>
          <div className="max-w-[1160px] mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            <div className="flex flex-col gap-6 w-full lg:w-[40%]">
              <h2 className="font-[family-name:var(--font-gothic-a1)] font-bold text-[28px] sm:text-[34px] md:text-[40px] leading-tight tracking-[-0.025em] text-[#0a0f1e]">
                Why Action Tracker?
              </h2>
              <p className="font-[family-name:var(--font-dm-sans)] text-[15px] sm:text-[16px] leading-[1.8] text-[#4b5563] text-pretty">
                In most organisations, corrective and preventive actions are managed across spreadsheets, email threads
                and verbal commitments. The result is predictable: actions stall, deadlines pass unnoticed, and the same
                incidents recur because root causes were never properly addressed.
              </p>
              <p className="font-[family-name:var(--font-dm-sans)] text-[15px] sm:text-[16px] leading-[1.8] text-[#4b5563] text-pretty">
                EHSWatch Action Tracker replaces that fragmentation with a single, connected workflow. Every action —
                regardless of where it originates — is assigned, tracked, escalated and closed through one system that
                everyone can see in real time.
              </p>
              <a
                className="self-start inline-flex items-center gap-1.5 font-[family-name:var(--font-dm-sans)] font-medium text-[14px] no-underline transition-all duration-200"
                style={{ color: "#FF6D00" }}
                href={`${basePath}/support/`}
              >
                <span>See Action Tracker in Action</span>
                <svg width="13" height="13" viewBox="0 0 14 14" fill="none">
                  <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>
            <div className="w-full lg:w-[60%] rounded-2xl overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`${basePath}/images/Action tracker /Action.png`}
                alt="Action Tracker dashboard"
                className="w-full h-auto"
              />
            </div>
          </div>
        </section>

        {/* ── Key Features ─────────────────────────────────────── */}
        <section id="features" className="py-[70px] md:py-[90px] px-4 md:px-6 bg-white">
          <div className="max-w-[1160px] mx-auto">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="font-[family-name:var(--font-gothic-a1)] font-bold text-[28px] sm:text-[34px] md:text-[42px] leading-tight tracking-[-0.025em] text-[#0a0f1e]">
                Key Features of{" "}
                <span style={{ color: "#1d4ed8" }}>Action Tracker</span>
              </h2>
              <p className="font-[family-name:var(--font-dm-sans)] text-[15px] sm:text-[16px] text-[#6b7280] mt-4 max-w-[500px] mx-auto text-pretty leading-[1.7]">
                Everything your team needs to close actions without chasing them.
              </p>
            </div>

            <div className="features-row grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
              {FEATURES.slice(0, 3).map((f, i) => (
                <div
                  key={i}
                  className="flex flex-col gap-3 px-5 sm:px-7 py-6 sm:py-8"
                  style={{
                    borderBottom: "1px solid #e5e7eb",
                    borderRight: i < 2 ? "1px solid #e5e7eb" : "none",
                  }}
                >
                  <div
                    className="w-10 h-10 rounded-[10px] flex items-center justify-center shrink-0"
                    style={{ background: `${f.color}14`, color: f.color }}
                  >
                    {f.icon}
                  </div>
                  <h3 className="font-[family-name:var(--font-gothic-a1)] font-semibold text-[15px] text-[#0a0f1e] leading-snug">
                    {f.title}
                  </h3>
                  <p className="font-[family-name:var(--font-dm-sans)] text-[13px] text-[#6b7280] leading-[1.65] flex-1 text-pretty">
                    {f.desc}
                  </p>
                </div>
              ))}
            </div>

            <div className="features-row grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
              {FEATURES.slice(3).map((f, i) => (
                <div
                  key={i}
                  className="flex flex-col gap-3 px-5 sm:px-7 py-6 sm:py-8"
                  style={{
                    borderBottom: "none",
                    borderRight: i < 2 ? "1px solid #e5e7eb" : "none",
                  }}
                >
                  <div
                    className="w-10 h-10 rounded-[10px] flex items-center justify-center shrink-0"
                    style={{ background: `${f.color}14`, color: f.color }}
                  >
                    {f.icon}
                  </div>
                  <h3 className="font-[family-name:var(--font-gothic-a1)] font-semibold text-[15px] text-[#0a0f1e] leading-snug">
                    {f.title}
                  </h3>
                  <p className="font-[family-name:var(--font-dm-sans)] text-[13px] text-[#6b7280] leading-[1.65] flex-1 text-pretty">
                    {f.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── What Sets Apart ──────────────────────────────────── */}
        <section className="py-[70px] md:py-[90px] px-4 md:px-6" style={{ background: "#F8FBFF" }}>
          <div className="max-w-[1100px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <h2 className="font-[family-name:var(--font-gothic-a1)] font-bold text-[28px] sm:text-[34px] md:text-[40px] leading-tight tracking-[-0.025em] text-[#0a0f1e]">
              What Sets EHSWatch
              <br />
              <span style={{ color: "#1d4ed8" }}>Action Tracker</span> Apart
            </h2>
            <div className="flex flex-col gap-4">
              {DIFFERENTIATORS.map((text, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div
                    className="w-7 h-7 rounded-full flex items-center justify-center shrink-0 mt-0.5"
                    style={{ background: "#93c5fd" }}
                  >
                    <svg width="11" height="11" viewBox="0 0 11 11" fill="none">
                      <path d="M2 5.5l2.8 2.8L9 2.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <p className="font-[family-name:var(--font-dm-sans)] text-[14px] sm:text-[15px] leading-[1.75] text-[#374151] text-pretty">
                    {text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FAQ ──────────────────────────────────────────────── */}
        <section className="py-[70px] md:py-[90px] px-4 md:px-6 bg-white">
          <div className="max-w-[820px] mx-auto flex flex-col gap-8">
            <div className="text-center">
              <h2 className="font-[family-name:var(--font-gothic-a1)] font-bold text-[26px] sm:text-[32px] md:text-[38px] leading-tight tracking-[-0.025em] text-[#0a0f1e]">
                Frequently Asked Questions
              </h2>
            </div>
            <FaqAccordion />
          </div>
        </section>

        {/* ── CTA ──────────────────────────────────────────────── */}
        <section className="py-[70px] md:py-[90px] px-4 md:px-6" style={{ background: "#f1f7ff" }}>
          <div className="max-w-[700px] mx-auto text-center flex flex-col items-center gap-6">
            <h2 className="font-[family-name:var(--font-gothic-a1)] font-bold text-[28px] sm:text-[34px] md:text-[42px] leading-tight tracking-[-0.025em] text-[#0a0f1e]">
              Ready to Close Actions Faster?
            </h2>
            <p className="font-[family-name:var(--font-dm-sans)] text-[15px] sm:text-[16px] leading-[1.8] text-[#4b5563] max-w-[560px] text-pretty">
              Request your free Action Tracker demo. See how EHSWatch transforms safety and compliance findings into
              closed, evidenced actions — across every site, every team, every time.
            </p>
            <a
              href={`${basePath}/support/`}
              className="inline-flex items-center gap-2 px-8 py-[12px] rounded-full font-[family-name:var(--font-dm-sans)] font-semibold text-[15px] text-white hover:opacity-90 transition-all duration-200 hover:shadow-lg"
              style={{
                backgroundImage: "linear-gradient(102.8deg, #ffa964 0.12%, #ff8e37 34.34%, #ff7812 50.27%, #ff6d00 119.92%)",
                boxShadow: "0 4px 24px rgba(249,115,22,0.30)",
              }}
            >
              Book Demo Now
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </section>

        {/* ── Explore More Modules ─────────────────────────────── */}
        <section className="py-[70px] md:py-[90px] px-4 md:px-6 bg-white">
          <div className="max-w-[1160px] mx-auto">
            <h2 className="font-[family-name:var(--font-gothic-a1)] font-bold text-[28px] sm:text-[34px] md:text-[40px] leading-tight tracking-[-0.025em] text-center mb-10 md:mb-14 text-[#0a0f1e]">
              Explore More{" "}
              <span style={{ color: "#1d4ed8" }}>EHSWatch Modules</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5">
              {OTHER_MODULES.map((m, i) => (
                <div
                  key={i}
                  className="flex flex-col gap-3 px-5 sm:px-6 py-6 sm:py-8"
                  style={{ borderRight: i < OTHER_MODULES.length - 1 ? "1px solid #e5e7eb" : "none" }}
                >
                  <div
                    className="w-10 h-10 rounded-[10px] flex items-center justify-center shrink-0"
                    style={{ background: `${m.color}14`, color: m.color }}
                  >
                    {m.icon}
                  </div>
                  <h3 className="font-[family-name:var(--font-gothic-a1)] font-semibold text-[15px] text-[#0a0f1e] leading-snug">
                    {m.title}
                  </h3>
                  <p className="font-[family-name:var(--font-dm-sans)] text-[13px] text-[#6b7280] leading-[1.65] flex-1 text-pretty">
                    {m.desc}
                  </p>
                  <a
                    className="mt-1 self-start inline-flex items-center gap-1 font-[family-name:var(--font-dm-sans)] font-medium text-[13px] no-underline transition-all duration-200"
                    style={{ color: "#FF6D00" }}
                    href={m.href}
                  >
                    <span>Explore</span>
                    <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
                      <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
