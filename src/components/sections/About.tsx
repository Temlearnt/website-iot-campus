"use client";

import React from 'react';
import { ShieldCheck, Zap, Microscope, GraduationCap } from 'lucide-react';
import { motion } from 'motion/react';
import { useApp } from '@/context/AppContext';

export function About() {
  const { t } = useApp();

  const values = [
    {
      title: t("Berbasis Pembelajaran", "Learning-Driven"),
      description: t(
        "Pengalaman langsung dengan perangkat keras IoT dan kerangka kerja AI terbaru.",
        "Hands-on real experience with current IoT hardware and AI architectures."
      ),
      icon: GraduationCap
    },
    {
      title: t("Suasana Menyenangkan", "Fun Atmosphere"),
      description: t(
        "Kami percaya kreativitas berkembang di komunitas yang menghargai keceriaan dan koneksi.",
        "We believe breakthrough creativity thrives in communities prioritizing fun and connection."
      ),
      icon: Zap
    },
    {
      title: t("Komitmen Serius", "Serious Commitment"),
      description: t(
        "Mengembangkan proyek tingkat profesional yang memecahkan masalah dunia nyata.",
        "Building production-grade hardware solving practical real-world challenges."
      ),
      icon: ShieldCheck
    },
    {
      title: t("Berorientasi Riset", "Research-Oriented"),
      description: t(
        "Pendekatan analitis mendalam terhadap tantangan teknis dan ketat secara akademik.",
        "Deep analytical inquiry into complex engineering and academic rigor."
      ),
      icon: Microscope
    }
  ];

  return (
    <section id="about" className="py-24 bg-white dark:bg-neutral-950 transition-colors">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
          <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-primary">
            {t("Tentang Komunitas Kami", "About Our Community")}
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold font-headline text-neutral-900 dark:text-white">
            {t("Tempat Ambisi Bertemu Konektivitas", "Where Ambition Meets Connectivity")}
          </h3>
          <p className="text-xl text-muted-foreground">
            {t(
              "IoT Campus Krisnadwipayana adalah wadah berkumpulnya mahasiswa Universitas Krisnadwipayana yang memiliki semangat dan minat yang sama dalam Internet of Things (IoT) dan Kecerdasan Buatan (AI).",
              "IoT Campus Krisnadwipayana is a collaborative home for Universitas Krisnadwipayana students with a shared passion for the Internet of Things (IoT) and Artificial Intelligence (AI)."
            )}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((val, idx) => (
            <motion.div
              key={idx}
              whileHover={{
                y: -8,
                rotateX: 6,
                rotateY: -4,
                transition: { duration: 0.3 }
              }}
              className="p-8 rounded-2xl border bg-background dark:bg-neutral-900/60 hover:border-primary/40 hover:shadow-2xl transition-all group"
              style={{
                transformStyle: "preserve-3d",
                perspective: 800,
              }}
            >
              <div
                className="w-14 h-14 rounded-xl bg-secondary dark:bg-orange-950/40 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-sm"
                style={{ transform: "translateZ(20px)" }}
              >
                <val.icon className="w-8 h-8 text-primary" />
              </div>
              <h4
                className="text-xl font-bold mb-3 font-headline text-foreground"
                style={{ transform: "translateZ(15px)" }}
              >
                {val.title}
              </h4>
              <p
                className="text-muted-foreground leading-relaxed"
                style={{ transform: "translateZ(10px)" }}
              >
                {val.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
