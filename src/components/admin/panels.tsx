import { useMemo, useState, type ReactNode } from "react";
import { toast } from "sonner";
import { Pencil, Plus, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { uid } from "@/lib/utils";
import { useContent } from "@/lib/content/store";
import type {
  Certificate,
  Education,
  Experience,
  Project,
  Skill,
  SocialLink,
} from "@/lib/content/types";
import { AreaField, ImageField, TextField, ToggleField } from "./fields";

function PanelHead({
  title,
  description,
  action,
}: {
  title: string;
  description: string;
  action?: ReactNode;
}) {
  return (
    <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
      <div>
        <h1 className="font-display text-3xl leading-none">{title}</h1>
        <p className="mt-2 text-sm text-muted-foreground">{description}</p>
      </div>
      {action}
    </div>
  );
}

function Empty({ text }: { text: string }) {
  return (
    <div className="rounded-xl bg-card px-5 py-10 text-sm text-muted-foreground shadow-[var(--shadow-border)]">
      {text}
    </div>
  );
}

export function OverviewPanel({ onOpen }: { onOpen: (id: string) => void }) {
  const snapshot = useContent();
  const cards = [
    { id: "projects", label: "Projects", items: snapshot.projects },
    { id: "experience", label: "Training", items: snapshot.experience },
    { id: "certificates", label: "Certificates", items: snapshot.certificates },
    { id: "skills", label: "Skills", items: snapshot.skills },
    { id: "education", label: "Education", items: snapshot.education },
  ];

  return (
    <div>
      <PanelHead
        title="Overview"
        description="Content currently held in the studio. Published items appear on the site."
      />
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {cards.map((card) => {
          const live = card.items.filter((i) => i.published).length;
          return (
            <button
              key={card.id}
              type="button"
              onClick={() => onOpen(card.id)}
              className="rounded-xl bg-card p-5 text-left shadow-[var(--shadow-border)] transition-[box-shadow] duration-150 hover:shadow-[var(--shadow-border-hover)]"
            >
              <p className="text-kicker text-muted-foreground">{card.label}</p>
              <p className="mt-3 font-display text-4xl leading-none">{live}</p>
              <p className="mt-2 text-sm text-muted-foreground">
                published · {card.items.length} total
              </p>
            </button>
          );
        })}
      </div>
    </div>
  );
}

export function ProfilePanel() {
  const profile = useContent((s) => s.profile);
  const setProfile = useContent((s) => s.setProfile);

  return (
    <div>
      <PanelHead
        title="Profile"
        description="Name, role, and about copy shown on the public site."
      />
      <div className="grid max-w-2xl gap-4 rounded-xl bg-card p-5 shadow-[var(--shadow-border)] md:p-6">
        <TextField
          label="Name"
          value={profile.name}
          onChange={(name) => setProfile({ name })}
        />
        <TextField
          label="Title"
          value={profile.title}
          onChange={(title) => setProfile({ title })}
        />
        <TextField
          label="Faculty"
          value={profile.faculty}
          onChange={(faculty) => setProfile({ faculty })}
        />
        <TextField
          label="Location"
          value={profile.location}
          onChange={(location) => setProfile({ location })}
        />
        <TextField
          label="Email"
          value={profile.email}
          onChange={(email) => setProfile({ email })}
        />
        <AreaField
          label="About"
          value={profile.about}
          onChange={(about) => setProfile({ about })}
        />
        <ImageField
          label="Portrait"
          value={profile.avatarUrl}
          onChange={(avatarUrl) => setProfile({ avatarUrl })}
        />
      </div>
    </div>
  );
}

export function SocialPanel() {
  const socials = useContent((s) => s.socials);
  const upsert = useContent((s) => s.upsertSocial);
  const remove = useContent((s) => s.removeSocial);
  const [open, setOpen] = useState(false);
  const [draft, setDraft] = useState<SocialLink | null>(null);

  function start(item?: SocialLink) {
    setDraft(
      item ?? {
        id: uid("social"),
        label: "",
        url: "",
        published: true,
        sortOrder: socials.length,
      },
    );
    setOpen(true);
  }

  return (
    <div>
      <PanelHead
        title="Social"
        description="Links in the header, hero, and contact strip."
        action={
          <Button onClick={() => start()}>
            <Plus className="size-4" />
            Add link
          </Button>
        }
      />
      {socials.length === 0 ? (
        <Empty text="No social links yet." />
      ) : (
        <ul className="divide-y divide-border rounded-xl bg-card shadow-[var(--shadow-border)]">
          {socials.map((item) => (
            <li key={item.id} className="flex items-center gap-3 px-4 py-3">
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-medium">{item.label}</p>
                <p className="truncate text-xs text-muted-foreground">{item.url}</p>
              </div>
              <Switch
                checked={item.published}
                onCheckedChange={(published) => upsert({ ...item, published })}
                aria-label="Published"
              />
              <Button variant="ghost" size="icon" onClick={() => start(item)} aria-label="Edit">
                <Pencil className="size-4" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => remove(item.id)}
                aria-label="Delete"
              >
                <Trash2 className="size-4" />
              </Button>
            </li>
          ))}
        </ul>
      )}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{draft && socials.some((s) => s.id === draft.id) ? "Edit link" : "Add link"}</DialogTitle>
            <DialogDescription>Label and URL for a public social link.</DialogDescription>
          </DialogHeader>
          {draft ? (
            <div className="grid gap-4">
              <TextField
                label="Label"
                value={draft.label}
                onChange={(label) => setDraft({ ...draft, label })}
              />
              <TextField
                label="URL"
                value={draft.url}
                onChange={(url) => setDraft({ ...draft, url })}
              />
              <ToggleField
                label="Published"
                checked={draft.published}
                onCheckedChange={(published) => setDraft({ ...draft, published })}
              />
              <Button
                onClick={() => {
                  if (!draft.label.trim() || !draft.url.trim()) {
                    toast.error("Label and URL are required.");
                    return;
                  }
                  upsert(draft);
                  setOpen(false);
                  toast.success("Saved.");
                }}
              >
                Save
              </Button>
            </div>
          ) : null}
        </DialogContent>
      </Dialog>
    </div>
  );
}

