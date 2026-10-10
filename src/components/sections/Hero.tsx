"use client";

import React, { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronRight } from "lucide-react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "motion/react";
import { useApp } from "@/context/AppContext";

const GOOGLE_FORM_URL = "https://forms.gle/RvGMnNxZpFR9URse6";

export function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const { t } = useApp();

  // Parallax scroll effects
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const heroY = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.3]);

  // Interactive 3D Card tilt state based on mouse coordinates
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rX = ((y - centerY) / centerY) * -12;
    const rY = ((x - centerX) / centerX) * 12;

    setRotateX(rX);
    setRotateY(rY);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <section
      ref={containerRef}
      id="home"
      className="relative min-h-[90vh] flex items-center pt-20 pb-16 md:py-24 overflow-hidden bg-background"
      style={{ perspective: 1200 }}
    >
      {/* 3D Background floating rings & grid */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{
            rotate: 360,
            scale: [1, 1.08, 1],
          }}
          transition={{
            rotate: { duration: 35, repeat: Infinity, ease: "linear" },
            scale: { duration: 8, repeat: Infinity, ease: "easeInOut" },
          }}
          className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-primary/10 blur-3xl"
        />
        <motion.div
          animate={{
            rotate: -360,
            scale: [1, 1.12, 1],
          }}
          transition={{
            rotate: { duration: 40, repeat: Infinity, ease: "linear" },
            scale: { duration: 10, repeat: Infinity, ease: "easeInOut" },
          }}
          className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-orange-400/10 blur-3xl"
        />
      </div>

      <motion.div
        style={{ y: heroY, opacity: heroOpacity }}
        className="container mx-auto px-6 relative z-10"
      >
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headline & CTA */}
          <motion.div
            initial={{ opacity: 0, x: -50, rotateY: 15 }}
            animate={{ opacity: 1, x: 0, rotateY: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7 space-y-6"
            style={{ transformStyle: "preserve-3d" }}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-[1.15]">
              {t("Belajar, Riset, & Berinovasi Bersama", "Learn, Research, & Innovate with")}{" "}
              <span className="text-primary italic">IoT Campus</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed">
              {t(
                "Komunitas riset dan pengembangan Internet of Things (IoT) dan Kecerdasan Buatan (AI) untuk mahasiswa Universitas Krisnadwipayana (UNKRIS). Belajar, berkolaborasi, dan menciptakan proyek nyata bersama 3 dosen pembimbing ahli.",
                "Research and development community in Internet of Things (IoT) and Artificial Intelligence (AI) for Universitas Krisnadwipayana (UNKRIS) students. Learn, collaborate, and build real projects with 3 expert academic advisors."
              )}
            </p>

            {/* Slogan */}
            <div className="p-4 rounded-xl bg-card border shadow-xs max-w-md">
              <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground block mb-1">
                {t("Slogan Komunitas", "Community Slogan")}
              </span>
              <p className="text-base sm:text-lg font-bold text-foreground tracking-wide">
                Fun, Serious, Research & Analysis
              </p>
            </div>

            {/* Actions */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a href={GOOGLE_FORM_URL} target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="rounded-full px-8 font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all">
                  {t("Bergabung Sekarang", "Join Community Now")}
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </a>

              <a href="#about">
                <Button size="lg" variant="outline" className="rounded-full px-8 font-semibold hover:border-primary transition-all">
                  {t("Tentang Kami", "About Us")}
                  <ChevronRight className="w-4 h-4 ml-1 text-primary" />
                </Button>
              </a>
            </div>

            {/* Highlights */}
            <div className="pt-6 border-t grid grid-cols-3 gap-6 max-w-lg">
              <div>
                <span className="block text-3xl font-extrabold text-primary tabular-nums">3</span>
                <span className="text-xs sm:text-sm text-muted-foreground font-medium">
                  {t("Dosen Pembimbing", "Advisors")}
                </span>
              </div>
              <div>
                <span className="block text-3xl font-extrabold text-primary tabular-nums">3</span>
                <span className="text-xs sm:text-sm text-muted-foreground font-medium">
                  {t("Divisi Aktif", "Divisions")}
                </span>
              </div>
              <div>
                <span className="block text-3xl font-extrabold text-primary tabular-nums">100%</span>
                <span className="text-xs sm:text-sm text-muted-foreground font-medium">
                  {t("Proyek Nyata", "Hands-on Projects")}
                </span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: 3D Interactive Tilt Card */}
          <motion.div
            initial={{ opacity: 0, x: 50, rotateY: -15 }}
            animate={{ opacity: 1, x: 0, rotateY: 0 }}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 flex justify-center"
            style={{ perspective: 1000 }}
          >
            <motion.div
              ref={cardRef}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              animate={{
                rotateX,
                rotateY,
              }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 25,
              }}
              className="relative w-full max-w-md aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border border-white/40 dark:border-neutral-800 cursor-pointer group"
              style={{
                transformStyle: "preserve-3d",
                boxShadow: "0 25px 50px -12px rgba(234, 88, 12, 0.25), 0 10px 20px -5px rgba(0, 0, 0, 0.1)",
              }}
            >
              {/* Image */}
              <Image
                src="/images/deep-image.jpg"
                alt="IoT Campus Krisnadwipayana Workshop"
                fill
                priority
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

              {/* 3D Floating Badge */}
              <div
                className="absolute top-5 left-5 z-20 px-3.5 py-1.5 rounded-full bg-white/90 dark:bg-neutral-900/90 backdrop-blur-md shadow-md flex items-center gap-2 border border-white/50 dark:border-neutral-700"
                style={{ transform: "translateZ(30px)" }}
              >
                <span className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse" />
                <span className="text-xs font-bold text-neutral-900 dark:text-white tracking-wide">
                  Laboratorium IoT & AI
                </span>
              </div>

              {/* 3D Floating Bottom Caption */}
              <div
                className="absolute bottom-6 left-6 right-6 z-20 text-white space-y-1.5"
                style={{ transform: "translateZ(40px)" }}
              >
                <div className="text-xs uppercase font-bold tracking-widest text-primary-foreground/90">
                  Universitas Krisnadwipayana
                </div>
                <h3 className="text-xl sm:text-2xl font-bold font-headline leading-tight">
                  {t(
                    "Pusat Eksperimen & Analisis Teknologi Terdepan",
                    "Center of Advanced Experimentation & Technology Analysis"
                  )}
                </h3>
                <p className="text-xs text-white/80 line-clamp-2">
                  {t(
                    "Mengembangkan mikrokontroler, jaringan sensor cerdas, dan model AI bersama mahasiswa dan dosen.",
                    "Developing microcontrollers, intelligent sensor meshes, and AI models collaboratively."
                  )}
                </p>
              </div>

              {/* Gloss shine reflection effect in 3D */}
              <div
                className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ transform: "translateZ(20px)" }}
              />
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
