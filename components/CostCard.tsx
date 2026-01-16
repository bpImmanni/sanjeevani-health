export default function CostCard({
  title,
  icon,
  india,
  usa,
  indiaPct,
  usaPct,
}: {
  title: string;
  icon: React.ReactNode;
  india: string;
  usa: string;
  indiaPct: number;
  usaPct: number;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-[#070b1f] p-6">
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5">
          {icon}
        </div>
        <div className="text-sm font-semibold text-white">{title}</div>
      </div>

      <div className="mt-5 space-y-4 text-sm">
        {/* India */}
        <div>
          <div className="flex items-center justify-between text-white/75">
            <span>India</span>
            <span className="font-semibold text-white">{india}</span>
          </div>
          <div className="mt-2 h-2 w-full rounded-full bg-white/10">
            <div
              className="h-2 rounded-full bg-white/60"
              style={{ width: `${indiaPct}%` }}
            />
          </div>
        </div>

        {/* USA */}
        <div>
          <div className="flex items-center justify-between text-white/75">
            <span>USA</span>
            <span className="font-semibold text-white">{usa}</span>
          </div>
          <div className="mt-2 h-2 w-full rounded-full bg-white/10">
            <div
              className="h-2 rounded-full bg-white/30"
              style={{ width: `${usaPct}%` }}
            />
          </div>
        </div>
      </div>

      <div className="mt-4 text-xs text-white/55">
        Indicative range. Final depends on case complexity.
      </div>
    </div>
  );
}
