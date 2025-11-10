'use client'

import Link from 'next/link'
import { useState } from 'react'

type NavItem = {
  label: string
  href: string
}

type Props = {
  navItems: NavItem[]
}

export default function PrimaryNav({ navItems }: Props) {
  const [isOpen, setIsOpen] = useState(false)

  const closeMenu = () => setIsOpen(false)

  return (
    <header className="sticky top-0 z-30 border-b border-white/5 bg-slate-950/80 backdrop-blur-xl">
      <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-5 text-sm uppercase tracking-wide text-slate-200 sm:px-8">
        <span className="font-semibold text-white">Shreya De</span>

        <div className="hidden items-center gap-6 text-xs text-slate-300 md:flex md:text-sm">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition hover:text-white"
            >
              {item.label}
            </Link>
          ))}
          <a
            href="mailto:shreyade783@gmail.com"
            className="rounded-full border border-white/10 px-4 py-2 text-xs font-semibold text-slate-100 transition hover:border-white hover:bg-white/10"
          >
            Available for freelance
          </a>
        </div>

        <button
          type="button"
          className="rounded-full border border-white/10 px-4 py-2 text-xs font-semibold text-slate-100 transition hover:border-white hover:bg-white/10 md:hidden"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
        >
          {isOpen ? 'Close' : 'Menu'}
        </button>
      </nav>

      <div
        className={`md:hidden ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        } overflow-hidden border-t border-white/5 bg-slate-950/95 transition-all duration-300`}
      >
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-6 py-6 text-sm uppercase tracking-wide text-slate-200">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-2xl border border-white/10 px-4 py-3 text-white transition hover:border-white hover:bg-white/10"
              onClick={closeMenu}
            >
              {item.label}
            </Link>
          ))}
          <a
            href="mailto:shreyade783@gmail.com"
            className="rounded-2xl border border-white/20 px-4 py-3 text-center text-white transition hover:border-white hover:bg-white/10"
            onClick={closeMenu}
          >
            Available for freelance
          </a>
        </div>
      </div>
    </header>
  )
}
