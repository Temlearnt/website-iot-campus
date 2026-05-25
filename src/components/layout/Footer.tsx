import React from 'react';
import { Instagram } from 'lucide-react';
import Image from 'next/image';

export function Footer() {
  const navItems = [
    { label: 'Beranda', href: '/#home' },
    { label: 'Tentang Kami', href: '/#about' },
    { label: 'Kegiatan', href: '/#events' },
    { label: 'Struktur Organisasi', href: '/#organization' },
    { label: 'Galeri', href: '/#gallery' },
    { label: 'Kontak', href: '/#contact' },
  ];

  return (
    <footer className="bg-foreground text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Kiri: Logo + Deskripsi */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              {/* Logo dengan background putih */}
              <div className="bg-white p-1 rounded-lg">
                <div className="relative w-8 h-8">
                  <Image
                    src="/images/logo.png"
                    alt="Logo IoT Campus Krisnadwipayana"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
              <span className="font-headline font-bold text-xl">
                IoT Campus <span className="text-primary">Krisnadwipayana</span>
              </span>
            </div>
            <p className="text-white/60 text-sm max-w-md">
              Komunitas mahasiswa UNKRIS untuk belajar, berkreasi, dan membuat proyek IoT & AI bersama.
            </p>
            {/* Instagram icon */}
            <a
              href="https://www.instagram.com/iot.unkris/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-white/60 hover:text-primary transition-colors"
            >
              <Instagram className="w-5 h-5" />
              <span className="text-sm">@iot.unkris</span>
            </a>
          </div>

          {/* Kanan: Tautan Navigasi */}
          <div>
            <h4 className="font-bold text-lg mb-4">Tautan</h4>
            <ul className="grid grid-cols-2 gap-x-8 gap-y-2 text-sm text-white/60">
              {navItems.map((item) => (
                <li key={item.label}>
                  <a href={item.href} className="hover:text-primary transition-colors">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright & kebijakan */}
        <div className="border-t border-white/10 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-white/40 text-xs">
          <p>© 2026 IoT Campus Krisnadwipayana. Universitas Krisnadwipayana.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Kebijakan Privasi</a>
            <a href="#" className="hover:text-white transition-colors">Syarat & Ketentuan</a>
          </div>
        </div>
      </div>
    </footer>
  );
}