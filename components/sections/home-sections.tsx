import Link from "next/link";
import { EXT, ORG, R } from "@/lib/links";
import { PRAYERS, SHURUQ, FALLBACK_DATE_NOTE } from "@/lib/prayer";

export function Hero() {
  return (
    <div className="relative mx-auto max-w-wide px-5 py-28 md:py-40">
      <p className="text-[11px] uppercase tracking-[0.3em] text-brassL">
        Riverside South &middot; Ottawa
      </p>
      <h1 className="mt-4 max-w-2xl font-display text-5xl tracking-tight md:text-7xl">
        The first masjid in Riverside South
      </h1>
      <p className="mt-5 max-w-md text-sm leading-relaxed text-bone/70">
        Prayer times, Jumu&apos;ah, Qur&apos;an classes, and a growing community &mdash; all in one place.
      </p>
      <div className="mt-8 flex flex-wrap gap-3">
        <Link href={R.prayer} className="rounded-full bg-brass px-6 py-3.5 text-sm font-medium text-ink">
          Prayer times
        </Link>
        <Link href={R.give} className="rounded-full border border-bone/25 px-6 py-3.5 text-sm text-bone">
          Give
        </Link>
      </div>
    </div>
  );
}

export function PrayerFeature() {
  return (
    <section className="mx-auto max-w-wide px-5 py-20">
      <div className="grid gap-10 md:grid-cols-2 md:items-center">
        <div>
          <p className="text-[11px] uppercase tracking-[0.3em] text-brass">Prayer times</p>
          <h2 className="mt-3 font-display text-3xl md:text-4xl">Five prayers, every day</h2>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-ink/70">{FALLBACK_DATE_NOTE}</p>
          <Link href={R.prayer} className="u-draw mt-6 inline-block text-sm font-medium text-moss">
            View live screen &rarr;
          </Link>
        </div>
        <div className="rounded-2xl border border-line bg-bone p-6">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left text-ink/50">
                <th className="pb-2 font-normal">Prayer</th>
                <th className="pb-2 font-normal">Adhan</th>
                <th className="pb-2 font-normal">Iqama</th>
              </tr>
            </thead>
            <tbody>
              {PRAYERS.map((p) => (
                <tr key={p.key} className="border-t border-line">
                  <td className="py-2 font-display">
                    {p.name} <span className="text-ink/40">{p.arabic}</span>
                  </td>
                  <td className="py-2 text-ink/70">{p.adhan}</td>
                  <td className="py-2 text-ink/70">{p.iqama}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="mt-3 text-xs text-ink/50">Shuruq {SHURUQ}</p>
        </div>
      </div>
    </section>
  );
}

const PROGRAMS = [
  { title: "Qur'an Classes", href: R.quran, desc: "Weekly Qur'an recitation and tajweed classes for all ages." },
  { title: "Aalim Program", href: R.aalim, desc: "In-depth Islamic studies for those pursuing deeper knowledge." },
  { title: "Kids Arabic", href: R.kidsArabic, desc: "Arabic language classes designed for children." },
  { title: "WeLearn", href: R.welearn, desc: "Online learning sessions held over Zoom." },
];

export function ProgramsSection() {
  return (
    <section className="bg-forest px-5 py-20 text-bone">
      <div className="mx-auto max-w-wide">
        <p className="text-[11px] uppercase tracking-[0.3em] text-brassL">Programs</p>
        <h2 className="mt-3 max-w-lg font-display text-3xl md:text-4xl">Learn, grow, and connect</h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PROGRAMS.map((p) => (
            <Link
              key={p.href}
              href={p.href}
              className="group rounded-2xl border border-bone/15 p-6 transition hover:border-brassL/50"
            >
              <h3 className="font-display text-lg">{p.title}</h3>
              <p className="mt-2 text-sm text-bone/60">{p.desc}</p>
              <span className="u-draw mt-4 inline-block text-xs text-brassL">Learn more &rarr;</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export function GivingSection() {
  const { propertyPrice, loanRemaining, monthlyExpenses, perFamily } = ORG.finances;
  const paidPct = Math.round(((propertyPrice - loanRemaining) / propertyPrice) * 100);

  return (
    <section className="mx-auto max-w-wide px-5 py-20">
      <div className="grid gap-10 md:grid-cols-2 md:items-center">
        <div>
          <p className="text-[11px] uppercase tracking-[0.3em] text-brass">Give</p>
          <h2 className="mt-3 font-display text-3xl md:text-4xl">Help us pay off the masjid</h2>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-ink/70">
            We&apos;re carrying ${loanRemaining.toLocaleString()} on the mortgage, with roughly $
            {monthlyExpenses.toLocaleString()} in monthly expenses &mdash; about ${perFamily} per family keeps us
            running.
          </p>
          <div className="mt-6 h-2 w-full max-w-sm overflow-hidden rounded-full bg-sand">
            <div className="h-full bg-brass" style={{ width: `${paidPct}%` }} />
          </div>
          <p className="mt-2 text-xs text-ink/50">{paidPct}% of the property paid off</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href={R.give} className="rounded-full bg-brass px-6 py-3.5 text-sm font-medium text-ink">
              Ways to give
            </Link>
            <a
              href={EXT.ircMatchingCampaign}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-line px-6 py-3.5 text-sm text-ink"
            >
              Matching campaign
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export function StoryTeaser() {
  return (
    <section className="bg-sand/40 px-5 py-20">
      <div className="mx-auto max-w-copy text-center">
        <p className="text-[11px] uppercase tracking-[0.3em] text-brass">Our story</p>
        <h2 className="mt-3 font-display text-3xl md:text-4xl">Acquired {ORG.finances.acquired}</h2>
        <p className="mt-4 text-sm leading-relaxed text-ink/70">
          {ORG.tagline} &mdash; built by a community that came together to open the first masjid in Riverside
          South.
        </p>
        <Link href={R.story} className="u-draw mt-6 inline-block text-sm font-medium text-moss">
          Read the full story &rarr;
        </Link>
      </div>
    </section>
  );
}
