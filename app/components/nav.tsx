"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaGithub, FaLinkedinIn } from "react-icons/fa6";
import { HiOutlineEnvelope } from "react-icons/hi2";
import { profile } from "app/data/profile";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Progetti" },
  { href: "/blog", label: "Blog" },
] as const;

const contactItems = [
  {
    href: profile.links.github,
    label: "GitHub",
    icon: FaGithub,
  },
  {
    href: profile.links.linkedin,
    label: "LinkedIn",
    icon: FaLinkedinIn,
  },
  {
    href: `mailto:${profile.email}`,
    label: "Email",
    icon: HiOutlineEnvelope,
  },
] as const;

export function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--border)] bg-[color:var(--background)]/95 backdrop-blur">
      <nav
        aria-label="Navigazione principale"
        className="site-container flex min-h-16 items-center justify-between gap-2"
      >
        <div className="flex items-center gap-0 sm:gap-2">
          {navItems.map((item) => {
            const isActive =
              item.href === "/blog"
                ? pathname.startsWith("/blog")
                : item.href === "/projects"
                  ? pathname.startsWith("/projects")
                  : item.href === "/"
                    ? pathname === "/"
                    : false;

            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive ? "page" : undefined}
                className={`px-2 py-2 text-sm font-medium transition sm:px-3 ${
                  isActive
                    ? "text-[var(--accent)]"
                    : "text-[var(--muted)] hover:text-[var(--ink)]"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </div>

        <ul className="flex items-center gap-1" aria-label="Contatti">
          {contactItems.map((item) => {
            const Icon = item.icon;
            const isExternal = item.href.startsWith("http");

            return (
              <li key={item.label}>
                <a
                  href={item.href}
                  aria-label={item.label}
                  title={item.label}
                  target={isExternal ? "_blank" : undefined}
                  rel={isExternal ? "noopener noreferrer" : undefined}
                  className="flex h-9 w-9 items-center justify-center rounded-lg text-[var(--muted)] transition hover:bg-[var(--accent-soft)] hover:text-[var(--accent)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]"
                >
                  <Icon aria-hidden="true" size={18} strokeWidth={1.8} />
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
