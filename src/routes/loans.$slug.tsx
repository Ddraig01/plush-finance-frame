import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Check, FileText } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { EnquiryForm } from "@/components/site/EnquiryForm";
import { LoanCard } from "@/components/site/LoanCard";
import { loanBySlug, loans } from "@/data/loans";

export const Route = createFileRoute("/loans/$slug")({
  loader: ({ params }) => {
    const loan = loanBySlug(params.slug);
    if (!loan) throw notFound();
    return { loan };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Loan not found — Aarohi Capital" }, { name: "robots", content: "noindex" }] };
    }
    const { loan } = loaderData;
    const title = `${loan.name} from ${loan.rate} — Aarohi Capital`;
    const description = `${loan.intro.slice(0, 150)}`;
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "website" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  component: LoanDetail,
});

function LoanDetail() {
  const { loan } = Route.useLoaderData();
  const others = loans.filter((l) => l.slug !== loan.slug);

  return (
    <SiteLayout>
      <PageHero eyebrow={`${loan.name} · ${loan.rate} onwards`} title={loan.tagline} description={loan.intro}>
        <div className="flex flex-wrap gap-3">
          <Link to="/contact" hash="enquiry" className="btn-accent">
            Apply for this loan
          </Link>
          <Link to="/contact" className="btn-ghost">
            Talk to an advisor
          </Link>
        </div>
      </PageHero>

      <section className="pb-20">
        <div className="mx-auto max-w-[1200px] px-6">
          <Reveal>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {loan.highlights.map((h) => (
                <div key={h.label} className="glass rounded-[16px] p-5">
                  <div className="text-xs uppercase tracking-[0.15em] text-muted-foreground">{h.label}</div>
                  <div className="mt-2 font-display text-2xl font-semibold">{h.value}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="pb-24">
        <div className="mx-auto max-w-[1200px] px-6">
          <Reveal>
            <h2 className="mb-8 font-display text-3xl font-semibold">What you get</h2>
          </Reveal>
          <div className="grid gap-5 md:grid-cols-2">
            {loan.features.map((f, i) => (
              <Reveal key={f.title} delay={i * 0.06}>
                <div className="glass h-full rounded-[18px] p-6">
                  <h3 className="font-display text-lg font-semibold">{f.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-foreground/65">{f.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-24">
        <div className="mx-auto grid max-w-[1200px] gap-6 px-6 md:grid-cols-2">
          <Reveal>
            <div className="glass h-full rounded-[20px] p-7">
              <h2 className="font-display text-2xl font-semibold">Eligibility</h2>
              <ul className="mt-5 space-y-3 text-sm text-foreground/70">
                {loan.eligibility.map((item) => (
                  <li key={item} className="flex gap-3">
                    <Check className="mt-0.5 size-4 shrink-0 text-accent" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="glass h-full rounded-[20px] p-7">
              <h2 className="font-display text-2xl font-semibold">Documents</h2>
              <ul className="mt-5 space-y-3 text-sm text-foreground/70">
                {loan.documents.map((item) => (
                  <li key={item} className="flex gap-3">
                    <FileText className="mt-0.5 size-4 shrink-0 text-accent" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      <section id="enquiry" className="pb-24">
        <div className="mx-auto max-w-[1200px] px-6">
          <Reveal>
            <div className="glass grid gap-10 rounded-[24px] p-8 md:p-12 lg:grid-cols-[1fr_1.2fr]">
              <div>
                <h2 className="max-w-[14ch] text-balance font-display text-3xl font-semibold">
                  Enquire about this {loan.name.toLowerCase()}.
                </h2>
                <p className="mt-4 max-w-[34ch] text-pretty text-base leading-relaxed text-foreground/70">
                  Share your requirement and a relationship manager calls back within 4 working hours.
                </p>
              </div>
              <EnquiryForm defaultProduct={loan.name} />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="pb-24">
        <div className="mx-auto max-w-[1200px] px-6">
          <Reveal>
            <h2 className="mb-8 font-display text-2xl font-semibold">Other facilities</h2>
          </Reveal>
          <div className="grid gap-5 sm:grid-cols-3">
            {others.map((l, i) => (
              <LoanCard key={l.slug} loan={l} index={i} />
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
