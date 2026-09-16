import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import type { Loan } from "@/data/loans";

export function LoanCard({ loan, index = 0 }: { loan: Loan; index?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: index * 0.08, ease: [0.2, 0.7, 0.2, 1] }}
      whileHover={{ y: -8, rotate: -1 }}
    >
      <Link
        to="/loans/$slug"
        params={{ slug: loan.slug }}
        className="glass block h-full rounded-[18px] p-6 transition-colors hover:border-accent/40"
      >
        <div className="mb-5 grid size-9 place-items-center rounded-[10px] bg-accent font-display font-bold text-accent-foreground">
          ₹
        </div>
        <h3 className="font-display text-xl font-semibold">{loan.name}</h3>
        <p className="mt-2 text-sm text-foreground/60">{loan.short}</p>
        <div className="mt-5 border-t border-border pt-4 text-sm">
          <span className="font-display font-semibold text-accent">{loan.rate}</span>
          <span className="text-muted-foreground"> ROI · {loan.limit}</span>
        </div>
      </Link>
    </motion.div>
  );
}
