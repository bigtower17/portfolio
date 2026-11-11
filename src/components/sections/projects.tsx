"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, Maximize2 } from "lucide-react";
import Image from "next/image";
import { useCallback, useState } from "react";
import { site } from "@/lib/site";
import { cn } from "@/lib/utils";
import { LiveView, type LiveViewItem } from "./live-view";

type Category = "fintech" | "ai" | "cloud" | "backend" | "fullstack" | "mobile" | "iot";
type GroupKey = "monetito" | "freelance" | "own" | "oss";

interface Project {
  id: string;
  group: GroupKey;
  title: string;
  tagline: string;
  role?: string;
  period?: string;
  categories: Category[];
  // Rounded on purpose: scale indicators, never exact business figures
  metrics?: string[];
  highlights: string[];
  stack: string[];
  repo?: string;
  live?: string;
  liveLabel?: string;
  // Live pages shown as previews that open full screen
  views?: LiveViewItem[];
}

const groups: { key: GroupKey; title: string; meta: string[]; description: string }[] = [
  {
    key: "monetito",
    title: "Monetito Payments",
    meta: ["CTO · Jan 2026 – Present", "IT Manager · Jul – Dec 2025"],
    description:
      "End-to-end technical leadership for a fintech startup: architecture, cloud, backend, team and vendors. A 3-person product team, backed by company staff for R&D and testing, and beta tests with selected customers.",
  },
  {
    key: "freelance",
    title: "Freelance",
    meta: ["Software & Cloud Engineer · Feb 2024 – Present"],
    description: "Contract work across AI backends, cloud infrastructure and full-stack products.",
  },
  {
    key: "own",
    title: "Own products & research",
    meta: ["Personal projects · 2026 – Present"],
    description: "Products I design, build and run myself, and research where the linguistics degree meets the engineering.",
  },
  {
    key: "oss",
    title: "Open source",
    meta: ["IoT & embedded", `github.com/${site.githubHandle}`],
    description: "Reverse engineering and tooling for smart-home hardware, published on GitHub.",
  },
];

