import { Link } from "@tanstack/react-router";
import { NodeMark } from "./mark";

export function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 py-10 md:flex-row md:items-center md:justify-between md:px-8">
        <div className="flex items-center gap-2.5">
          <NodeMark className="size-5" />
          <p className="text-sm text-muted-foreground">
            Omar Tarek Eldeeb
          </p>
        </div>
        <div className="flex items-center gap-6">
          <p className="text-kicker text-muted-foreground">Cairo, EG</p>
          <Link
            to="/admin/login"
            className="text-kicker text-muted-foreground transition-colors duration-150 hover:text-foreground"
          >
            Studio
          </Link>
        </div>
      </div>
    </footer>
  );
}
