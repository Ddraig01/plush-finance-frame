import { createFileRoute } from "@tanstack/react-router";
import { Mail, MapPin, Phone, Clock } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { EnquiryForm } from "@/components/site/EnquiryForm";

const title = "Contact Aarohi Capital — Loan enquiry and callback";
const description =
  "Send a loan enquiry to Aarohi Capital or reach the Mumbai office. A relationship manager responds within 4 working hours.";

export const Route = createFileRoute("/contact")({
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
  component: Contact,
});

const details = [
  { icon: Phone, label: "Phone", value: "+91 22 4890 1200" },
  { icon: Mail, label: "Email", value: "hello@aarohicapital.in" },
  { icon: MapPin, label: "Office", value: "Nariman Point, Mumbai 400021" },
  { icon: Clock, label: "Hours", value: "Mon – Sat, 9:30 am to 6:30 pm IST" },
];

function Contact() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Contact us"
        title="Tell us what you are planning."
        description="Share your requirement through the form and a relationship manager calls back within 4 working hours, or reach the Mumbai desk directly."
      />

      <section id="enquiry" className="pb-24">
        <div className="mx-auto grid max-w-[1200px] gap-6 px-6 lg:grid-cols-[1.3fr_.7fr]">
          <Reveal>
            <div className="glass rounded-[24px] p-8 md:p-10">
              <h2 className="font-display text-2xl font-semibold">Loan enquiry</h2>
              <p className="mt-2 mb-7 max-w-[46ch] text-sm leading-relaxed text-foreground/65">
                All fields marked with a placeholder are required. This demo form does not send data anywhere.
              </p>
              <EnquiryForm />
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="glass h-full rounded-[24px] p-8">
              <h2 className="font-display text-2xl font-semibold">Reach us</h2>
              <ul className="mt-6 space-y-6">
                {details.map(({ icon: Icon, label, value }) => (
                  <li key={label} className="flex gap-4">
                    <span className="grid size-9 shrink-0 place-items-center rounded-[10px] bg-secondary">
                      <Icon className="size-4 text-accent" />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-xs uppercase tracking-wider text-muted-foreground">{label}</span>
                      <span className="block text-sm text-foreground/85">{value}</span>
                    </span>
                  </li>
                ))}
              </ul>
              <p className="mt-8 border-t border-border pt-6 text-xs leading-relaxed text-muted-foreground">
                Grievances may be escalated to the Principal Nodal Officer at the same address. Aarohi Capital follows
                the RBI Fair Practices Code.
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </SiteLayout>
  );
}
