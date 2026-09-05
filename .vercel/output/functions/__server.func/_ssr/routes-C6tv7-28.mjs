import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { a as DialogOverlay, c as DialogTrigger, n as DialogClose, o as DialogPortal, r as DialogContent, s as DialogTitle, t as Dialog } from "../_libs/@radix-ui/react-dialog+[...].mjs";
import { n as NodeMark, r as cn, t as Button } from "./mark-CycOciQG.mjs";
import { n as useContent, t as published } from "./store-BLnF-R-t.mjs";
import { _ as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { _ as ArrowDown, c as Menu, g as ArrowUpRight, l as Mail, t as X } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-C6tv7-28.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Lattice({ className = "" }) {
	const nodes = [
		[40, 30],
		[110, 22],
		[180, 48],
		[250, 28],
		[70, 90],
		[150, 110],
		[230, 86],
		[40, 160],
		[120, 170],
		[200, 150],
		[270, 180],
		[90, 220],
		[170, 230],
		[250, 240]
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 320 280",
		className,
		"aria-hidden": "true",
		fill: "none",
		children: [[
			[0, 1],
			[1, 2],
			[2, 3],
			[0, 4],
			[1, 4],
			[1, 5],
			[2, 5],
			[2, 6],
			[3, 6],
			[4, 7],
			[4, 5],
			[5, 8],
			[5, 6],
			[6, 9],
			[6, 10],
			[7, 8],
			[8, 9],
			[9, 10],
			[7, 11],
			[8, 11],
			[8, 12],
			[9, 12],
			[10, 13],
			[11, 12],
			[12, 13]
		].map(([a, b], i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
			x1: nodes[a][0],
			y1: nodes[a][1],
			x2: nodes[b][0],
			y2: nodes[b][1],
			stroke: "currentColor",
			strokeOpacity: "0.7",
			strokeWidth: "1.25"
		}, `e-${i}`)), nodes.map(([x, y], i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
			cx: x,
			cy: y,
			r: i === 5 || i === 8 ? 4.2 : 2.6,
			fill: "currentColor",
			fillOpacity: i === 5 || i === 8 ? 1 : .8
		}, `n-${i}`))]
	});
}
function CornerFrame({ className = "" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		"aria-hidden": "true",
		className: `pointer-events-none absolute inset-0 ${className}`,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute top-0 left-0 h-3 w-3 border-t border-l border-silver/50" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute top-0 right-0 h-3 w-3 border-t border-r border-silver/50" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute bottom-0 left-0 h-3 w-3 border-b border-l border-silver/50" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute bottom-0 right-0 h-3 w-3 border-b border-r border-silver/50" })
		]
	});
}
function Hero() {
	const profile = useContent((s) => s.profile);
	const socials = published(useContent((s) => s.socials));
	const [first, ...rest] = profile.name.split(" ");
	const last = rest.pop() ?? "";
	const middle = rest.join(" ");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "top",
		className: "relative overflow-hidden border-b border-border",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "hero-mesh pointer-events-none absolute inset-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative mx-auto flex min-h-[calc(100dvh-4.5rem)] max-w-6xl flex-col justify-between px-5 py-10 md:px-8 md:py-12",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-start justify-between gap-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-kicker text-muted-foreground hero-reveal",
						children: "01 / Signal"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-kicker text-muted-foreground hero-reveal",
						children: profile.location
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid items-end gap-10 py-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-8 lg:py-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-kicker text-silver hero-reveal",
							children: "AI / ML"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
							className: "mt-4 font-display text-display text-foreground hero-reveal",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "block",
								children: [
									first,
									" ",
									middle
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "block italic",
								children: last
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-6 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg hero-reveal-delay",
							children: profile.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 max-w-xl text-sm text-muted-foreground hero-reveal-delay",
							children: profile.faculty
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-8 flex flex-wrap items-center gap-3 hero-reveal-delay",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								asChild: true,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "#work",
									children: "View work"
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								asChild: true,
								variant: "outline",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "#contact",
									children: "Get in touch"
								})
							})]
						})
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative hidden aspect-square w-full max-w-md justify-self-end overflow-hidden rounded-xl bg-card shadow-[var(--shadow-border)] lg:block",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CornerFrame, { className: "m-4" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lattice, { className: "absolute inset-0 h-full w-full p-8 text-foreground" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "absolute top-5 left-5 text-kicker text-foreground",
								children: "Graph / 00"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "absolute right-5 bottom-5 text-kicker text-muted-foreground",
								children: "Cairo"
							})
						]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "flex flex-wrap gap-x-6 gap-y-2 text-kicker text-muted-foreground",
						children: socials.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: item.url,
							className: "transition-colors duration-150 hover:text-foreground",
							...item.url.startsWith("http") ? {
								target: "_blank",
								rel: "noreferrer"
							} : {},
							children: item.label
						}) }, item.id))
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: "#about",
						className: "inline-flex h-11 items-center gap-2 text-kicker text-muted-foreground hover:text-foreground",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowDown, { className: "size-3.5" }), "Index"]
					})]
				})
			]
		})]
	});
}
function SectionHeading({ index, kicker, title, className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: cn("mb-10 md:mb-14", className),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
			className: "text-kicker text-muted-foreground",
			children: [
				index,
				" / ",
				kicker ?? title
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
			className: "mt-3 font-display text-4xl leading-none tracking-tight md:text-5xl",
			children: title
		})]
	});
}
function EmptyNote({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "relative rounded-xl bg-card px-5 py-6 shadow-[var(--shadow-border)]",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-sm text-muted-foreground",
			children
		})
	});
}
function Shell({ id, children, className = "" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id,
		className: `border-b border-border ${className}`,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28",
			children
		})
	});
}
function AboutSection() {
	const profile = useContent((s) => s.profile);
	const facts = [
		{
			label: "Role",
			value: profile.title
		},
		{
			label: "Faculty",
			value: profile.faculty
		},
		{
			label: "Based",
			value: profile.location
		},
		{
			label: "Email",
			value: profile.email
		}
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Shell, {
		id: "about",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
			index: "02",
			title: "About"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-10 md:grid-cols-[1.1fr_0.9fr] md:gap-16",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "max-w-xl text-lg leading-relaxed text-foreground/90",
				children: profile.about
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
				className: "divide-y divide-border rounded-xl bg-card px-5 shadow-[var(--shadow-border)]",
				children: facts.map((fact) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-1 py-4 sm:grid-cols-[7rem_1fr] sm:items-baseline",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
						className: "text-kicker text-muted-foreground",
						children: fact.label
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
						className: "text-sm leading-relaxed",
						children: fact.value
					})]
				}, fact.label))
			})]
		})]
	});
}
function SkillsSection() {
	const skills = published(useContent((s) => s.skills));
	const groups = [...new Set(skills.map((s) => s.group || "General"))];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Shell, {
		id: "skills",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
			index: "03",
			title: "Skills"
		}), skills.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EmptyNote, { children: "No skills published yet." }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid gap-8 md:grid-cols-2",
			children: groups.map((group) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-kicker text-muted-foreground",
				children: group
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-3 flex flex-wrap gap-2",
				children: skills.filter((s) => (s.group || "General") === group).map((skill) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
					className: "rounded-full border border-border px-3 py-1.5 text-sm",
					children: skill.name
				}, skill.id))
			})] }, group))
		})]
	});
}
function ProjectsSection() {
	const projects = published(useContent((s) => s.projects));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Shell, {
		id: "work",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
			index: "04",
			kicker: "Selected",
			title: "Work"
		}), projects.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EmptyNote, { children: "No projects published yet." }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid gap-6 md:grid-cols-2",
			children: projects.map((project, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
				className: "group relative overflow-hidden rounded-xl bg-card shadow-[var(--shadow-border)] transition-[box-shadow] duration-150 ease-out hover:shadow-[var(--shadow-border-hover)]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative aspect-video overflow-hidden bg-muted",
					children: [
						project.imageUrl ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: project.imageUrl,
							alt: "",
							className: "size-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
						}) : null,
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CornerFrame, { className: "m-3" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "absolute top-4 left-4 text-kicker text-foreground",
							children: String(i + 1).padStart(2, "0")
						}),
						project.featured ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "absolute top-4 right-4 text-kicker text-foreground",
							children: "Featured"
						}) : null
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "p-5 md:p-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-display text-2xl leading-tight",
							children: project.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm leading-relaxed text-muted-foreground",
							children: project.summary
						}),
						project.tags.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-4 flex flex-wrap gap-2",
							children: project.tags.map((tag) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
								className: "text-kicker text-muted-foreground",
								children: tag
							}, tag))
						}) : null,
						(project.liveUrl || project.repoUrl) && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-4 flex gap-4",
							children: [project.liveUrl ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: project.liveUrl,
								target: "_blank",
								rel: "noreferrer",
								className: "inline-flex h-11 items-center gap-1 text-sm",
								children: ["Live ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "size-3.5" })]
							}) : null, project.repoUrl ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: project.repoUrl,
								target: "_blank",
								rel: "noreferrer",
								className: "inline-flex h-11 items-center gap-1 text-sm",
								children: ["Code ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "size-3.5" })]
							}) : null]
						})
					]
				})]
			}, project.id))
		})]
	});
}
function ExperienceSection() {
	const items = published(useContent((s) => s.experience));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Shell, {
		id: "training",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
			index: "05",
			kicker: "Training",
			title: "Experience"
		}), items.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EmptyNote, { children: "No training published yet." }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
			className: "divide-y divide-border rounded-xl bg-card shadow-[var(--shadow-border)]",
			children: items.map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
				className: "grid gap-2 px-5 py-6 md:grid-cols-[4rem_1fr] md:px-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-kicker text-muted-foreground",
					children: String(i + 1).padStart(2, "0")
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "text-lg font-medium leading-snug",
						children: item.organization
					}),
					item.title ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-sm text-muted-foreground",
						children: item.title
					}) : null,
					item.summary ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm leading-relaxed text-muted-foreground",
						children: item.summary
					}) : null
				] })]
			}, item.id))
		})]
	});
}
function EducationSection() {
	const items = published(useContent((s) => s.education));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Shell, {
		id: "education",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
			index: "06",
			title: "Education"
		}), items.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EmptyNote, { children: "No education published yet." }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "grid gap-4",
			children: items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
				className: "relative rounded-xl bg-card p-6 shadow-[var(--shadow-border)]",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-display text-2xl leading-tight",
						children: item.institution
					}),
					item.program ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm text-muted-foreground",
						children: item.program
					}) : null,
					item.summary ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-sm leading-relaxed text-muted-foreground",
						children: item.summary
					}) : null
				]
			}, item.id))
		})]
	});
}
function CertificatesSection() {
	const items = published(useContent((s) => s.certificates));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Shell, {
		id: "certificates",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
			index: "07",
			title: "Certificates"
		}), items.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EmptyNote, { children: "No certificates published yet." }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid gap-6 sm:grid-cols-2",
			children: items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
				className: "overflow-hidden rounded-xl bg-card shadow-[var(--shadow-border)]",
				children: [item.imageUrl ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: item.imageUrl,
					alt: "",
					className: "aspect-[4/3] w-full object-cover"
				}) : null, /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "p-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-medium",
						children: item.title
					}), item.issuer ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-sm text-muted-foreground",
						children: item.issuer
					}) : null]
				})]
			}, item.id))
		})]
	});
}
function ContactSection() {
	const profile = useContent((s) => s.profile);
	const socials = published(useContent((s) => s.socials));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Shell, {
		id: "contact",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				index: "08",
				title: "Contact"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: `mailto:${profile.email}`,
				className: "font-display text-3xl leading-tight tracking-tight sm:text-4xl md:text-5xl",
				children: profile.email
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-8 flex flex-wrap gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					asChild: true,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: `mailto:${profile.email}`,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "size-4" }), "Email"]
					})
				}), socials.filter((s) => s.label !== "Email").map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					asChild: true,
					variant: "outline",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: item.url,
						target: "_blank",
						rel: "noreferrer",
						children: [item.label, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "size-3.5" })]
					})
				}, item.id))]
			})
		]
	});
}
function SiteFooter() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
		className: "border-t border-border",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex max-w-6xl flex-col gap-6 px-5 py-10 md:flex-row md:items-center md:justify-between md:px-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-2.5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NodeMark, { className: "size-5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-muted-foreground",
					children: "Omar Tarek Eldeeb"
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-kicker text-muted-foreground",
					children: "Cairo, EG"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/admin/login",
					className: "text-kicker text-muted-foreground transition-colors duration-150 hover:text-foreground",
					children: "Studio"
				})]
			})]
		})
	});
}
var Sheet = Dialog;
var SheetTrigger = DialogTrigger;
var SheetPortal = DialogPortal;
function SheetOverlay({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay, {
		className: cn("fixed inset-0 z-50 bg-background/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", className),
		...props
	});
}
function SheetContent({ className, children, side = "right", ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SheetPortal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SheetOverlay, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
		className: cn("fixed z-50 flex h-full w-[min(100%,20rem)] flex-col bg-card p-6 text-card-foreground shadow-[var(--shadow-border)] outline-none data-[state=open]:animate-in data-[state=closed]:animate-out", side === "right" ? "inset-y-0 right-0 data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right" : "inset-y-0 left-0 data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left", className),
		...props,
		children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogClose, {
			className: "absolute top-4 right-4 rounded-sm p-1 text-muted-foreground hover:text-foreground",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "sr-only",
				children: "Close"
			})]
		})]
	})] });
}
function SheetTitle({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, {
		className: cn("text-lg font-medium", className),
		...props
	});
}
var LINKS = [
	{
		href: "#about",
		label: "About"
	},
	{
		href: "#work",
		label: "Work"
	},
	{
		href: "#training",
		label: "Training"
	},
	{
		href: "#contact",
		label: "Contact"
	}
];
function SiteHeader() {
	const [open, setOpen] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
		className: "sticky top-0 z-30 border-b border-border bg-background/85 backdrop-blur-sm",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex h-16 max-w-6xl items-center justify-between px-5 md:h-[4.25rem] md:px-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: "#top",
					className: "flex items-center gap-2.5 text-sm font-medium",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NodeMark, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "tracking-wide",
						children: "ELDEEB"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "hidden items-center gap-8 md:flex",
					"aria-label": "Primary",
					children: LINKS.map((link) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: link.href,
						className: "text-kicker text-muted-foreground transition-colors duration-150 hover:text-foreground",
						children: link.label
					}, link.href))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "hidden md:block",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						size: "sm",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#contact",
							children: "Write"
						})
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Sheet, {
					open,
					onOpenChange: setOpen,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SheetTrigger, {
						asChild: true,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "ghost",
							size: "icon",
							className: "md:hidden",
							"aria-label": "Open menu",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, {})
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SheetContent, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SheetTitle, {
						className: "sr-only",
						children: "Menu"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8 flex flex-col gap-1",
						children: [
							LINKS.map((link) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: link.href,
								onClick: () => setOpen(false),
								className: "flex h-12 items-center border-b border-border text-base",
								children: link.label
							}, link.href)),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								asChild: true,
								className: "mt-6",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "#contact",
									onClick: () => setOpen(false),
									children: "Write"
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/admin/login",
								className: "mt-4 text-kicker text-muted-foreground",
								onClick: () => setOpen(false),
								children: "Studio"
							})
						]
					})] })]
				})
			]
		})
	});
}
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AboutSection, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SkillsSection, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProjectsSection, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExperienceSection, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(EducationSection, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CertificatesSection, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactSection, {})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {})
		]
	});
}
//#endregion
export { Home as component };
