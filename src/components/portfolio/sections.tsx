import type { ReactNode } from "react";
import { ArrowUpRight, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { published, useContent } from "@/lib/content/store";
import { CornerFrame } from "./lattice";
import { EmptyNote, SectionHeading } from "./section-heading";

function Shell({
  id,
  children,
  className = "",
}: {
  id: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`border-b border-border ${className}`}>
      <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">{children}</div>
    </section>
  );
}

export function AboutSection() {
  const profile = useContent((s) => s.profile);

  const facts = [
    { label: "Role", value: profile.title },
    { label: "Faculty", value: profile.faculty },
    { label: "Based", value: profile.location },
    { label: "Email", value: profile.email },
  ];

  return (
    <Shell id="about">
      <SectionHeading index="02" title="About" />
      <div className="grid gap-10 md:grid-cols-[1.1fr_0.9fr] md:gap-16">
        <p className="max-w-xl text-lg leading-relaxed text-foreground/90">
          {profile.about}
        </p>
        <dl className="divide-y divide-border rounded-xl bg-card px-5 shadow-[var(--shadow-border)]">
          {facts.map((fact) => (
            <div
              key={fact.label}
              className="grid gap-1 py-4 sm:grid-cols-[7rem_1fr] sm:items-baseline"
            >
              <dt className="text-kicker text-muted-foreground">{fact.label}</dt>
              <dd className="text-sm leading-relaxed">{fact.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </Shell>
  );
}

export function SkillsSection() {
  const skills = published(useContent((s) => s.skills));
  const groups = [...new Set(skills.map((s) => s.group || "General"))];

  return (
    <Shell id="skills">
      <SectionHeading index="03" title="Skills" />
      {skills.length === 0 ? (
        <EmptyNote>No skills published yet.</EmptyNote>
      ) : (
        <div className="grid gap-8 md:grid-cols-2">
          {groups.map((group) => (
            <div key={group}>
              <p className="text-kicker text-muted-foreground">{group}</p>
              <ul className="mt-3 flex flex-wrap gap-2">
                {skills
                  .filter((s) => (s.group || "General") === group)
                  .map((skill) => (
                    <li
                      key={skill.id}
                      className="rounded-full border border-border px-3 py-1.5 text-sm"
                    >
                      {skill.name}
                    </li>
                  ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </Shell>
  );
}

export function ProjectsSection() {
  const projects = published(useContent((s) => s.projects));

  return (
    <Shell id="work">
      <SectionHeading index="04" kicker="Selected" title="Work" />
      {projects.length === 0 ? (
        <EmptyNote>No projects published yet.</EmptyNote>
      ) : (
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project, i) => (
            <article
              key={project.id}
              className="group relative overflow-hidden rounded-xl bg-card shadow-[var(--shadow-border)] transition-[box-shadow] duration-150 ease-out hover:shadow-[var(--shadow-border-hover)]"
            >
              <div className="relative aspect-video overflow-hidden bg-muted">
                {project.imageUrl ? (
                  <img
                    src={project.imageUrl}
                    alt=""
                    className="size-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                  />
                ) : null}
                <CornerFrame className="m-3" />
                <span className="absolute top-4 left-4 text-kicker text-foreground">
                  {String(i + 1).padStart(2, "0")}
                </span>
                {project.featured ? (
                  <span className="absolute top-4 right-4 text-kicker text-foreground">
                    Featured
                  </span>
                ) : null}
              </div>
              <div className="p-5 md:p-6">
                <h3 className="font-display text-2xl leading-tight">{project.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {project.summary}
                </p>
                {project.tags.length > 0 ? (
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <li
                        key={tag}
                        className="text-kicker text-muted-foreground"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>
                ) : null}
                {(project.liveUrl || project.repoUrl) && (
                  <div className="mt-4 flex gap-4">
                    {project.liveUrl ? (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex h-11 items-center gap-1 text-sm"
                      >
                        Live <ArrowUpRight className="size-3.5" />
                      </a>
                    ) : null}
                    {project.repoUrl ? (
                      <a
                        href={project.repoUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex h-11 items-center gap-1 text-sm"
                      >
                        Code <ArrowUpRight className="size-3.5" />
                      </a>
                    ) : null}
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      )}
    </Shell>
  );
}

export function ExperienceSection() {
  const items = published(useContent((s) => s.experience));

  return (
    <Shell id="training">
      <SectionHeading index="05" kicker="Training" title="Experience" />
      {items.length === 0 ? (
        <EmptyNote>No training published yet.</EmptyNote>
      ) : (
        <ol className="divide-y divide-border rounded-xl bg-card shadow-[var(--shadow-border)]">
          {items.map((item, i) => (
            <li
              key={item.id}
              className="grid gap-2 px-5 py-6 md:grid-cols-[4rem_1fr] md:px-6"
            >
              <span className="text-kicker text-muted-foreground">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="text-lg font-medium leading-snug">
                  {item.organization}
                </h3>
                {item.title ? (
                  <p className="mt-1 text-sm text-muted-foreground">{item.title}</p>
                ) : null}
                {item.summary ? (
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {item.summary}
                  </p>
                ) : null}
              </div>
            </li>
          ))}
        </ol>
      )}
    </Shell>
  );
}

export function EducationSection() {
  const items = published(useContent((s) => s.education));

  return (
    <Shell id="education">
      <SectionHeading index="06" title="Education" />
      {items.length === 0 ? (
        <EmptyNote>No education published yet.</EmptyNote>
      ) : (
        <ul className="grid gap-4">
          {items.map((item) => (
            <li
              key={item.id}
              className="relative rounded-xl bg-card p-6 shadow-[var(--shadow-border)]"
            >
              <h3 className="font-display text-2xl leading-tight">
                {item.institution}
              </h3>
              {item.program ? (
                <p className="mt-2 text-sm text-muted-foreground">{item.program}</p>
              ) : null}
              {item.summary ? (
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {item.summary}
                </p>
              ) : null}
            </li>
          ))}
        </ul>
      )}
    </Shell>
  );
}

export function CertificatesSection() {
  const items = published(useContent((s) => s.certificates));

  return (
    <Shell id="certificates">
      <SectionHeading index="07" title="Certificates" />
      {items.length === 0 ? (
        <EmptyNote>No certificates published yet.</EmptyNote>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2">
          {items.map((item) => (
            <article
              key={item.id}
              className="overflow-hidden rounded-xl bg-card shadow-[var(--shadow-border)]"
            >
              {item.imageUrl ? (
                <img
                  src={item.imageUrl}
                  alt=""
                  className="aspect-[4/3] w-full object-cover"
                />
              ) : null}
              <div className="p-5">
                <h3 className="font-medium">{item.title}</h3>
                {item.issuer ? (
                  <p className="mt-1 text-sm text-muted-foreground">{item.issuer}</p>
                ) : null}
              </div>
            </article>
          ))}
        </div>
      )}
    </Shell>
  );
}

export function ContactSection() {
  const profile = useContent((s) => s.profile);
  const socials = published(useContent((s) => s.socials));

  return (
    <Shell id="contact">
      <SectionHeading index="08" title="Contact" />
      <a
        href={`mailto:${profile.email}`}
        className="font-display text-3xl leading-tight tracking-tight sm:text-4xl md:text-5xl"
      >
        {profile.email}
      </a>
      <div className="mt-8 flex flex-wrap gap-3">
        <Button asChild>
          <a href={`mailto:${profile.email}`}>
            <Mail className="size-4" />
            Email
          </a>
        </Button>
        {socials
          .filter((s) => s.label !== "Email")
          .map((item) => (
            <Button key={item.id} asChild variant="outline">
              <a href={item.url} target="_blank" rel="noreferrer">
                {item.label}
                <ArrowUpRight className="size-3.5" />
              </a>
            </Button>
          ))}
      </div>
    </Shell>
  );
}
