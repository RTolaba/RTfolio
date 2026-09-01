function CardGraphic({ type }: { type: "mobile" | "backend" | "product" }) {
  if (type === "mobile") {
    return (
      <div className="mt-4 rounded-lg border border-violet-500/20 bg-[#120a1f] p-3">
        <div className="mx-auto h-16 w-10 rounded-md border border-violet-500/30 bg-violet-600/10" />
        <div className="mt-2 space-y-1.5 pt-2 font-mono text-[10px] text-violet-300/70">
          <p>RN · iOS · Android</p>
        </div>
      </div>
    );
  }

  if (type === "backend") {
    return (
      <div className="mt-4 rounded-lg border border-violet-500/20 bg-[#120a1f] p-3 font-mono text-[10px] text-emerald-400/80">
        <p>.NET · REST · JWT</p>
        <p className="text-violet-300/60">→ SQL Server</p>
      </div>
    );
  }

  return (
    <div className="mt-4 rounded-lg border border-violet-500/20 bg-[#120a1f] p-3">
      <div className="mb-2 h-2 w-12 rounded bg-violet-500/40" />
      <div className="space-y-1.5">
        <div className="h-2 w-full rounded bg-violet-500/20" />
        <div className="h-2 w-4/5 rounded bg-violet-500/15" />
        <div className="h-8 w-full rounded border border-violet-500/20 bg-violet-500/10" />
      </div>
    </div>
  );
}

export { CardGraphic };
