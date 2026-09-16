/** Drifting frosted slabs used as the 3D-inspired backdrop behind heroes. */
export function GlassPanels() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="glass drift absolute -top-24 left-[8%] h-[620px] w-[420px] rounded-[40px] bg-brand/30" />
      <div className="glass drift2 absolute top-16 right-[10%] h-[520px] w-[360px] rounded-[40px] bg-accent/20" />
      <div className="glass drift absolute bottom-0 left-[38%] hidden h-[380px] w-[300px] rounded-[40px] bg-glass/10 lg:block" />
    </div>
  );
}
