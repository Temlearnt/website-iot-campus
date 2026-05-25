"use client";

import React, { useState } from 'react';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { GraduationCap, Award, Briefcase, Users, Cpu, Sparkles, X } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const organizationData = {
  advisors: [
    { name: "Pa Risanto", role: "Dosen Pembimbing", imgId: "dosen-1" },
    { name: "Pa Ali", role: "Dosen Pembimbing", imgId: "dosen-2" },
    { name: "Bu Mega", role: "Dosen Pembimbing", imgId: "dosen-3" },
  ],
  leader: { name: "I Putu Sutha", role: "Ketua", imgId: "leader-putu" },
  treasurer: { name: "Ryan Nanda", role: "Bendahara", imgId: "treasurer-ryan" },
  divisions: [
    {
      name: "Kompub",
      fullName: "Komunikasi dan Publikasi",
      icon: Users,
      head: { name: "Refaiz Adjie", role: "Ketua Divisi", imgId: "kompub-adjie" },
      members: [
        { name: "Bintang", role: "Anggota", imgId: "kompub-bintang" },
        { name: "Ikhwan", role: "Anggota", imgId: "kompub-ikhwan" },
      ],
      cadets: []
    },
    {
      name: "Sekfas",
      fullName: "Sekretaris dan Fasilitas",
      icon: Briefcase,
      head: { name: "Arhandi Ardian", role: "Ketua Divisi", imgId: "sekfas-jepri" },
      members: [],
      cadets: [
        { name: "Utsula", role: "Kadet", imgId: "sekfas-bila" },
      ]
    },
    {
      name: "Ristek",
      fullName: "Riset dan Teknologi",
      icon: Cpu,
      head: { name: "Bimo Bintang", role: "Ketua Divisi", imgId: "ristek-bimo" },
      members: [
        { name: "Afif", role: "Anggota", imgId: "ristek-afif" },
        { name: "Dika", role: "Anggota", imgId: "ristek-dika" },
        { name: "Ridho", role: "Anggota", imgId: "ristek-ridho" },
      ],
      cadets: [
        { name: "Andre", role: "Kadet", imgId: "ristek-andre" },
      ]
    }
  ]
};

