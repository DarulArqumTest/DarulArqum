"use client";

import Link from "next/link";
import { useState } from "react";
import { ORG, R } from "@/lib/links";

const NAV = [
  { label: "Prayer times", href: R.prayer },
  { label: "Programs", href: R.programs },
  { label: "Give", href: R.give },
  { label: "Our story", href: R.story },
  { label: "Community", href: R.community },
  { label: "Contact", href: R.contact },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-bone/90 backdrop-blur">
      <div className="mx-auto flex max-w-wide items-center justify-between px-5 py-4">
        <Link href={R.home} className="font-display text-lg tracking-tight text-ink">
          {ORG.name}
        </Link>
        <nav className="hidden gap-6 md:flex">
          {NAV.map((n) => (
            <Link key={n.href} href={n.href} className="u-draw text-sm text-ink/70 hover:text-ink">
              {n.label}
            </Link>
          ))}
        </nav>
        <button
          type="button"
          className="text-sm text-ink md:hidden"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>
      {open && (
        <nav className="flex flex-col gap-1 border-t border-line px-5 py-3 md:hidden">
          {NAV.map((n) => (
            <Link key={n.href} href={n.href} className="py-2 text-sm text-ink/70" onClick={() => setOpen(false)}>
              {n.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
