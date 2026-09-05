import { useState, type FormEvent } from "react";
import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { NodeMark } from "@/components/portfolio/mark";

export const Route = createFileRoute("/admin/login")({ component: AdminLogin });

function AdminLogin() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    toast.message("Studio is open for review. Sign-in protection comes next.");
    navigate({ to: "/admin" });
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-5 py-12">
      <div className="w-full max-w-sm rounded-xl bg-card p-6 shadow-[var(--shadow-border)] md:p-8">
        <div className="flex items-center gap-2.5">
          <NodeMark />
          <div>
            <p className="text-sm font-medium">Studio</p>
            <p className="text-kicker text-muted-foreground">Private</p>
          </div>
        </div>
        <h1 className="mt-8 font-display text-3xl leading-none">Sign in</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Admin access for Omar Tarek Eldeeb.
        </p>
        <form className="mt-8 grid gap-4" onSubmit={onSubmit}>
          <label className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              autoComplete="username"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </label>
          <label className="grid gap-2">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </label>
          <Button type="submit" className="mt-2">
            Continue
          </Button>
        </form>
        <p className="mt-6 text-center text-sm text-muted-foreground">
          <Link to="/" className="hover:text-foreground">
            Back to site
          </Link>
        </p>
      </div>
    </main>
  );
}