export function ProjectsPanel() {
  const projects = useContent((s) => s.projects);
  const upsert = useContent((s) => s.upsertProject);
  const patch = useContent((s) => s.patchProject);
  const remove = useContent((s) => s.removeProject);
  const [open, setOpen] = useState(false);
  const [draft, setDraft] = useState<Project | null>(null);
  const [tagText, setTagText] = useState("");

  const sorted = useMemo(
    () => [...projects].sort((a, b) => a.sortOrder - b.sortOrder),
    [projects],
  );

  function start(item?: Project) {
    const next =
      item ??
      ({
        id: uid("proj"),
        title: "",
        summary: "",
        description: "",
        imageUrl: null,
        liveUrl: null,
        repoUrl: null,
        tags: [],
        featured: false,
        published: true,
        sortOrder: projects.length,
      } satisfies Project);
    setDraft(next);
    setTagText(next.tags.join(", "));
    setOpen(true);
  }

  return (
    <div>
      <PanelHead
        title="Projects"
        description="Add, hide, feature, and illustrate work. Hidden items stay in the studio."
        action={
          <Button onClick={() => start()}>
            <Plus className="size-4" />
            Add project
          </Button>
        }
      />
      {sorted.length === 0 ? (
        <Empty text="No projects yet." />
      ) : (
        <ul className="grid gap-3">
          {sorted.map((item) => (
            <li
              key={item.id}
              className="flex flex-col gap-3 rounded-xl bg-card p-4 shadow-[var(--shadow-border)] sm:flex-row sm:items-center"
            >
              {item.imageUrl ? (
                <img
                  src={item.imageUrl}
                  alt=""
                  className="h-20 w-full rounded-md object-cover sm:h-16 sm:w-28"
                />
              ) : (
                <div className="h-20 w-full rounded-md bg-muted sm:h-16 sm:w-28" />
              )}
              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-center gap-2">
                  <p className="truncate font-medium">{item.title}</p>
                  {item.featured ? <Badge>Featured</Badge> : null}
                  {!item.published ? <Badge variant="outline">Hidden</Badge> : null}
                </div>
                <p className="mt-1 truncate text-sm text-muted-foreground">
                  {item.summary}
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-3">
                <label className="flex items-center gap-2 text-xs text-muted-foreground">
                  Live
                  <Switch
                    checked={item.published}
                    onCheckedChange={(published) => patch({ id: item.id, published })}
                  />
                </label>
                <label className="flex items-center gap-2 text-xs text-muted-foreground">
                  Feature
                  <Switch
                    checked={item.featured}
                    onCheckedChange={(featured) => patch({ id: item.id, featured })}
                  />
                </label>
                <Button variant="ghost" size="icon" onClick={() => start(item)} aria-label="Edit">
                  <Pencil className="size-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => {
                    remove(item.id);
                    toast.success("Project removed.");
                  }}
                  aria-label="Delete"
                >
                  <Trash2 className="size-4" />
                </Button>
              </div>
            </li>
          ))}
        </ul>
      )}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>
              {draft && projects.some((p) => p.id === draft.id) ? "Edit project" : "Add project"}
            </DialogTitle>
            <DialogDescription>
              Only published projects appear on the public site.
            </DialogDescription>
          </DialogHeader>
          {draft ? (
            <div className="grid gap-4">
              <TextField
                label="Title"
                value={draft.title}
                onChange={(title) => setDraft({ ...draft, title })}
              />
              <TextField
                label="Summary"
                value={draft.summary}
                onChange={(summary) => setDraft({ ...draft, summary })}
              />
              <AreaField
                label="Description"
                value={draft.description}
                onChange={(description) => setDraft({ ...draft, description })}
              />
              <TextField
                label="Tags"
                value={tagText}
                onChange={setTagText}
                placeholder="Comma separated"
              />
              <TextField
                label="Live URL"
                value={draft.liveUrl ?? ""}
                onChange={(liveUrl) => setDraft({ ...draft, liveUrl: liveUrl || null })}
              />
              <TextField
                label="Repo URL"
                value={draft.repoUrl ?? ""}
                onChange={(repoUrl) => setDraft({ ...draft, repoUrl: repoUrl || null })}
              />
              <ImageField
                label="Cover image"
                value={draft.imageUrl}
                onChange={(imageUrl) => setDraft({ ...draft, imageUrl })}
              />
              <ToggleField
                label="Published"
                checked={draft.published}
                onCheckedChange={(published) => setDraft({ ...draft, published })}
              />
              <ToggleField
                label="Featured"
                checked={draft.featured}
                onCheckedChange={(featured) => setDraft({ ...draft, featured })}
              />
              <Button
                onClick={() => {
                  if (!draft.title.trim()) {
                    toast.error("Title is required.");
                    return;
                  }
                  upsert({
                    ...draft,
                    tags: tagText
                      .split(",")
                      .map((t) => t.trim())
                      .filter(Boolean),
                  });
                  setOpen(false);
                  toast.success("Project saved.");
                }}
              >
                Save
              </Button>
            </div>
          ) : null}
        </DialogContent>
      </Dialog>
    </div>
  );
}

