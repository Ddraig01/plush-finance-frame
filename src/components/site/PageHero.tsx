import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { GlassPanels } from "./GlassPanels";

interface PageHeroProps {
  eyebrow: string;
  title: string;
  description: string;
  children?: ReactNode;
}

export function PageHero({ eyebrow, title, description, children }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden pt-32 pb-16">
      <GlassPanels />
      <div className="relative mx-auto max-w-[1200px] px-6">
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.2, 0.7, 0.2, 1] }}
        >
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-accent">{eyebrow}</p>
          <h1 className="max-w-[18ch] text-balance font-display text-4xl font-bold leading-none md:text-6xl">
            {title}
          </h1>
          <p className="mt-6 max-w-[54ch] text-pretty text-base leading-relaxed text-foreground/70 md:text-lg">
            {description}
          </p>
          {children && <div className="mt-8">{children}</div>}
        </motion.div>
      </div>
    </section>
  );
}
