import { profile } from "app/data/profile";

const links = [
  { label: "LinkedIn", href: profile.links.linkedin },
  { label: "GitHub", href: profile.links.github },
  { label: "Email", href: `mailto:${profile.email}` },
] as const;

export default function Footer() {
  return (
    <footer className="border-t border-[var(--border)] py-10">
      <div className="site-container flex flex-col gap-5 text-sm sm:flex-row sm:items-center sm:justify-between">
        <p className="text-[var(--muted)]">
          © {new Date().getFullYear()} {profile.name}
        </p>
        <ul className="flex flex-wrap gap-5">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  link.href.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                className="font-medium text-[var(--muted)] transition hover:text-[var(--accent)]"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
