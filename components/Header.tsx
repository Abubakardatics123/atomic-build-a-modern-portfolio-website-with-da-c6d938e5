"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import { navLinks, personalInfo } from "@/lib/data";
import { useActiveSection } from "@/hooks/useActiveSection";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const sectionIds = navLinks.map((l) => l.href);
  const activeSection = useActiveSection(sectionIds);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const headerClass = scrolled
    ? "bg-white/80 dark:bg-black/80 backdrop-blur-xl border-b border-gray-200/50 dark:border-white/10 shadow-sm"
    : "bg-transparent";

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={"fixed top-0 left-0 right-0 z-50 transition-all duration-300 " + headerClass}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <motion.a
              href="#hero"
              onClick={(e) => { e.preventDefault(); handleNavClick("#hero"); }}
              className="text-xl font-bold text-gradient"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {personalInfo.name.split(" ")[0]}
              <span className="text-indigo-500">.</span>
            </motion.a>

            <nav className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href;
                const linkClass = isActive
                  ? "text-indigo-600 dark:text-indigo-400"
                  : "text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white";
                return (
                  <button
                    key={link.href}
                    onClick={() => handleNavClick(link.href)}
                    className={"relative px-4 py-2 text-sm font-medium rounded-lg transition-colors duration-200 " + linkClass}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="activeNav"
                        className="absolute inset-0 bg-indigo-50 dark:bg-indigo-500/10 rounded-lg"
                        transition={{ type: "spring", bounce: 0.2, duration: 0.4 }}
                      />
                    )}
                    <span className="relative z-10">{link.label}</span>
                  </button>
                );
              })}
            </nav>

            <div className="flex items-center gap-3">
              <ThemeToggle />
              <a
                href={personalInfo.resume}
                className="hidden md:inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-500 rounded-lg transition-all duration-200 hover:-translate-y-0.5"
              >
                Resume
              </a>
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="md:hidden w-9 h-9 flex items-center justify-center rounded-lg bg-gray-100 dark:bg-white/10 hover:bg-gray-200 dark:hover:bg-white/20 transition-colors"
                aria-label="Toggle mobile menu"
              >
                {mobileOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed top-16 left-0 right-0 z-40 bg-white/95 dark:bg-black/95 backdrop-blur-xl border-b border-gray-200 dark:border-white/10 md:hidden"
          >
            <nav className="max-w-6xl mx-auto px-4 py-4 flex flex-col gap-1">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href;
                const mobileClass = isActive
                  ? "text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-500/10"
                  : "text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-white/5";
                return (
                  <button
                    key={link.href}
                    onClick={() => handleNavClick(link.href)}
                    className={"w-full text-left px-4 py-3 text-sm font-medium rounded-lg transition-colors duration-200 " + mobileClass}
                  >
                    {link.label}
                  </button>
                );
              })}
              <a
                href={personalInfo.resume}
                className="mt-2 px-4 py-3 text-sm font-semibold text-center text-white bg-indigo-600 hover:bg-indigo-500 rounded-lg transition-colors"
              >
                Download Resume
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
