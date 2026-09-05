import { t as create } from "../_libs/zustand.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/store-BLnF-R-t.js
var SEED = {
	profile: {
		name: "Omar Tarek Eldeeb",
		title: "AI Engineer / Machine Learning Engineer",
		faculty: "Faculty of Engineering — Artificial Intelligence",
		location: "Cairo, Egypt",
		email: "eldeebomar440@gmail.com",
		about: "AI Engineer and Machine Learning Engineer based in Cairo, Egypt. Faculty of Engineering — Artificial Intelligence.",
		avatarUrl: null
	},
	socials: [
		{
			id: "social_email",
			label: "Email",
			url: "mailto:eldeebomar440@gmail.com",
			published: true,
			sortOrder: 0
		},
		{
			id: "social_linkedin",
			label: "LinkedIn",
			url: "https://linkedin.com/in/omar-tarek-6b9611332",
			published: true,
			sortOrder: 1
		},
		{
			id: "social_github",
			label: "GitHub",
			url: "https://github.com/eldeebomar440-stack",
			published: true,
			sortOrder: 2
		}
	],
	projects: [{
		id: "proj_maze",
		title: "Maze Bot",
		summary: "AI-based maze-solving robot",
		description: "AI-based maze-solving robot",
		imageUrl: "/media/maze-bot.jpg",
		liveUrl: null,
		repoUrl: null,
		tags: ["AI"],
		featured: true,
		published: true,
		sortOrder: 0
	}, {
		id: "proj_house",
		title: "House Price Prediction",
		summary: "Machine Learning project",
		description: "Machine Learning project",
		imageUrl: "/media/house-price.jpg",
		liveUrl: null,
		repoUrl: null,
		tags: ["Machine Learning"],
		featured: true,
		published: true,
		sortOrder: 1
	}],
	certificates: [],
	experience: [
		{
			id: "exp_nti",
			title: "Training",
			organization: "NTI",
			summary: "",
			startedOn: null,
			endedOn: null,
			published: true,
			sortOrder: 0
		},
		{
			id: "exp_depi",
			title: "Training",
			organization: "DEPI",
			summary: "",
			startedOn: null,
			endedOn: null,
			published: true,
			sortOrder: 1
		},
		{
			id: "exp_lia",
			title: "AI & Machine Learning",
			organization: "LIA",
			summary: "",
			startedOn: null,
			endedOn: null,
			published: true,
			sortOrder: 2
		}
	],
	skills: [],
	education: [{
		id: "edu_faculty",
		institution: "Faculty of Engineering",
		program: "Artificial Intelligence",
		summary: "",
		startedOn: null,
		endedOn: null,
		published: true,
		sortOrder: 0
	}]
};
function upsertById(list, item) {
	const i = list.findIndex((x) => x.id === item.id);
	if (i === -1) return [...list, item];
	const next = list.slice();
	next[i] = item;
	return next;
}
function patchById(list, patch) {
	return list.map((item) => item.id === patch.id ? {
		...item,
		...patch
	} : item);
}
var useContent = create()((set) => ({
	...structuredClone(SEED),
	setProfile: (patch) => set((s) => ({ profile: {
		...s.profile,
		...patch
	} })),
	upsertSocial: (item) => set((s) => ({ socials: upsertById(s.socials, item) })),
	removeSocial: (id) => set((s) => ({ socials: s.socials.filter((x) => x.id !== id) })),
	upsertProject: (item) => set((s) => ({ projects: upsertById(s.projects, item) })),
	patchProject: (patch) => set((s) => ({ projects: patchById(s.projects, patch) })),
	removeProject: (id) => set((s) => ({ projects: s.projects.filter((x) => x.id !== id) })),
	upsertCertificate: (item) => set((s) => ({ certificates: upsertById(s.certificates, item) })),
	patchCertificate: (patch) => set((s) => ({ certificates: patchById(s.certificates, patch) })),
	removeCertificate: (id) => set((s) => ({ certificates: s.certificates.filter((x) => x.id !== id) })),
	upsertExperience: (item) => set((s) => ({ experience: upsertById(s.experience, item) })),
	patchExperience: (patch) => set((s) => ({ experience: patchById(s.experience, patch) })),
	removeExperience: (id) => set((s) => ({ experience: s.experience.filter((x) => x.id !== id) })),
	upsertSkill: (item) => set((s) => ({ skills: upsertById(s.skills, item) })),
	patchSkill: (patch) => set((s) => ({ skills: patchById(s.skills, patch) })),
	removeSkill: (id) => set((s) => ({ skills: s.skills.filter((x) => x.id !== id) })),
	upsertEducation: (item) => set((s) => ({ education: upsertById(s.education, item) })),
	patchEducation: (patch) => set((s) => ({ education: patchById(s.education, patch) })),
	removeEducation: (id) => set((s) => ({ education: s.education.filter((x) => x.id !== id) })),
	reset: () => set({ ...structuredClone(SEED) })
}));
function published(items) {
	return items.filter((item) => item.published).sort((a, b) => a.sortOrder - b.sortOrder);
}
//#endregion
export { useContent as n, published as t };
