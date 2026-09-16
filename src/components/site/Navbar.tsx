import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { loans } from "@/data/loans";
import { Logo } from "./Logo";

const companyLinks = [
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="glass fixed inset-x-0 top-0 z-50">
      <div className="mx-auto grid max-w-[1200px] grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-6 py-3 md:flex md:justify-between">
        <Link to="/" className="flex min-w-0 items-center gap-2" onClick={() => setOpen(false)}>
          <Logo />
        </Link>

        <nav className="hidden items-center gap-7 text-sm font-medium text-foreground/70 lg:flex">
          {loans.map((loan) => (
            <Link
              key={loan.slug}
              to="/loans/$slug"
              params={{ slug: loan.slug }}
              activeProps={{ className: "text-foreground" }}
              className="transition-colors hover:text-foreground"
            >
              {loan.name.replace(" Facility", "")}
            </Link>
          ))}
          {companyLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              activeProps={{ className: "text-foreground" }}
              className="transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-2">
          <Link to="/contact" hash="enquiry" className="btn-accent hidden sm:inline-flex">
            Apply now
          </Link>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="btn-ghost px-3 lg:hidden"
          >
            {open ? <X className="size-4" /> : <Menu className="size-4" />}
          </button>
        </div>
      </div>

      <AnimatePresence initial={false}>
        {open && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: [0.2, 0.7, 0.2, 1] }}
            className="overflow-hidden border-t border-border lg:hidden"
          >
            <div className="flex flex-col gap-1 px-6 py-4 text-sm">
              {loans.map((loan) => (
                <Link
                  key={loan.slug}
                  to="/loans/$slug"
                  params={{ slug: loan.slug }}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-2 py-2.5 text-foreground/75 transition-colors hover:bg-secondary hover:text-foreground"
                >
                  {loan.name}
                </Link>
              ))}
              {companyLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-2 py-2.5 text-foreground/75 transition-colors hover:bg-secondary hover:text-foreground"
                >
                  {link.label}
                </Link>
              ))}
              <Link to="/contact" hash="enquiry" onClick={() => setOpen(false)} className="btn-accent mt-3">
                Apply now
              </Link>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