export function CertificatesPanel() {
  const items = useContent((s) => s.certificates);
  const upsert = useContent((s) => s.upsertCertificate);
  const patch = useContent((s) => s.patchCertificate);
  const remove = useContent((s) => s.removeCertificate);
  const [open, setOpen] = useState(false);
  const [draft, setDraft] = useState<Certificate | null>(null);

  function start(item?: Certificate) {
    setDraft(
      item ?? {
        id: uid("cert"),
        title: "",
        issuer: "",
        imageUrl: null,
        url: null,
        issuedOn: null,
        published: true,
        sortOrder: items.length,
      },
    );
    setOpen(true);
  }

  return (
    <div>
      <PanelHead
        title="Certificates"
        description="Keep certificates in the studio until you choose to publish them."
        action={
          <Button onClick={() => start()}>
            <Plus className="size-4" />
            Add certificate
          </Button>
        }
      />
      {items.length === 0 ? (
        <Empty text="No certificates yet." />
      ) : (
        <ul className="grid gap-3">
          {items.map((item) => (
            <li
              key={item.id}
              className="flex items-center gap-3 rounded-xl bg-card p-4 shadow-[var(--shadow-border)]"
            >
              <div className="min-w-0 flex-1">
                <p className="truncate font-medium">{item.title}</p>
                <p className="truncate text-sm text-muted-foreground">{item.issuer}</p>
              </div>
              <Switch
                checked={item.published}
                onCheckedChange={(published) => patch({ id: item.id, published })}
              />
              <Button variant="ghost" size="icon" onClick={() => start(item)} aria-label="Edit">
                <Pencil className="size-4" />
              </Button>
              <Button variant="ghost" size="icon" onClick={() => remove(item.id)} aria-label="Delete">
                <Trash2 className="size-4" />
              </Button>
            </li>
          ))}
        </ul>
      )}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Certificate</DialogTitle>
            <DialogDescription>Title, issuer, and optional image.</DialogDescription>
          </DialogHeader>
          {draft ? (
            <div className="grid gap-4">
              <TextField
                label="Title"
                value={draft.title}
                onChange={(title) => setDraft({ ...draft, title })}
              />
              <TextField
                label="Issuer"
                value={draft.issuer}
                onChange={(issuer) => setDraft({ ...draft, issuer })}
              />
              <TextField
                label="URL"
                value={draft.url ?? ""}
                onChange={(url) => setDraft({ ...draft, url: url || null })}
              />
              <ImageField
                label="Image"
                value={draft.imageUrl}
                onChange={(imageUrl) => setDraft({ ...draft, imageUrl })}
              />
              <ToggleField
                label="Published"
                checked={draft.published}
                onCheckedChange={(published) => setDraft({ ...draft, published })}
              />
              <Button
                onClick={() => {
                  if (!draft.title.trim()) {
                    toast.error("Title is required.");
                    return;
                  }
                  upsert(draft);
                  setOpen(false);
                  toast.success("Saved.");
                }}
              >
                Save
              </Button>
            </div>
          ) : null}
        </DialogContent>
      </Dialog>
    </div>
  );
}

