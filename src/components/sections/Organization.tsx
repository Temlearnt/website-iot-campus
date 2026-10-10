"use client";

import React, { useState } from 'react';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { GraduationCap, Award, Briefcase, Users, Cpu, Sparkles, X, Layers, ShieldCheck } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import Image from 'next/image';
import { motion, AnimatePresence } from 'motion/react';
import { useApp } from '@/context/AppContext';

export function Organization() {
  const [modalImage, setModalImage] = useState<string | null>(null);
  const [selectedDivisionTab, setSelectedDivisionTab] = useState<string>("all");
  const { t } = useApp();

  const organizationData = {
    advisors: [
      { name: "Pa Risanto", role: t("Dosen Pembimbing", "Academic Advisor"), imgId: "dosen-1", title: t("Dosen Teknik & IoT", "Lecturer in Engineering & IoT") },
      { name: "Pa Ali", role: t("Dosen Pembimbing", "Academic Advisor"), imgId: "dosen-2", title: t("Dosen AI & Sistem Cerdas", "Lecturer in AI & Intelligent Systems") },
      { name: "Bu Mega", role: t("Dosen Pembimbing", "Academic Advisor"), imgId: "dosen-3", title: t("Dosen Jaringan & Komputasi", "Lecturer in Networks & Computing") },
    ],
    leader: { name: "I Putu Sutha", role: t("Ketua Komunitas", "Community Lead"), imgId: "leader-putu", prodi: "Teknik Informatika" },
    treasurer: { name: "Ryan Nanda", role: t("Bendahara Umum", "General Treasurer"), imgId: "treasurer-ryan", prodi: "Teknik Informatika" },
    divisions: [
      {
        id: "kompub",
        name: t("Komunikasi & Publikasi", "Communication & Publications"),
        shortName: "Kompub",
        icon: Users,
        description: t(
          "Bertanggung jawab atas publikasi karya, dokumentasi, branding media sosial, dan relasi eksternal.",
          "Responsible for research publication, documentation, social media branding, and external relations."
        ),
        head: { name: "Refaiz Adjie", role: t("Ketua Divisi", "Division Head"), imgId: "kompub-adjie" },
        members: [
          { name: "Bintang", role: t("Anggota", "Member"), imgId: "kompub-bintang" },
          { name: "Ikhwan", role: t("Anggota", "Member"), imgId: "kompub-ikhwan" },
        ],
        cadets: []
      },
      {
        id: "sekfas",
        name: t("Sekretaris & Fasilitas", "Secretary & Facilities"),
        shortName: "Sekfas",
        icon: Briefcase,
        description: t(
          "Mengelola administrasi, inventaris perangkat keras laboratorium, modul riset, dan koordinasi fasilitas.",
          "Manages community administration, lab hardware inventory, research modules, and facilities."
        ),
        head: { name: "Arhandi Ardian", role: t("Ketua Divisi", "Division Head"), imgId: "sekfas-jepri" },
        members: [],
        cadets: [
          { name: "Utsula", role: t("Kadet", "Cadet"), imgId: "sekfas-bila" },
        ]
      },
      {
        id: "ristek",
        name: t("Riset & Teknologi", "Research & Technology"),
        shortName: "Ristek",
        icon: Cpu,
        description: t(
          "Fokus pada pengembangan firmware mikrokontroler, arsitektur sensor TinyML, dan pembuatan prototipe.",
          "Focuses on microcontroller firmware engineering, TinyML sensor matrices, and prototype fabrication."
        ),
        head: { name: "Bimo Bintang", role: t("Ketua Divisi", "Division Head"), imgId: "ristek-bimo" },
        members: [
          { name: "Afif", role: t("Anggota", "Member"), imgId: "ristek-afif" },
          { name: "Dika", role: t("Anggota", "Member"), imgId: "ristek-dika" },
          { name: "Ridho", role: t("Anggota", "Member"), imgId: "ristek-ridho" },
        ],
        cadets: [
          { name: "Andre", role: t("Kadet", "Cadet"), imgId: "ristek-andre" },
        ]
      }
    ]
  };

  const openImage = (imageUrl: string) => {
    setModalImage(imageUrl);
  };

  const closeModal = () => {
    setModalImage(null);
  };

  const filteredDivisions = selectedDivisionTab === "all" 
    ? organizationData.divisions 
    : organizationData.divisions.filter(d => d.id === selectedDivisionTab);

  return (
    <section id="organization" className="py-24 bg-gradient-to-b from-neutral-50 via-white to-neutral-50/60 dark:from-neutral-900/40 dark:via-neutral-950 dark:to-neutral-900/40 overflow-hidden transition-colors">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
          <Badge variant="outline" className="px-4 py-1 text-primary border-primary/20 bg-primary/5 uppercase tracking-widest text-xs font-bold">
            {t("Struktur Organisasi", "Organizational Structure")}
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold font-headline tracking-tight text-neutral-900 dark:text-white">
            IoT Campus <span className="text-primary italic">Krisnadwipayana</span>
          </h2>
          <p className="text-neutral-500 dark:text-neutral-400 text-lg max-w-2xl mx-auto leading-relaxed">
            {t(
              "Kolaborasi solid antara dewan dosen pembimbing dan talenta mahasiswa UNKRIS dalam riset IoT dan AI.",
              "Close synergy between university faculty advisors and passionate student developers."
            )}
          </p>
        </div>

        {/* 1. TIER 1: DEWAN PEMBIMBING AKADEMIK (Card Showcase) */}
        <div className="max-w-5xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-2 mb-8">
            <span className="h-px w-12 bg-neutral-200 dark:bg-neutral-800" />
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 shadow-xs text-xs font-bold uppercase tracking-wider text-neutral-600 dark:text-neutral-300">
              <GraduationCap className="w-4 h-4 text-primary" />
              <span>{t("Dewan Pembimbing Akademik", "Academic Advisory Board")}</span>
            </div>
            <span className="h-px w-12 bg-neutral-200 dark:bg-neutral-800" />
          </div>

          <div className="grid sm:grid-cols-3 gap-6">
            {organizationData.advisors.map((advisor, i) => {
              const img = PlaceHolderImages.find(p => p.id === advisor.imgId);
              return (
                <div
                  key={i}
                  onClick={() => img?.imageUrl && openImage(img.imageUrl)}
                  className="group relative bg-white dark:bg-neutral-900 rounded-2xl p-6 border border-neutral-200 dark:border-neutral-800 shadow-xs hover:shadow-xl hover:border-primary/40 transition-all duration-300 cursor-pointer flex flex-col items-center text-center hover:-translate-y-1.5"
                >
                  <div className="relative mb-4">
                    <Avatar className="w-20 h-20 ring-4 ring-neutral-100 dark:ring-neutral-800 group-hover:ring-primary/20 transition-all shadow-md">
                      {img?.imageUrl && <AvatarImage src={img.imageUrl} alt={advisor.name} className="object-cover" />}
                      <AvatarFallback className="bg-primary/10 text-primary font-bold text-lg">
                        {advisor.name.charAt(0)}
                      </AvatarFallback>
                    </Avatar>
                    <div className="absolute -bottom-1 -right-1 bg-primary text-white p-1 rounded-full shadow-md">
                      <ShieldCheck className="w-3.5 h-3.5" />
                    </div>
                  </div>
                  <h4 className="font-bold font-headline text-lg text-neutral-900 dark:text-white group-hover:text-primary transition-colors">
                    {advisor.name}
                  </h4>
                  <Badge variant="secondary" className="mt-1 text-[11px] font-semibold text-primary bg-orange-50 dark:bg-orange-950/40 border border-orange-200/60 dark:border-orange-900/60">
                    {advisor.role}
                  </Badge>
                  <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-2 font-medium">
                    {advisor.title}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* 2. TIER 2: PIMPINAN UTAMA (Ketua & Bendahara - Elegant Duo Cards) */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-2 mb-8">
            <span className="h-px w-12 bg-neutral-200 dark:bg-neutral-800" />
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 shadow-xs text-xs font-bold uppercase tracking-wider text-neutral-600 dark:text-neutral-300">
              <Sparkles className="w-4 h-4 text-primary" />
              <span>{t("Pengurus Inti", "Core Leadership")}</span>
            </div>
            <span className="h-px w-12 bg-neutral-200 dark:bg-neutral-800" />
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Ketua Card */}
            {(() => {
              const leader = organizationData.leader;
              const img = PlaceHolderImages.find(p => p.id === leader.imgId);
              return (
                <div
                  onClick={() => img?.imageUrl && openImage(img.imageUrl)}
                  className="group relative bg-gradient-to-br from-neutral-900 to-neutral-800 dark:from-neutral-900 dark:to-black text-white rounded-3xl p-6 sm:p-7 shadow-xl hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 cursor-pointer overflow-hidden border border-neutral-700/60"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-full blur-2xl pointer-events-none" />
                  <div className="relative flex items-center gap-5">
                    <div className="relative shrink-0">
                      <Avatar className="w-20 h-20 ring-4 ring-primary/40 shadow-xl">
                        {img?.imageUrl && <AvatarImage src={img.imageUrl} alt={leader.name} className="object-cover" />}
                        <AvatarFallback className="bg-neutral-800 text-white font-bold">
                          {leader.name.charAt(0)}
                        </AvatarFallback>
                      </Avatar>
                      <div className="absolute -top-1 -right-1 bg-amber-400 text-neutral-950 p-1.5 rounded-full shadow-md">
                        <Award className="w-3.5 h-3.5 font-bold" />
                      </div>
                    </div>
                    <div className="space-y-1">
                      <span className="text-[10px] font-bold uppercase tracking-widest text-primary bg-primary/20 px-2.5 py-0.5 rounded-full border border-primary/30 inline-block mb-1">
                        {t("Pimpinan Organisasi", "Community Head")}
                      </span>
                      <h3 className="text-xl sm:text-2xl font-bold font-headline leading-tight">
                        {leader.name}
                      </h3>
                      <p className="text-sm font-semibold text-neutral-300">
                        {leader.role}
                      </p>
                      <p className="text-xs text-neutral-400">
                        {leader.prodi}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })()}

            {/* Bendahara Card */}
            {(() => {
              const treasurer = organizationData.treasurer;
              const img = PlaceHolderImages.find(p => p.id === treasurer.imgId);
              return (
                <div
                  onClick={() => img?.imageUrl && openImage(img.imageUrl)}
                  className="group relative bg-white dark:bg-neutral-900 rounded-3xl p-6 sm:p-7 shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300 cursor-pointer border border-neutral-200/80 dark:border-neutral-800 overflow-hidden"
                >
                  <div className="relative flex items-center gap-5">
                    <div className="relative shrink-0">
                      <Avatar className="w-20 h-20 ring-4 ring-orange-100 dark:ring-neutral-800 group-hover:ring-primary/20 transition-all shadow-md">
                        {img?.imageUrl && <AvatarImage src={img.imageUrl} alt={treasurer.name} className="object-cover" />}
                        <AvatarFallback className="bg-secondary text-primary font-bold">
                          {treasurer.name.charAt(0)}
                        </AvatarFallback>
                      </Avatar>
                      <div className="absolute -top-1 -right-1 bg-primary text-white p-1.5 rounded-full shadow-md">
                        <Briefcase className="w-3.5 h-3.5" />
                      </div>
                    </div>
                    <div className="space-y-1">
                      <span className="text-[10px] font-bold uppercase tracking-widest text-neutral-500 dark:text-neutral-400 bg-neutral-100 dark:bg-neutral-800 px-2.5 py-0.5 rounded-full inline-block mb-1">
                        {t("Keuangan & Aset", "Finance & Assets")}
                      </span>
                      <h3 className="text-xl sm:text-2xl font-bold font-headline leading-tight text-neutral-900 dark:text-white group-hover:text-primary transition-colors">
                        {treasurer.name}
                      </h3>
                      <p className="text-sm font-semibold text-neutral-600 dark:text-neutral-300">
                        {treasurer.role}
                      </p>
                      <p className="text-xs text-neutral-400">
                        {treasurer.prodi}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })()}
          </div>
        </div>

        {/* 3. TIER 3: DIVISI & ANGGOTA (Modular Card Grid with tabs) */}
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
            <div className="flex items-center gap-2">
              <Layers className="w-5 h-5 text-primary" />
              <h3 className="text-2xl font-bold font-headline text-neutral-900 dark:text-white">
                {t("Divisi Kerja & Anggota", "Divisions & Roster")}
              </h3>
            </div>

            {/* Filter buttons */}
            <div className="flex items-center gap-2 bg-neutral-100 dark:bg-neutral-900 p-1 rounded-xl border border-neutral-200 dark:border-neutral-800">
              <button
                onClick={() => setSelectedDivisionTab("all")}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                  selectedDivisionTab === "all"
                    ? "bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white shadow-xs"
                    : "text-neutral-500 hover:text-neutral-900 dark:hover:text-white"
                }`}
              >
                {t("Semua Divisi", "All Divisions")}
              </button>
              {organizationData.divisions.map((div) => (
                <button
                  key={div.id}
                  onClick={() => setSelectedDivisionTab(div.id)}
                  className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                    selectedDivisionTab === div.id
                      ? "bg-white dark:bg-neutral-800 text-primary shadow-xs"
                      : "text-neutral-500 hover:text-neutral-900 dark:hover:text-white"
                  }`}
                >
                  {div.shortName}
                </button>
              ))}
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 items-start">
            {filteredDivisions.map((div) => {
              const Icon = div.icon;
              return (
                <div
                  key={div.id}
                  className="bg-white dark:bg-neutral-900 rounded-3xl border border-neutral-200/90 dark:border-neutral-800 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden"
                >
                  {/* Division Card Header */}
                  <div className="p-6 border-b border-neutral-100 dark:border-neutral-800 bg-gradient-to-b from-neutral-50/80 to-white dark:from-neutral-900 dark:to-neutral-900/60">
                    <div className="flex items-center justify-between gap-3 mb-3">
                      <div className="w-10 h-10 rounded-xl bg-orange-50 dark:bg-orange-950/40 border border-orange-200/60 dark:border-orange-900/60 flex items-center justify-center text-primary shadow-xs">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-primary bg-primary/10 px-2.5 py-1 rounded-full">
                        {t("Divisi", "Division")}
                      </span>
                    </div>
                    <h4 className="text-xl font-bold font-headline text-neutral-900 dark:text-white">
                      {div.name}
                    </h4>
                    <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-1.5 leading-relaxed">
                      {div.description}
                    </p>
                  </div>

                  {/* Division Roster Content */}
                  <div className="p-6 space-y-6 flex-1">
                    {/* Ketua Divisi */}
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-neutral-400 block mb-2.5">
                        {t("Ketua Divisi", "Division Head")}
                      </span>
                      <PersonRow
                        person={div.head}
                        roleBadge={t("Ketua Divisi", "Head")}
                        isHead
                        onImageClick={openImage}
                      />
                    </div>

                    {/* Anggota */}
                    {div.members.length > 0 && (
                      <div>
                        <span className="text-[10px] font-bold uppercase tracking-wider text-neutral-400 block mb-2.5">
                          {t("Anggota Divisi", "Members")} ({div.members.length})
                        </span>
                        <div className="space-y-2">
                          {div.members.map((m, idx) => (
                            <PersonRow
                              key={idx}
                              person={m}
                              roleBadge={t("Anggota", "Member")}
                              onImageClick={openImage}
                            />
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Kadet */}
                    {div.cadets.length > 0 && (
                      <div>
                        <span className="text-[10px] font-bold uppercase tracking-wider text-neutral-400 block mb-2.5">
                          {t("Kadet", "Cadets")} ({div.cadets.length})
                        </span>
                        <div className="space-y-2">
                          {div.cadets.map((c, idx) => (
                            <PersonRow
                              key={idx}
                              person={c}
                              roleBadge={t("Kadet", "Cadet")}
                              isCadet
                              onImageClick={openImage}
                            />
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Lightbox Modal Popup */}
      <AnimatePresence>
        {modalImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4 cursor-pointer"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-md w-full bg-neutral-900 rounded-3xl p-3 shadow-2xl border border-neutral-700 overflow-hidden cursor-default"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/60 text-white hover:bg-primary transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="relative aspect-square w-full rounded-2xl overflow-hidden bg-neutral-950">
                <Image
                  src={modalImage}
                  alt="Foto profil anggota"
                  fill
                  className="object-cover"
                />
              </div>
              <p className="text-center text-xs text-neutral-400 py-3">
                {t("Klik di luar gambar atau tombol silang untuk menutup", "Click outside or close button to exit")}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

interface PersonRowProps {
  person: { name: string; role: string; imgId: string };
  roleBadge: string;
  isHead?: boolean;
  isCadet?: boolean;
  onImageClick: (imageUrl: string) => void;
}

function PersonRow({ person, roleBadge, isHead, isCadet, onImageClick }: PersonRowProps) {
  const img = PlaceHolderImages.find((p) => p.id === person.imgId);

  const handleClick = () => {
    if (img?.imageUrl) {
      onImageClick(img.imageUrl);
    }
  };

  return (
    <div
      onClick={handleClick}
      className={`flex items-center justify-between gap-3 p-2.5 rounded-xl transition-all duration-200 cursor-pointer ${
        isHead
          ? "bg-neutral-50 dark:bg-neutral-800/80 hover:bg-orange-50/60 dark:hover:bg-primary/10 border border-neutral-200/80 dark:border-neutral-700 hover:border-primary/30 shadow-xs"
          : isCadet
          ? "bg-neutral-50/50 dark:bg-neutral-800/40 hover:bg-neutral-100/80 dark:hover:bg-neutral-800 border border-dashed border-neutral-200 dark:border-neutral-700"
          : "bg-white dark:bg-neutral-800/50 hover:bg-neutral-50 dark:hover:bg-neutral-800 border border-neutral-100 dark:border-neutral-800 hover:border-neutral-200"
      }`}
    >
      <div className="flex items-center gap-3 min-w-0">
        <Avatar className={`w-10 h-10 shrink-0 ${isHead ? "ring-2 ring-primary/30" : "ring-1 ring-neutral-200 dark:ring-neutral-700"}`}>
          {img?.imageUrl && <AvatarImage src={img.imageUrl} alt={person.name} className="object-cover" />}
          <AvatarFallback className="text-xs font-bold bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300">
            {person.name.charAt(0)}
          </AvatarFallback>
        </Avatar>
        <div className="min-w-0">
          <p className="text-sm font-semibold text-neutral-900 dark:text-white truncate">
            {person.name}
          </p>
          <p className="text-[11px] text-neutral-400 truncate">
            {person.role}
          </p>
        </div>
      </div>

      <span
        className={`text-[10px] font-bold px-2 py-0.5 rounded-md uppercase tracking-wider shrink-0 ${
          isHead
            ? "bg-primary text-white"
            : isCadet
            ? "bg-neutral-200 dark:bg-neutral-700 text-neutral-600 dark:text-neutral-300"
            : "bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300"
        }`}
      >
        {roleBadge}
      </span>
    </div>
  );
}
