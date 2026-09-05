import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import {
  Award,
  BookOpen,
  Briefcase,
  FolderKanban,
  LayoutGrid,
  Link2,
  Sparkles,
  UserRound,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { NodeMark } from "@/components/portfolio/mark";
import { cn } from "@/lib/utils";

export const ADMIN_NAV = [
  { id: "overview", label: "Overview", icon: LayoutGrid },
  { id: "projects", label: "Projects", icon: FolderKanban },
  { id: "experience", label: "Training", icon: Briefcase },
  { id: "certificates", label: "Certificates", icon: Award },
  { id: "skills", label: "Skills", icon: Sparkles },
  { id: "education", label: "Education", icon: BookOpen },
  { id: "profile", label: "Profile", icon: UserRound },
  { id: "social", label: "Social", icon: Link2 },
] as const;

export type AdminTab = (typeof ADMIN_NAV)[number]["id"];

export function AdminShell({
  tab,
  onTab,
  children,
}: {
  tab: AdminTab;
  onTab: (id: AdminTab) => void;
  children: ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-background">
      <aside className="sticky top-0 hidden h-screen w-60 shrink-0 flex-col border-r border-border bg-card md:flex">
        <div className="flex h-16 items-center gap-2.5 px-5">
          <NodeMark className="size-6" />
          <div>
            <p className="text-sm font-medium leading-none">Studio</p>
            <p className="mt-1 text-kicker text-muted-foreground">CMS</p>
          </div>
        </div>
        <ScrollArea className="flex-1 px-3 py-2">
          <nav className="grid gap-1">
            {ADMIN_NAV.map((item) => {
              const Icon = item.icon;
              const active = tab === item.id;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => onTab(item.id)}
                  className={cn(
                    "flex h-11 items-center gap-3 rounded-md px-3 text-sm transition-[background-color,color] duration-150",
                    active
                      ? "bg-secondary text-foreground"
                      : "text-muted-foreground hover:bg-accent hover:text-foreground",
                  )}
                >
                  <Icon className="size-4" />
                  {item.label}
                </button>
              );
            })}
          </nav>
        </ScrollArea>
        <div className="border-t border-border p-3">
          <Button asChild variant="outline" className="w-full">
            <Link to="/">View site</Link>
          </Button>
        </div>
      </aside>

      <div className="flex min-w-0 flex-1 flex-col">
        <header className="flex h-16 items-center gap-2 overflow-x-auto border-b border-border px-4 md:hidden">
          {ADMIN_NAV.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => onTab(item.id)}
              className={cn(
                "h-10 shrink-0 rounded-full px-3 text-xs",
                tab === item.id
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-muted-foreground",
              )}
            >
              {item.label}
            </button>
          ))}
        </header>
        <main className="flex-1 px-4 py-6 md:px-8 md:py-8">{children}</main>
      </div>
    </div>
  );
}
