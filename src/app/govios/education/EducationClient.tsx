"use client";

import { useMemo, useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import "./education.css";

/* ----------------------------- Shared atoms ----------------------------- */

function Eyebrow({ children, index }: { children: React.ReactNode; index?: string }) {
  return (
    <div className="flex items-center gap-3 text-eyebrow">
      {index && <span className="numeric text-[var(--color-accent)]">{index}</span>}
      <span className="h-px w-8 bg-[var(--color-border-strong)]" />
      <span>{children}</span>
    </div>
  );
}

function SectionShell({
  id,
  eyebrow,
  index,
  children,
  className = "",
}: {
  id: string;
  eyebrow?: string;
  index?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section
      id={id}
      className={`relative border-t border-[var(--color-border)] px-6 py-28 sm:px-10 md:px-16 lg:px-24 ${className}`}
    >
      <div className="mx-auto w-full max-w-7xl">
        {eyebrow && (
          <div className="mb-12">
            <Eyebrow index={index}>{eyebrow}</Eyebrow>
          </div>
        )}
        {children}
      </div>
    </section>
  );
}

function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 16 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}


/* ---------------------------- 1. The Reality ---------------------------- */

function ScreenReality() {
  // Disconnected dots, each represents a department
  const dots = useMemo(() => {
    const list: { x: number; y: number; d: number; label: string }[] = [];
    const labels = [
      "Admissions", "Registrar", "Finance", "HR", "IT", "Provost",
      "Compliance", "Facilities", "Procurement", "Advising", "Bursar", "Library",
      "Research", "Alumni", "Marketing", "Student Life",
    ];
    for (let i = 0; i < 64; i++) {
      list.push({
        x: 6 + Math.random() * 88,
        y: 8 + Math.random() * 84,
        d: Math.random() * 4,
        label: labels[i % labels.length],
      });
    }
    return list;
  }, []);

  return (
    <section
      id="reality"
      className="relative flex min-h-[100vh] items-center overflow-hidden px-6 pt-32 pb-24 sm:px-10 md:px-16 lg:px-24"
    >
      {/* Dot field */}
      <div className="pointer-events-none absolute inset-0">
        {dots.map((dot, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0 }}
            animate={{ opacity: [0.15, 0.55, 0.15] }}
            transition={{
              duration: 6 + Math.random() * 4,
              delay: dot.d,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute h-[3px] w-[3px] rounded-full bg-[var(--color-secondary)]"
            style={{ left: `${dot.x}%`, top: `${dot.y}%` }}
          />
        ))}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,var(--color-background)_85%)]" />
      </div>

      <div className="relative mx-auto w-full max-w-6xl">
        <Reveal>
          <Eyebrow index="01">For University Leadership</Eyebrow>
        </Reveal>
        <Reveal delay={0.15}>
          <h1 className="text-display mt-10 text-[44px] sm:text-[64px] md:text-[80px] lg:text-[96px]">
            Universities don't need
            <br />
            more software.
            <br />
            <span className="text-[var(--color-secondary)]">They need their software</span>
            <br />
            <span>to work together.</span>
          </h1>
        </Reveal>
        <Reveal delay={0.5}>
          <p className="mt-12 max-w-xl text-[15px] leading-relaxed text-[var(--color-muted-foreground)]">
            GoviStudio connects the departments, systems, and approvals your
            institution already runs on, so work moves end to end without
            falling through the cracks.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* --------------------------- 2. The Pressure ---------------------------- */

const pressures = [
  {
    title: "Budget pressure",
    body: "Institutions are expected to do more with fewer resources.",
    source: "NACUBO. Annual Tuition Discounting Study",
  },
  {
    title: "Administrative burden",
    body: "Routine operational work continues to grow year over year.",
    source: "EDUCAUSE. Top 10 IT Issues",
  },
  {
    title: "Staff shortages",
    body: "Hiring isn't keeping pace with operational demand.",
    source: "CUPA-HR. Higher Education Employee Retention Survey",
  },
  {
    title: "Student expectations",
    body: "Fast, digital service experiences are now the baseline.",
    source: "Deloitte. Higher Education Trends",
  },
];

