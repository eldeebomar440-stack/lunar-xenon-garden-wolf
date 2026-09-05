import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { AdminShell, type AdminTab } from "@/components/admin/shell";
import {
  CertificatesPanel,
  EducationPanel,
  ExperiencePanel,
  OverviewPanel,
  ProfilePanel,
  ProjectsPanel,
  SkillsPanel,
  SocialPanel,
} from "@/components/admin/panels";

export const Route = createFileRoute("/admin/")({ component: AdminHome });

function AdminHome() {
  const [tab, setTab] = useState<AdminTab>("overview");

  return (
    <AdminShell tab={tab} onTab={setTab}>
      {tab === "overview" ? <OverviewPanel onOpen={(id) => setTab(id as AdminTab)} /> : null}
      {tab === "projects" ? <ProjectsPanel /> : null}
      {tab === "experience" ? <ExperiencePanel /> : null}
      {tab === "certificates" ? <CertificatesPanel /> : null}
      {tab === "skills" ? <SkillsPanel /> : null}
      {tab === "education" ? <EducationPanel /> : null}
      {tab === "profile" ? <ProfilePanel /> : null}
      {tab === "social" ? <SocialPanel /> : null}
    </AdminShell>
  );
}
