'use client'
import { useState } from 'react'
import Image from 'next/image'

const links = [
  { label: 'Home',    href: '#home'    },
  { label: 'About',   href: '#about'   },
  { label: 'Gallery', href: '#gallery' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-green-mid/95 backdrop-blur-sm h-20 px-[5%] flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="flex items-center">
          <Image
            src="/logo.svg"
            alt="MiniTrekkers"
            width={180}
            height={50}
            priority
            className="h-16 w-auto"
          />
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map(l => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-white/80 text-sm font-medium hover:text-ochre transition-colors"
              >
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contact"
              className="bg-ochre text-green-deep text-sm font-semibold px-5 py-2 rounded-full hover:opacity-90 transition-opacity"
            >
              Join Us
            </a>
          </li>
        </ul>

        {/* Hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-1"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          <span className={`block w-6 h-0.5 bg-white transition-all ${open ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-0.5 bg-white transition-all ${open ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-0.5 bg-white transition-all ${open ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="fixed top-20 left-0 right-0 z-40 bg-green-mid border-t border-white/10 px-[5%] py-4 flex flex-col gap-3 md:hidden">
          {links.map(l => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-white/85 font-medium py-2 border-b border-white/10"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="text-white/85 font-medium py-2"
          >
            Join Us
          </a>
        </div>
      )}
    </>
  )
}
