"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
type Lang = "en" | "uk";

interface NavbarProps {
  nav: {
    about: string;
    challenges: string;
    expertise: string;
    services: string;
    projects: string;
    contact: string;
    cta: string;
  };
  lang: Lang;
  nextLang: Lang;
}

const Navbar = ({ nav, lang, nextLang }: NavbarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: "#about", label: nav.about, path: "./about" },
    { href: "#challenges", label: nav.challenges, path: "./solutions" },
    { href: "#areas", label: nav.expertise, path: "./expertise" },
    { href: "#services", label: nav.services, path: "./services" },
    { href: "#projects", label: nav.projects, path: "./projects" },
    { href: "#contact", label: nav.contact, path: "./contact" },
  ];

  return (
    <nav className="fixed top-0 w-full bg-background-elevated/95 backdrop-blur-md z-50 border-b border-border shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo as terminal prompt */}
          <div className="font-mono text-sm md:text-base tracking-tight">
            <span className="text-syntax-green">oleksandr</span>
            <span className="text-foreground-muted">@</span>
            <span className="text-syntax-purple">portfolio</span>
            <span className="text-foreground-muted">:</span>
            <span className="text-syntax-cyan">~</span>
            <span className="text-foreground-muted">$</span>
            <span className="inline-block w-2 h-4 ml-1 bg-syntax-teal animate-blink align-middle" />
          </div>

          {/* Desktop nav links */}
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-3 py-2 text-sm font-mono text-foreground-muted hover:text-syntax-teal transition-colors rounded-md hover:bg-syntax-teal/5"
              >
                <span className="text-foreground-muted/60">./</span>
                {link.path.replace("./", "")}
              </a>
            ))}
          </div>

          {/* Right side: language toggle + CTA */}
          <div className="flex items-center gap-2">
            {/* Language toggle */}
            <Link
              href={{ pathname: "/", query: { lang: nextLang } }}
              className="font-mono text-sm px-3 py-1.5 rounded-md border border-border hover:border-syntax-teal hover:text-syntax-teal transition-colors"
              aria-label="Switch language"
            >
              [<span className="uppercase">{lang}</span>]
            </Link>

            {/* CTA button */}
            <a
              href="#contact"
              className="hidden sm:flex items-center gap-1.5 font-mono text-sm bg-foreground text-foreground-inverse px-4 py-2 rounded-md hover:bg-syntax-teal hover:text-foreground transition-colors"
            >
              <span className="text-syntax-teal group-hover:text-foreground">$</span>
              {nav.cta}
            </a>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 text-foreground-muted hover:text-foreground transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border">
            <div className="flex flex-col space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="px-4 py-3 text-sm font-mono text-foreground-muted hover:text-syntax-teal hover:bg-syntax-teal/5 rounded-md transition-colors"
                >
                  <span className="text-foreground-muted/60">./</span>
                  {link.path.replace("./", "")}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
