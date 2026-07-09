import Link from "next/link";
import { EXT, ORG, R } from "@/lib/links";

export function Footer() {
  return (
    <footer className="border-t border-line bg-bone px-5 py-12 text-sm text-ink/70">
      <div className="mx-auto grid max-w-wide gap-8 md:grid-cols-3">
        <div>
          <p className="font-display text-lg text-ink">{ORG.name}</p>
          <p className="mt-2 max-w-xs">{ORG.tagline}</p>
          <p className="mt-4">{ORG.address}</p>
          <a href={ORG.mapsUrl} target="_blank" rel="noreferrer" className="u-draw text-moss">
            Get directions &rarr;
          </a>
        </div>
        <div>
          <p className="font-medium text-ink">Contact</p>
          <p className="mt-2">
            <a href={ORG.phoneHref} className="u-draw">
              {ORG.phone}
            </a>
          </p>
          <p className="mt-1">
            <a href={ORG.emailHref} className="u-draw">
              {ORG.email}
            </a>
          </p>
          <p className="mt-4 text-xs text-ink/50">Charity reg. {ORG.charityReg}</p>
        </div>
        <div>
          <p className="font-medium text-ink">Explore</p>
          <ul className="mt-2 space-y-1">
            <li>
              <Link href={R.prayer} className="u-draw">
                Prayer times
              </Link>
            </li>
            <li>
              <Link href={R.programs} className="u-draw">
                Programs
              </Link>
            </li>
            <li>
              <Link href={R.give} className="u-draw">
                Give
              </Link>
            </li>
            <li>
              <a href={EXT.whatsapp} target="_blank" rel="noreferrer" className="u-draw">
                WhatsApp community
              </a>
            </li>
          </ul>
        </div>
      </div>
      <p className="mx-auto mt-10 max-w-wide text-xs text-ink/40">
        &copy; {new Date().getFullYear()} {ORG.name}. All rights reserved.
      </p>
    </footer>
  );
}
