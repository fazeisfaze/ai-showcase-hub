export function Logo({ className }: { className?: string }) {
  return (
    <div
      className={`flex items-center justify-center rounded-lg border border-neon-green/30 bg-black/40 px-4 py-3 ${className ?? ""}`}
      style={{ boxShadow: "var(--glow-green)" }}
    >
      <span
        className="text-2xl font-black tracking-[0.12em] text-neon-green"
        style={{
          textShadow: "0 0 12px oklch(0.75 0.22 145 / 80%)",
          fontFamily: "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace",
        }}
      >
        PLTN
      </span>
    </div>
  );
}
