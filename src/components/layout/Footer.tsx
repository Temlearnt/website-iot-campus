"use client";

import React from 'react';
import { Instagram, ArrowUp } from 'lucide-react';
import Image from 'next/image';
import { useApp } from '@/context/AppContext';

export function Footer() {
  const { t } = useApp();

  const navItems = [
    { label: t('Beranda', 'Home'), href: '#home' },
    { label: t('Tentang Kami', 'About Us'), href: '#about' },
    { label: t('Kegiatan', 'Events'), href: '#events' },
    { label: t('Struktur Organisasi', 'Organization'), href: '#organization' },
    { label: t('Galeri', 'Gallery'), href: '#gallery' },
    { label: t('Kontak', 'Contact'), href: '#contact' },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-neutral-950 text-white dark:bg-black border-t border-neutral-800 dark:border-neutral-900 py-14 transition-colors">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Kiri: Logo + Deskripsi */}
          <div className="md:col-span-7 space-y-5">
            <div className="flex items-center gap-3">
              <div className="bg-white p-1 rounded-xl shadow-xs">
                <div className="relative w-8 h-8">
                  <Image
                    src="/images/logo.png"
                    alt="Logo IoT Campus Krisnadwipayana"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="font-headline font-bold text-xl tracking-tight text-white leading-none">
                  IoT Campus <span className="text-primary italic">Krisnadwipayana</span>
                </span>
                <span className="text-[10px] tracking-widest uppercase font-semibold text-neutral-400 mt-1">
                  Universitas Krisnadwipayana
                </span>
              </div>
            </div>

            <p className="text-neutral-400 dark:text-neutral-500 text-sm max-w-lg leading-relaxed">
              {t(
                "Komunitas riset dan teknologi mahasiswa Universitas Krisnadwipayana (UNKRIS) yang fokus pada eksplorasi praktis Internet of Things, Artificial Intelligence, dan embedded systems.",
                "Research and technology community of Universitas Krisnadwipayana (UNKRIS) students focused on practical exploration of Internet of Things, Artificial Intelligence, and embedded systems."
              )}
            </p>

            {/* Social Link */}
            <div className="pt-1">
              <a
                href="https://www.instagram.com/iot.unkris/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-neutral-900 dark:bg-neutral-900 border border-neutral-800 hover:border-primary/50 text-neutral-300 hover:text-white transition-all text-xs font-semibold group"
              >
                <Instagram className="w-4 h-4 text-primary group-hover:scale-110 transition-transform" />
                <span>@iot.unkris</span>
              </a>
            </div>
          </div>

          {/* Kanan: Tautan Navigasi & Back to Top */}
          <div className="md:col-span-5 flex flex-col justify-between h-full space-y-6">
            <div>
              <h4 className="font-bold text-sm uppercase tracking-wider text-neutral-300 dark:text-neutral-400 mb-4 font-headline">
                {t('Tautan Navigasi', 'Quick Navigation')}
              </h4>
              <ul className="grid grid-cols-2 gap-x-6 gap-y-2.5 text-sm">
                {navItems.map((item) => (
                  <li key={item.label}>
                    <a 
                      href={item.href} 
                      className="text-neutral-400 dark:text-neutral-500 hover:text-primary transition-colors text-xs font-medium"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Back to top button */}
            <div className="pt-2 flex justify-start md:justify-end">
              <button
                onClick={scrollToTop}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-neutral-900 hover:bg-neutral-800 text-neutral-400 hover:text-white border border-neutral-800 text-xs transition-colors cursor-pointer"
                title={t("Kembali ke Atas", "Back to Top")}
              >
                <ArrowUp className="w-3.5 h-3.5 text-primary" />
                <span>{t("Ke Atas", "Back to Top")}</span>
              </button>
            </div>
          </div>
        </div>

        {/* Copyright & Info */}
        <div className="border-t border-neutral-800/80 dark:border-neutral-900 mt-12 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-neutral-500 dark:text-neutral-600 text-xs">
          <p>© 2026 IoT Campus Krisnadwipayana · Fakultas Teknik UNKRIS</p>
          <div className="flex gap-5">
            <span className="hover:text-neutral-400 transition-colors">
              {t("Pemberdayaan Mahasiswa & Riset Terbuka", "Student Empowerment & Open Research")}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
