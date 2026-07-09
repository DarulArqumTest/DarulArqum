"use client";

import { useEffect, useState } from "react";
import { nextPrayer } from "@/lib/prayer";

export function NextPrayerBand() {
  const [info, setInfo] = useState<ReturnType<typeof nextPrayer>>(null);

  useEffect(() => {
    const update = () => setInfo(nextPrayer(new Date()));
    update();
    const id = window.setInterval(update, 60_000);
    return () => window.clearInterval(id);
  }, []);

  if (!info) return null;

  const hours = Math.floor(info.minutesUntil / 60);
  const mins = info.minutesUntil % 60;

  return (
    <div className="border-y border-line bg-sand/40 px-5 py-4">
      <div className="mx-auto flex max-w-wide flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <span className="live-dot inline-block h-2 w-2 rounded-full bg-moss" />
          <p className="text-sm">
            Next: <strong className="font-display">{info.prayer.name}</strong>{" "}
            <span className="text-ink/60">({info.prayer.iqama} iqama)</span>
          </p>
        </div>
        <p className="text-xs text-ink/60">
          in {hours > 0 ? `${hours}h ` : ""}
          {mins}m{info.tomorrow ? " \u00b7 tomorrow" : ""}
        </p>
      </div>
    </div>
  );
}

// Retained for backwards-compatible imports.
export function PrayerModules() {
  return <NextPrayerBand />;
}
