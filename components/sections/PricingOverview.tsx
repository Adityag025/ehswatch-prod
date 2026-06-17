"use client";

const CUSTOM_NEEDS = [
  "Specific module combinations across different business units",
  "Multi-site or multi-country deployments with regional configuration",
  "Integration with existing ERP, HRMS or BI systems",
];

export default function PricingOverview() {
  return (
    <>
      <style>{`
        @keyframes needsFadeUp {
          from { opacity: 0; transform: translateY(14px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .needs-item {
          opacity: 0;
          animation: needsFadeUp 0.5s cubic-bezier(0.22,1,0.36,1) forwards;
        }
      `}</style>

      {/* ── Overview + Custom pricing ── */}
      <section className="py-[70px] md:py-[90px] px-4 md:px-6 bg-white">
        <div className="max-w-[1100px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            {/* Left: description */}
            <div className="flex flex-col gap-6">
              <div>
                <h2 className="font-[family-name:var(--font-gothic-a1)] font-bold text-[28px] sm:text-[34px] md:text-[40px] leading-tight tracking-[-0.025em] text-[#0a0f1e]">
                  Designed Around Your<br />
                  <span style={{ color: "#1d4ed8" }}>EHS Needs</span>, Not a Template
                </h2>
              </div>
              <p className="font-[family-name:var(--font-dm-sans)] text-[15px] sm:text-[16px] leading-[1.8] text-[#4b5563] text-pretty">
                EHSWatch is built for organisations that cannot afford generic templates or rigid licensing. Our pricing reflects how you actually use EHSQ software — across sites, modules, users, and compliance requirements.
              </p>
              <p className="font-[family-name:var(--font-dm-sans)] text-[15px] sm:text-[16px] leading-[1.8] text-[#4b5563] text-pretty">
                Implementation support, configuration, and role-based access are built into the way pricing is structured, so you can focus on improving safety and compliance instead of deciphering licence tiers.
              </p>
            </div>

            {/* Right: custom pricing card */}
            <div className="flex flex-col gap-6 pt-2 items-center text-center">
              <div>
                <h3 className="font-[family-name:var(--font-gothic-a1)] font-bold text-[20px] md:text-[22px] leading-snug text-[#0a0f1e]">
                  Available for organisations that require:
                </h3>
              </div>

              {/* Step-progress bullet list */}
              <div className="flex flex-col max-w-[400px] w-full text-left">
                {CUSTOM_NEEDS.map((need, i) => (
                  <div key={need}>
                    {/* Pill item */}
                    <div
                      className="needs-item flex items-center gap-3 px-4 py-3 rounded-full"
                      style={{
                        animationDelay: `${i * 180}ms`,
                        border: "1.5px solid #dbeafe",
                        background: "#f0f7ff",
                      }}
                    >
                      {/* Check circle */}
                      <div
                        className="w-7 h-7 rounded-full flex items-center justify-center shrink-0"
                        style={{ background: "#1d4ed8" }}
                      >
                        <svg width="11" height="11" viewBox="0 0 11 11" fill="none">
                          <path d="M2 5.5l2.8 2.8L9 2.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </div>
                      <span className="font-[family-name:var(--font-dm-sans)] text-[13px] sm:text-[14px] leading-[1.6] text-[#374151] text-pretty">
                        {need}
                      </span>
                    </div>

                    {/* Connector line between items */}
                    {i < CUSTOM_NEEDS.length - 1 && (
                      <div
                        className="ml-[27px] w-[2px] h-[10px]"
                        style={{ background: "#bfdbfe" }}
                      />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
