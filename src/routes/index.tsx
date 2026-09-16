import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { SiteLayout } from "@/components/site/SiteLayout";
import { GlassPanels } from "@/components/site/GlassPanels";
import { LoanCard } from "@/components/site/LoanCard";
import { Reveal } from "@/components/site/Reveal";
import { EnquiryForm } from "@/components/site/EnquiryForm";
import { loans } from "@/data/loans";

const title = "Aarohi Capital — Home, Personal, Business & Overdraft Loans in India";
const description =
  "Premium Indian lending for homes, businesses and cash-flow gaps. Transparent rates from 8.35% p.a., sanctions up to ₹5 crore, disbursal in as little as 48 hours.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const marquee = ["₹2L – ₹5Cr range", "No hidden charges", "Secured & unsecured", "UPI & NEFT ready", "18–70 age"];

function Index() {
  return (
    <SiteLayout>
      <section className="relative overflow-hidden pt-28 pb-24">
        <GlassPanels />
        <div className="relative mx-auto grid max-w-[1200px] items-center gap-14 px-6 lg:grid-cols-[1.05fr_.95fr]">
          <motion.div
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.2, 0.7, 0.2, 1] }}
          >
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              RBI-regulated NBFC · Since 2011
            </p>
            <h1 className="max-w-[15ch] text-balance font-display text-5xl font-bold leading-none md:text-6xl">
              Lending built for how India actually moves.
            </h1>
            <p className="mt-6 max-w-[50ch] text-pretty text-base leading-relaxed text-foreground/70 md:text-lg">
              From ₹2 lakh to ₹5 crore, Aarohi funds homes, businesses and cash-flow gaps at transparent rates —
              disbursed in as little as 48 hours.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/contact" hash="enquiry" className="btn-accent">
                Check eligibility
              </Link>
              <Link to="/loans/$slug" params={{ slug: "home-loan" }} className="btn-ghost">
                See EMI options
              </Link>
            </div>
            <div className="mt-10 flex gap-8 text-sm">
              <div>
                <div className="font-display text-2xl font-bold">₹8,400 Cr+</div>
                <div className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">Disbursed</div>
              </div>
              <div>
                <div className="font-display text-2xl font-bold">3.2 Lakh</div>
                <div className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">Borrowers</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.2, 0.7, 0.2, 1] }}
          >
            <div className="glass rotate-[1.5deg] rounded-[20px] p-6 md:p-8">
              <div className="mb-6 flex items-center justify-between">
                <span className="text-xs uppercase tracking-[0.15em] text-muted-foreground">Your EMI</span>
                <span className="text-xs font-semibold text-accent">Home Loan · 25 yr</span>
              </div>
              <div className="font-display text-5xl font-bold leading-none md:text-6xl">₹68,420</div>
              <div className="mt-1 text-sm text-foreground/60">per month · ₹85 L principal</div>
              <div className="mt-6 grid grid-cols-3 gap-3 text-center">
                {[
                  ["8.4%", "ROI"],
                  ["₹1.7 Cr", "Total"],
                  ["48 hr", "Disbursal"],
                ].map(([value, label]) => (
                  <div key={label} className="glass rounded-[12px] py-3">
                    <div className="font-display text-lg font-semibold">{value}</div>
                    <div className="text-[10px] uppercase tracking-wider text-muted-foreground">{label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="glass mt-4 mr-4 ml-8 flex -rotate-[2deg] items-center justify-between rounded-[16px] p-4">
              <div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground">Overdraft</div>
                <div className="font-display font-semibold">₹5 L sanctioned</div>
              </div>
              <span className="text-xs font-semibold text-accent">Pay only on use</span>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="border-y border-border">
        <div className="mx-auto flex max-w-[1200px] flex-wrap items-center justify-between gap-4 px-6 py-4 text-xs font-medium uppercase tracking-[0.15em] text-foreground/60">
          {marquee.map((item, i) => (
            <span key={item} className="flex items-center gap-4">
              {i > 0 && <span className="text-accent">·</span>}
              {item}
            </span>
          ))}
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-[1200px] px-6">
          <Reveal>
            <div className="mb-12 flex items-end justify-between">
              <h2 className="max-w-[18ch] text-balance font-display text-3xl font-semibold md:text-4xl">
                Four ways to fund the next step.
              </h2>
              <span className="hidden text-sm text-muted-foreground md:block">Hover to explore →</span>
            </div>
          </Reveal>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {loans.map((loan, i) => (
              <LoanCard key={loan.slug} loan={loan} index={i} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto grid max-w-[1200px] items-center gap-10 px-6 md:grid-cols-2">
          <Reveal>
            <h2 className="max-w-[16ch] text-balance font-display text-3xl font-semibold md:text-4xl">
              Know your EMI before you commit.
            </h2>
            <p className="mt-5 max-w-[46ch] text-pretty text-base leading-relaxed text-foreground/70">
              Amount and tenure decide everything. We publish the EMI, the total interest and the rate before a single
              paper is signed.
            </p>
            <div className="mt-7 space-y-5 text-sm">
              <div>
                <div className="mb-2 flex justify-between text-muted-foreground">
                  <span>Loan amount</span>
                  <span className="font-semibold text-foreground">₹85,00,000</span>
                </div>
                <div className="h-1.5 rounded-full bg-secondary">
                  <motion.div
                    className="h-1.5 rounded-full bg-accent"
                    initial={{ width: 0 }}
                    whileInView={{ width: "75%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: [0.2, 0.7, 0.2, 1] }}
                  />
                </div>
              </div>
              <div>
                <div className="mb-2 flex justify-between text-muted-foreground">
                  <span>Tenure</span>
                  <span className="font-semibold text-foreground">25 years</span>
                </div>
                <div className="h-1.5 rounded-full bg-secondary">
                  <motion.div
                    className="h-1.5 rounded-full bg-accent"
                    initial={{ width: 0 }}
                    whileInView={{ width: "66%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.1, ease: [0.2, 0.7, 0.2, 1] }}
                  />
                </div>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="glass rounded-[20px] p-7">
              <div className="text-xs uppercase tracking-[0.15em] text-muted-foreground">Monthly EMI</div>
              <div className="mt-1 font-display text-5xl font-bold leading-none text-accent">₹68,420</div>
              <div className="mt-6 space-y-3 text-sm">
                <div className="flex justify-between border-b border-border py-2">
                  <span className="text-muted-foreground">Principal</span>
                  <span>₹85,00,000</span>
                </div>
                <div className="flex justify-between border-b border-border py-2">
                  <span className="text-muted-foreground">Total interest</span>
                  <span>₹1,20,26,000</span>
                </div>
                <div className="flex justify-between py-2">
                  <span className="text-muted-foreground">Total payable</span>
                  <span className="font-display font-semibold">₹2,05,26,000</span>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section id="enquiry" className="py-24">
        <div className="mx-auto max-w-[1200px] px-6">
          <Reveal>
            <div className="glass grid gap-10 rounded-[24px] p-8 md:p-12 lg:grid-cols-[1fr_1.2fr]">
              <div>
                <h2 className="max-w-[14ch] text-balance font-display text-3xl font-semibold">Start your enquiry.</h2>
                <p className="mt-4 max-w-[34ch] text-pretty text-base leading-relaxed text-foreground/70">
                  Tell us the product and amount. A relationship manager calls back within 4 working hours.
                </p>
              </div>
              <EnquiryForm />
            </div>
          </Reveal>
        </div>
      </section>
    </SiteLayout>
  );
}
