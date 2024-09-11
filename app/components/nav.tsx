'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navItems = {
  '/': {
    name: 'Home',
  },
  '/blog': {
    name: 'Blog',
  }
}

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname() // Get the current route

  return (
    <aside className="mb-16 tracking-tight">
      <div className="lg:sticky lg:top-20">
        <nav className="flex flex-row items-start relative px-0 pb-0 md:overflow-auto">
          {/* Mobile hamburger/X button */}
          <button
            className="lg:hidden flex items-center px-3 py-2 border rounded text-black dark:text-white"
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen} // Accessibility
            aria-label="Toggle navigation menu"
          >
            {isOpen ? (
              <svg
                className="fill-current h-3 w-3"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Close</title>
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M10 8.586l-4.293-4.293-1.414 1.414L8.586 10l-4.293 4.293 1.414 1.414L10 11.414l4.293 4.293 1.414-1.414L11.414 10l4.293-4.293-1.414-1.414L10 8.586z"
                />
              </svg>
            ) : (
              <svg
                className="fill-current h-3 w-3"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Menu</title>
                <path d="M0 3h20v2H0zM0 7h20v2H0zM0 11h20v2H0z" />
              </svg>
            )}
          </button>

          {/* Desktop & Mobile Menu */}
          <div
            className={`${isOpen ? 'block' : 'hidden'} lg:flex lg:space-x-4 transition-all duration-300 ease-in-out`}
          >
            {Object.entries(navItems).map(([path, { name }]) => {
              const isActive = pathname === path // Check if the link is active
              return (
                <Link
                  key={path}
                  href={path}
                  className={`transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle py-1 px-2 m-1 ${
                    isActive ? 'font-bold text-neutral-800 dark:text-neutral-200' : ''
                  }`}
                >
                  {name}
                </Link>
              )
            })}
          </div>
        </nav>
      </div>
    </aside>
  )
}
