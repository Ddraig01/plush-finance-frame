export type LoanSlug = "home-loan" | "personal-loan" | "business-loan" | "overdraft-facility";

export interface Loan {
  slug: LoanSlug;
  name: string;
  short: string;
  tagline: string;
  intro: string;
  rate: string;
  limit: string;
  tenure: string;
  highlights: { label: string; value: string }[];
  features: { title: string; body: string }[];
  eligibility: string[];
  documents: string[];
}

export const loans: Loan[] = [
  {
    slug: "home-loan",
    name: "Home Loan",
    short: "Buy, build or balance-transfer your home at low ROI.",
    tagline: "The address you have been saving for.",
    intro:
      "Finance a ready property, an under-construction flat, a plot-plus-construction plan, or move an existing loan to us at a sharper rate. Joint applicants and co-borrower income are accepted.",
    rate: "8.35% p.a.",
    limit: "up to ₹5 Cr",
    tenure: "up to 30 years",
    highlights: [
      { label: "ROI from", value: "8.35%" },
      { label: "Sanction", value: "up to ₹5 Cr" },
      { label: "Tenure", value: "30 yrs" },
      { label: "Disbursal", value: "48 hrs" },
    ],
    features: [
      {
        title: "Balance transfer with top-up",
        body: "Shift your running home loan and draw an additional top-up in the same sanction.",
      },
      {
        title: "Step-up EMI plans",
        body: "Start with a lighter EMI that grows with your income over the first five years.",
      },
      {
        title: "Zero prepayment charges",
        body: "Part-pay or foreclose a floating-rate loan any time without a penalty.",
      },
      {
        title: "Doorstep documentation",
        body: "A relationship manager collects papers at your home or office across 40 cities.",
      },
    ],
    eligibility: [
      "Age 21 to 70 years at loan maturity",
      "Salaried with 2 years of work history, or self-employed with 3 years of filed ITR",
      "CIBIL score of 700 and above",
      "Property with clear, marketable title",
    ],
    documents: [
      "PAN and Aadhaar",
      "Last 6 months' bank statements",
      "Salary slips or 2 years' ITR with computation",
      "Property agreement, chain documents and approved plan",
    ],
  },
  {
    slug: "personal-loan",
    name: "Personal Loan",
    short: "Weddings, medical, travel — unsecured funds in 24 hours.",
    tagline: "Unsecured money, minus the wait.",
    intro:
      "A collateral-free loan for weddings, medical costs, education, home interiors or consolidating expensive dues — sanctioned on income and credit history alone.",
    rate: "10.9% p.a.",
    limit: "up to ₹25 L",
    tenure: "12 to 72 months",
    highlights: [
      { label: "ROI from", value: "10.9%" },
      { label: "Sanction", value: "up to ₹25 L" },
      { label: "Tenure", value: "72 mo" },
      { label: "Disbursal", value: "24 hrs" },
    ],
    features: [
      { title: "No collateral", body: "Nothing pledged, nothing mortgaged — approval rests on your profile." },
      { title: "Flexible tenure", body: "Pick anywhere between 12 and 72 months and size the EMI to your budget." },
      { title: "Single processing fee", body: "One transparent fee disclosed up front. No hidden deductions." },
      { title: "Pre-approved offers", body: "Salaried professionals at listed employers see instant limits." },
    ],
    eligibility: [
      "Age 21 to 60 years",
      "Net monthly income of ₹30,000 and above",
      "Minimum 1 year in the current job or business",
      "CIBIL score of 720 and above",
    ],
    documents: [
      "PAN and Aadhaar",
      "Last 3 months' salary slips",
      "Last 6 months' salary account statement",
      "Employment proof or business registration",
    ],
  },
  {
    slug: "business-loan",
    name: "Business Loan",
    short: "Working capital and expansion for MSMEs and growing firms.",
    tagline: "Capital that keeps pace with orders.",
    intro:
      "Fund inventory, machinery, a new branch or a delayed receivables cycle. Secured and unsecured structures for proprietorships, partnerships, LLPs and private limited companies.",
    rate: "11.5% p.a.",
    limit: "up to ₹2 Cr",
    tenure: "12 to 84 months",
    highlights: [
      { label: "ROI from", value: "11.5%" },
      { label: "Sanction", value: "up to ₹2 Cr" },
      { label: "Tenure", value: "84 mo" },
      { label: "Disbursal", value: "72 hrs" },
    ],
    features: [
      { title: "GST-based assessment", body: "We read your GST returns and bank flow instead of demanding heavy collateral." },
      { title: "Machinery and term funding", body: "Asset-backed term loans priced lower than unsecured lines." },
      { title: "Seasonal repayment", body: "Structure higher instalments in your peak months and lighter ones off-season." },
      { title: "MSME priority desk", body: "Udyam-registered enterprises get a dedicated underwriting queue." },
    ],
    eligibility: [
      "Business vintage of 3 years or more",
      "Annual turnover of ₹40 lakh and above",
      "Profitable in at least the last financial year",
      "Promoter CIBIL score of 700 and above",
    ],
    documents: [
      "PAN of the entity and the promoters",
      "Last 2 years' audited financials and ITR",
      "Last 12 months' current account statements",
      "GST returns and Udyam / registration certificate",
    ],
  },
  {
    slug: "overdraft-facility",
    name: "Overdraft Facility",
    short: "A standby credit line — pay interest only on what you draw.",
    tagline: "A cushion for the days cash runs late.",
    intro:
      "A sanctioned limit sitting on your current account. Draw whatever you need, repay when collections arrive, and pay interest only on the amount used for the days it is used.",
    rate: "12.0% p.a.",
    limit: "up to ₹50 L",
    tenure: "12-month renewable",
    highlights: [
      { label: "ROI from", value: "12.0%" },
      { label: "Limit", value: "up to ₹50 L" },
      { label: "Renewal", value: "Annual" },
      { label: "Interest", value: "On usage" },
    ],
    features: [
      { title: "Interest on usage only", body: "An idle limit costs you nothing beyond the annual renewal fee." },
      { title: "Unlimited drawdowns", body: "Withdraw and repay as often as you like within the sanctioned limit." },
      { title: "Secured or unsecured", body: "Pledge fixed deposits or property for a finer rate, or opt for a clean limit." },
      { title: "Daily interest calculation", body: "Charged on the closing balance each day, billed at month end." },
    ],
    eligibility: [
      "Operating current account with 12 months of history",
      "Business vintage of 2 years or more",
      "Annual turnover of ₹25 lakh and above",
      "No cheque returns in the last 6 months",
    ],
    documents: [
      "PAN and Aadhaar of the promoters",
      "Last 12 months' current account statements",
      "Latest ITR with computation",
      "Collateral papers, where the limit is secured",
    ],
  },
];

export const loanBySlug = (slug: string) => loans.find((l) => l.slug === slug);
