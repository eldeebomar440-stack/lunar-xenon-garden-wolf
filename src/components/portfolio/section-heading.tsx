import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function SectionHeading({
  index,
  kicker,
  title,
  className,
}: {
  index: string;
  kicker?: string;
  title: string;
  className?: string;
}) {
  return (
    <header className={cn("mb-10 md:mb-14", className)}>
      <p className="text-kicker text-muted-foreground">
        {index} / {kicker ?? title}
      </p>
      <h2 className="mt-3 font-display text-4xl leading-none tracking-tight md:text-5xl">
        {title}
      </h2>
    </header>
  );
}

export function EmptyNote({ children }: { children: ReactNode }) {
  return (
    <div className="relative rounded-xl bg-card px-5 py-6 shadow-[var(--shadow-border)]">
      <p className="text-sm text-muted-foreground">{children}</p>
    </div>
  );
}