export function ExperiencePanel() {
  const items = useContent((s) => s.experience);
  const upsert = useContent((s) => s.upsertExperience);
  const patch = useContent((s) => s.patchExperience);
  const remove = useContent((s) => s.removeExperience);
  const [open, setOpen] = useState(false);
  const [draft, setDraft] = useState<Experience | null>(null);

  function start(item?: Experience) {
    setDraft(
      item ?? {
        id: uid("exp"),
        title: "",
        organization: "",
        summary: "",
        startedOn: null,
        endedOn: null,
        published: true,
        sortOrder: items.length,
      },
    );
    setOpen(true);
  }

  return (
    <div>
      <PanelHead
        title="Training"
        description="Experience and training entries. Hide any item without deleting it."
        action={
          <Button onClick={() => start()}>
            <Plus className="size-4" />
            Add entry
          </Button>
        }
      />
      {items.length === 0 ? (
        <Empty text="No training yet." />
      ) : (
        <ul className="grid gap-3">
          {items.map((item) => (
            <li
              key={item.id}
              className="flex items-center gap-3 rounded-xl bg-card p-4 shadow-[var(--shadow-border)]"
            >
              <div className="min-w-0 flex-1">
                <p className="truncate font-medium">{item.organization}</p>
                <p className="truncate text-sm text-muted-foreground">{item.title}</p>
              </div>
              {!item.published ? <Badge variant="outline">Hidden</Badge> : null}
              <Switch
                checked={item.published}
                onCheckedChange={(published) => patch({ id: item.id, published })}
              />
              <Button variant="ghost" size="icon" onClick={() => start(item)} aria-label="Edit">
                <Pencil className="size-4" />
              </Button>
              <Button variant="ghost" size="icon" onClick={() => remove(item.id)} aria-label="Delete">
                <Trash2 className="size-4" />
              </Button>
            </li>
          ))}
        </ul>
      )}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Training</DialogTitle>
            <DialogDescription>Organization and role. Dates are optional.</DialogDescription>
          </DialogHeader>
          {draft ? (
            <div className="grid gap-4">
              <TextField
                label="Organization"
                value={draft.organization}
                onChange={(organization) => setDraft({ ...draft, organization })}
              />
              <TextField
                label="Title"
                value={draft.title}
                onChange={(title) => setDraft({ ...draft, title })}
              />
              <AreaField
                label="Summary"
                value={draft.summary}
                onChange={(summary) => setDraft({ ...draft, summary })}
              />
              <ToggleField
                label="Published"
                checked={draft.published}
                onCheckedChange={(published) => setDraft({ ...draft, published })}
              />
              <Button
                onClick={() => {
                  if (!draft.organization.trim()) {
                    toast.error("Organization is required.");
                    return;
                  }
                  upsert(draft);
                  setOpen(false);
                  toast.success("Saved.");
                }}
              >
                Save
              </Button>
            </div>
          ) : null}
        </DialogContent>
      </Dialog>
    </div>
  );
}

