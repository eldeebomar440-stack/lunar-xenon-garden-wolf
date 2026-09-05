import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { a as DialogOverlay$1, i as DialogDescription$1, n as DialogClose, o as DialogPortal$1, r as DialogContent$1, s as DialogTitle$1, t as Dialog$1 } from "../_libs/@radix-ui/react-dialog+[...].mjs";
import { i as uid, n as NodeMark, r as cn, t as Button } from "./mark-CycOciQG.mjs";
import { n as useContent } from "./store-BLnF-R-t.mjs";
import { n as Label, t as Input } from "./input-Jx-NJaK1.mjs";
import { _ as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as Sparkles, d as LayoutGrid, f as FolderKanban, h as Award, i as Trash2, m as BookOpen, n as UserRound, o as Plus, p as Briefcase, s as Pencil, t as X, u as Link2 } from "../_libs/lucide-react.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { i as Viewport, n as Scrollbar, r as Thumb, t as Root } from "../_libs/radix-ui__react-scroll-area.mjs";
import { n as SwitchThumb, t as Switch$1 } from "../_libs/radix-ui__react-switch.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/admin-CxjKGZSl.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function ScrollArea({ className, children, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Root, {
		className: cn("relative overflow-hidden", className),
		...props,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Viewport, {
			className: "h-full w-full rounded-[inherit]",
			children
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scrollbar, {
			orientation: "vertical",
			className: "flex w-2.5 touch-none p-px",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Thumb, { className: "relative flex-1 rounded-full bg-border" })
		})]
	});
}
var ADMIN_NAV = [
	{
		id: "overview",
		label: "Overview",
		icon: LayoutGrid
	},
	{
		id: "projects",
		label: "Projects",
		icon: FolderKanban
	},
	{
		id: "experience",
		label: "Training",
		icon: Briefcase
	},
	{
		id: "certificates",
		label: "Certificates",
		icon: Award
	},
	{
		id: "skills",
		label: "Skills",
		icon: Sparkles
	},
	{
		id: "education",
		label: "Education",
		icon: BookOpen
	},
	{
		id: "profile",
		label: "Profile",
		icon: UserRound
	},
	{
		id: "social",
		label: "Social",
		icon: Link2
	}
];
function AdminShell({ tab, onTab, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex min-h-screen bg-background",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
			className: "sticky top-0 hidden h-screen w-60 shrink-0 flex-col border-r border-border bg-card md:flex",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex h-16 items-center gap-2.5 px-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NodeMark, { className: "size-6" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm font-medium leading-none",
						children: "Studio"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-kicker text-muted-foreground",
						children: "CMS"
					})] })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScrollArea, {
					className: "flex-1 px-3 py-2",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
						className: "grid gap-1",
						children: ADMIN_NAV.map((item) => {
							const Icon = item.icon;
							const active = tab === item.id;
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								onClick: () => onTab(item.id),
								className: cn("flex h-11 items-center gap-3 rounded-md px-3 text-sm transition-[background-color,color] duration-150", active ? "bg-secondary text-foreground" : "text-muted-foreground hover:bg-accent hover:text-foreground"),
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "size-4" }), item.label]
							}, item.id);
						})
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "border-t border-border p-3",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						variant: "outline",
						className: "w-full",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/",
							children: "View site"
						})
					})
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex min-w-0 flex-1 flex-col",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
				className: "flex h-16 items-center gap-2 overflow-x-auto border-b border-border px-4 md:hidden",
				children: ADMIN_NAV.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => onTab(item.id),
					className: cn("h-10 shrink-0 rounded-full px-3 text-xs", tab === item.id ? "bg-primary text-primary-foreground" : "bg-secondary text-muted-foreground"),
					children: item.label
				}, item.id))
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
				className: "flex-1 px-4 py-6 md:px-8 md:py-8",
				children
			})]
		})]
	});
}
var badgeVariants = cva("inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium", {
	variants: { variant: {
		default: "border-transparent bg-secondary text-secondary-foreground",
		outline: "border-border text-muted-foreground",
		solid: "border-transparent bg-primary text-primary-foreground"
	} },
	defaultVariants: { variant: "default" }
});
function Badge({ className, variant, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: cn(badgeVariants({ variant }), className),
		...props
	});
}
function Switch({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Switch$1, {
		className: cn("peer inline-flex h-6 w-10 shrink-0 items-center rounded-full border border-border bg-muted shadow-[var(--shadow-border)] outline-none transition-[background-color] duration-150 ease-out focus-visible:ring-2 focus-visible:ring-ring/70 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary", className),
		...props,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SwitchThumb, { className: cn("pointer-events-none block size-4 rounded-full bg-foreground shadow-sm transition-transform duration-150 ease-out data-[state=checked]:translate-x-4 data-[state=unchecked]:translate-x-0.5 data-[state=checked]:bg-primary-foreground") })
	});
}
var Dialog = Dialog$1;
var DialogPortal = DialogPortal$1;
function DialogOverlay({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay$1, {
		className: cn("fixed inset-0 z-50 bg-background/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", className),
		...props
	});
}
function DialogContent({ className, children, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogPortal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent$1, {
		className: cn("fixed top-1/2 left-1/2 z-50 grid w-[min(100%-1.5rem,40rem)] max-h-[min(90dvh,44rem)] -translate-x-1/2 -translate-y-1/2 gap-4 overflow-y-auto rounded-xl bg-card p-6 text-card-foreground shadow-[var(--shadow-border)] outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95", className),
		...props,
		children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogClose, {
			className: "absolute top-4 right-4 rounded-sm p-1 text-muted-foreground hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring/70",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "sr-only",
				children: "Close"
			})]
		})]
	})] });
}
function DialogHeader({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn("flex flex-col gap-1.5 pr-6", className),
		...props
	});
}
function DialogTitle({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle$1, {
		className: cn("text-lg font-medium leading-snug", className),
		...props
	});
}
function DialogDescription({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription$1, {
		className: cn("text-sm text-muted-foreground", className),
		...props
	});
}
function Textarea({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
		"data-slot": "textarea",
		className: cn("flex min-h-28 w-full rounded-md border border-input bg-muted px-3 py-2 text-sm text-foreground shadow-[var(--shadow-border)] outline-none placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-ring/70 disabled:cursor-not-allowed disabled:opacity-50", className),
		...props
	});
}
function readImageFile(file) {
	return new Promise((resolve, reject) => {
		const reader = new FileReader();
		reader.onload = () => resolve(String(reader.result));
		reader.onerror = () => reject(/* @__PURE__ */ new Error("Could not read file"));
		reader.readAsDataURL(file);
	});
}
function Field({ label, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
		className: "grid gap-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: label }), children]
	});
}
function TextField({ label, value, onChange, placeholder, type = "text" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
		label,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
			type,
			value,
			placeholder,
			onChange: (e) => onChange(e.target.value)
		})
	});
}
function AreaField({ label, value, onChange, placeholder }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
		label,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
			value,
			placeholder,
			onChange: (e) => onChange(e.target.value)
		})
	});
}
function ToggleField({ label, checked, onCheckedChange }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex h-11 items-center justify-between gap-4 rounded-md border border-border bg-muted px-3",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "text-sm",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Switch, {
			checked,
			onCheckedChange
		})]
	});
}
function ImageField({ label, value, onChange }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Field, {
		label,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
			type: "file",
			accept: "image/*",
			onChange: async (e) => {
				const file = e.target.files?.[0];
				if (!file) return;
				onChange(await readImageFile(file));
			}
		}), value ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
			src: value,
			alt: "",
			className: "mt-2 h-28 w-full rounded-md object-cover"
		}) : null]
	});
}
function PanelHead({ title, description, action }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mb-6 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
			className: "font-display text-3xl leading-none",
			children: title
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-2 text-sm text-muted-foreground",
			children: description
		})] }), action]
	});
}
function Empty({ text }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "rounded-xl bg-card px-5 py-10 text-sm text-muted-foreground shadow-[var(--shadow-border)]",
		children: text
	});
}
function OverviewPanel({ onOpen }) {
	const snapshot = useContent();
	const cards = [
		{
			id: "projects",
			label: "Projects",
			items: snapshot.projects
		},
		{
			id: "experience",
			label: "Training",
			items: snapshot.experience
		},
		{
			id: "certificates",
			label: "Certificates",
			items: snapshot.certificates
		},
		{
			id: "skills",
			label: "Skills",
			items: snapshot.skills
		},
		{
			id: "education",
			label: "Education",
			items: snapshot.education
		}
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PanelHead, {
		title: "Overview",
		description: "Content currently held in the studio. Published items appear on the site."
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "grid gap-4 sm:grid-cols-2 xl:grid-cols-3",
		children: cards.map((card) => {
			const live = card.items.filter((i) => i.published).length;
			return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				type: "button",
				onClick: () => onOpen(card.id),
				className: "rounded-xl bg-card p-5 text-left shadow-[var(--shadow-border)] transition-[box-shadow] duration-150 hover:shadow-[var(--shadow-border-hover)]",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-kicker text-muted-foreground",
						children: card.label
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 font-display text-4xl leading-none",
						children: live
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-2 text-sm text-muted-foreground",
						children: [
							"published · ",
							card.items.length,
							" total"
						]
					})
				]
			}, card.id);
		})
	})] });
}
function ProfilePanel() {
	const profile = useContent((s) => s.profile);
	const setProfile = useContent((s) => s.setProfile);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PanelHead, {
		title: "Profile",
		description: "Name, role, and about copy shown on the public site."
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid max-w-2xl gap-4 rounded-xl bg-card p-5 shadow-[var(--shadow-border)] md:p-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextField, {
				label: "Name",
				value: profile.name,
				onChange: (name) => setProfile({ name })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextField, {
				label: "Title",
				value: profile.title,
				onChange: (title) => setProfile({ title })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextField, {
				label: "Faculty",
				value: profile.faculty,
				onChange: (faculty) => setProfile({ faculty })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextField, {
				label: "Location",
				value: profile.location,
				onChange: (location) => setProfile({ location })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextField, {
				label: "Email",
				value: profile.email,
				onChange: (email) => setProfile({ email })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AreaField, {
				label: "About",
				value: profile.about,
				onChange: (about) => setProfile({ about })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ImageField, {
				label: "Portrait",
				value: profile.avatarUrl,
				onChange: (avatarUrl) => setProfile({ avatarUrl })
			})
		]
	})] });
}
function SocialPanel() {
	const socials = useContent((s) => s.socials);
	const upsert = useContent((s) => s.upsertSocial);
	const remove = useContent((s) => s.removeSocial);
	const [open, setOpen] = (0, import_react.useState)(false);
	const [draft, setDraft] = (0, import_react.useState)(null);
	function start(item) {
		setDraft(item ?? {
			id: uid("social"),
			label: "",
			url: "",
			published: true,
			sortOrder: socials.length
		});
		setOpen(true);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PanelHead, {
			title: "Social",
			description: "Links in the header, hero, and contact strip.",
			action: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
				onClick: () => start(),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "size-4" }), "Add link"]
			})
		}),
		socials.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Empty, { text: "No social links yet." }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "divide-y divide-border rounded-xl bg-card shadow-[var(--shadow-border)]",
			children: socials.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
				className: "flex items-center gap-3 px-4 py-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "min-w-0 flex-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "truncate text-sm font-medium",
							children: item.label
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "truncate text-xs text-muted-foreground",
							children: item.url
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Switch, {
						checked: item.published,
						onCheckedChange: (published) => upsert({
							...item,
							published
						}),
						"aria-label": "Published"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "ghost",
						size: "icon",
						onClick: () => start(item),
						"aria-label": "Edit",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pencil, { className: "size-4" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "ghost",
						size: "icon",
						onClick: () => remove(item.id),
						"aria-label": "Delete",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "size-4" })
					})
				]
			}, item.id))
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
			open,
			onOpenChange: setOpen,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, { children: draft && socials.some((s) => s.id === draft.id) ? "Edit link" : "Add link" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, { children: "Label and URL for a public social link." })] }), draft ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextField, {
						label: "Label",
						value: draft.label,
						onChange: (label) => setDraft({
							...draft,
							label
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextField, {
						label: "URL",
						value: draft.url,
						onChange: (url) => setDraft({
							...draft,
							url
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ToggleField, {
						label: "Published",
						checked: draft.published,
						onCheckedChange: (published) => setDraft({
							...draft,
							published
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						onClick: () => {
							if (!draft.label.trim() || !draft.url.trim()) {
								toast.error("Label and URL are required.");
								return;
							}
							upsert(draft);
							setOpen(false);
							toast.success("Saved.");
						},
						children: "Save"
					})
				]
			}) : null] })
		})
	] });
}
function ProjectsPanel() {
	const projects = useContent((s) => s.projects);
	const upsert = useContent((s) => s.upsertProject);
	const patch = useContent((s) => s.patchProject);
	const remove = useContent((s) => s.removeProject);
	const [open, setOpen] = (0, import_react.useState)(false);
	const [draft, setDraft] = (0, import_react.useState)(null);
	const [tagText, setTagText] = (0, import_react.useState)("");
	const sorted = (0, import_react.useMemo)(() => [...projects].sort((a, b) => a.sortOrder - b.sortOrder), [projects]);
	function start(item) {
		const next = item ?? {
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
			sortOrder: projects.length
		};
		setDraft(next);
		setTagText(next.tags.join(", "));
		setOpen(true);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PanelHead, {
			title: "Projects",
			description: "Add, hide, feature, and illustrate work. Hidden items stay in the studio.",
			action: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
				onClick: () => start(),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "size-4" }), "Add project"]
			})
		}),
		sorted.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Empty, { text: "No projects yet." }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "grid gap-3",
			children: sorted.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
				className: "flex flex-col gap-3 rounded-xl bg-card p-4 shadow-[var(--shadow-border)] sm:flex-row sm:items-center",
				children: [
					item.imageUrl ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: item.imageUrl,
						alt: "",
						className: "h-20 w-full rounded-md object-cover sm:h-16 sm:w-28"
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-20 w-full rounded-md bg-muted sm:h-16 sm:w-28" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "min-w-0 flex-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-wrap items-center gap-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "truncate font-medium",
									children: item.title
								}),
								item.featured ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, { children: "Featured" }) : null,
								!item.published ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
									variant: "outline",
									children: "Hidden"
								}) : null
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 truncate text-sm text-muted-foreground",
							children: item.summary
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap items-center gap-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "flex items-center gap-2 text-xs text-muted-foreground",
								children: ["Live", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Switch, {
									checked: item.published,
									onCheckedChange: (published) => patch({
										id: item.id,
										published
									})
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "flex items-center gap-2 text-xs text-muted-foreground",
								children: ["Feature", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Switch, {
									checked: item.featured,
									onCheckedChange: (featured) => patch({
										id: item.id,
										featured
									})
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								variant: "ghost",
								size: "icon",
								onClick: () => start(item),
								"aria-label": "Edit",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pencil, { className: "size-4" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								variant: "ghost",
								size: "icon",
								onClick: () => {
									remove(item.id);
									toast.success("Project removed.");
								},
								"aria-label": "Delete",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "size-4" })
							})
						]
					})
				]
			}, item.id))
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
			open,
			onOpenChange: setOpen,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, { children: draft && projects.some((p) => p.id === draft.id) ? "Edit project" : "Add project" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, { children: "Only published projects appear on the public site." })] }), draft ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextField, {
						label: "Title",
						value: draft.title,
						onChange: (title) => setDraft({
							...draft,
							title
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextField, {
						label: "Summary",
						value: draft.summary,
						onChange: (summary) => setDraft({
							...draft,
							summary
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AreaField, {
						label: "Description",
						value: draft.description,
						onChange: (description) => setDraft({
							...draft,
							description
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextField, {
						label: "Tags",
						value: tagText,
						onChange: setTagText,
						placeholder: "Comma separated"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextField, {
						label: "Live URL",
						value: draft.liveUrl ?? "",
						onChange: (liveUrl) => setDraft({
							...draft,
							liveUrl: liveUrl || null
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextField, {
						label: "Repo URL",
						value: draft.repoUrl ?? "",
						onChange: (repoUrl) => setDraft({
							...draft,
							repoUrl: repoUrl || null
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ImageField, {
						label: "Cover image",
						value: draft.imageUrl,
						onChange: (imageUrl) => setDraft({
							...draft,
							imageUrl
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ToggleField, {
						label: "Published",
						checked: draft.published,
						onCheckedChange: (published) => setDraft({
							...draft,
							published
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ToggleField, {
						label: "Featured",
						checked: draft.featured,
						onCheckedChange: (featured) => setDraft({
							...draft,
							featured
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						onClick: () => {
							if (!draft.title.trim()) {
								toast.error("Title is required.");
								return;
							}
							upsert({
								...draft,
								tags: tagText.split(",").map((t) => t.trim()).filter(Boolean)
							});
							setOpen(false);
							toast.success("Project saved.");
						},
						children: "Save"
					})
				]
			}) : null] })
		})
	] });
}
function CertificatesPanel() {
	const items = useContent((s) => s.certificates);
	const upsert = useContent((s) => s.upsertCertificate);
	const patch = useContent((s) => s.patchCertificate);
	const remove = useContent((s) => s.removeCertificate);
	const [open, setOpen] = (0, import_react.useState)(false);
	const [draft, setDraft] = (0, import_react.useState)(null);
	function start(item) {
		setDraft(item ?? {
			id: uid("cert"),
			title: "",
			issuer: "",
			imageUrl: null,
			url: null,
			issuedOn: null,
			published: true,
			sortOrder: items.length
		});
		setOpen(true);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PanelHead, {
			title: "Certificates",
			description: "Keep certificates in the studio until you choose to publish them.",
			action: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
				onClick: () => start(),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "size-4" }), "Add certificate"]
			})
		}),
		items.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Empty, { text: "No certificates yet." }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "grid gap-3",
			children: items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
				className: "flex items-center gap-3 rounded-xl bg-card p-4 shadow-[var(--shadow-border)]",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "min-w-0 flex-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "truncate font-medium",
							children: item.title
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "truncate text-sm text-muted-foreground",
							children: item.issuer
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Switch, {
						checked: item.published,
						onCheckedChange: (published) => patch({
							id: item.id,
							published
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "ghost",
						size: "icon",
						onClick: () => start(item),
						"aria-label": "Edit",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pencil, { className: "size-4" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "ghost",
						size: "icon",
						onClick: () => remove(item.id),
						"aria-label": "Delete",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "size-4" })
					})
				]
			}, item.id))
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
			open,
			onOpenChange: setOpen,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, { children: "Certificate" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, { children: "Title, issuer, and optional image." })] }), draft ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextField, {
						label: "Title",
						value: draft.title,
						onChange: (title) => setDraft({
							...draft,
							title
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextField, {
						label: "Issuer",
						value: draft.issuer,
						onChange: (issuer) => setDraft({
							...draft,
							issuer
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextField, {
						label: "URL",
						value: draft.url ?? "",
						onChange: (url) => setDraft({
							...draft,
							url: url || null
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ImageField, {
						label: "Image",
						value: draft.imageUrl,
						onChange: (imageUrl) => setDraft({
							...draft,
							imageUrl
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ToggleField, {
						label: "Published",
						checked: draft.published,
						onCheckedChange: (published) => setDraft({
							...draft,
							published
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						onClick: () => {
							if (!draft.title.trim()) {
								toast.error("Title is required.");
								return;
							}
							upsert(draft);
							setOpen(false);
							toast.success("Saved.");
						},
						children: "Save"
					})
				]
			}) : null] })
		})
	] });
}
function ExperiencePanel() {
	const items = useContent((s) => s.experience);
	const upsert = useContent((s) => s.upsertExperience);
	const patch = useContent((s) => s.patchExperience);
	const remove = useContent((s) => s.removeExperience);
	const [open, setOpen] = (0, import_react.useState)(false);
	const [draft, setDraft] = (0, import_react.useState)(null);
	function start(item) {
		setDraft(item ?? {
			id: uid("exp"),
			title: "",
			organization: "",
			summary: "",
			startedOn: null,
			endedOn: null,
			published: true,
			sortOrder: items.length
		});
		setOpen(true);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PanelHead, {
			title: "Training",
			description: "Experience and training entries. Hide any item without deleting it.",
			action: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
				onClick: () => start(),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "size-4" }), "Add entry"]
			})
		}),
		items.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Empty, { text: "No training yet." }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "grid gap-3",
			children: items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
				className: "flex items-center gap-3 rounded-xl bg-card p-4 shadow-[var(--shadow-border)]",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "min-w-0 flex-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "truncate font-medium",
							children: item.organization
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "truncate text-sm text-muted-foreground",
							children: item.title
						})]
					}),
					!item.published ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
						variant: "outline",
						children: "Hidden"
					}) : null,
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Switch, {
						checked: item.published,
						onCheckedChange: (published) => patch({
							id: item.id,
							published
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "ghost",
						size: "icon",
						onClick: () => start(item),
						"aria-label": "Edit",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pencil, { className: "size-4" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "ghost",
						size: "icon",
						onClick: () => remove(item.id),
						"aria-label": "Delete",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "size-4" })
					})
				]
			}, item.id))
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
			open,
			onOpenChange: setOpen,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, { children: "Training" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, { children: "Organization and role. Dates are optional." })] }), draft ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextField, {
						label: "Organization",
						value: draft.organization,
						onChange: (organization) => setDraft({
							...draft,
							organization
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextField, {
						label: "Title",
						value: draft.title,
						onChange: (title) => setDraft({
							...draft,
							title
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AreaField, {
						label: "Summary",
						value: draft.summary,
						onChange: (summary) => setDraft({
							...draft,
							summary
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ToggleField, {
						label: "Published",
						checked: draft.published,
						onCheckedChange: (published) => setDraft({
							...draft,
							published
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						onClick: () => {
							if (!draft.organization.trim()) {
								toast.error("Organization is required.");
								return;
							}
							upsert(draft);
							setOpen(false);
							toast.success("Saved.");
						},
						children: "Save"
					})
				]
			}) : null] })
		})
	] });
}
function SkillsPanel() {
	const items = useContent((s) => s.skills);
	const upsert = useContent((s) => s.upsertSkill);
	const patch = useContent((s) => s.patchSkill);
	const remove = useContent((s) => s.removeSkill);
	const [open, setOpen] = (0, import_react.useState)(false);
	const [draft, setDraft] = (0, import_react.useState)(null);
	function start(item) {
		setDraft(item ?? {
			id: uid("skill"),
			name: "",
			group: "",
			published: true,
			sortOrder: items.length
		});
		setOpen(true);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PanelHead, {
			title: "Skills",
			description: "Grouped capabilities. Leave unpublished until you are ready.",
			action: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
				onClick: () => start(),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "size-4" }), "Add skill"]
			})
		}),
		items.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Empty, { text: "No skills yet." }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "grid gap-3",
			children: items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
				className: "flex items-center gap-3 rounded-xl bg-card p-4 shadow-[var(--shadow-border)]",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "min-w-0 flex-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "truncate font-medium",
							children: item.name
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "truncate text-sm text-muted-foreground",
							children: item.group || "Ungrouped"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Switch, {
						checked: item.published,
						onCheckedChange: (published) => patch({
							id: item.id,
							published
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "ghost",
						size: "icon",
						onClick: () => start(item),
						"aria-label": "Edit",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pencil, { className: "size-4" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "ghost",
						size: "icon",
						onClick: () => remove(item.id),
						"aria-label": "Delete",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "size-4" })
					})
				]
			}, item.id))
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
			open,
			onOpenChange: setOpen,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, { children: "Skill" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, { children: "Name and optional group." })] }), draft ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextField, {
						label: "Name",
						value: draft.name,
						onChange: (name) => setDraft({
							...draft,
							name
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextField, {
						label: "Group",
						value: draft.group,
						onChange: (group) => setDraft({
							...draft,
							group
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ToggleField, {
						label: "Published",
						checked: draft.published,
						onCheckedChange: (published) => setDraft({
							...draft,
							published
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						onClick: () => {
							if (!draft.name.trim()) {
								toast.error("Name is required.");
								return;
							}
							upsert(draft);
							setOpen(false);
							toast.success("Saved.");
						},
						children: "Save"
					})
				]
			}) : null] })
		})
	] });
}
function EducationPanel() {
	const items = useContent((s) => s.education);
	const upsert = useContent((s) => s.upsertEducation);
	const patch = useContent((s) => s.patchEducation);
	const remove = useContent((s) => s.removeEducation);
	const [open, setOpen] = (0, import_react.useState)(false);
	const [draft, setDraft] = (0, import_react.useState)(null);
	function start(item) {
		setDraft(item ?? {
			id: uid("edu"),
			institution: "",
			program: "",
			summary: "",
			startedOn: null,
			endedOn: null,
			published: true,
			sortOrder: items.length
		});
		setOpen(true);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PanelHead, {
			title: "Education",
			description: "Programs and institutions shown on the site.",
			action: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
				onClick: () => start(),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "size-4" }), "Add education"]
			})
		}),
		items.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Empty, { text: "No education yet." }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "grid gap-3",
			children: items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
				className: "flex items-center gap-3 rounded-xl bg-card p-4 shadow-[var(--shadow-border)]",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "min-w-0 flex-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "truncate font-medium",
							children: item.institution
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "truncate text-sm text-muted-foreground",
							children: item.program
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Switch, {
						checked: item.published,
						onCheckedChange: (published) => patch({
							id: item.id,
							published
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "ghost",
						size: "icon",
						onClick: () => start(item),
						"aria-label": "Edit",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pencil, { className: "size-4" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "ghost",
						size: "icon",
						onClick: () => remove(item.id),
						"aria-label": "Delete",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "size-4" })
					})
				]
			}, item.id))
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
			open,
			onOpenChange: setOpen,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, { children: "Education" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, { children: "Institution and program." })] }), draft ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextField, {
						label: "Institution",
						value: draft.institution,
						onChange: (institution) => setDraft({
							...draft,
							institution
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextField, {
						label: "Program",
						value: draft.program,
						onChange: (program) => setDraft({
							...draft,
							program
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AreaField, {
						label: "Summary",
						value: draft.summary,
						onChange: (summary) => setDraft({
							...draft,
							summary
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ToggleField, {
						label: "Published",
						checked: draft.published,
						onCheckedChange: (published) => setDraft({
							...draft,
							published
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						onClick: () => {
							if (!draft.institution.trim()) {
								toast.error("Institution is required.");
								return;
							}
							upsert(draft);
							setOpen(false);
							toast.success("Saved.");
						},
						children: "Save"
					})
				]
			}) : null] })
		})
	] });
}
function AdminHome() {
	const [tab, setTab] = (0, import_react.useState)("overview");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AdminShell, {
		tab,
		onTab: setTab,
		children: [
			tab === "overview" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(OverviewPanel, { onOpen: (id) => setTab(id) }) : null,
			tab === "projects" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProjectsPanel, {}) : null,
			tab === "experience" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExperiencePanel, {}) : null,
			tab === "certificates" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CertificatesPanel, {}) : null,
			tab === "skills" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SkillsPanel, {}) : null,
			tab === "education" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EducationPanel, {}) : null,
			tab === "profile" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProfilePanel, {}) : null,
			tab === "social" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SocialPanel, {}) : null
		]
	});
}
//#endregion
export { AdminHome as component };
