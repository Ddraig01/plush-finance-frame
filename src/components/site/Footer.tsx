import { Link } from "@tanstack/react-router";
import { loans } from "@/data/loans";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto grid max-w-[1200px] gap-10 px-6 py-14 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-2">
            <Logo />
          </div>
          <p className="mt-4 max-w-[32ch] text-sm leading-relaxed text-muted-foreground">
            Premium lending for homes, businesses and cash-flow gaps. RBI-regulated NBFC.
          </p>
        </div>
        <div>
          <div className="mb-4 text-xs uppercase tracking-[0.15em] text-muted-foreground">Products</div>
          <ul className="space-y-2 text-sm text-foreground/70">
            {loans.map((loan) => (
              <li key={loan.slug}>
                <Link
                  to="/loans/$slug"
                  params={{ slug: loan.slug }}
                  className="transition-colors hover:text-foreground"
                >
                  {loan.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <div className="mb-4 text-xs uppercase tracking-[0.15em] text-muted-foreground">Company</div>
          <ul className="space-y-2 text-sm text-foreground/70">
            <li>
              <Link to="/about" className="transition-colors hover:text-foreground">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/contact" className="transition-colors hover:text-foreground">
                Contact Us
              </Link>
            </li>
            <li>Grievance Redressal</li>
            <li>Fair Practice Code</li>
          </ul>
        </div>
      </div>
      <div className="mx-auto max-w-[1200px] px-6 pb-8 text-xs text-muted-foreground">
        © {new Date().getFullYear()} Aarohi Capital Pvt. Ltd. · CIN U65923MH2011PTC214789 · Loans subject to credit
        policy. Interest rates indicative.
      </div>
    </footer>
  );
}
