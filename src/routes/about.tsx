import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";

const title = "About Aarohi Capital — An RBI-regulated NBFC since 2011";
const description =
  "Aarohi Capital has lent ₹8,400 crore to 3.2 lakh Indian households and businesses since 2011, with transparent pricing and a four-product focus.";

export const Route = createFileRoute("/about")({
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
  component: About,
});

const stats = [
  { value: "₹8,400 Cr+", label: "Disbursed since 2011" },
  { value: "3.2 Lakh", label: "Borrowers served" },
  { value: "40", label: "Cities covered" },
  { value: "0.8%", label: "Gross NPA" },
];

const values = [
  {
    title: "Four products, done properly",
    body: "We lend against homes, income, businesses and current accounts. Nothing else. Depth beats a long catalogue.",
  },
  {
    title: "Priced in the open",
    body: "Rate, processing fee and foreclosure terms are on the sanction letter before you sign — never discovered later.",
  },
  {
    title: "Underwriting by people",
    body: "Scorecards shortlist; credit officers decide. Thin-file borrowers with real cash flow get a fair hearing.",
  },
  {
    title: "Collections with dignity",
    body: "We follow the RBI Fair Practices Code to the letter, including on recovery. No pressure, no third-party agents.",
  },
];

const timeline = [
  { year: "2011", body: "Founded in Mumbai with an NBFC licence and a single secured lending desk." },
  { year: "2015", body: "Crossed ₹500 crore in disbursals; opened business lending for MSMEs." },
  { year: "2019", body: "Digital underwriting stack goes live; 24-hour personal loan sanctions begin." },
  { year: "2024", body: "₹8,400 crore lent across 40 cities with gross NPA held under 1%." },
];

function About() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="About us"
        title="A lender that reads the file, not just the score."
        description="Aarohi Capital is an RBI-regulated NBFC founded in Mumbai in 2011. We finance homes, personal milestones, businesses and working-capital gaps for Indian families and enterprises."
      />

      <section className="pb-20">
        <div className="mx-auto grid max-w-[1200px] gap-4 px-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.06}>
              <div className="glass rounded-[16px] p-6">
                <div className="font-display text-3xl font-bold">{s.value}</div>
                <div className="mt-2 text-xs uppercase tracking-wider text-muted-foreground">{s.label}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="pb-24">
        <div className="mx-auto max-w-[1200px] px-6">
          <Reveal>
            <h2 className="mb-8 max-w-[20ch] text-balance font-display text-3xl font-semibold md:text-4xl">
              How we decide to lend.
            </h2>
          </Reveal>
          <div className="grid gap-5 md:grid-cols-2">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.06}>
                <div className="glass h-full rounded-[18px] p-6">
                  <h3 className="font-display text-lg font-semibold">{v.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-foreground/65">{v.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-24">
        <div className="mx-auto max-w-[1200px] px-6">
          <Reveal>
            <h2 className="mb-8 font-display text-3xl font-semibold">The road so far</h2>
          </Reveal>
          <div className="space-y-4">
            {timeline.map((t, i) => (
              <Reveal key={t.year} delay={i * 0.05}>
                <div className="glass grid grid-cols-[minmax(0,auto)_minmax(0,1fr)] items-start gap-6 rounded-[16px] p-6">
                  <span className="font-display text-2xl font-bold text-accent">{t.year}</span>
                  <p className="text-sm leading-relaxed text-foreground/70">{t.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-24">
        <div className="mx-auto max-w-[1200px] px-6">
          <Reveal>
            <div className="glass flex flex-col items-start gap-5 rounded-[24px] p-8 md:flex-row md:items-center md:justify-between md:p-12">
              <h2 className="max-w-[22ch] text-balance font-display text-2xl font-semibold md:text-3xl">
                Ready to see what you qualify for?
              </h2>
              <Link to="/contact" hash="enquiry" className="btn-accent">
                Start an enquiry
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </SiteLayout>
  );
}
