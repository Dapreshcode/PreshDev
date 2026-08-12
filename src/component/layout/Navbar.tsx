"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const navLinks = [
  { label: "Services", href: "/services" },
  { label: "Our Work", href: "/work" },
  { label: "Pricing", href: "/pricing" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <nav className="border-b border-white/10 bg-slate-950/90 backdrop-blur-md">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <Link
            href="/"
            onClick={closeMenu}
            className="text-xl font-bold tracking-tight text-white"
          >
            Presh<span className="text-yellow-400">Dev</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-8 lg:flex">
            <div className="flex items-center gap-7">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-slate-300 transition-colors hover:text-yellow-400"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <Link
              href="/start-project"
              className="rounded-full bg-yellow-400 px-5 py-2.5 text-sm font-semibold text-slate-950 transition-colors hover:bg-yellow-300"
            >
              Start Your Project
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isOpen}
            className="rounded-lg p-2 text-slate-200 transition-colors hover:bg-white/10 hover:text-yellow-400 lg:hidden"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="border-t border-white/10 bg-slate-950 px-4 py-6 lg:hidden">
            <div className="mx-auto flex max-w-7xl flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={closeMenu}
                  className="rounded-lg px-4 py-3 text-base font-medium text-slate-200 transition-colors hover:bg-white/5 hover:text-yellow-400"
                >
                  {link.label}
                </Link>
              ))}

              <Link
                href="/start-project"
                onClick={closeMenu}
                className="mt-4 rounded-full bg-yellow-400 px-5 py-3 text-center text-sm font-semibold text-slate-950 transition-colors hover:bg-yellow-300"
              >
                Start Your Project
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}