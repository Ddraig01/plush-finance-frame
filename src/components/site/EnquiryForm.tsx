import { useState, type FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { loans } from "@/data/loans";

interface EnquiryFormProps {
  /** Pre-selected product, e.g. when embedded on a loan detail page. */
  defaultProduct?: string;
}

/** Front-end only enquiry form: validates locally, shows a success state, sends nothing. */
export function EnquiryForm({ defaultProduct = "" }: EnquiryFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const [product, setProduct] = useState(defaultProduct);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <AnimatePresence mode="wait" initial={false}>
      {submitted ? (
        <motion.div
          key="done"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col items-start gap-3 rounded-[14px] bg-secondary p-8"
        >
          <CheckCircle2 className="size-7 text-accent" />
          <h3 className="font-display text-xl font-semibold">Enquiry noted</h3>
          <p className="max-w-[40ch] text-sm leading-relaxed text-muted-foreground">
            This is a demo form with no backend connected. Wire it to your own service when you are ready.
          </p>
          <button type="button" onClick={() => setSubmitted(false)} className="btn-ghost mt-2">
            Submit another
          </button>
        </motion.div>
      ) : (
        <motion.form
          key="form"
          onSubmit={handleSubmit}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="grid gap-4 sm:grid-cols-2"
        >
          <label className="block">
            <span className="sr-only">Full name</span>
            <input required className="field" placeholder="Full name" name="name" />
          </label>
          <label className="block">
            <span className="sr-only">Mobile number</span>
            <input
              required
              type="tel"
              pattern="[0-9+\s-]{10,15}"
              className="field"
              placeholder="Mobile number"
              name="phone"
            />
          </label>
          <label className="block">
            <span className="sr-only">City</span>
            <input required className="field" placeholder="City" name="city" />
          </label>
          <label className="block">
            <span className="sr-only">Loan product</span>
            <select
              required
              name="product"
              value={product}
              onChange={(e) => setProduct(e.target.value)}
              className="field"
            >
              <option value="">Loan product</option>
              {loans.map((loan) => (
                <option key={loan.slug} value={loan.name}>
                  {loan.name}
                </option>
              ))}
            </select>
          </label>
          <label className="block">
            <span className="sr-only">Amount required</span>
            <input required className="field" placeholder="Amount required (₹)" name="amount" inputMode="numeric" />
          </label>
          <label className="block">
            <span className="sr-only">Preferred tenure</span>
            <input className="field" placeholder="Preferred tenure" name="tenure" />
          </label>
          <label className="block sm:col-span-2">
            <span className="sr-only">Message</span>
            <textarea className="field" rows={3} placeholder="Anything else we should know?" name="message" />
          </label>
          <button type="submit" className="btn-accent w-full py-3 sm:col-span-2">
            Submit enquiry
          </button>
        </motion.form>
      )}
    </AnimatePresence>
  );
}
