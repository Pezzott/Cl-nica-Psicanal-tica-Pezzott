"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { navLinks, siteConfig } from "@/lib/site";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-ink/5 bg-paper/90 backdrop-blur-md">
      <div className="container-measure flex items-center justify-between gap-4 py-3.5">
        <Link href="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <Image
            src="/img/Logo.JPG"
            alt={siteConfig.name}
            width={44}
            height={44}
            className="h-11 w-11 rounded-full object-cover ring-1 ring-sage/30"
            priority
          />
          <div className="leading-tight">
            <p className="font-display text-lg font-semibold tracking-tight text-ink sm:text-xl">
              Pezzott
            </p>
            <p className="hidden font-sans text-[11px] uppercase tracking-[0.14em] text-ink-muted sm:block">
              Clínica Psicanalítica
            </p>
          </div>
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
          {navLinks.map((link) => {
            const active =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`font-sans text-sm transition-colors ${
                  active ? "font-semibold text-ink" : "text-ink-muted hover:text-ink"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md border border-ink/10 px-3 py-2 font-sans text-sm text-ink md:hidden"
          aria-expanded={open}
          aria-label="Abrir menu"
          onClick={() => setOpen((value) => !value)}
        >
          Menu
        </button>
      </div>

      {open ? (
        <nav className="border-t border-ink/5 bg-paper px-5 py-4 md:hidden">
          <ul className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="block font-sans text-base text-ink"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