const projects: Project[] = [
  {
    id: "dopopay",
    group: "monetito",
    title: "dopopay",
    tagline: "BNPL payment platform",
    period: "Launched Jun 2026",
    categories: ["fintech", "fullstack", "mobile"],
    metrics: ["0 to go-to-market in 4 months", "200+ merchants in the first 5 months"],
    highlights: [
      "Buy-now-pay-later platform on Stripe Connect, wrapping Klarna and Scalapay via destination charges.",
      "Merchant dashboard with payment links, plus a mobile app and a myPOS POS-terminal app.",
    ],
    stack: ["Next.js", "Stripe Connect", "Drizzle", "PostgreSQL", "Sentry"],
    live: "https://www.dopopay.it",
  },
  {
    id: "monetito-express",
    group: "monetito",
    title: "Monetito Express",
    tagline: "Dealer shipping portal on Poste Delivery Business",
    period: "Launched Oct 2026",
    categories: ["fintech", "fullstack"],
    metrics: ["0 to go-to-market in 4 months", "20+ dealers onboarded at launch"],
    highlights: [
      "Prepaid credit wallet, shipments, pickups and cash on delivery.",
      "Built-in e-invoicing.",
    ],
    stack: ["Next.js", "Drizzle", "PostgreSQL", "Cognito"],
    live: "https://www.monetitoexpress.it",
  },
  {
    id: "dealer-backoffice",
    group: "monetito",
    title: "Dealer-network back office",
    tagline: "B2B platform for dealers, agents and area managers",
    categories: ["fintech", "fullstack"],
    metrics: ["~1,000 managed clients", "80+ agents", "10+ area managers"],
    highlights: [
      "Onboarding workflows, documents, services, tariffs and commissions.",
      "Service catalog spanning myPOS POS terminals, Namirial and InfoCert e-signatures, Italia Power onboarding, dopopay and Monetito Express.",
      "Operates Monetito Express through a panel API.",
    ],
    stack: ["Next.js", "Drizzle", "PostgreSQL", "Cognito", "S3"],
  },
  {
    id: "core-wallet",
    group: "monetito",
    title: "Core wallet platform",
    tagline: "Centralized wallet with two-phase transactions",
    categories: ["fintech", "backend"],
    highlights: [
      "Centralized wallet with two-phase transaction flows.",
      "Moneynet integration via OAuth2 for PagoPA payments.",
    ],
    stack: ["Go", "Node.js", "Redis", "Aurora PostgreSQL", "OAuth2"],
  },
  {
    id: "energy-comparator",
    group: "monetito",
    title: "Energy supply comparator",
    tagline: "Electricity offer comparison with quote generator",
    categories: ["fullstack"],
    highlights: [
      "Compares electricity supply offers and generates quotes.",
    ],
    stack: [],
  },
  {
    id: "monetito-tools",
    group: "monetito",
    title: "Monetito Tools",
    tagline: "Audit, backup and control for platforms and databases",
    role: "Internal tool",
    categories: ["cloud", "backend"],
    highlights: [
      "Internal tooling for auditing, backing up and controlling the company's platforms and databases.",
    ],
    stack: [],
  },
  {
    id: "monetito-cloud",
    group: "monetito",
    title: "Cloud & DevOps foundation",
    tagline: "AWS infrastructure as code, CI/CD and observability",
    categories: ["cloud"],
    highlights: [
      "AWS on ECS Fargate, Aurora Serverless, S3, SNS, SQS and Cognito, provisioned with Terraform.",
      "GitHub Actions CI/CD, Infisical for secrets, pnpm monorepo, LocalStack and Grafana.",
    ],
    stack: ["AWS", "Terraform", "ECS Fargate", "Aurora Serverless", "GitHub Actions", "Grafana"],
  },
  {
    id: "helios",
    group: "freelance",
    title: "Helios",
    tagline: "AI-powered IT support assistant",
    role: "AI backend engineer · contract",
    period: "Jun – Jul 2026",
    categories: ["ai", "backend", "cloud"],
    highlights: [
      "Agentic core: LLM decision engine with a clarifying-question loop, model-agnostic decision contract and per-call timeout budgets.",
      "RAG on pgvector with cited sources; structured-output ticket classification, refined from async video summaries.",
      "pytest-native LLM eval harness with scorers, a model matrix and a GitHub Actions eval workflow.",
      "Multi-tenant PostgreSQL with row-level security, signed async jobs on Taskiq/Redis, Jira ticket reminders; Terraform on GCP and Kubernetes.",
    ],
    stack: ["Python", "FastAPI", "LangChain", "OpenAI", "Vertex AI", "pgvector", "Taskiq", "Terraform", "GCP", "Kubernetes"],
    live: "https://heliosdigital.ai/",
  },
  {
    id: "proxmox",
    group: "freelance",
    title: "On-premise Proxmox cluster",
    tagline: "Self-hosted infrastructure for a private company",
    role: "Design, setup & management · contract",
    period: "Mar – Apr 2025",
    categories: ["cloud"],
    highlights: [
      "Automated horizontal scaling and load management.",
      "LXC containers and VMs provisioned with Terraform.",
      "Failover, backups, cron jobs and disaster recovery; Nginx reverse proxy, VPN and tunneling.",
    ],
    stack: ["Proxmox", "Terraform", "LXC", "Nginx", "VPN"],
  },
  {
    id: "partycash",
    group: "freelance",
    title: "PartyCash",
    tagline: "Event-based cash-flow management",
    role: "Full-stack developer · contract",
    period: "Jul – Dec 2024",
    categories: ["fullstack", "cloud"],
    highlights: [
      "Refactored a single-tenant white-label app for multi-tenancy, with differential access, report generation and export.",
      "Responsive React front end; deployed on AWS EC2 with Docker and GitHub Actions CI/CD.",
    ],
    stack: ["Node.js", "PostgreSQL", "React", "Vite", "TypeScript", "Tailwind CSS", "AWS EC2", "Docker"],
  },
  {
    id: "officina",
    group: "freelance",
    title: "Officina in Cloud",
    tagline: "Garage management platform",
    role: "Full-stack developer · contract",
    period: "Feb – Dec 2025 · Launched Sep 2025",
    categories: ["fullstack"],
    highlights: [
      "Multi-tenant app for car garages and tyre shops.",
      "Customers, payments, billing, inventory and seasonal tyre storage.",
    ],
    stack: ["ASP.NET Core", "Keycloak", "PostgreSQL", "Vue.js", "TypeScript", "Tailwind CSS", "FreeMarker"],
    live: "https://officinaincloud.it",
  },
  {
    id: "nameless",
    group: "freelance",
    title: "NAMELESS",
    tagline: "Event ticketing & PR management",
    role: "Full-stack developer",
    categories: ["fullstack"],
    highlights: [
      "PR and guest-list management, online booking and payments.",
      "QR-code ticket validation and Twilio API integration.",
    ],
    stack: ["Node.js", "Express.js", "PostgreSQL", "React", "TypeScript", "Tailwind CSS", "Twilio"],
  },
  {
    id: "brina",
    group: "own",
    title: "Brina",
    tagline: "End-to-end encrypted ephemeral chat for Slack",
    role: "Own product",
    period: "Launching 2026",
    categories: ["backend", "fullstack"],
    highlights: [
      "/brina @colleague opens a two-person room in the browser, for what shouldn't stay in Slack history: passwords, keys, client data.",
      "Messages vanish 60 seconds after reading; the Go relay forwards only ciphertext and keeps everything in memory.",
      "Double Ratchet with hybrid post-quantum key exchange (X25519 + ML-KEM-768), encrypted headers and length padding, all in the browser.",
      "CPace PIN and a spoken safety code against link interception and man-in-the-middle; passkey-protected local keys.",
    ],
    stack: ["Go", "React", "TypeScript", "WebCrypto", "Caddy"],
    live: "https://brina.chat",
  },
  {
    id: "iride",
    group: "own",
    title: "Iride",
    tagline: "Autonomous AI agent on Instagram",
    role: "Personal research project",
    period: "Nov 2026 – Present",
    categories: ["ai", "backend"],
    highlights: [
      "Chooses when to wake and whether to publish a post, a story or nothing, drawing on long-term semantic memory; for now everything goes through human approval on Telegram.",
      "Closed action set against prompt injection: the model only fills typed tool schemas and code executes them, so outside text never becomes a command.",
      "Mood model on Plutchik's wheel, with inertia and a baseline temperament; it can propose monthly rewrites of its own character, within fixed values checked by a separate reviewer.",
      "Longitudinal language corpus: every model call is logged with its prompt and the exact persona, character and rule versions, to study how an AI's language and identity shift over time.",
    ],
    stack: ["Python", "Claude API", "Instagram Graph API", "fastembed", "SQLite", "systemd", "three.js"],
    live: "https://www.instagram.com/iride.immagina/",
    liveLabel: "Instagram profile",
    views: [
      {
        title: "Her world",
        caption: "The neighbourhood she imagined, as a 3D diorama: she places the spots, each with the photos she posted there.",
        url: `${site.iride}/mondo/`,
        poster: "/iride/mondo.jpg",
      },
      {
        title: "Her mind",
        caption: "Values, memories and posts as nodes, linked by meaning through embeddings; colour by type or by the emotion she felt.",
        url: `${site.iride}/mente/`,
        poster: "/iride/mente.jpg",
      },
    ],
  },
  {
    id: "openhub2",
    group: "oss",
    title: "OpenHub2",
    tagline: "Open tooling for the Xiaomi Smart Home Hub 2",
    categories: ["iot"],
    highlights: [
      "Turns the hub into a cloud-free, brand-agnostic network Zigbee coordinator for Home Assistant (ZHA).",
      "Root SSH/SFTP, EFR32 radio bridged over TCP, ESPHome-compatible Bluetooth LE proxy (HCI over H5 UART).",
      "Embedded web dashboard and an experimental Buildroot userland with automatic fallback to stock firmware.",
    ],
    stack: ["Go", "Embedded Linux", "Buildroot", "Zigbee", "Bluetooth LE"],
    repo: `${site.github}/openhub2`,
  },
  {
    id: "picoprint",
    group: "oss",
    title: "PicoPrint",
    tagline: "Windows driver for the LX-D02 BLE thermal printer",
    categories: ["iot"],
    highlights: [
      "Adds the printer as a native Windows printer via an IPP server, so any app can print with Ctrl+P.",
      "Built on rusq/thermoprint; added the printer's BLE authentication handshake (reverse-engineered for interoperability) and Windows IPP compatibility.",
    ],
    stack: ["Go", "Bluetooth LE", "IPP", "Windows"],
    repo: `${site.github}/picoprint`,
  },
  {
    id: "zha-quirk",
    group: "oss",
    title: "ZHA quirk for Tuya TS0601",
    tagline: "Home Assistant thermostat integration",
    categories: ["iot"],
    highlights: [
      "Maps undocumented Tuya datapoints to the ZCL Thermostat cluster.",
      "On/off with physical-button sync, setpoint, child lock and a computed heating state.",
    ],
    stack: ["Python", "Home Assistant", "ZHA", "zigpy", "Tuya"],
    repo: `${site.github}/TZE284_4dqtqloc_quirk_HASS_INTEGRATION`,
  },
];