function ScreenPressure() {
  return (
    <SectionShell id="pressure" eyebrow="The Pressure" index="02">
      <Reveal>
        <h2 className="text-display max-w-5xl text-[36px] sm:text-[48px] md:text-[56px]">
          Operational complexity
          <br />
          keeps increasing.
          <br />
          <span className="text-[var(--color-secondary)]">
            Administrative capacity
            <br />
            doesn't.
          </span>
        </h2>
      </Reveal>

      <div className="mt-20 grid gap-px overflow-hidden rounded-lg border border-[var(--color-border)] bg-[var(--color-border)] sm:grid-cols-2">
        {pressures.map((p, i) => (
          <Reveal key={p.title} delay={i * 0.08}>
            <div className="h-full bg-[var(--color-background)] p-8 sm:p-10">
              <div className="numeric text-xs text-[var(--color-muted-foreground)]">
                {String(i + 1).padStart(2, "0")} / {String(pressures.length).padStart(2, "0")}
              </div>
              <h3 className="mt-6 text-[22px] font-semibold tracking-tight">{p.title}</h3>
              <p className="mt-3 max-w-md text-[17px] leading-snug text-[var(--color-secondary)]">
                {p.body}
              </p>
              <div className="mt-10 flex items-center gap-2 text-[11px] uppercase tracking-[0.16em] text-[var(--color-muted-foreground)]">
                <span className="h-px w-6 bg-[var(--color-border-strong)]" />
                Source · {p.source}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </SectionShell>
  );
}

/* --------------------------- 3. The Workflow ---------------------------- */

const workflow = [
  { t: "Mon · 08:43", who: "Inbox", what: "Application arrives." },
  { t: "Mon · 09:12", who: "Admissions", what: "Missing transcript flagged." },
  { t: "Mon · 14:30", who: "Admissions", what: "Waits for Registrar verification." },
  { t: "Tue · 11:05", who: "Registrar", what: "Waits for Finance hold to clear." },
  { t: "Wed · 09:48", who: "Finance", what: "Waits for student response." },
  { t: "Thu · 16:21", who: "Student", what: "Receives status email, still pending." },
];

function ScreenWorkflow() {
  const getWastedHours = () => {
    const startOfYear = new Date(new Date().getFullYear(), 0, 1).getTime();
    return Math.floor((Date.now() - startOfYear) / 4500);
  };

  const [wastedHours, setWastedHours] = useState(getWastedHours());
  
  useEffect(() => {
    const timer = setInterval(() => {
      setWastedHours(getWastedHours());
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  return (
    <SectionShell id="workflow" eyebrow="Follow one workflow" index="03">
      <Reveal>
        <h2 className="text-display max-w-5xl text-[36px] sm:text-[48px] md:text-[56px]">
          One application.
          <br />
          <span className="text-[var(--color-secondary)]">Seven departments.</span>
          <br />
          Four days of waiting.
        </h2>
      </Reveal>

      <div className="mt-20 grid gap-12 lg:grid-cols-[1fr_auto_1fr]">
        <Reveal>
          <div className="surface-card p-6 sm:p-8">
            <div className="text-eyebrow">Today</div>
            <ol className="mt-8 space-y-0">
              {workflow.map((step, i) => (
                <li key={i} className="relative grid grid-cols-[100px_1fr] items-start gap-4 py-4">
                  <span className="numeric pt-1 text-[11px] uppercase tracking-[0.14em] text-[var(--color-muted-foreground)]">
                    {step.t}
                  </span>
                  <div>
                    <div className="text-[13px] font-medium text-white">{step.who}</div>
                    <div className="text-[14px] text-[var(--color-secondary)]">{step.what}</div>
                  </div>
                  {i < workflow.length - 1 && (
                    <span className="col-span-2 mt-3 block h-px w-full bg-[var(--color-border)]" />
                  )}
                </li>
              ))}
            </ol>
          </div>
        </Reveal>

        <div className="hidden items-center lg:flex">
          <div className="h-full w-px bg-gradient-to-b from-transparent via-[var(--color-border-strong)] to-transparent" />
        </div>

        <Reveal delay={0.2}>
          <div className="flex h-full flex-col justify-center">
            <div className="numeric text-[88px] leading-none tracking-tight text-white sm:text-[120px]">
              43
            </div>
            <div className="mt-4 max-w-sm text-[17px] text-[var(--color-secondary)]">
              Operational steps before a single student receives an
              admission decision.
            </div>

            <div className="mt-14 border-l border-[var(--color-warning)] pl-6">
              <div className="text-eyebrow" style={{ color: "var(--color-warning)" }}>The Cost of Delay</div>
              <div className="numeric mt-3 text-[32px] text-white">
                {wastedHours.toLocaleString()}
              </div>
              <div className="mt-1 text-[13px] text-[var(--color-secondary)]">
                Hours wasted on manual routing this semester across the sector.
              </div>
            </div>

            <div className="mt-14">
              <div className="text-eyebrow">The outcome</div>
              <h3 className="text-display mt-4 text-[28px] sm:text-[36px]">
                Nothing failed.
                <br />
                <span className="text-[var(--color-secondary)]">The workflow did.</span>
              </h3>
            </div>
          </div>
        </Reveal>
      </div>
    </SectionShell>
  );
}

/* ----------------------------- 4. Meet Govi ----------------------------- */

const systems = [
  { name: "Student Information", angle: -90 },
  { name: "HR", angle: -36 },
  { name: "Finance", angle: 18 },
  { name: "CRM", angle: 72 },
  { name: "Email", angle: 126 },
  { name: "SharePoint", angle: 180 },
  { name: "Compliance", angle: 234 },
];

function ScreenMeetGovi() {
  return (
    <SectionShell id="govi" eyebrow="Meet Govi" index="04">
      <div className="grid gap-16 lg:grid-cols-[1fr_1.1fr] lg:items-center">
        <Reveal>
          <h2 className="text-display text-[36px] sm:text-[48px] md:text-[64px]">
            Your software
            <br />
            <span className="text-[var(--color-secondary)]">stores information.</span>
            <br />
            Govi moves work.
          </h2>
          <p className="mt-10 max-w-md text-[17px] leading-relaxed text-[var(--color-secondary)]">
            Govi sits above the systems you already operate. It coordinates the
            work between them. Applications, approvals, documents, decisions,
            so the institution moves as one operation, not seven.
          </p>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="relative aspect-square w-full max-w-[560px] justify-self-end">
            {/* Concentric rings */}
            {[1, 2, 3].map((r) => (
              <div
                key={r}
                className="absolute inset-0 m-auto rounded-full border border-[var(--color-border)]"
                style={{ width: `${r * 28}%`, height: `${r * 28}%` }}
              />
            ))}
            <div
              className="absolute inset-0 m-auto rounded-full border border-dashed border-[var(--color-border-strong)]"
              style={{ width: "92%", height: "92%" }}
            />

            {/* Center node */}
            <div className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2">
              <div className="grid h-24 w-24 place-items-center rounded-full border border-[var(--color-accent)]/40 bg-[var(--color-surface)] shadow-[0_0_60px_-10px_var(--color-accent)]">
                <div className="text-center">
                  <div className="text-[10px] uppercase tracking-[0.18em] text-[var(--color-accent)]">
                    Govi
                  </div>
                  <div className="text-[11px] text-white">OS</div>
                </div>
              </div>
              <motion.div
                className="absolute inset-0 -m-2 rounded-full border border-[var(--color-accent)]/40"
                animate={{ scale: [1, 1.6], opacity: [0.6, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeOut" }}
              />
            </div>

            {/* Orbit nodes */}
            {systems.map((s, i) => {
              const rad = (s.angle * Math.PI) / 180;
              const r = 44; // %
              const x = 50 + r * Math.cos(rad);
              const y = 50 + r * Math.sin(rad);
              return (
                <div
                  key={s.name}
                  className="absolute"
                  style={{ left: `${x}%`, top: `${y}%`, transform: "translate(-50%,-50%)" }}
                >
                  <motion.div
                    initial={{ opacity: 0, scale: 0.6 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 + i * 0.08 }}
                    className="surface-card flex items-center gap-2 whitespace-nowrap px-3 py-1.5 text-[11px] text-[var(--color-secondary)]"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-accent)]" />
                    {s.name}
                  </motion.div>
                </div>
              );
            })}

            {/* Flowing lines */}
            <svg className="absolute inset-0 h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              <defs>
                <radialGradient id="line-grad" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#22D3EE" stopOpacity="0.5" />
                  <stop offset="100%" stopColor="#22D3EE" stopOpacity="0" />
                </radialGradient>
              </defs>
              {systems.map((s) => {
                const rad = (s.angle * Math.PI) / 180;
                const r = 44;
                const x = 50 + r * Math.cos(rad);
                const y = 50 + r * Math.sin(rad);
                return (
                  <line
                    key={s.name}
                    x1={50}
                    y1={50}
                    x2={x}
                    y2={y}
                    stroke="url(#line-grad)"
                    strokeWidth="0.2"
                  />
                );
              })}
            </svg>
          </div>
        </Reveal>
      </div>
    </SectionShell>
  );
}

/* --------------------------- 5. Explore Ops ---------------------------- */

const operations = [
  {
    name: "Admissions",
    metric: "17 → 3 steps",
    detail: "Applications intake, document verification, decision routing.",
  },
  {
    name: "Finance",
    metric: "SLA recovered",
    detail: "Purchase requests, approval chains, vendor onboarding.",
  },
  {
    name: "HR",
    metric: "Onboarding 9d → 2d",
    detail: "Offer letters, compliance forms, access provisioning.",
  },
  {
    name: "Registrar",
    metric: "Real-time status",
    detail: "Transcript requests, course registration, holds resolution.",
  },
  {
    name: "Compliance",
    metric: "Full audit trail",
    detail: "Policy attestations, accreditation evidence, exceptions.",
  },
  {
    name: "Facilities",
    metric: "Ticket → done",
    detail: "Maintenance requests, space requests, work orders.",
  },
  {
    name: "Procurement",
    metric: "Cycle time ↓",
    detail: "Sourcing, contract review, PO issuance, receiving.",
  },
  {
    name: "Student Services",
    metric: "First touch resolution",
    detail: "Advising holds, financial aid follow-up, escalations.",
  },
];

function ScreenExplore() {
  const [active, setActive] = useState(0);
  return (
    <SectionShell id="explore" eyebrow="Explore Operations" index="05">
      <Reveal>
        <h2 className="text-display max-w-4xl text-[36px] sm:text-[48px] md:text-[56px]">
          Every department.
          <br />
          <span className="text-[var(--color-secondary)]">One operational fabric.</span>
        </h2>
      </Reveal>

      <div className="mt-20 grid gap-px overflow-hidden rounded-lg border border-[var(--color-border)] bg-[var(--color-border)] sm:grid-cols-2 lg:grid-cols-4">
        {operations.map((op, i) => (
          <button
            key={op.name}
            onMouseEnter={() => setActive(i)}
            onFocus={() => setActive(i)}
            className={`group relative bg-[var(--color-background)] p-6 text-left transition-colors duration-500 ${
              active === i ? "bg-[var(--color-surface)]" : ""
            }`}
          >
            <div className="numeric text-[11px] uppercase tracking-[0.14em] text-[var(--color-muted-foreground)]">
              {String(i + 1).padStart(2, "0")}
            </div>
            <div className="mt-10 text-[22px] font-semibold tracking-tight">{op.name}</div>
            <div className="mt-2 text-[13px] text-[var(--color-accent)]">{op.metric}</div>
            <div className="mt-6 min-h-[60px] text-[13px] leading-snug text-[var(--color-secondary)]">
              {op.detail}
            </div>
            <div
              className={`absolute inset-x-0 bottom-0 h-px origin-left transition-transform duration-700 ${
                active === i ? "scale-x-100 bg-[var(--color-accent)]" : "scale-x-0"
              }`}
            />
          </button>
        ))}
      </div>
    </SectionShell>
  );
}

/* ---------------------- 6. Executive Command Center --------------------- */

function ScreenCommand() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-20% 0px" });
  return (
    <SectionShell id="command" eyebrow="Executive Command Center" index="06">
      <Reveal>
        <h2 className="text-display max-w-5xl text-[36px] sm:text-[48px] md:text-[56px]">
          No dashboards.
          <br />
          <span className="text-[var(--color-secondary)]">A conversation with</span>
          <br />
          your institution.
        </h2>
      </Reveal>

      <div ref={ref} className="mt-20 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="surface-card p-8">
          <div className="text-eyebrow">Question</div>
          <div className="mt-5 text-[22px] leading-snug text-white sm:text-[26px]">
            "Where are institutional bottlenecks right now?"
          </div>
          <div className="mt-12 flex items-center gap-3 text-[12px] uppercase tracking-[0.16em] text-[var(--color-muted-foreground)]">
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-accent)]" />
            Govi · thinking
          </div>
        </div>

        <div className="surface-card p-8">
          <div className="text-eyebrow">Response</div>
          <div className="mt-6 space-y-5">
            {[
              {
                area: "Admissions",
                status: "warning",
                msg: "Document verification is increasing turnaround time.",
              },
              {
                area: "Finance",
                status: "critical",
                msg: "Purchase approvals are exceeding SLA in 3 of 11 chains.",
              },
              {
                area: "Registrar",
                status: "success",
                msg: "Operating normally. Suggested improvements ready.",
              },
            ].map((row, i) => (
              <motion.div
                key={row.area}
                initial={{ opacity: 0, y: 8 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.4 + i * 0.25 }}
                className="grid grid-cols-[110px_1fr_auto] items-start gap-4 border-t border-[var(--color-border)] pt-5 first:border-t-0 first:pt-0"
              >
                <div className="text-[13px] font-medium text-white">{row.area}</div>
                <div className="text-[14px] leading-snug text-[var(--color-secondary)]">
                  {row.msg}
                </div>
                <span
                  className="mt-1.5 h-2 w-2 shrink-0 rounded-full"
                  style={{
                    backgroundColor:
                      row.status === "success"
                        ? "var(--color-success)"
                        : row.status === "warning"
                          ? "var(--color-warning)"
                          : "var(--color-critical)",
                  }}
                />
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 1.4 }}
            className="mt-10 flex items-center justify-between border-t border-[var(--color-border)] pt-5"
          >
            <span className="text-[12px] uppercase tracking-[0.16em] text-[var(--color-muted-foreground)]">
              Suggested next action
            </span>
            <span className="text-[13px] text-[var(--color-accent)]">
              Route Finance approvals through secondary chain →
            </span>
          </motion.div>
        </div>
      </div>
    </SectionShell>
  );
}

/* ------------------------- 7. Operational Outcomes ---------------------- */

const outcomes = [
  {
    title: "Operational Capacity",
    body: "Increase throughput without increasing headcount.",
  },
  {
    title: "Operational Visibility",
    body: "See where work stops, before students notice.",
  },
  {
    title: "Governance",
    body: "Every approval, every workflow, every decision. Traceable.",
  },
  {
    title: "Decision Velocity",
    body: "Executives spend less time waiting for reports. More time deciding.",
  },
];

function ScreenOutcomes() {
  return (
    <SectionShell id="outcomes" eyebrow="Operational Outcomes" index="07">
      <Reveal>
        <h2 className="text-display max-w-5xl text-[36px] sm:text-[48px] md:text-[56px]">
          We don't sell features.
          <br />
          <span className="text-[var(--color-secondary)]">We deliver outcomes.</span>
        </h2>
      </Reveal>

      <div className="mt-20 grid gap-px overflow-hidden rounded-lg border border-[var(--color-border)] bg-[var(--color-border)] md:grid-cols-2">
        {outcomes.map((o, i) => (
          <Reveal key={o.title} delay={i * 0.08}>
            <div className="h-full bg-[var(--color-background)] p-10">
              <div className="numeric text-[11px] uppercase tracking-[0.14em] text-[var(--color-accent)]">
                Outcome · {String(i + 1).padStart(2, "0")}
              </div>
              <h3 className="text-display mt-8 text-[30px] sm:text-[36px]">{o.title}</h3>
              <p className="mt-5 max-w-md text-[17px] leading-snug text-[var(--color-secondary)]">
                {o.body}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </SectionShell>
  );
}

/* -------------------------------- 8. Proof ------------------------------ */

function ScreenProof() {
  const rows = [
    { label: "Manual steps", current: "17", future: "3 human approvals" },
    { label: "Departments coordinated by humans", current: "7", future: "1 operational workflow" },
    { label: "Operational visibility", current: "None mid-process", future: "Real-time execution" },
    { label: "Audit trail", current: "Reconstructed", future: "Continuously generated" },
  ];
  return (
    <SectionShell id="proof" eyebrow="Operational Proof" index="08">
      <Reveal>
        <h2 className="text-display max-w-5xl text-[36px] sm:text-[48px] md:text-[56px]">
          Workflow · Admissions
          <br />
          <span className="text-[var(--color-secondary)]">Before and after Govi.</span>
        </h2>
      </Reveal>

      <Reveal delay={0.15}>
        <div className="surface-card mt-20 overflow-hidden">
          <div className="grid grid-cols-[1.2fr_1fr_1.2fr] border-b border-[var(--color-border)] px-8 py-5 text-[11px] uppercase tracking-[0.16em] text-[var(--color-muted-foreground)]">
            <div>Dimension</div>
            <div>Current state</div>
            <div>With Govi</div>
          </div>
          {rows.map((r) => (
            <div
              key={r.label}
              className="grid grid-cols-[1.2fr_1fr_1.2fr] items-center border-b border-[var(--color-border)] px-8 py-7 last:border-b-0"
            >
              <div className="text-[15px] font-medium text-white">{r.label}</div>
              <div className="text-[15px] text-[var(--color-secondary)]">{r.current}</div>
              <div className="flex items-center gap-3 text-[15px] text-white">
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-accent)]" />
                {r.future}
              </div>
            </div>
          ))}
        </div>
      </Reveal>

      <Reveal delay={0.25}>
        <div className="mt-8 text-[12px] uppercase tracking-[0.16em] text-[var(--color-muted-foreground)]">
          Designed to · supports · helps. Institution-specific results vary by deployment.
        </div>
      </Reveal>
    </SectionShell>
  );
}

/* ------------------------- 9. Choose Path ------------------------------- */

function ScreenChoosePath() {
  return (
    <SectionShell id="path" eyebrow="Choose your starting point" index="09">
      <Reveal>
        <h2 className="text-display max-w-5xl text-[36px] sm:text-[48px] md:text-[56px]">
          Two ways to start.
          <br />
          <span className="text-[var(--color-secondary)]">One operational platform.</span>
        </h2>
      </Reveal>

      <div className="mt-20 grid gap-8 md:grid-cols-2">
        <Reveal delay={0.1}>
          <a
            href="mailto:hello@govistudio.com?subject=Explore%20Connected%20Operations"
            className="group block h-full rounded-lg border border-[var(--color-border-strong)] bg-[var(--color-surface)] p-10 transition-colors hover:border-[var(--color-accent)]"
          >
            <div className="text-[12px] uppercase tracking-[0.16em] text-[var(--color-accent)]">
              Path A
            </div>
            <h3 className="mt-6 text-[28px] font-semibold tracking-tight text-white sm:text-[32px]">
              We already have software
            </h3>
            <p className="mt-4 text-[17px] leading-snug text-[var(--color-secondary)]">
              We'll modernize and connect what you already have.
            </p>
            <div className="mt-10 flex items-center gap-3 text-[15px] font-medium text-white transition-transform group-hover:translate-x-1">
              Secure a Priority Assessment <span className="text-[var(--color-accent)]">→</span>
            </div>
            <div className="mt-4 border-t border-[var(--color-border)] pt-4 text-[12px] text-[var(--color-muted-foreground)]">
              Currently onboarding 3 institutions for Fall deployment.
            </div>
          </a>
        </Reveal>

        <Reveal delay={0.2}>
          <a
            href="mailto:hello@govistudio.com?subject=Explore%20AI-Native%20Operations"
            className="group block h-full rounded-lg border border-[var(--color-border-strong)] bg-[var(--color-surface)] p-10 transition-colors hover:border-[var(--color-warning)]"
          >
            <div className="text-[12px] uppercase tracking-[0.16em] text-[var(--color-warning)]">
              Path B
            </div>
            <h3 className="mt-6 text-[28px] font-semibold tracking-tight text-white sm:text-[32px]">
              We mostly rely on manual processes
            </h3>
            <p className="mt-4 text-[17px] leading-snug text-[var(--color-secondary)]">
              We'll build a modern operational platform with digital employees built in.
            </p>
            <div className="mt-10 flex items-center gap-3 text-[15px] font-medium text-white transition-transform group-hover:translate-x-1">
              Request Early Access <span className="text-[var(--color-warning)]">→</span>
            </div>
            <div className="mt-4 border-t border-[var(--color-border)] pt-4 text-[12px] text-[var(--color-muted-foreground)]">
              Waitlist open for Winter pilot program.
            </div>
          </a>
        </Reveal>
      </div>
    </SectionShell>
  );
}

/* ----------------------------- 10. The Future --------------------------- */

function ScreenFuture() {
  return (
    <section
      id="future"
      className="relative overflow-hidden border-t border-[var(--color-border)] px-6 py-40 sm:px-10 md:px-16 lg:px-24"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,color-mix(in_oklab,var(--color-accent)_8%,transparent),transparent_60%)]" />
      <div className="relative mx-auto w-full max-w-6xl">
        <Reveal>
          <Eyebrow index="10">The Future</Eyebrow>
        </Reveal>

        <Reveal delay={0.15}>
          <h2 className="text-display mt-12 text-[40px] sm:text-[64px] md:text-[88px]">
            People move information today.
            <br />
            <span className="text-[var(--color-secondary)]">AI moves information tomorrow.</span>
            <br />
            People move institutions forward.
          </h2>
        </Reveal>

        <Reveal delay={0.35}>
          <div className="mt-24 max-w-3xl border-l border-[var(--color-border-strong)] pl-8">
            <p className="text-[20px] leading-snug text-white">
              Every institution already has software.
            </p>
            <p className="mt-2 text-[20px] leading-snug text-[var(--color-secondary)]">
              Now it's time to give it an operating system.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.5}>
          <div className="mt-16 flex flex-wrap items-center gap-4">
            <a
              href="mailto:hello@govistudio.com?subject=Walkthrough%20request"
              className="group inline-flex items-center gap-3 rounded-md bg-white px-6 py-4 text-[15px] font-medium text-[var(--color-primary-foreground)] transition hover:bg-[var(--color-accent)]"
            >
              Book a 20-minute walkthrough
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </a>
            <a
              href="mailto:hello@govistudio.com?subject=Talk%20to%20your%20team"
              className="inline-flex items-center gap-3 rounded-md border border-[var(--color-border-strong)] bg-[var(--color-surface)] px-6 py-4 text-[15px] text-white transition hover:border-[var(--color-accent)]"
            >
              Talk to our team
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* --------------------------------- Page --------------------------------- */

export default function EducationClient() {
  return (
    <div className="govios-edu min-h-screen text-white">
      <ScreenReality />
      <ScreenPressure />
      <ScreenWorkflow />
      <ScreenMeetGovi />
      <ScreenExplore />
      <ScreenCommand />
      <ScreenOutcomes />
      <ScreenProof />
      <ScreenChoosePath />
      <ScreenFuture />
    </div>
  );
}

