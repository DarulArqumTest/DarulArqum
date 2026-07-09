interface AmbientProps {
  dark?: boolean;
  grain?: boolean;
}

export function Ambient({ dark = false, grain = false }: AmbientProps) {
  return (
    <div aria-hidden className={`pointer-events-none absolute inset-0 overflow-hidden ${grain ? "grain" : ""}`}>
      <div
        className={`orb-a absolute -left-20 -top-20 h-72 w-72 rounded-full blur-3xl ${
          dark ? "bg-moss/30" : "bg-brass/20"
        }`}
      />
      <div
        className={`orb-b absolute -right-24 top-1/3 h-80 w-80 rounded-full blur-3xl ${
          dark ? "bg-forest/40" : "bg-sand/40"
        }`}
      />
    </div>
  );
}
