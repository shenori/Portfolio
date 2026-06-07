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

  // ── UI/UX ─────────────────────────────────────────────────────────
  {
    id: 4,
    tag: "ui-ux",
    category: "UI/UX Design",
    status: "Completed",
    statusColor: "status-done",
    title: "WisenTask - AI Marketing Page",
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

  // ── Java / Desktop ────────────────────────────────────────────────
  {
    id: 6,
    tag: "java",
    category: "Desktop Applications",
    status: "Completed",
    statusColor: "status-done",
    title: "GearRent Pro",
    subtitle: "Multi-Branch Equipment Rental System",
    description:
      "A Java Swing desktop application for managing equipment rentals across multiple branches. Features include multi-branch inventory management, customer registration with membership levels, automated rental pricing calculation, return processing with late fees and damage charges, overdue tracking, and comprehensive branch-wise revenue reports. Implements role-based access control (Admin, Branch Manager, Staff) and enforces complex business rules including booking overlap validation and security deposit management.",
    tools: ["Java 21", "Java Swing", "MySQL 8", "JDBC", "Apache Ant", "NetBeans"],
    type: "Individual Project • 2024 - 2025",
    coursework: "Comprehensive Master Java Developer (IJSE) — CW2",
    links: {
      github: "https://github.com/shenori/GearRentPro",
    },
  },

  // ── Backend APIs ──────────────────────────────────────────────────
  {
    id: 8,
    tag: "java",
    category: "Backend APIs",
    status: "Completed",
    statusColor: "status-done",
    title: "Smart Campus Management System",
    subtitle: "IoT-Enabled University Room & Sensor Management System",
    description:
      "A scalable, enterprise-grade campus management system built with JAX-RS (Jersey) framework and deployed on Apache Tomcat. Provides RESTful endpoints for intelligent room allocation and IoT sensor monitoring across university facilities. Includes HATEOAS discovery, sensor type filtering, sub-resource hierarchies for sensor readings, and comprehensive HTTP error handling with referential integrity constraints.",
    tools: ["Java 11", "JAX-RS", "Jersey 2.35", "Apache Tomcat 9", "Maven 3.6+", "Jackson JSON", "RESTful APIs", "Postman"],
    type: "Individual Project • 2024 - 2026",
    coursework: "Web Services & REST API (IJSE) — CW1",
    links: {
      github: "https://github.com/shenori/Smart-Campus-Api",
    },
  },

  // ── Full Stack ────────────────────────────────────────────────────
  {
    id: 10,
    tag: "fullstack",
    category: "Full Stack Applications",
    status: "Completed",
    statusColor: "status-done",
    title: "Online Food Ordering System",
    subtitle: "Full-Stack Restaurant Management & Ordering Platform",
    description:
      "A complete full-stack food ordering platform with React TypeScript frontend and Java Spring Boot backend. Features customer ordering, restaurant management, real-time order tracking, payment processing, and admin controls.",
    tools: ["TypeScript", "React 19", "Vite", "React Router", "Axios", "Bootstrap 5", "Tailwind CSS", "Java", "Spring Boot"],
    type: "Individual Project • 2024 - 2025",
    links: {
      live: "",
      github: "https://github.com/shenori/Online-Food-Ordering-System",
      figma: "",
    },
  },

  // ── Moved to last ─────────────────────────────────────────────────
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
      github: "",
      figma: "",
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
      github: "https://github.com/shenori/BetterMe",
    },
  },
];

const FILTERS = [
  { label: "All",          value: "all"      },
  { label: "Web Dev",      value: "web-dev"  },
  { label: "UI/UX Design", value: "ui-ux"   },
  { label: "Other",        value: "other"    },
];

function ProjectCard({ project }) {
  const {
    status, statusColor, title, subtitle,
    description, tools, type, links,
  } = project;

  const hasLinks = links && (links.figma || links.github || links.live);

  return (
    <div className="proj-card">
      <span className={`proj-status ${statusColor}`}>{status}</span>

      <h3 className="proj-title">{title}</h3>
      <p className="proj-subtitle">{subtitle}</p>

      <p className="proj-desc">{description}</p>

      <div className="proj-tools">
        {tools.map((t) => (
          <span key={t} className="proj-chip">{t}</span>
        ))}
      </div>

      <div className="proj-footer">
        <span className="proj-type">{type}</span>

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

  // Deduplicate by title as a safety net
  const unique = projects.filter(
    (p, i, arr) => arr.findIndex((x) => x.title === p.title) === i
  );

  const filtered =
    active === "all"
      ? unique
      : unique.filter((p) => p.tag === active);

  return (
    <section id="projects" className="proj-section">
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

      <div className="proj-grid">
        {filtered.map((p) => (
          <ProjectCard key={p.id} project={p} />
        ))}
      </div>
    </section>
  );
}