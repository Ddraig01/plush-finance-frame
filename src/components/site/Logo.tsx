export function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <>
      <span className="grid size-7 shrink-0 place-items-center rounded-[6px] bg-accent font-display text-sm font-bold text-accent-foreground">
        ₹
      </span>
      {!compact && (
        <span className="truncate font-display text-lg font-semibold tracking-tight">Aarohi Capital</span>
      )}
    </>
  );
}
