import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { published, useContent } from "@/lib/content/store";
import { CornerFrame, Lattice } from "./lattice";

export function Hero() {
  const profile = useContent((s) => s.profile);
  const socials = published(useContent((s) => s.socials));

  const [first, ...rest] = profile.name.split(" ");
  const last = rest.pop() ?? "";
  const middle = rest.join(" ");

  return (
    <section
      id="top"
      className="relative overflow-hidden border-b border-border"
    >
      <div className="hero-mesh pointer-events-none absolute inset-0" />

      <div className="relative mx-auto flex min-h-[calc(100dvh-4.5rem)] max-w-6xl flex-col justify-between px-5 py-10 md:px-8 md:py-12">
        <div className="flex items-start justify-between gap-6">
          <p className="text-kicker text-muted-foreground hero-reveal">
            01 / Signal
          </p>
          <p className="text-kicker text-muted-foreground hero-reveal">
            {profile.location}
          </p>
        </div>

        <div className="grid items-end gap-10 py-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-8 lg:py-6">
          <div>
            <p className="text-kicker text-silver hero-reveal">AI / ML</p>
            <h1 className="mt-4 font-display text-display text-foreground hero-reveal">
              <span className="block">
                {first} {middle}
              </span>
              <span className="block italic">{last}</span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg hero-reveal-delay">
              {profile.title}
            </p>
            <p className="mt-2 max-w-xl text-sm text-muted-foreground hero-reveal-delay">
              {profile.faculty}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3 hero-reveal-delay">
              <Button asChild>
                <a href="#work">View work</a>
              </Button>
              <Button asChild variant="outline">
                <a href="#contact">Get in touch</a>
              </Button>
            </div>
          </div>

          <div className="relative hidden aspect-square w-full max-w-md justify-self-end overflow-hidden rounded-xl bg-card shadow-[var(--shadow-border)] lg:block">
            <CornerFrame className="m-4" />
            <Lattice className="absolute inset-0 h-full w-full p-8 text-foreground" />
            <p className="absolute top-5 left-5 text-kicker text-foreground">
              Graph / 00
            </p>
            <p className="absolute right-5 bottom-5 text-kicker text-muted-foreground">
              Cairo
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <ul className="flex flex-wrap gap-x-6 gap-y-2 text-kicker text-muted-foreground">
            {socials.map((item) => (
              <li key={item.id}>
                <a
                  href={item.url}
                  className="transition-colors duration-150 hover:text-foreground"
                  {...(item.url.startsWith("http")
                    ? { target: "_blank", rel: "noreferrer" }
                    : {})}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <a
            href="#about"
            className="inline-flex h-11 items-center gap-2 text-kicker text-muted-foreground hover:text-foreground"
          >
            <ArrowDown className="size-3.5" />
            Index
          </a>
        </div>
      </div>
    </section>
  );
}