const categories: { key: Category | "all"; label: string }[] = [
  { key: "all", label: "All" },
  { key: "ai", label: "AI & LLM" },
  { key: "cloud", label: "Cloud & DevOps" },
  { key: "backend", label: "Backend" },
  { key: "fullstack", label: "Full-stack" },
  { key: "mobile", label: "Mobile" },
  { key: "fintech", label: "Fintech" },
  { key: "iot", label: "IoT & embedded" },
];

export function Projects() {
  const [filter, setFilter] = useState<Category | "all">("all");
  const [view, setView] = useState<LiveViewItem | null>(null);
  const closeView = useCallback(() => setView(null), []);

  const filteredProjects = filter === "all" ? projects : projects.filter(project => project.categories.includes(filter));

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  const scrollToContact = () => {
    const contactSection = document.querySelector("#contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="projects"
      className="py-20"
      style={{ backgroundColor: 'var(--background)' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={containerVariants}
          className="space-y-16"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center space-y-8">
            <h2 className="font-heading text-4xl md:text-6xl tracking-wide" style={{ color: 'var(--foreground)' }}>
              THINGS I&apos;VE SHIPPED
            </h2>
            <p className="text-lg font-light max-w-2xl mx-auto" style={{ color: 'var(--muted-foreground)' }}>
              Production platforms, AI backends, cloud infrastructure and open-source hardware tooling.
            </p>
          </motion.div>

          {/* Category Filters */}
          <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <motion.button
                key={category.key}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setFilter(category.key)}
                aria-pressed={filter === category.key}
                // globals.css forces every button white with !important; bg-primary is its black-button escape hatch
                className={cn(
                  "px-4 py-2 text-sm font-medium border transition-all duration-200",
                  filter === category.key && "bg-primary"
                )}
              >
                {category.label}
              </motion.button>
            ))}
          </motion.div>

          {/* Project Groups */}
          {groups.map((group) => {
            const groupProjects = filteredProjects.filter(project => project.group === group.key);
            if (groupProjects.length === 0) return null;

            return (
              <div key={group.key} className="space-y-8">
                {/* Group Header: animates on its own, since groups remount when the filter changes */}
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  variants={itemVariants}
                  className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 pb-4 border-b"
                  style={{ borderColor: 'var(--border)' }}
                >
                  <div className="space-y-2">
                    <h3 className="font-heading text-3xl md:text-4xl tracking-wide" style={{ color: 'var(--foreground)' }}>
                      {group.title}
                    </h3>
                    <p className="text-base font-light max-w-2xl" style={{ color: 'var(--muted-foreground)' }}>
                      {group.description}
                    </p>
                  </div>
                  <div className="space-y-1 md:text-right">
                    {group.meta.map((line) => (
                      <div key={line} className="text-xs font-medium uppercase tracking-wider" style={{ color: 'var(--foreground)' }}>
                        {line}
                      </div>
                    ))}
                  </div>
                </motion.div>

                {/* Projects Grid */}
                <div className="grid lg:grid-cols-2 gap-8">
                  {groupProjects.map((project) => (
                    <motion.article
                      key={project.id}
                      layout="position"
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, amount: 0.2 }}
                      variants={itemVariants}
                      whileHover={{ y: -4 }}
                      className="flex flex-col gap-6 p-8 border transition-all duration-300"
                      style={{
                        backgroundColor: 'var(--card)',
                        borderColor: 'var(--border)',
                      }}
                    >
                      {/* Project Header */}
                      <div className="space-y-2">
                        {(project.role || project.period) && (
                          <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-medium uppercase tracking-wider" style={{ color: 'var(--muted-foreground)' }}>
                            <span>{project.role}</span>
                            <span>{project.period}</span>
                          </div>
                        )}
                        <h4 className="font-heading text-2xl tracking-wide" style={{ color: 'var(--foreground)' }}>
                          {project.title}
                        </h4>
                        <p className="text-sm font-light" style={{ color: 'var(--muted-foreground)' }}>
                          {project.tagline}
                        </p>
                      </div>

                      {/* Metrics */}
                      {project.metrics && (
                        <div className="flex flex-wrap gap-2">
                          {project.metrics.map((metric) => (
                            <span
                              key={metric}
                              className="px-3 py-1 text-sm font-medium border"
                              style={{
                                borderColor: 'var(--foreground)',
                                color: 'var(--foreground)'
                              }}
                            >
                              {metric}
                            </span>
                          ))}
                        </div>
                      )}

                      {/* Highlights */}
                      <ul className="space-y-2 text-base font-light leading-relaxed" style={{ color: 'var(--muted-foreground)' }}>
                        {project.highlights.map((highlight) => (
                          <li key={highlight} className="flex gap-3">
                            <span aria-hidden className="mt-3 h-px w-3 shrink-0" style={{ backgroundColor: 'var(--foreground)' }} />
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Live views: a plain link that opens in place (modifier clicks still open a new tab) */}
                      {project.views && (
                        <div className="space-y-3">
                          <div className="text-xs font-medium uppercase tracking-wider" style={{ color: 'var(--muted-foreground)' }}>
                            Look inside · live, updated hourly
                          </div>
                          <div className="grid sm:grid-cols-2 gap-4">
                            {project.views.map((item) => (
                              <a
                                key={item.url}
                                href={item.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={(event) => {
                                  if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
                                  event.preventDefault();
                                  setView(item);
                                }}
                                className="group block border transition-colors duration-200"
                                style={{ borderColor: 'var(--border)' }}
                              >
                                <div className="relative aspect-[16/10] overflow-hidden" style={{ backgroundColor: '#0b0d12' }}>
                                  <Image
                                    src={item.poster}
                                    alt={`Preview of ${item.title.toLowerCase()}`}
                                    width={920}
                                    height={575}
                                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                                  />
                                  <span
                                    className="absolute bottom-2 right-2 flex items-center gap-1.5 px-2 py-1 text-xs font-medium"
                                    style={{ backgroundColor: 'rgba(0, 0, 0, 0.65)', color: '#fff' }}
                                  >
                                    <Maximize2 size={12} strokeWidth={1.5} />
                                    Explore
                                  </span>
                                </div>
                                <div className="p-3 space-y-1">
                                  <div className="text-sm font-medium" style={{ color: 'var(--foreground)' }}>
                                    {item.title}
                                  </div>
                                  <div className="text-sm font-light leading-snug" style={{ color: 'var(--muted-foreground)' }}>
                                    {item.caption}
                                  </div>
                                </div>
                              </a>
                            ))}
                          </div>
                          <p className="text-xs font-light" style={{ color: 'var(--muted-foreground)' }}>
                            The pages are in Italian, like her.
                          </p>
                        </div>
                      )}

                      {/* Stack */}
                      {project.stack.length > 0 && (
                        <div className="flex flex-wrap gap-2 mt-auto">
                          {project.stack.map((tech) => (
                            <span
                              key={tech}
                              className="px-2 py-1 text-xs font-medium border"
                              style={{
                                backgroundColor: 'var(--muted)',
                                borderColor: 'var(--border)',
                                color: 'var(--foreground)'
                              }}
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      )}

                      {/* Links */}
                      {(project.repo || project.live) && (
                        <div className="flex flex-wrap items-center gap-6">
                          {project.live && (
                            <motion.a
                              href={project.live}
                              target="_blank"
                              rel="noopener noreferrer"
                              whileHover={{ x: 3 }}
                              className="flex items-center gap-2 text-sm font-medium transition-colors duration-200"
                              style={{ color: 'var(--foreground)' }}
                            >
                              <ExternalLink size={16} strokeWidth={1.5} />
                              {project.liveLabel ?? "Product site"}
                            </motion.a>
                          )}
                          {project.repo && (
                            <motion.a
                              href={project.repo}
                              target="_blank"
                              rel="noopener noreferrer"
                              whileHover={{ x: 3 }}
                              className="flex items-center gap-2 text-sm font-medium transition-colors duration-200"
                              style={{ color: 'var(--foreground)' }}
                            >
                              <Github size={16} strokeWidth={1.5} />
                              View on GitHub
                            </motion.a>
                          )}
                        </div>
                      )}
                    </motion.article>
                  ))}
                </div>
              </div>
            );
          })}

          {/* Call to Action */}
          <motion.div
            variants={itemVariants}
            className="text-center space-y-6 p-12 border"
            style={{
              backgroundColor: 'var(--card)',
              borderColor: 'var(--border)'
            }}
          >
            <h3 className="font-heading text-3xl md:text-4xl tracking-wide" style={{ color: 'var(--foreground)' }}>
              HAVE A PLATFORM TO BUILD?
            </h3>
            <p className="text-lg font-light max-w-2xl mx-auto" style={{ color: 'var(--muted-foreground)' }}>
              Looking for someone to lead engineering, or need an architecture, cloud or LLM system
              that holds up in production? Tell me what you&apos;re working on.
            </p>
            <motion.button
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              onClick={scrollToContact}
              className="px-8 py-3 font-sans font-medium transition-all duration-200"
              style={{
                backgroundColor: 'var(--foreground)',
                color: 'var(--background)',
                border: '1px solid var(--foreground)',
              }}
            >
              Get In Touch
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
      <LiveView view={view} onClose={closeView} />
    </section>
  );
}
