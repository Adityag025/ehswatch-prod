import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { basePath } from "@/lib/basePath";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How to Build a Near-Miss Reporting Culture That Actually Works — EHSWatch",
  description:
    "Most EHS teams understand why near-miss reporting matters. The challenge is consistently capturing those events in a way that leads to meaningful follow-through.",
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

export default function NearMissReportingCulturePage() {
  return (
    <>
      <Navbar lightHero={true} />
      <main>
        <style>{`
          .blog-body p + p { margin-top: 1.6rem; }
          .blog-divider {
            display: flex;
            align-items: center;
            gap: 12px;
            color: #d1d5db;
          }
          .blog-divider::before,
          .blog-divider::after {
            content: "";
            flex: 1;
            height: 1px;
            background: #e5e7eb;
          }
          .post-grid {
            background-image:
              linear-gradient(rgba(59,130,246,0.07) 1px, transparent 1px),
              linear-gradient(90deg, rgba(59,130,246,0.07) 1px, transparent 1px);
            background-size: 50px 50px;
          }
          .post-box { position: absolute; width: 48px; height: 48px; }
          @keyframes postBoxFill {
            0%, 100% { opacity: 0; }
            50%       { opacity: 0.5; }
          }
        `}</style>

        <article className="bg-white min-h-screen">
          {/* ── Hero ─────────────────────────────────────────────── */}
          <section className="relative overflow-hidden flex flex-col items-center justify-end px-6 pt-[148px] pb-[52px]">
            <div className="absolute inset-0 overflow-hidden post-grid pointer-events-none">
              {GRID_BOXES.map((b, i) => (
                <div
                  key={i}
                  className="post-box"
                  style={{
                    left: b.left,
                    top: b.top,
                    backgroundColor: b.color,
                    animation: `postBoxFill ${b.dur}s ease-in-out infinite`,
                    animationDelay: `${b.delay}s`,
                  }}
                />
              ))}
              <div
                className="absolute bottom-0 left-0 right-0 pointer-events-none"
                style={{
                  height: "65%",
                  background:
                    "linear-gradient(to bottom, transparent 0%, rgba(255,255,255,0.7) 45%, #FFFFFF 100%)",
                }}
              />
            </div>

            <div className="relative z-20 max-w-[760px] w-full mx-auto text-center flex flex-col items-center gap-4">
              <span
                className="font-[family-name:var(--font-dm-sans)] text-[11px] font-semibold uppercase tracking-[0.12em]"
                style={{ color: "#1d4ed8" }}
              >
                Incident Management
              </span>
              <h1 className="font-[family-name:var(--font-gothic-a1)] font-bold text-[30px] sm:text-[38px] md:text-[46px] leading-[1.1] tracking-[-0.025em] text-[#0a0f1e]">
                How to Build a Near-Miss Reporting Culture That Actually Works
              </h1>
              <div className="w-full max-w-[680px]" style={{ borderTop: "1px solid rgba(229,231,235,0.7)" }} />
              <div className="flex items-center justify-between w-full max-w-[680px] py-3">
                <div className="flex items-center gap-3">
                  <span className="font-[family-name:var(--font-dm-sans)] text-[13px] text-[#9ca3af]">8 May 2026</span>
                  <span style={{ color: "#e5e7eb" }}>·</span>
                  <span className="font-[family-name:var(--font-dm-sans)] text-[13px] text-[#9ca3af]">6 min read</span>
                </div>
                <div className="flex items-center gap-4">
                  <button className="font-[family-name:var(--font-dm-sans)] text-[13px] font-medium text-[#6b7280] hover:text-[#0a0f1e] transition-colors flex items-center gap-1.5">
                    <svg width="15" height="15" viewBox="0 0 16 16" fill="none">
                      <path d="M4 12v-1a4 4 0 0 1 4-4h4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
                      <path d="M14 4l2 3-2 3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    Share
                  </button>
                  <button className="font-[family-name:var(--font-dm-sans)] text-[13px] font-medium text-[#6b7280] hover:text-[#0a0f1e] transition-colors flex items-center gap-1.5">
                    <svg width="15" height="15" viewBox="0 0 16 16" fill="none">
                      <path d="M5 3h6a1 1 0 0 1 1 1v10l-4-2.5L4 14V4a1 1 0 0 1 1-1z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
                    </svg>
                    Bookmark
                  </button>
                </div>
              </div>
              <div className="w-full max-w-[680px]" style={{ borderTop: "1px solid rgba(229,231,235,0.7)" }} />
            </div>
          </section>

          {/* ── Body ─────────────────────────────────────────────── */}
          <div className="px-4 sm:px-6 pt-8 pb-0">
            <div className="max-w-[720px] mx-auto">
              <div className="blog-body">
                <p className="font-[family-name:var(--font-dm-sans)] text-[16px] sm:text-[17px] leading-[1.85] text-[#374151] text-pretty">
                  Every safety professional knows the feeling: a near-miss occurs on site, the supervisor makes a mental
                  note, and by the end of the shift it is forgotten. No record, no investigation, no corrective action.
                  The incident that could have prevented a serious injury simply disappears into the operational noise.
                </p>
                <p className="font-[family-name:var(--font-dm-sans)] text-[16px] sm:text-[17px] leading-[1.85] text-[#374151] text-pretty mt-6">
                  This is not a problem of awareness. Most EHS teams understand why near-miss reporting matters — it is
                  the backbone of proactive safety management and a direct indicator of cultural health. The challenge is
                  consistently capturing those events in a way that leads to meaningful follow-through.
                </p>
              </div>

              {/* Featured image */}
              <div className="relative w-full rounded-2xl overflow-hidden my-10" style={{ aspectRatio: "16/9" }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={`${basePath}/images/blogs/blog-1.png`}
                  alt="How to Build a Near-Miss Reporting Culture That Actually Works"
                  className="object-cover w-full h-full"
                />
              </div>

              <div className="blog-body">
                <p className="font-[family-name:var(--font-dm-sans)] text-[16px] sm:text-[17px] leading-[1.85] text-[#374151] text-pretty">
                  The root cause of poor near-miss reporting is almost never a lack of willingness. Field workers notice
                  hazards. They experience close calls. The barrier is friction: the process of reporting feels
                  bureaucratic, there is no visible outcome from previous reports, and there is a persistent —
                  sometimes justified — concern about blame.
                </p>
                <p className="font-[family-name:var(--font-dm-sans)] text-[16px] sm:text-[17px] leading-[1.85] text-[#374151] text-pretty mt-6">
                  Organisations that successfully build reporting cultures do so by reducing that friction at every
                  touchpoint. They make it simple to report, visible that reports are acted upon, and safe to raise
                  concerns without fear of disciplinary consequence. The technology and the culture must move together.
                </p>
              </div>

              {/* Blockquote */}
              <blockquote className="my-12 text-center">
                <p
                  className="font-[family-name:var(--font-gothic-a1)] font-semibold text-[22px] sm:text-[26px] md:text-[28px] leading-[1.4] tracking-[-0.01em] text-[#0a0f1e]"
                  style={{ fontStyle: "italic" }}
                >
                  "The organisations with the lowest incident rates are rarely the ones with the fewest hazards — they
                  are the ones that see and act on them fastest."
                </p>
                <footer className="mt-4 font-[family-name:var(--font-dm-sans)] text-[13px] text-[#9ca3af]">
                  — EHSWatch Research, 2025
                </footer>
              </blockquote>

              <div className="blog-body">
                <p className="font-[family-name:var(--font-dm-sans)] text-[16px] sm:text-[17px] leading-[1.85] text-[#374151] text-pretty">
                  The practical starting point is removing the paper form. Mobile reporting tools that allow a worker to
                  log a near-miss in under sixty seconds — with a photo, a location and a brief description —
                  consistently outperform paper-based systems in volume and quality of reports.
                </p>
                <p className="font-[family-name:var(--font-dm-sans)] text-[16px] sm:text-[17px] leading-[1.85] text-[#374151] text-pretty mt-6">
                  But technology alone is insufficient. The second step is closing the loop visibly. When a near-miss is
                  reported, the reporter must see what happened as a result — whether an action was raised, what the
                  finding was, and whether the hazard has been resolved. This feedback loop is the single most powerful
                  driver of sustained reporting behaviour.
                </p>
              </div>

              {/* Two-column images */}
              <div className="grid grid-cols-2 gap-4 my-10">
                <div className="relative rounded-xl overflow-hidden" style={{ aspectRatio: "4/3" }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={`${basePath}/images/blogs/blog-2.png`}
                    alt="Supporting visual"
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="relative rounded-xl overflow-hidden" style={{ aspectRatio: "4/3" }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={`${basePath}/images/blogs/blog-3.png`}
                    alt="Supporting visual"
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>

              <div className="blog-body">
                <p className="font-[family-name:var(--font-dm-sans)] text-[16px] sm:text-[17px] leading-[1.85] text-[#374151] text-pretty">
                  Leadership behaviour is the third pillar. When senior managers actively reference near-miss reports in
                  safety meetings, thank reporters by name, and share the outcomes of investigations, reporting rates
                  reliably increase. Psychological safety is built through demonstrated action, not policy statements.
                </p>
                <p className="font-[family-name:var(--font-dm-sans)] text-[16px] sm:text-[17px] leading-[1.85] text-[#374151] text-pretty mt-6">
                  Platforms like EHSWatch embed all three elements — simple mobile capture, automatic assignment of
                  corrective actions, and real-time dashboards that show reporting trends to both workers and leadership.
                  The result is a system where reporting is the path of least resistance, not the path of most friction.
                </p>
                <p className="font-[family-name:var(--font-dm-sans)] text-[16px] sm:text-[17px] leading-[1.85] text-[#374151] text-pretty mt-6">
                  Building a near-miss culture is not a six-month project with a launch date. It is an ongoing
                  commitment to making it easier and safer to speak up than to stay silent. Organisations that sustain
                  it over time consistently outperform their peers on every incident metric that matters.
                </p>
              </div>

              <div className="blog-divider mt-10">
                <svg width="6" height="6" viewBox="0 0 6 6">
                  <circle cx="3" cy="3" r="3" fill="#d1d5db" />
                </svg>
              </div>
            </div>
          </div>

          {/* ── Next Article ─────────────────────────────────────── */}
          <div className="px-4 sm:px-6 pb-20">
            <div className="max-w-[720px] mx-auto">
              <div className="grid py-8 grid-cols-1">
                <div className="text-right">
                  <a
                    className="flex flex-col gap-2 items-end group no-underline"
                    href={`${basePath}/blog/iso-45001-transition/`}
                  >
                    <span className="font-[family-name:var(--font-dm-sans)] text-[11px] font-semibold uppercase tracking-[0.1em] text-[#9ca3af] flex items-center gap-1.5">
                      Next Article
                      <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
                        <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                  </a>
                </div>
              </div>
              <div style={{ height: 1, background: "#e5e7eb" }} />
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
