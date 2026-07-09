import Link from "next/link";

interface CTAAction {
  label: string;
  href: string;
  primary?: boolean;
}

interface CTABandProps {
  title: string;
  body?: string;
  actions?: CTAAction[];
}

function isExternal(href: string) {
  return /^https?:\/\//.test(href);
}

export function CTABand({ title, body, actions = [] }: CTABandProps) {
  return (
    <section className="bg-ink px-5 py-16 text-bone">
      <div className="mx-auto max-w-copy text-center">
        <h2 className="font-display text-2xl md:text-3xl">{title}</h2>
        {body && <p className="mt-4 text-sm leading-relaxed text-bone/70">{body}</p>}
        {actions.length > 0 && (
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            {actions.map((a) => {
              const className = a.primary
                ? "rounded-full bg-brass px-6 py-3.5 text-sm font-medium text-ink"
                : "rounded-full border border-bone/25 px-6 py-3.5 text-sm text-bone";
              return isExternal(a.href) ? (
                <a key={a.href} href={a.href} target="_blank" rel="noreferrer" className={className}>
                  {a.label}
                </a>
              ) : (
                <Link key={a.href} href={a.href} className={className}>
                  {a.label}
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}

// Retained for backwards-compatible imports.
export function CtaBand(props: CTABandProps) {
  return <CTABand {...props} />;
}
