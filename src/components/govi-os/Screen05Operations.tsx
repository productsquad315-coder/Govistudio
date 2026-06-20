'use client';

import { useState, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';

interface Department {
  name: string;
  description: string;
  icon: React.ReactNode;
  steps: string[];
}

const ICON_CLASS = 'w-8 h-8 stroke-zinc-500';

const DEPARTMENTS: Department[] = [
  {
    name: 'Admissions',
    description: 'Application intake to enrollment confirmation',
    icon: (
      <svg viewBox="0 0 32 32" fill="none" className={ICON_CLASS} strokeWidth="1.5">
        <rect x="6" y="4" width="20" height="24" rx="2" />
        <line x1="11" y1="12" x2="21" y2="12" />
        <line x1="11" y1="17" x2="18" y2="17" />
        <line x1="11" y1="22" x2="15" y2="22" />
      </svg>
    ),
    steps: [
      'Application Received',
      'Documents Verified',
      'Review Complete',
      'Decision Made',
      'Student Notified',
    ],
  },
  {
    name: 'Finance',
    description: 'Purchase orders to payment reconciliation',
    icon: (
      <svg viewBox="0 0 32 32" fill="none" className={ICON_CLASS} strokeWidth="1.5">
        <rect x="4" y="8" width="24" height="18" rx="2" />
        <line x1="4" y1="14" x2="28" y2="14" />
        <line x1="4" y1="19" x2="28" y2="19" />
      </svg>
    ),
    steps: [
      'Purchase Requested',
      'Budget Verified',
      'Approval Obtained',
      'Payment Issued',
      'Reconciliation Done',
    ],
  },
  {
    name: 'HR',
    description: 'Position request to onboarding completion',
    icon: (
      <svg viewBox="0 0 32 32" fill="none" className={ICON_CLASS} strokeWidth="1.5">
        <circle cx="16" cy="11" r="5" />
        <path d="M6 28 C6 21 10 18 16 18 C22 18 26 21 26 28" />
      </svg>
    ),
    steps: [
      'Position Opened',
      'Candidates Screened',
      'Interviews Complete',
      'Offer Extended',
      'Onboarding Started',
    ],
  },
  {
    name: 'Registrar',
    description: 'Course registration to transcript delivery',
    icon: (
      <svg viewBox="0 0 32 32" fill="none" className={ICON_CLASS} strokeWidth="1.5">
        <path d="M4 8 L16 4 L28 8 L16 12 Z" />
        <line x1="16" y1="12" x2="16" y2="24" />
        <path d="M8 10 L8 22 C8 22 12 26 16 26 C20 26 24 22 24 22 L24 10" />
      </svg>
    ),
    steps: [
      'Course Selected',
      'Prerequisites Checked',
      'Enrollment Confirmed',
      'Grades Recorded',
      'Transcript Delivered',
    ],
  },
  {
    name: 'Compliance',
    description: 'Policy creation to audit completion',
    icon: (
      <svg viewBox="0 0 32 32" fill="none" className={ICON_CLASS} strokeWidth="1.5">
        <path d="M16 4 L16 6 M16 26 L16 28 M4 16 L6 16 M26 16 L28 16" />
        <circle cx="16" cy="16" r="9" />
        <polyline points="12,16 15,19 21,13" />
      </svg>
    ),
    steps: [
      'Policy Drafted',
      'Stakeholders Reviewed',
      'Policy Approved',
      'Controls Implemented',
      'Audit Complete',
    ],
  },
  {
    name: 'Facilities',
    description: 'Work request to maintenance resolution',
    icon: (
      <svg viewBox="0 0 32 32" fill="none" className={ICON_CLASS} strokeWidth="1.5">
        <rect x="6" y="14" width="20" height="14" rx="1" />
        <polyline points="6,14 16,6 26,14" />
        <rect x="13" y="20" width="6" height="8" />
      </svg>
    ),
    steps: [
      'Request Submitted',
      'Work Order Created',
      'Team Assigned',
      'Work Completed',
      'Resolution Verified',
    ],
  },
  {
    name: 'Procurement',
    description: 'Requisition to vendor payment',
    icon: (
      <svg viewBox="0 0 32 32" fill="none" className={ICON_CLASS} strokeWidth="1.5">
        <circle cx="12" cy="26" r="2" />
        <circle cx="22" cy="26" r="2" />
        <path d="M4 6 L8 6 L12 20 L24 20" />
        <path d="M10 14 L26 14 L24 20 L12 20" />
      </svg>
    ),
    steps: [
      'Requisition Filed',
      'Vendor Selected',
      'PO Issued',
      'Goods Received',
      'Payment Processed',
    ],
  },
  {
    name: 'Student Services',
    description: 'Service request to case resolution',
    icon: (
      <svg viewBox="0 0 32 32" fill="none" className={ICON_CLASS} strokeWidth="1.5">
        <rect x="5" y="6" width="22" height="16" rx="3" />
        <polyline points="10,26 16,22 22,26" />
        <circle cx="12" cy="14" r="1.5" />
        <circle cx="20" cy="14" r="1.5" />
      </svg>
    ),
    steps: [
      'Request Received',
      'Case Opened',
      'Investigation Done',
      'Resolution Provided',
      'Case Closed',
    ],
  },
];

function WorkflowStep({
  label,
  index,
  total,
}: {
  label: string;
  index: number;
  total: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -12 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{
        duration: 0.5,
        delay: index * 0.12,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="flex items-center gap-3"
    >
      <div className="flex flex-col items-center">
        <div className="w-2.5 h-2.5 rounded-full bg-cyan-400/60 border border-cyan-400/40" />
        {index < total - 1 && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: 20 }}
            transition={{
              duration: 0.4,
              delay: index * 0.12 + 0.2,
            }}
            className="w-px bg-white/10"
          />
        )}
      </div>
      <span className="text-zinc-300 text-sm">{label}</span>
    </motion.div>
  );
}

