import { create } from "zustand";
import { SEED } from "./seed";
import type {
  Certificate,
  ContentSnapshot,
  Education,
  Experience,
  Profile,
  Project,
  Skill,
  SocialLink,
} from "./types";

type Patch<T> = Partial<T> & { id: string };

type ContentState = ContentSnapshot & {
  setProfile: (patch: Partial<Profile>) => void;
  upsertSocial: (item: SocialLink) => void;
  removeSocial: (id: string) => void;
  upsertProject: (item: Project) => void;
  patchProject: (patch: Patch<Project>) => void;
  removeProject: (id: string) => void;
  upsertCertificate: (item: Certificate) => void;
  patchCertificate: (patch: Patch<Certificate>) => void;
  removeCertificate: (id: string) => void;
  upsertExperience: (item: Experience) => void;
  patchExperience: (patch: Patch<Experience>) => void;
  removeExperience: (id: string) => void;
  upsertSkill: (item: Skill) => void;
  patchSkill: (patch: Patch<Skill>) => void;
  removeSkill: (id: string) => void;
  upsertEducation: (item: Education) => void;
  patchEducation: (patch: Patch<Education>) => void;
  removeEducation: (id: string) => void;
  reset: () => void;
};

function upsertById<T extends { id: string }>(list: T[], item: T): T[] {
  const i = list.findIndex((x) => x.id === item.id);
  if (i === -1) return [...list, item];
  const next = list.slice();
  next[i] = item;
  return next;
}

function patchById<T extends { id: string }>(list: T[], patch: Patch<T>): T[] {
  return list.map((item) => (item.id === patch.id ? { ...item, ...patch } : item));
}

export const useContent = create<ContentState>()((set) => ({
  ...structuredClone(SEED),
  setProfile: (patch) =>
    set((s) => ({ profile: { ...s.profile, ...patch } })),
  upsertSocial: (item) =>
    set((s) => ({ socials: upsertById(s.socials, item) })),
  removeSocial: (id) =>
    set((s) => ({ socials: s.socials.filter((x) => x.id !== id) })),
  upsertProject: (item) =>
    set((s) => ({ projects: upsertById(s.projects, item) })),
  patchProject: (patch) =>
    set((s) => ({ projects: patchById(s.projects, patch) })),
  removeProject: (id) =>
    set((s) => ({ projects: s.projects.filter((x) => x.id !== id) })),
  upsertCertificate: (item) =>
    set((s) => ({ certificates: upsertById(s.certificates, item) })),
  patchCertificate: (patch) =>
    set((s) => ({ certificates: patchById(s.certificates, patch) })),
  removeCertificate: (id) =>
    set((s) => ({ certificates: s.certificates.filter((x) => x.id !== id) })),
  upsertExperience: (item) =>
    set((s) => ({ experience: upsertById(s.experience, item) })),
  patchExperience: (patch) =>
    set((s) => ({ experience: patchById(s.experience, patch) })),
  removeExperience: (id) =>
    set((s) => ({ experience: s.experience.filter((x) => x.id !== id) })),
  upsertSkill: (item) =>
    set((s) => ({ skills: upsertById(s.skills, item) })),
  patchSkill: (patch) =>
    set((s) => ({ skills: patchById(s.skills, patch) })),
  removeSkill: (id) =>
    set((s) => ({ skills: s.skills.filter((x) => x.id !== id) })),
  upsertEducation: (item) =>
    set((s) => ({ education: upsertById(s.education, item) })),
  patchEducation: (patch) =>
    set((s) => ({ education: patchById(s.education, patch) })),
  removeEducation: (id) =>
    set((s) => ({ education: s.education.filter((x) => x.id !== id) })),
  reset: () => set({ ...structuredClone(SEED) }),
}));

export function published<T extends { published: boolean; sortOrder: number }>(
  items: T[],
) {
  return items.filter((item) => item.published).sort((a, b) => a.sortOrder - b.sortOrder);
}
