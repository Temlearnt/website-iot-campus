"use client";

import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Menu, X, ArrowUpRight, Sun, Moon, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { useApp } from "@/context/AppContext";

const GOOGLE_FORM_URL = "https://forms.gle/RvGMnNxZpFR9URse6";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const { lang, toggleLang, theme, toggleTheme, t } = useApp();

  const navItems = [
    { label: t("Beranda", "Home"), href: "#home", id: "home" },
    { label: t("Tentang", "About"), href: "#about", id: "about" },
    { label: t("Kegiatan", "Events"), href: "#events", id: "events" },
    { label: t("Organisasi", "Organization"), href: "#organization", id: "organization" },
    { label: t("Galeri", "Gallery"), href: "#gallery", id: "gallery" },
    { label: t("Kontak", "Contact"), href: "#contact", id: "contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);

      const sectionIds = ["home", "about", "events", "organization", "gallery", "contact"];
      const current = sectionIds.find((id) => {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          return rect.top <= 140 && rect.bottom >= 140;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          "sticky top-0 left-0 right-0 z-40 transition-all duration-300 font-sans border-b",
          isScrolled
            ? "bg-white/95 dark:bg-neutral-900/95 backdrop-blur-md border-neutral-200/80 dark:border-neutral-800 shadow-sm py-3"
            : "bg-white/80 dark:bg-neutral-950/80 backdrop-blur-sm border-transparent py-4"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-6 flex items-center justify-between">
          {/* Logo & Brand Mark */}
          <Link href="#home" className="flex items-center gap-3 group">
            <div className="relative w-8 h-8 rounded-lg overflow-hidden bg-white dark:bg-neutral-900 p-1 flex items-center justify-center ring-1 ring-neutral-200 dark:ring-neutral-800 transition-transform group-hover:scale-105 shadow-xs">
              <Image
                src="/images/logo.png"
                alt="Logo IoT Campus Krisnadwipayana"
                width={28}
                height={28}
                className="object-contain"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-base md:text-lg tracking-tight text-neutral-900 dark:text-white leading-none">
                IoT CAMPUS
              </span>
              <span className="text-[10px] tracking-widest uppercase font-semibold text-primary mt-0.5">
                Krisnadwipayana
              </span>
            </div>
          </Link>

          {/* Desktop Navigation - Concise 6 menu items */}
          <nav className="hidden lg:flex items-center gap-6">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={item.href}
                  className={cn(
                    "relative text-sm font-medium tracking-wide transition-colors py-1",
                    isActive
                      ? "text-primary font-semibold"
                      : "text-neutral-600 dark:text-neutral-300 hover:text-primary dark:hover:text-primary"
                  )}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Desktop Controls: Theme + Language + CTA */}
          <div className="hidden sm:flex items-center gap-2.5">
            {/* Language Switcher Button (ID / EN) */}
            <button
              onClick={toggleLang}
              className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900 text-xs font-semibold text-neutral-700 dark:text-neutral-200 hover:text-primary hover:border-primary/50 transition-all cursor-pointer"
              title={lang === "id" ? "Switch to English" : "Ganti ke Bahasa Indonesia"}
            >
              <Globe className="w-3.5 h-3.5 text-primary" />
              <span className="uppercase">{lang}</span>
            </button>

            {/* Light / Dark Mode Toggle Button */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900 text-neutral-700 dark:text-neutral-200 hover:text-primary hover:border-primary/50 transition-all cursor-pointer"
              title={theme === "light" ? "Aktifkan Mode Gelap" : "Aktifkan Mode Terang"}
              aria-label="Toggle theme"
            >
              {theme === "light" ? (
                <Moon className="w-4 h-4 text-neutral-600 hover:text-primary" />
              ) : (
                <Sun className="w-4 h-4 text-amber-400" />
              )}
            </button>

            {/* Primary CTA */}
            <a href={GOOGLE_FORM_URL} target="_blank" rel="noopener noreferrer">
              <Button
                size="sm"
                className="rounded-full px-4 h-9 text-xs font-semibold bg-neutral-950 dark:bg-primary hover:bg-neutral-800 dark:hover:bg-primary/90 text-white shadow-none transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                {t("Gabung", "Join Us")}
                <ArrowUpRight className="w-3.5 h-3.5 ml-1 text-primary dark:text-white" />
              </Button>
            </a>
          </div>

          {/* Mobile Right Controls: Theme + Lang + Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={toggleLang}
              className="px-2 py-1 rounded-md border border-neutral-200 dark:border-neutral-800 text-xs font-bold text-neutral-700 dark:text-neutral-200 uppercase"
            >
              {lang}
            </button>

            <button
              onClick={toggleTheme}
              className="p-1.5 rounded-md border border-neutral-200 dark:border-neutral-800 text-neutral-700 dark:text-neutral-200"
              aria-label="Toggle theme"
            >
              {theme === "light" ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4 text-amber-400" />}
            </button>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-1.5 rounded-lg text-neutral-800 dark:text-white hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 top-[65px] z-30 bg-neutral-950/50 backdrop-blur-sm lg:hidden animate-in fade-in duration-200">
          <div className="bg-white dark:bg-neutral-900 border-b border-neutral-200 dark:border-neutral-800 p-6 shadow-xl animate-in slide-in-from-top-4 duration-200">
            <div className="flex flex-col space-y-2 pb-5 border-b border-neutral-100 dark:border-neutral-800">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={cn(
                    "text-base font-semibold py-2.5 px-3 rounded-xl transition-colors flex items-center justify-between",
                    activeSection === item.id
                      ? "bg-orange-50 dark:bg-primary/10 text-primary"
                      : "text-neutral-800 dark:text-neutral-200 hover:bg-neutral-50 dark:hover:bg-neutral-800"
                  )}
                >
                  <span>{item.label}</span>
                </a>
              ))}
            </div>

            <div className="pt-5 flex flex-col gap-3">
              <a
                href={GOOGLE_FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full"
              >
                <Button className="w-full rounded-full h-11 bg-primary hover:bg-primary/90 text-white font-semibold">
                  {t("Daftar Sekarang", "Register Now")}
                  <ArrowUpRight className="w-4 h-4 ml-1.5" />
                </Button>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
