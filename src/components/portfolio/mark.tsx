import { cn } from "@/lib/utils";

export function NodeMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      className={cn("size-7 text-foreground", className)}
      aria-hidden="true"
    >
      <circle cx="9.5" cy="16" r="3.4" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="22.5" cy="16" r="3.4" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <path d="M13 16h6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}
