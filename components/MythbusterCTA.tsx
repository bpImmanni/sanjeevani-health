// components/MythbusterCTA.tsx
import Link from "next/link";
import { Sparkles } from "lucide-react";

export default function MythbusterCTA() {
  return (
    <Link href="/mythbuster" className="mythCta">
      <span className="mythCta__scan" aria-hidden="true" />
      <Sparkles className="h-4 w-4" />
      Try MythBuster
      <span className="mythCta__tag">FREE</span>
      <span className="mythCta__preview">
        “Does cold water cause cold?” → Mostly myth ✅
      </span>
    </Link>
  );
}
