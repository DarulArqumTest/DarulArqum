interface Greeting {
  text: string;
  lang?: string;
}

interface ArcRevealHeroProps {
  children?: React.ReactNode;
  greetings?: Greeting[];
  greetingHold?: number;
  revealDuration?: number;
  storageKey?: string;
  className?: string;
  introClassName?: string;
  greetingClassName?: string;
}

export function ArcRevealHero(props: ArcRevealHeroProps) {
  const { children, className } = props;
  return (
    <div className={className || "w-full h-screen flex items-center justify-center bg-gradient-to-br from-blue-500 to-indigo-600"}>
      <div className="text-center text-white">
        <h1 className="text-4xl font-bold mb-4">Welcome to DarulArqum</h1>
        <p className="text-lg">Islamic Knowledge & Community</p>
        {children}
      </div>
    </div>
  );
}