function DepartmentCard({
  dept,
  isActive,
  onClick,
}: {
  dept: Department;
  isActive: boolean;
  onClick: () => void;
}) {
  return (
    <motion.div
      layout
      onClick={onClick}
      className={`
        bg-[#0F1115] rounded-2xl p-6 cursor-pointer
        transition-colors duration-300
        ${
          isActive
            ? 'border border-cyan-400/40'
            : 'border border-white/[0.06] hover:bg-[#12141A]'
        }
      `}
      whileHover={{ scale: isActive ? 1 : 1.02 }}
      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="flex items-start gap-4">
        <div className="shrink-0 mt-0.5">{dept.icon}</div>
        <div className="min-w-0">
          <h3 className="text-white font-semibold text-[15px]">{dept.name}</h3>
          <p className="text-zinc-500 text-sm mt-1 leading-snug">
            {dept.description}
          </p>
        </div>
      </div>

      <AnimatePresence>
        {isActive && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <div className="mt-5 pt-5 border-t border-white/[0.06]">
              <p className="text-zinc-600 text-xs uppercase tracking-wider mb-3">
                Workflow
              </p>
              <div className="flex flex-col">
                {dept.steps.map((step, i) => (
                  <WorkflowStep
                    key={step}
                    label={step}
                    index={i}
                    total={dept.steps.length}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function Screen05Operations() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-80px' });

  return (
    <section className="relative bg-black py-24 md:py-32 px-6" ref={sectionRef}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-14 md:mb-16"
        >
          <p className="text-[10px] sm:text-xs uppercase tracking-[0.2em] text-[#00E5FF] mb-4 font-semibold">
            OPERATIONAL FABRIC
          </p>
          <h2 className="text-[clamp(1.5rem,4vw,3rem)] font-bold tracking-tight text-white">
            <span className="block text-white">Every department.</span>
            <span className="block text-zinc-500">One operational fabric.</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {DEPARTMENTS.map((dept, i) => (
            <DepartmentCard
              key={dept.name}
              dept={dept}
              isActive={activeIndex === i}
              onClick={() =>
                setActiveIndex(activeIndex === i ? null : i)
              }
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
