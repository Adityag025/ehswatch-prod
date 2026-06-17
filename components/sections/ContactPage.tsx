"use client";

import { useState } from "react";

/* ── Reusable underline input styles ── */
const inputBase =
  "w-full bg-transparent font-[family-name:var(--font-dm-sans)] text-[15px] text-[#0a0f1e] placeholder:text-[#9ca3af] outline-none py-2.5";

const SERVICES = [
  "Incident Management",
  "Action Tracker",
  "Audit Management",
  "Risk Assessment",
  "HSE Observations",
  "Permit to Work",
  "Other",
];

type Fields = {
  name: string;
  email: string;
  company: string;
  website: string;
  service: string;
  message: string;
};

function validate(fields: Fields) {
  const e: Partial<Record<keyof Fields, string>> = {};
  if (!fields.name.trim())
    e.name = "Name is required";
  else if (fields.name.trim().length < 2)
    e.name = "Name must be at least 2 characters";

  if (!fields.email.trim())
    e.email = "Email is required";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email))
    e.email = "Enter a valid email address";

  if (!fields.service)
    e.service = "Please select a service";

  if (
    fields.website &&
    !/^(https?:\/\/)?(www\.)?[a-zA-Z0-9-]+(\.[a-zA-Z]{2,})+/.test(fields.website)
  )
    e.website = "Enter a valid website URL";

  return e;
}

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [submitAttempted, setSubmitAttempted] = useState(false);
  const [fields, setFields] = useState<Fields>({
    name: "", email: "", company: "", website: "", service: "", message: "",
  });
  const [touched, setTouched] = useState<Partial<Record<keyof Fields, boolean>>>({});

  const errors = validate(fields);
  const isValid = Object.keys(errors).length === 0;

  const show = (f: keyof Fields) => !!(touched[f] || submitAttempted) && !!errors[f];

  const set = (f: keyof Fields) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setFields((prev) => ({ ...prev, [f]: e.target.value }));

  const blur = (f: keyof Fields) => () =>
    setTouched((prev) => ({ ...prev, [f]: true }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitAttempted(true);
    if (isValid) setSubmitted(true);
  };

  /* ── input wrapper: red border when error, blue on focus otherwise ── */
  const wrap = (f: keyof Fields) =>
    `border-b ${show(f) ? "border-red-400" : "border-[#e5e7eb] focus-within:border-[#1d4ed8]"} transition-colors duration-200`;

  return (
    <>
      {/* ── Banner ── */}
      <section className="relative overflow-hidden flex items-center justify-center px-6 pt-[148px] pb-[40px]">
        <style>{`
          .ct-grid {
            background-image:
              linear-gradient(rgba(59,130,246,0.07) 1px, transparent 1px),
              linear-gradient(90deg, rgba(59,130,246,0.07) 1px, transparent 1px);
            background-size: 50px 50px;
          }
          @keyframes ctBoxFill { 0%,100%{opacity:0} 50%{opacity:0.5} }
          .ct-box { position:absolute; width:48px; height:48px; }
        `}</style>

        <div className="absolute inset-0 overflow-hidden ct-grid pointer-events-none">
          {Array.from({ length: 200 }, (_, i) => {
            const shouldAnimate = (i * 7 + i * 3) % 17 === 0;
            const colors = ["#EFF6FF", "#DBEAFE", "#BFDBFE", "#93C5FD"];
            return shouldAnimate ? (
              <div
                key={i}
                className="ct-box"
                style={{
                  left: `${(i % 20) * 50 + 1}px`,
                  top: `${Math.floor(i / 20) * 50 + 1}px`,
                  backgroundColor: colors[i % 4],
                  animation: `ctBoxFill ${4 + ((i * 2) % 6)}s ease-in-out infinite`,
                  animationDelay: `${(i * 0.3) % 12}s`,
                }}
              />
            ) : null;
          })}
          <div
            className="absolute bottom-0 left-0 right-0 h-40 pointer-events-none"
            style={{ background: "linear-gradient(to bottom, transparent 0%, rgba(255,255,255,0.9) 60%, #fff 100%)" }}
          />
        </div>

        <div className="relative z-20 max-w-[700px] w-full mx-auto text-center flex flex-col items-center gap-4">
          <h1
            className="font-[family-name:var(--font-gothic-a1)] font-bold text-[36px] sm:text-[52px] md:text-[64px] leading-[1.05] tracking-[-0.03em] text-[#0a0f1e] animate-hero-rise"
            style={{ animationDelay: "80ms" }}
          >
            Get in Touch with <span style={{ color: "#1d4ed8" }}>Our Team</span>
          </h1>
          <p
            className="font-[family-name:var(--font-dm-sans)] text-[15px] sm:text-[17px] leading-[1.8] text-[#6b7280] max-w-[520px] text-pretty animate-hero-rise"
            style={{ animationDelay: "180ms" }}
          >
            Reach out for demos, onboarding support, or to discuss how EHSWatch fits your organisation.
          </p>
        </div>
      </section>

      {/* ── Contact section ── */}
      <section className="bg-white px-6 sm:px-10 lg:px-20 pt-[36px] pb-[72px] md:pt-[48px] md:pb-[96px]">
        <div className="max-w-[1180px] mx-auto">
          {submitted ? (
            <div className="flex flex-col items-center gap-5 py-20 text-center">
              <div className="w-14 h-14 rounded-full bg-[#EEF4FF] flex items-center justify-center">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#1d4ed8" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
              </div>
              <h3 className="font-[family-name:var(--font-gothic-a1)] font-bold text-[26px] text-[#0a0f1e]">
                Message Received
              </h3>
              <p className="font-[family-name:var(--font-dm-sans)] text-[15px] text-[#6b7280] max-w-[300px] text-pretty leading-[1.7]">
                Our team will get back to you within 1 business day.
              </p>
              <button
                onClick={() => { setSubmitted(false); setSubmitAttempted(false); setTouched({}); setFields({ name: "", email: "", company: "", website: "", service: "", message: "" }); }}
                className="font-[family-name:var(--font-dm-sans)] text-[13px] font-semibold text-[#1d4ed8] hover:underline"
              >
                Send another message
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-14 lg:gap-24">

              {/* ── Left: contact info ── */}
              <div className="flex flex-col gap-9">
                <div>
                  <p className="font-[family-name:var(--font-dm-sans)] text-[10px] font-semibold uppercase tracking-[0.12em] text-[#9ca3af] mb-2.5">USA Office</p>
                  <p className="font-[family-name:var(--font-dm-sans)] text-[14px] leading-[1.8] text-[#374151] text-pretty">
                    7138 Sale Ave,<br />West Hills, CA 91307, USA
                  </p>
                </div>
                <div>
                  <p className="font-[family-name:var(--font-dm-sans)] text-[10px] font-semibold uppercase tracking-[0.12em] text-[#9ca3af] mb-2.5">India Office</p>
                  <p className="font-[family-name:var(--font-dm-sans)] text-[14px] leading-[1.8] text-[#374151] text-pretty">
                    Awfis Space Solutions,<br />Hyderabad, Telangana, India
                  </p>
                </div>
                <div>
                  <p className="font-[family-name:var(--font-dm-sans)] text-[10px] font-semibold uppercase tracking-[0.12em] text-[#9ca3af] mb-2.5">Email</p>
                  <p className="font-[family-name:var(--font-dm-sans)] text-[14px] leading-[1.8] text-[#374151]">
                    sales@ehswatch.com
                  </p>
                </div>
              </div>

              {/* ── Right: form ── */}
              <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-10">

                {/* Name + Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-12">
                  <div>
                    <div className={wrap("name")}>
                      <input
                        type="text"
                        placeholder="Enter your name"
                        className={inputBase}
                        value={fields.name}
                        onChange={set("name")}
                        onBlur={blur("name")}
                      />
                    </div>
                    {show("name") && (
                      <p className="mt-1 text-[12px] text-red-500 font-[family-name:var(--font-dm-sans)]">{errors.name}</p>
                    )}
                  </div>
                  <div>
                    <div className={wrap("email")}>
                      <input
                        type="email"
                        placeholder="Email address"
                        className={inputBase}
                        value={fields.email}
                        onChange={set("email")}
                        onBlur={blur("email")}
                      />
                    </div>
                    {show("email") && (
                      <p className="mt-1 text-[12px] text-red-500 font-[family-name:var(--font-dm-sans)]">{errors.email}</p>
                    )}
                  </div>
                </div>

                {/* Company + Website */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-12">
                  <div>
                    <div className={wrap("company")}>
                      <input
                        type="text"
                        placeholder="Company name"
                        className={inputBase}
                        value={fields.company}
                        onChange={set("company")}
                        onBlur={blur("company")}
                      />
                    </div>
                  </div>
                  <div>
                    <div className={wrap("website")}>
                      <input
                        type="text"
                        placeholder="www.example.com"
                        className={inputBase}
                        value={fields.website}
                        onChange={set("website")}
                        onBlur={blur("website")}
                      />
                    </div>
                    {show("website") && (
                      <p className="mt-1 text-[12px] text-red-500 font-[family-name:var(--font-dm-sans)]">{errors.website}</p>
                    )}
                  </div>
                </div>

                {/* Select service */}
                <div>
                  <div className={wrap("service")}>
                    <select
                      className={`${inputBase} cursor-pointer appearance-none`}
                      value={fields.service}
                      onChange={set("service")}
                      onBlur={blur("service")}
                      style={{ color: fields.service ? "#0a0f1e" : "#9ca3af" }}
                    >
                      <option value="" disabled style={{ color: "#9ca3af" }}>Select your services</option>
                      {SERVICES.map((s) => (
                        <option key={s} value={s} style={{ color: "#0a0f1e" }}>{s}</option>
                      ))}
                    </select>
                  </div>
                  {show("service") && (
                    <p className="mt-1 text-[12px] text-red-500 font-[family-name:var(--font-dm-sans)]">{errors.service}</p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <div className={wrap("message")}>
                    <textarea
                      rows={4}
                      placeholder="Project description"
                      className={`${inputBase} resize-none`}
                      value={fields.message}
                      onChange={set("message")}
                      onBlur={blur("message")}
                    />
                  </div>
                </div>

                {/* Submit */}
                <div>
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full font-[family-name:var(--font-dm-sans)] font-semibold text-[14px] text-white transition-all duration-200"
                    style={{
                      backgroundImage: "linear-gradient(102.8deg, #ffa964 0.12%, #ff8e37 34.34%, #ff7812 50.27%, #ff6d00 119.92%)",
                      opacity: submitAttempted && !isValid ? 0.6 : 1,
                      cursor: "pointer",
                    }}
                  >
                    Send Message
                    <svg width="13" height="13" viewBox="0 0 14 14" fill="none">
                      <path d="M2 7h10M8 3l4 4-4 4" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                </div>

              </form>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
