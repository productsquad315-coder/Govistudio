import type { UseCaseData } from '@/components/UseCasePage';

export const useCases: UseCaseData[] = [
  {
    slug: 'lead-conversion',
    title: 'Lead Conversion System',
    subtitle: 'Turn missed enquiries into closed deals with consistent follow-up.',
    problem: 'Most businesses don\'t lose deals because of competition. They lose them because no one followed up properly. Leads come from calls, website forms, referrals, text messages. Some get tracked, most don\'t. Follow-ups are inconsistent. The deal doesn\'t get rejected. It just fades.',
    solution: 'We build a system that captures every lead, assigns ownership, and ensures consistent follow-up until there\'s a clear outcome. The system tracks where each lead came from, what stage it\'s at, and what needs to happen next. No lead sits idle.',
    steps: [
      { label: 'Capture', description: 'All leads flow into one place — calls, forms, messages, referrals' },
      { label: 'Assign', description: 'Each lead gets an owner responsible for moving it forward' },
      { label: 'Track', description: 'Status and next action are always visible' },
      { label: 'Follow Up', description: 'Automated reminders ensure no lead goes cold' },
      { label: 'Close', description: 'Clear outcomes: won, lost, or scheduled for later' },
    ],
    impact: [
      { metric: 'Conversion increase', value: '20–40%' },
      { metric: 'Additional revenue', value: '$20K–$40K/mo' },
      { metric: 'Ad spend efficiency', value: 'No extra spend' },
      { metric: 'Lead leakage', value: 'Near zero' },
    ],
    beforeAfter: {
      before: ['Leads scattered across apps and notes', 'Follow-ups depend on memory', 'No clear ownership', 'Deals fade without closure'],
      after: ['All leads in one system', 'Automated follow-up triggers', 'Every lead has an owner', 'Clear status and outcomes'],
    },
    whoItsFor: ['Service businesses', 'Local operators', 'Sales teams', 'B2B companies', 'Contractors'],
  },
  {
    slug: 'quoting-pricing',
    title: 'Quoting & Pricing System',
    subtitle: 'Send accurate quotes faster and protect your margins.',
    problem: 'Quoting is where deals are won or lost. In most businesses: pricing is inconsistent, quotes take hours or days, approvals slow everything down. By the time the quote is sent, the buyer has already moved forward. Different sales reps quote different prices for the same work. Margins erode because no one enforces pricing rules.',
    solution: 'We build a system where pricing logic is structured, quotes are generated instantly, and approvals are streamlined. The system pulls live costs, applies margin rules, and produces a professional quote in minutes. No delays. No guesswork. No margin erosion.',
    steps: [
      { label: 'Input Requirements', description: 'Enter job specs — quantity, timeline, specifications' },
      { label: 'Calculate Pricing', description: 'System pulls live costs and applies margin rules' },
      { label: 'Generate Quote', description: 'Professional quote ready in minutes' },
      { label: 'Approve & Send', description: 'Streamlined approval workflow' },
      { label: 'Track Status', description: 'See which quotes are pending, won, or lost' },
    ],
    impact: [
      { metric: 'Quote turnaround', value: 'Hours → Minutes' },
      { metric: 'Win rate increase', value: '5–15%' },
      { metric: 'Margin improvement', value: '3–8%' },
      { metric: 'Revenue per deal', value: '+$12K–$35K/mo' },
    ],
    beforeAfter: {
      before: ['Quotes take hours or days', 'Pricing varies by rep', 'Approvals create bottlenecks', 'Buyers move on'],
      after: ['Quotes in minutes', 'Consistent pricing rules', 'Fast approvals', 'Higher win rates'],
    },
    whoItsFor: ['Service businesses', 'Contractors', 'Manufacturers', 'B2B sales teams', 'Quoting-heavy operations'],
  },
  {
    slug: 'operations-visibility',
    title: 'Operations Visibility System',
    subtitle: 'See what\'s happening without chasing your team.',
    problem: 'Owners and operators spend too much time asking questions: What got done today? What\'s pending? Where are we stuck? Information exists, but it\'s scattered across spreadsheets, WhatsApp groups, and verbal updates. By the time you get answers, the day is over. Decisions get delayed. Problems grow before they\'re caught.',
    solution: 'We build systems that pull data from daily operations and present it clearly. Automated summaries, key metrics, and issues are visible without asking anyone. You see what matters — orders, tasks, issues — in one place, updated automatically.',
    steps: [
      { label: 'Connect Data Sources', description: 'Pull from existing tools, forms, and logs' },
      { label: 'Aggregate Daily', description: 'Compile what happened, what\'s pending, what\'s blocked' },
      { label: 'Present Clearly', description: 'Dashboard or automated summary delivered to you' },
      { label: 'Highlight Issues', description: 'Flag problems early, before they escalate' },
      { label: 'Enable Action', description: 'Drill down to details when needed' },
    ],
    impact: [
      { metric: 'Decision speed', value: 'Hours → Minutes' },
      { metric: 'Operational output', value: '+5–10%' },
      { metric: 'Issues caught early', value: '2–3× more' },
      { metric: 'Revenue impact', value: '+$25K/mo' },
    ],
    beforeAfter: {
      before: ['Owner chases team for updates', 'Information scattered everywhere', 'Decisions delayed', 'Problems caught late'],
      after: ['Automated daily summaries', 'One view of what matters', 'Faster decisions', 'Early warning on issues'],
    },
    whoItsFor: ['Owner-operated businesses', 'Operations managers', 'Multi-location operations', 'Field service teams', 'Production facilities'],
  },
  {
    slug: 'task-execution',
    title: 'Task & Execution System',
    subtitle: 'Make sure work gets done without constant follow-ups.',
    problem: 'Most teams rely on verbal instructions and memory. Tasks are assigned, but: no clear ownership, no tracking, no accountability. Things slip. Deadlines move. Clients feel it. Managers spend their day checking if things got done instead of doing strategic work. The same issues repeat because there\'s no system to prevent them.',
    solution: 'We build execution systems where every task is tracked, owned, and visible. Delays trigger action automatically. You see what\'s pending, what\'s overdue, and who owns it. No micromanagement needed — the system creates accountability naturally.',
    steps: [
      { label: 'Create Task', description: 'Task with clear owner, deadline, and context' },
      { label: 'Assign & Notify', description: 'Owner gets notified, accepts responsibility' },
      { label: 'Track Progress', description: 'Status visible to everyone who needs it' },
      { label: 'Flag Delays', description: 'Overdue tasks trigger alerts' },
      { label: 'Complete & Verify', description: 'Closure with documentation' },
    ],
    impact: [
      { metric: 'Tasks completed on time', value: '+30–50%' },
      { metric: 'Rework reduction', value: '-40%' },
      { metric: 'Client retention', value: '+15–25%' },
      { metric: 'Manager time saved', value: '2–3 hrs/day' },
    ],
    beforeAfter: {
      before: ['Tasks assigned verbally', 'No clear ownership', 'Deadlines slip silently', 'Constant checking needed'],
      after: ['Every task tracked', 'Clear ownership', 'Delays flagged automatically', 'Accountability built-in'],
    },
    whoItsFor: ['Service teams', 'Operations teams', 'Field crews', 'Project-based work', 'Recurring task workflows'],
  },
  {
    slug: 'payments-collections',
    title: 'Payments & Collections System',
    subtitle: 'Get paid faster without awkward follow-ups.',
    problem: 'Revenue isn\'t real until it\'s collected. Most businesses: don\'t track receivables properly, follow up late, let payments slip. Cash gets stuck for weeks or months. You don\'t know who owes what. Collections happen when someone remembers, not when they should. The longer it takes, the less likely you are to collect.',
    solution: 'We build systems that track every invoice, automate reminders, and flag delays early. You see aging receivables at a glance. The system sends the right message at the right time — friendly reminders, escalation, or follow-up. No dependence on manual tracking.',
    steps: [
      { label: 'Track Invoices', description: 'Every invoice logged with due date and amount' },
      { label: 'Monitor Aging', description: 'See what\'s due, overdue, and at risk' },
      { label: 'Automate Reminders', description: 'Timely messages before and after due dates' },
      { label: 'Escalate When Needed', description: 'Flag stuck accounts for personal follow-up' },
      { label: 'Record Payments', description: 'Update status when payment arrives' },
    ],
    impact: [
      { metric: 'Payment cycle reduction', value: '15–30 days' },
      { metric: 'Cash unlocked', value: '$50K–$70K' },
      { metric: 'Collections efficiency', value: '+40%' },
      { metric: 'Bad debt reduction', value: '-25%' },
    ],
    beforeAfter: {
      before: ['Receivables tracked manually', 'Follow-ups are late or forgotten', 'Cash stuck for months', 'Awkward collection calls'],
      after: ['Automated tracking', 'Timely reminders', 'Faster cash flow', 'Professional follow-up'],
    },
    whoItsFor: ['B2B businesses', 'Service providers', 'Contractors', 'Wholesalers', 'Any business with receivables'],
  },
];

export function getUseCaseBySlug(slug: string): UseCaseData | undefined {
  return useCases.find(uc => uc.slug === slug);
}

export function getAllUseCaseSlugs(): string[] {
  return useCases.map(uc => uc.slug);
}