export function SkillsPanel() {
  const items = useContent((s) => s.skills);
  const upsert = useContent((s) => s.upsertSkill);
  const patch = useContent((s) => s.patchSkill);
  const remove = useContent((s) => s.removeSkill);
  const [open, setOpen] = useState(false);
  const [draft, setDraft] = useState<Skill | null>(null);

  function start(item?: Skill) {
    setDraft(
      item ?? {
        id: uid("skill"),
        name: "",
        group: "",
        published: true,
        sortOrder: items.length,
      },
    );
    setOpen(true);
  }

  return (
    <div>
      <PanelHead
        title="Skills"
        description="Grouped capabilities. Leave unpublished until you are ready."
        action={
          <Button onClick={() => start()}>
            <Plus className="size-4" />
            Add skill
          </Button>
        }
      />
      {items.length === 0 ? (
        <Empty text="No skills yet." />
      ) : (
        <ul className="grid gap-3">
          {items.map((item) => (
            <li
              key={item.id}
              className="flex items-center gap-3 rounded-xl bg-card p-4 shadow-[var(--shadow-border)]"
            >
              <div className="min-w-0 flex-1">
                <p className="truncate font-medium">{item.name}</p>
                <p className="truncate text-sm text-muted-foreground">
                  {item.group || "Ungrouped"}
                </p>
              </div>
              <Switch
                checked={item.published}
                onCheckedChange={(published) => patch({ id: item.id, published })}
              />
              <Button variant="ghost" size="icon" onClick={() => start(item)} aria-label="Edit">
                <Pencil className="size-4" />
              </Button>
              <Button variant="ghost" size="icon" onClick={() => remove(item.id)} aria-label="Delete">
                <Trash2 className="size-4" />
              </Button>
            </li>
          ))}
        </ul>
      )}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Skill</DialogTitle>
            <DialogDescription>Name and optional group.</DialogDescription>
          </DialogHeader>
          {draft ? (
            <div className="grid gap-4">
              <TextField
                label="Name"
                value={draft.name}
                onChange={(name) => setDraft({ ...draft, name })}
              />
              <TextField
                label="Group"
                value={draft.group}
                onChange={(group) => setDraft({ ...draft, group })}
              />
              <ToggleField
                label="Published"
                checked={draft.published}
                onCheckedChange={(published) => setDraft({ ...draft, published })}
              />
              <Button
                onClick={() => {
                  if (!draft.name.trim()) {
                    toast.error("Name is required.");
                    return;
                  }
                  upsert(draft);
                  setOpen(false);
                  toast.success("Saved.");
                }}
              >
                Save
              </Button>
            </div>
          ) : null}
        </DialogContent>
      </Dialog>
    </div>
  );
}

export function EducationPanel() {
  const items = useContent((s) => s.education);
  const upsert = useContent((s) => s.upsertEducation);
  const patch = useContent((s) => s.patchEducation);
  const remove = useContent((s) => s.removeEducation);
  const [open, setOpen] = useState(false);
  const [draft, setDraft] = useState<Education | null>(null);

  function start(item?: Education) {
    setDraft(
      item ?? {
        id: uid("edu"),
        institution: "",
        program: "",
        summary: "",
        startedOn: null,
        endedOn: null,
        published: true,
        sortOrder: items.length,
      },
    );
    setOpen(true);
  }

  return (
    <div>
      <PanelHead
        title="Education"
        description="Programs and institutions shown on the site."
        action={
          <Button onClick={() => start()}>
            <Plus className="size-4" />
            Add education
          </Button>
        }
      />
      {items.length === 0 ? (
        <Empty text="No education yet." />
      ) : (
        <ul className="grid gap-3">
          {items.map((item) => (
            <li
              key={item.id}
              className="flex items-center gap-3 rounded-xl bg-card p-4 shadow-[var(--shadow-border)]"
            >
              <div className="min-w-0 flex-1">
                <p className="truncate font-medium">{item.institution}</p>
                <p className="truncate text-sm text-muted-foreground">{item.program}</p>
              </div>
              <Switch
                checked={item.published}
                onCheckedChange={(published) => patch({ id: item.id, published })}
              />
              <Button variant="ghost" size="icon" onClick={() => start(item)} aria-label="Edit">
                <Pencil className="size-4" />
              </Button>
              <Button variant="ghost" size="icon" onClick={() => remove(item.id)} aria-label="Delete">
                <Trash2 className="size-4" />
              </Button>
            </li>
          ))}
        </ul>
      )}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Education</DialogTitle>
            <DialogDescription>Institution and program.</DialogDescription>
          </DialogHeader>
          {draft ? (
            <div className="grid gap-4">
              <TextField
                label="Institution"
                value={draft.institution}
                onChange={(institution) => setDraft({ ...draft, institution })}
              />
              <TextField
                label="Program"
                value={draft.program}
                onChange={(program) => setDraft({ ...draft, program })}
              />
              <AreaField
                label="Summary"
                value={draft.summary}
                onChange={(summary) => setDraft({ ...draft, summary })}
              />
              <ToggleField
                label="Published"
                checked={draft.published}
                onCheckedChange={(published) => setDraft({ ...draft, published })}
              />
              <Button
                onClick={() => {
                  if (!draft.institution.trim()) {
                    toast.error("Institution is required.");
                    return;
                  }
                  upsert(draft);
                  setOpen(false);
                  toast.success("Saved.");
                }}
              >
                Save
              </Button>
            </div>
          ) : null}
        </DialogContent>
      </Dialog>
    </div>
  );
}