export function Organization() {
  const [modalImage, setModalImage] = useState<string | null>(null);

  const openImage = (imageUrl: string) => {
    setModalImage(imageUrl);
  };

  const closeModal = () => {
    setModalImage(null);
  };

  return (
    <section id="organization" className="py-24 bg-gradient-to-b from-slate-50 to-white">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
          <Badge variant="outline" className="px-4 py-1 text-primary border-primary/20 bg-primary/5 uppercase tracking-widest text-xs font-bold">
            Struktur Organisasi
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold font-headline tracking-tight text-slate-900">
            IoT Campus <span className="text-primary">Krisnadwipayana</span>
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">
            Sinergi antara akademisi dan mahasiswa untuk mewujudkan inovasi teknologi masa depan.
          </p>
        </div>

        <div className="flex flex-col items-center">
          {/* Level 1: Dosen Pembimbing */}
          <div className="w-full max-w-4xl bg-white/80 backdrop-blur-sm rounded-3xl shadow-lg border border-slate-200 p-8 mb-12">
            <div className="flex items-center justify-center gap-2 text-slate-400 font-semibold uppercase tracking-wider text-xs mb-6">
              <GraduationCap className="w-4 h-4 text-primary" />
              <span>Dewan Pembimbing Akademik</span>
            </div>
            <div className="flex flex-wrap justify-center gap-6 md:gap-10">
              {organizationData.advisors.map((advisor, i) => (
                <MemberCard key={i} member={advisor} variant="advisor" onImageClick={openImage} />
              ))}
            </div>
          </div>

          <Connector />

          {/* Level 2: Ketua & Bendahara */}
          <div className="grid md:grid-cols-2 gap-10 max-w-2xl w-full mb-16">
            <div className="flex flex-col items-center space-y-3">
              <div className="flex items-center gap-2 text-[10px] font-semibold text-slate-400 uppercase tracking-wider">
                <Sparkles className="w-3 h-3 text-primary" />
                <span>Ketua</span>
              </div>
              <MemberCard member={organizationData.leader} variant="leader" onImageClick={openImage} />
            </div>
            <div className="flex flex-col items-center space-y-3">
              <div className="flex items-center gap-2 text-[10px] font-semibold text-slate-400 uppercase tracking-wider">
                <Briefcase className="w-3 h-3 text-primary" />
                <span>Bendahara</span>
              </div>
              <MemberCard member={organizationData.treasurer} variant="secondary" onImageClick={openImage} />
            </div>
          </div>

          <Connector />

          {/* Level 3: Divisi */}
          <div className="grid lg:grid-cols-3 gap-8 w-full max-w-7xl mt-8">
            {organizationData.divisions.map((div, i) => {
              const Icon = div.icon;
              return (
                <div key={i} className="group bg-white rounded-2xl border border-slate-200 shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden">
                  <div className="relative p-5 bg-gradient-to-r from-slate-50 to-white border-b border-slate-100 text-center">
                    <div className="inline-flex items-center justify-center p-2 bg-primary/10 rounded-xl mb-3 group-hover:scale-105 transition-transform">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <h4 className="font-bold text-xl text-slate-900">{div.name}</h4>
                    <p className="text-[10px] text-slate-400 font-medium uppercase tracking-wider mt-1">{div.fullName}</p>
                  </div>
                  
                  <div className="p-6 flex flex-col items-center space-y-8">
                    {/* Ketua Divisi */}
                    <div className="w-full space-y-2">
                      <p className="text-[9px] font-bold text-center uppercase tracking-[0.2em] text-primary/70">Ketua Divisi</p>
                      <div className="flex justify-center">
                        <MemberCard member={div.head} variant="head" onImageClick={openImage} />
                      </div>
                    </div>

                    {/* Anggota */}
                    {div.members.length > 0 && (
                      <div className="w-full space-y-3 pt-2">
                        <div className="relative">
                          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
                          <p className="text-[9px] font-bold text-center uppercase tracking-[0.2em] text-slate-400 mt-4">Anggota</p>
                        </div>
                        <div className="flex flex-wrap justify-center gap-3">
                          {div.members.map((m, idx) => (
                            <MemberCard key={idx} member={m} variant="member" onImageClick={openImage} />
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Kadet */}
                    {div.cadets.length > 0 && (
                      <div className="w-full space-y-3 pt-2">
                        <div className="relative">
                          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
                          <p className="text-[9px] font-bold text-center uppercase tracking-[0.2em] text-slate-400 mt-4">Kadet</p>
                        </div>
                        <div className="flex flex-wrap justify-center gap-3">
                          {div.cadets.map((c, idx) => (
                            <MemberCard key={idx} member={c} variant="cadet" onImageClick={openImage} />
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

      {/* Modal Popup untuk foto besar */}
      {modalImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm" onClick={closeModal}>
          <div className="relative max-w-[90vw] max-h-[90vh] bg-white/10 rounded-xl p-2" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={closeModal}
              className="absolute -top-10 right-0 text-white hover:text-primary transition-colors"
            >
              <X className="w-8 h-8" />
            </button>
            <img
              src={modalImage}
              alt="Foto anggota"
              className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl"
            />
          </div>
        </div>
      )}
    </section>
  );
}

function Connector() {
  return (
    <div className="flex flex-col items-center py-2">
      <div className="w-px h-12 bg-gradient-to-b from-primary/30 to-transparent" />
      <div className="w-2 h-2 rounded-full bg-primary/20 animate-pulse" />
      <div className="w-px h-12 bg-gradient-to-t from-primary/30 to-transparent" />
    </div>
  );
}

interface MemberCardProps {
  member: { name: string; role: string; imgId: string };
  variant?: 'default' | 'leader' | 'secondary' | 'head' | 'advisor' | 'member' | 'cadet';
  onImageClick: (imageUrl: string) => void;
}

function MemberCard({ member, variant = 'default', onImageClick }: MemberCardProps) {
  const img = PlaceHolderImages.find(p => p.id === member.imgId);
  
  // Ukuran konsisten untuk semua kartu
  const cardWidth = 'w-44';        // lebar 176px
  const avatarSize = 'w-16 h-16';  // avatar 64x64px
  const nameSize = 'text-sm';

  const variantStyles = {
    default: 'bg-white border-slate-200 shadow-sm text-slate-900',
    leader: 'bg-gradient-to-br from-primary to-primary/80 text-white shadow-xl shadow-primary/30 ring-4 ring-primary/20',
    secondary: 'bg-white border-2 border-primary/30 shadow-md text-slate-900',
    head: 'bg-slate-800 text-white shadow-md',
    advisor: 'bg-white border border-slate-200 shadow-sm hover:shadow-md transition-all',
    member: 'bg-white border border-slate-200 shadow-sm hover:border-primary/20',
    cadet: 'bg-white border border-dashed border-slate-300 shadow-none text-slate-600 opacity-80 hover:opacity-100 transition-opacity'
  };

  const handleAvatarClick = () => {
    if (img?.imageUrl) {
      onImageClick(img.imageUrl);
    }
  };

  return (
    <div className={`
      flex flex-col items-center text-center rounded-xl transition-all duration-300 hover:-translate-y-1
      ${variantStyles[variant]}
      ${cardWidth} p-3
    `}>
      <div className="relative mb-2 cursor-pointer" onClick={handleAvatarClick}>
        <Avatar className={`${avatarSize} ring-2 ${variant === 'leader' ? 'ring-white/40' : 'ring-primary/10'} ring-offset-1`}>
          {img?.imageUrl && <AvatarImage src={img.imageUrl} alt={member.name} className="object-cover" />}
          <AvatarFallback className={variant === 'leader' ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-600'}>
            {member.name.charAt(0)}
          </AvatarFallback>
        </Avatar>
        {variant === 'leader' && (
          <div className="absolute -top-1 -right-1 bg-amber-400 text-amber-900 p-1 rounded-full shadow-sm">
            <Award className="w-3 h-3" />
          </div>
        )}
      </div>
      <div className="space-y-0.5 w-full">
        <h4 className={`${nameSize} font-bold font-headline leading-tight truncate px-1`}>
          {member.name}
        </h4>
        <p className={`
          text-[9px] font-semibold uppercase tracking-wider
          ${variant === 'leader' ? 'text-white/80' : variant === 'head' ? 'text-primary/80' : 'text-slate-400'}
        `}>
          {member.role}
        </p>
      </div>
    </div>
  );
}