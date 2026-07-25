'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { profile } from 'app/data/profile'

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/#projects', label: 'Progetti' },
  { href: '/blog', label: 'Blog' },
] as const

export function Navbar() {
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--border)] bg-[color:var(--background)]/95 backdrop-blur">
      <nav
        aria-label="Navigazione principale"
        className="site-container flex min-h-16 items-center justify-between gap-6"
      >
        <Link
          href="/"
          className="font-semibold text-[var(--ink)] transition hover:text-[var(--accent)]"
        >
          {profile.name}
        </Link>
        <div className="flex items-center gap-1 sm:gap-4">
          {navItems.map((item) => {
            const isActive =
              item.href === '/blog'
                ? pathname.startsWith('/blog')
                : item.href === '/'
                  ? pathname === '/'
                  : false

            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive ? 'page' : undefined}
                className={`px-2 py-2 text-sm font-medium transition sm:px-3 ${
                  isActive
                    ? 'text-[var(--accent)]'
                    : 'text-[var(--muted)] hover:text-[var(--ink)]'
                }`}
              >
                {item.label}
              </Link>
            )
          })}
        </div>
      </nav>
    </header>
  )
}
