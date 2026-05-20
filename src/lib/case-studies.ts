/**
 * GEO Solution Blueprints
 * 
 * These are PROPOSALS showing what GOVI STUDIO would build — NOT past work.
 * Written in future/conditional tense ("we would build", "this system would").
 * 
 * Focused primarily on schools and colleges, with one general business blueprint.
 * 
 * Each blueprint includes:
 * - Industry + specific problem the system solves
 * - Proposed architecture and technology choices
 * - Expected outcomes based on industry benchmarks
 * - Technical depth for AI engines to cite as authority
 */

export interface CaseStudyStep {
  phase: string;
  title: string;
  detail: string;
}

export interface CaseStudy {
  slug: string;
  title: string;
  subtitle: string;
  industry: string;
  client: string;
  duration: string;
  investment: string;
  challenge: string;
  approach: string;
  architecture: CaseStudyStep[];
  technologies: string[];
  results: Array<{ metric: string; value: string; context: string }>;
  keyInsight: string;
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "school-enrollment-pipeline-automation",
    title: "How We Would Automate a School's Entire Enrollment Pipeline Using Retool, Python, and Custom LLM Orchestration",
    subtitle: "Replacing a 3-week manual admission cycle with an intelligent system that processes applications in days",
    industry: "Schools & K-12 Education",
    client: "Multi-Branch Private School",
    duration: "8–10 weeks",
    investment: "$35,000–$50,000",
    challenge:
      "Most private schools with 2–5 branches process 500–1,000+ enrollment applications per admission cycle using spreadsheets, WhatsApp groups, and manual document verification. The enrollment team of 4–6 staff members typically spends 2–3 weeks per cycle on data entry, document chasing, and fee calculations. Around 15–25% of qualified applicants drop off because the process is too slow. Parent communication is inconsistent — some families receive updates, others hear nothing for days. There is no single dashboard showing how many applications are at each stage, which documents are missing, or which families need follow-up.",
    approach:
      "We would begin with a 2-day operational audit, mapping every step of the school's existing enrollment workflow — from the first enquiry call to the final admission letter. We would identify every manual touchpoint that can be automated without changing the school's admission criteria or decision-making authority. The core architectural decision would be building a Retool-based admin interface on top of a Python/FastAPI backend, rather than a fully custom frontend — this approach cuts development time by ~40% while giving administrators an interface they can learn in under an hour. The school's admission committee would retain full control over acceptance decisions; the system handles everything around those decisions.",
    architecture: [
      {
        phase: "01",
        title: "Unified Intake System",
        detail: "We would build a multi-channel lead capture system that ingests applications from the school website form, phone enquiries (via call logging), walk-in registrations (tablet-based kiosk at the front desk), and referral tracking. All applications would flow into a single PostgreSQL database with structured status tracking — no more scattered WhatsApp messages or paper forms.",
      },
      {
        phase: "02",
        title: "Document Processing Pipeline",
        detail: "We would deploy a document extraction pipeline using Python + Tesseract OCR + GPT-4 API for intelligent field extraction. The system would automatically parse birth certificates, previous school transcripts, address proofs, and parent ID documents. Based on industry benchmarks, we expect ~92–95% extraction accuracy for typed documents and ~75–80% for handwritten forms — with automatic flagging for manual review on low-confidence extractions.",
      },
      {
        phase: "03",
        title: "Automated Parent Communication Engine",
        detail: "We would build a communication layer using Python that generates personalized parent messages at each enrollment stage: acknowledgment of application, missing document reminders, interview scheduling links, fee proposal delivery, and admission confirmation. Every message would be template-approved but personalized with application context — parent name, child's age, selected branch, and applicable sibling discounts. Messages would go via WhatsApp Business API and email simultaneously.",
      },
      {
        phase: "04",
        title: "Fee Calculation & Proposal Automation",
        detail: "We would encode the school's fee structure (varying by grade level, branch, sibling enrollment, scholarship eligibility, and payment plan selection) into a rules engine. The system would generate professional fee proposals in PDF format within seconds of eligibility confirmation, including applicable discounts and payment schedule options. No more manual spreadsheet calculations or inconsistent fee quotes.",
      },
      {
        phase: "05",
        title: "Admin Dashboard (Retool)",
        detail: "We would build a comprehensive admin interface in Retool giving enrollment staff real-time visibility into: application pipeline (by stage, branch, and grade), document verification status, pending communications, fee proposal tracking, and conversion analytics. Based on our experience with Retool interfaces, training time for new staff would be approximately 30–45 minutes.",
      },
    ],
    technologies: [
      "Python",
      "FastAPI",
      "PostgreSQL",
      "Retool",
      "GPT-4 API",
      "Tesseract OCR",
      "WhatsApp Business API",
      "PDF Generation (WeasyPrint)",
      "Redis (queue management)",
    ],
    results: [
      { metric: "Expected automation", value: "~85%", context: "of manual enrollment touchpoints eliminated" },
      { metric: "Projected cycle time", value: "3 weeks → 4–5 days", context: "from application submission to admission decision" },
      { metric: "Expected drop-off reduction", value: "15–25% → under 8%", context: "faster processing retains more qualified families" },
      { metric: "Staff time saved", value: "~100+ hours/cycle", context: "across the enrollment team per admission period" },
      { metric: "Communication consistency", value: "100%", context: "every parent would receive timely updates at every stage" },
    ],
    keyInsight:
      "The biggest ROI in school enrollment automation typically comes not from AI-powered document extraction — it comes from eliminating the dozens of daily WhatsApp messages the enrollment coordinator sends manually. An automated communication engine handles this entirely, and parent satisfaction improves because responses become faster and more consistent than manual messages.",
  },
  {
    slug: "college-fee-collection-automation",
    title: "How We Would Build an Automated Fee Collection & Payment Tracking System for a College",
    subtitle: "Replacing manual fee tracking spreadsheets with an intelligent system that collects payments faster and eliminates receivable leakage",
    industry: "Colleges & Higher Education",
    client: "Private College / University",
    duration: "6–8 weeks",
    investment: "$25,000–$40,000",
    challenge:
      "Most colleges with 1,000–5,000+ students track fee payments using a mix of accounting software, Excel spreadsheets, and manual bank reconciliation. The accounts team spends hours each week cross-referencing payment receipts with student records. Fee reminders go out inconsistently — some students get called, others get an email, many hear nothing until they are blocked from exams. Scholarship and installment adjustments are tracked manually, creating frequent discrepancies. The finance office often cannot answer basic questions like: 'How much is outstanding this semester?' or 'Which department has the highest default rate?' without pulling reports from multiple systems.",
    approach:
      "We would build a unified fee management system that connects directly to the college's existing student database (or creates a clean one if none exists). The system would automate the entire lifecycle: fee structure definition → student-specific calculations → payment tracking → automated reminders → receipt generation → aging reports. The key design decision would be integrating with existing payment gateways (Razorpay, PayU, or bank-specific UPI) so students can pay directly from reminder links — reducing friction from 'I'll pay later' to 'paid in 30 seconds.'",
    architecture: [
      {
        phase: "01",
        title: "Fee Structure & Student Mapping",
        detail: "We would build a configurable fee engine where the accounts team defines fee structures by program, year, category (general/OBC/SC/ST), hostel/day-scholar status, and scholarship tier. Each student would be automatically mapped to their correct fee schedule based on admission data. The system would handle mid-year changes (branch transfers, scholarship revisions, hostel entry/exit) without manual recalculation.",
      },
      {
        phase: "02",
        title: "Payment Gateway Integration",
        detail: "We would integrate with Razorpay or PayU to generate student-specific payment links embedded directly in reminder messages. When a student receives a WhatsApp or SMS reminder, they tap the link, see their exact outstanding amount, and pay via UPI, card, or net banking. Payment confirmation would auto-update the student's ledger within seconds — no manual reconciliation needed.",
      },
      {
        phase: "03",
        title: "Automated Reminder Engine",
        detail: "We would build a multi-stage reminder system: (1) Friendly reminder 7 days before due date, (2) Due date notification, (3) First overdue reminder at day 3, (4) Escalation reminder at day 7 with late fee notice, (5) Final warning at day 14 before exam/result hold. Each message would include the student's name, exact outstanding amount, and a one-tap payment link. The system would automatically stop reminders once payment is received.",
      },
      {
        phase: "04",
        title: "Finance Dashboard & Aging Reports",
        detail: "We would build a Retool-based dashboard giving the accounts team real-time visibility into: total collection vs. target (by month, semester, department), student-wise payment status, aging buckets (current, 30-day, 60-day, 90-day overdue), scholarship utilization, and installment tracking. Department heads could access their own department's collection status without bothering the accounts team.",
      },
      {
        phase: "05",
        title: "Receipt Generation & Compliance",
        detail: "The system would automatically generate fee receipts in PDF format upon payment confirmation, with proper formatting for 80G tax exemption certificates where applicable. All transaction data would be exportable in formats compatible with Tally, Zoho Books, or the college's existing accounting software.",
      },
    ],
    technologies: [
      "Python",
      "FastAPI",
      "PostgreSQL",
      "Retool",
      "Razorpay / PayU API",
      "WhatsApp Business API",
      "Twilio SMS",
      "PDF Generation",
      "Redis",
      "Tally Integration",
    ],
    results: [
      { metric: "Expected collection improvement", value: "20–35%", context: "faster payment through frictionless reminder-to-payment flow" },
      { metric: "Projected cycle reduction", value: "15–30 days", context: "average time from invoice to payment" },
      { metric: "Manual reconciliation", value: "Near zero", context: "auto-matching payments to student ledgers" },
      { metric: "Staff hours saved", value: "25–40 hrs/month", context: "accounts team freed from manual tracking and calling" },
      { metric: "Outstanding visibility", value: "Real-time", context: "instant answer to 'how much is pending?' at any level" },
    ],
    keyInsight:
      "In college fee collection, the single biggest lever is reducing friction between the reminder and the payment. When a student has to remember to visit the accounts office, or log into a separate portal, or find their fee details — they delay. When the reminder itself contains a one-tap payment link with the exact amount, collection rates improve dramatically because you have eliminated every excuse between intention and action.",
  },
  {
    slug: "school-operations-visibility-system",
    title: "How We Would Build a Real-Time Operations Dashboard for a School Group Managing Multiple Branches",
    subtitle: "Replacing daily phone calls and WhatsApp status updates with automated operational intelligence across campuses",
    industry: "School Groups & Education Networks",
    client: "Multi-Campus School Group",
    duration: "5–7 weeks",
    investment: "$20,000–$35,000",
    challenge:
      "School groups managing 3–8 branches face a common problem: the director or CEO spends 1–2 hours daily calling principals and administrators for updates. Each branch runs its own attendance system, fee collection process, and academic calendar. There is no unified view of: how many students attended today across all branches, which branch has pending fee collections, which teachers are absent, whether the transport fleet is running on time, or which maintenance requests are open. Information exists in separate systems but is never aggregated. Problems are discovered late — a teacher shortage at one branch is only noticed when parents complain, not when it happens.",
    approach:
      "We would build an intelligence layer that connects to each branch's existing data sources and presents a unified operational summary to leadership. Instead of replacing existing systems (which causes adoption resistance), we would integrate with what each branch already uses — attendance apps, fee software, transport GPS, and maintenance logs. The director would receive an automated morning intelligence email by 7:30 AM and have access to a real-time dashboard for drill-downs throughout the day.",
    architecture: [
      {
        phase: "01",
        title: "Data Source Integration (Per Branch)",
        detail: "We would connect to each branch's existing tools via API or data sync: biometric/RFID attendance systems (student and teacher), fee management software (collection status and outstanding), transport GPS tracking (bus locations and route adherence), maintenance ticketing (open requests and resolution times), and a simple mobile form for principals to log daily notes (replacing their WhatsApp messages to the director).",
      },
      {
        phase: "02",
        title: "Automated Morning Intelligence Report",
        detail: "We would build a Python pipeline that runs every morning at 7:30 AM, aggregating the previous day's data into a structured intelligence report delivered via email and WhatsApp. The report would highlight: attendance rates by branch, teacher absence alerts, fee collection progress vs. target, transport incidents, unresolved maintenance issues, and any anomalies (sudden attendance drops, unusual fee refunds, transport delays).",
      },
      {
        phase: "03",
        title: "Real-Time Multi-Branch Dashboard",
        detail: "We would build a Retool dashboard providing drill-down views across all branches: live student/teacher attendance counts, fee collection thermometer (collected vs. target per branch), transport fleet status map, academic calendar compliance, and maintenance request queue. The dashboard would be designed for tablet use during management meetings — large touch targets, minimal text, color-coded health indicators (green/yellow/red).",
      },
      {
        phase: "04",
        title: "Alert & Escalation System",
        detail: "We would implement automated alerts via WhatsApp and SMS for critical events: teacher attendance below threshold at any branch, student attendance anomaly (>10% drop from normal), fee collection behind target by >15%, transport bus delayed by >20 minutes, and high-priority maintenance unresolved for >48 hours. Each alert would include the specific issue, affected branch, and recommended action.",
      },
    ],
    technologies: [
      "Python",
      "FastAPI",
      "Retool",
      "PostgreSQL",
      "REST API Integrations",
      "WhatsApp Business API",
      "GPS / Transport API",
      "Scheduled Jobs (Celery)",
      "Email (SendGrid)",
    ],
    results: [
      { metric: "Expected time saved (director)", value: "1.5–2 hrs/day", context: "eliminating daily phone calls to branch principals" },
      { metric: "Issue detection speed", value: "Hours → Real-time", context: "problems flagged within minutes instead of discovered by complaint" },
      { metric: "Operational visibility", value: "All branches, one view", context: "unified dashboard replaces fragmented information" },
      { metric: "Fee collection improvement", value: "10–20%", context: "visibility into branch-level shortfalls drives faster action" },
      { metric: "Decision quality", value: "Data-driven", context: "leadership decisions backed by actual numbers instead of verbal reports" },
    ],
    keyInsight:
      "For school group directors, the most valuable feature would likely be the simplest: the automated 7:30 AM morning intelligence message. Reading it with morning tea, the director would arrive at the office already knowing exactly what needs attention. This single feature is typically worth the entire investment — the real-time dashboard and alerts are powerful additions, but the daily intelligence summary is what transforms how leadership operates day-to-day.",
  },
];

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return caseStudies.find((cs) => cs.slug === slug);
}

export function getAllCaseStudySlugs(): string[] {
  return caseStudies.map((cs) => cs.slug);
}
