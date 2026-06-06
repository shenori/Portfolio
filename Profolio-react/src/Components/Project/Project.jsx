import React, { useState } from "react";
import { FaFigma, FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import "./Project.css";

const projects = [
  // ── Web Dev ──────────────────────────────────────────────────────
  {
    id: 1,
    tag: "web-dev",
    category: "Web Dev",
    status: "In Progress",
    statusColor: "status-progress",
    title: "CrackCode",
    subtitle: "Gamified Learning Platform",
    description:
      "A gamified learning platform designed to make coding education engaging and interactive with challenges, progress tracking, and achievement systems.",
    tools: ["React", "Node.js", "MongoDB", "Express"],
    type: "Group Project • 2025 - Present",
    links: {
      live: "https://crackcodehq.com/",
      github: "https://github.com/CrackCode-dev/CrackCode-Main",
    },
  },
  {
    id: 2,
    tag: "web-dev",
    category: "Web Dev",
    status: "Completed",
    statusColor: "status-done",
    title: "Inventory Management System",
    subtitle: "Internal Tool — Ceyntics Systems (Pvt) Ltd",
    description:
      "A secure internal inventory management system with role-based access control, item borrow/return tracking, hierarchical storage management, and full audit log trail. Deployed on Railway (backend) and Vercel (frontend).",
    tools: ["Next.js", "Laravel", "PostgreSQL", "Sanctum"],
    type: "Individual Project • 2026",
    links: {
      live: "https://inventory-frontend-weld-three.vercel.app/",
      github: "https://github.com/shenori/Inventory-System",
    },
  },
  {
    id: 3,
    tag: "web-dev",
    category: "Web Dev",
    status: "Completed",
    statusColor: "status-done",
    title: "BetterMe",
    subtitle: "Personal Development Website",
    description:
      "Led a team to create a comprehensive personal development website with goal tracking and self-improvement resources.",
    tools: ["HTML", "CSS", "JavaScript"],
    type: "Team Leader • 2025",
    links: {
      live: "",
      github: "", 
      figma: "",
    },
  },

  // ── UI/UX ─────────────────────────────────────────────────────────
  {
    id: 4,
    tag: "ui-ux",
    category: "UI/UX Design",
    status: "Completed",
    statusColor: "status-done",
    title: "WisenTask – AI Marketing Page",
    subtitle: "Marketing Page UI Design",
    description:
      "High-fidelity marketing page UI/UX design for an AI-powered task management SaaS product, featuring hero section, bento feature grid, pricing cards and testimonials.",
    tools: ["Figma"],
    type: "Individual Project • 2025",
    links: {
      figma:
        "https://www.figma.com/proto/gcGyQ3m9SizbnZl4TQQepA/Untitled?node-id=0-1&t=fz57uveBx8S6W2K4-1",
      github: "",
      live: "",
    },
  },

  // ── Other / Backend ───────────────────────────────────────────────
  {
    id: 5,
    tag: "other",
    category: "Other",
    status: "Completed",
    statusColor: "status-done",
    title: "Hostel Management System",
    subtitle: "Room & Student Management",
    description:
      "A comprehensive Java application for managing hostel operations including room allocation, student records, and payment tracking.",
    tools: ["Java"],
    type: "Individual Project • 2025",
    links: {
      live: "",
      github: "", // add if you have one
      figma: "",
    },
  },
  {
    id: 6,
    tag: "other",
    category: "Other",
    status: "In Progress",
    statusColor: "status-progress",
    title: "Air Ticket Collector",
    subtitle: "Ticket Management System",
    description:
      "A back-end air ticket management system using Spring Boot with JPA database integration, managing airports, tickets, and travel data.",
    tools: ["Spring Boot", "MySQL"],
    type: "Individual Project • 2025 - Present",
    links: {
      live: "",
      github: "",
      figma: "",
    },
  },
  {
    id: 7,
    tag: "other",
    category: "Other",
    status: "Completed",
    statusColor: "status-done",
    title: "Traffic Data Analysis Tool",
    subtitle: "Data Visualization",
    description:
      "Python application for gathering and analyzing traffic data at two junctions with data visualization and statistical analysis.",
    tools: ["Python", "Tkinter"],
    type: "Individual Project • 2024",
    links: {
      live: "",
      github: "",
      figma: "",
    },
  },
  {
    id: 8,
    tag: "other",
    category: "Other",
    status: "Completed",
    statusColor: "status-done",
    title: "Smart Campus Management System",
    subtitle: "Academic Operations",
    description:
      "A scalable campus management system to streamline academic operations, using Spring Boot, MySQL, and RESTful APIs with Postman testing.",
    tools: ["Java", "Spring Boot", "MySQL", "REST API"],
    type: "Individual Project • 2026",
    links: {
      live: "",
      github: "",
      figma: "",
    },
  },
];

const FILTERS = [
  { label: "All",          value: "all" },
  { label: "Web Dev",      value: "web-dev" },
  { label: "UI/UX Design", value: "ui-ux" },
  { label: "Other",        value: "other" },
];

function ProjectCard({ project }) {
  const {
    status, statusColor, title, subtitle,
    description, tools, type, links,
  } = project;

  const hasLinks = links.figma || links.github || links.live;

  return (
    <div className="proj-card">
      {/* Status badge */}
      <span className={`proj-status ${statusColor}`}>{status}</span>

      {/* Title */}
      <h3 className="proj-title">{title}</h3>
      <p className="proj-subtitle">{subtitle}</p>

      {/* Description */}
      <p className="proj-desc">{description}</p>

      {/* Tools */}
      <div className="proj-tools">
        {tools.map((t) => (
          <span key={t} className="proj-chip">{t}</span>
        ))}
      </div>

      {/* Footer row */}
      <div className="proj-footer">
        <span className="proj-type">{type}</span>

        {/* Links — only show icons that have a URL */}
        {hasLinks && (
          <div className="proj-links">
            {links.figma && (
              <a href={links.figma} target="_blank" rel="noopener noreferrer"
                className="proj-link-btn" title="View on Figma">
                <FaFigma />
              </a>
            )}
            {links.github && (
              <a href={links.github} target="_blank" rel="noopener noreferrer"
                className="proj-link-btn" title="GitHub Repo">
                <FaGithub />
              </a>
            )}
            {links.live && (
              <a href={links.live} target="_blank" rel="noopener noreferrer"
                className="proj-link-btn" title="Live Site">
                <FaExternalLinkAlt />
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default function Projects() {
  const [active, setActive] = useState("all");

  const filtered =
    active === "all"
      ? projects
      : projects.filter((p) => p.tag === active);

  return (
    <section id="projects" className="proj-section">
      {/* Filter tabs */}
      <div className="proj-filters">
        {FILTERS.map((f) => (
          <button
            key={f.value}
            className={`proj-filter-btn ${active === f.value ? "active" : ""}`}
            onClick={() => setActive(f.value)}
          >
            {f.label}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="proj-grid">
        {filtered.map((p) => (
          <ProjectCard key={p.id} project={p} />
        ))}
      </div>
    </section>
  );
}
