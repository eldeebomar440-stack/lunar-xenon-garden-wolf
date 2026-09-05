import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { NodeMark } from "./mark";

const LINKS = [
  { href: "#about", label: "About" },
  { href: "#work", label: "Work" },
  { href: "#training", label: "Training" },
  { href: "#contact", label: "Contact" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-30 border-b border-border bg-background/85 backdrop-blur-sm">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 md:h-[4.25rem] md:px-8">
        <a href="#top" className="flex items-center gap-2.5 text-sm font-medium">
          <NodeMark />
          <span className="tracking-wide">ELDEEB</span>
        </a>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-kicker text-muted-foreground transition-colors duration-150 hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button asChild size="sm">
            <a href="#contact">Write</a>
          </Button>
        </div>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden" aria-label="Open menu">
              <Menu />
            </Button>
          </SheetTrigger>
          <SheetContent>
            <SheetTitle className="sr-only">Menu</SheetTitle>
            <div className="mt-8 flex flex-col gap-1">
              {LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="flex h-12 items-center border-b border-border text-base"
                >
                  {link.label}
                </a>
              ))}
              <Button asChild className="mt-6">
                <a href="#contact" onClick={() => setOpen(false)}>
                  Write
                </a>
              </Button>
              <Link
                to="/admin/login"
                className="mt-4 text-kicker text-muted-foreground"
                onClick={() => setOpen(false)}
              >
                Studio
              </Link>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
