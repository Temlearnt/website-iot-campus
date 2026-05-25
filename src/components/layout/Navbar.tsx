"use client";

import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Menu, X, LogIn } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

const navItems = [
  { label: "Beranda", href: "/#home" },
  { label: "Tentang Kami", href: "/#about" },
  { label: "Kegiatan", href: "/#events" },
  { label: "Struktur Organisasi", href: "/#organization" },
  { label: "Galeri", href: "/#gallery" },
  { label: "Kontak", href: "/#contact" },
];

const GOOGLE_FORM_URL = "https://forms.gle/RvGMnNxZpFR9URse6";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      if (pathname === "/") {
        const sections = navItems.map((item) => item.href.replace("/#", ""));
        const current = sections.find((section) => {
          const el = document.getElementById(section);
          if (el) {
            const rect = el.getBoundingClientRect();
            return rect.top <= 100 && rect.bottom >= 100;
          }
          return false;
        });
        if (current) setActiveSection(current);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4",
        isScrolled
          ? "bg-white/90 backdrop-blur-md shadow-md py-3"
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          {/* Logo gambar */}
          <div className="relative w-8 h-8 group-hover:scale-105 transition-transform">
            <Image
              src="/images/logo.png"
              alt="Logo IoT Campus Krisnadwipayana"
              fill
              className="object-contain"
              priority
            />
          </div>
          <span className="font-headline font-bold text-xl tracking-tight text-foreground">
            IoT Campus <span className="text-primary">Krisnadwipayana</span>
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                activeSection === item.href.replace("/#", "")
                  ? "text-primary border-b-2 border-primary"
                  : "text-muted-foreground"
              )}
            >
              {item.label}
            </Link>
          ))}
          <a href={GOOGLE_FORM_URL} target="_blank" rel="noopener noreferrer">
            <Button className="rounded-full px-6 flex items-center gap-2">
              <LogIn className="w-4 h-4" /> Bergabung Sekarang
            </Button>
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden p-2 text-foreground"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-white border-b shadow-xl animate-in fade-in slide-in-from-top-4 duration-300">
          <div className="flex flex-col p-6 gap-4">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-lg font-medium hover:text-primary"
              >
                {item.label}
              </Link>
            ))}
            <a
              href={GOOGLE_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <Button className="w-full mt-2 flex items-center justify-center gap-2">
                <LogIn className="w-4 h-4" /> Bergabung Sekarang
              </Button>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}