import React from 'react';
import { ShieldCheck, Zap, Microscope, GraduationCap } from 'lucide-react';

const values = [
  {
    title: "Berbasis Pembelajaran",
    description: "Pengalaman langsung dengan perangkat keras IoT dan kerangka kerja AI terbaru.",
    icon: GraduationCap
  },
  {
    title: "Suasana Menyenangkan",
    description: "Kami percaya kreativitas berkembang di komunitas yang menghargai keceriaan dan koneksi.",
    icon: Zap
  },
  {
    title: "Komitmen Serius",
    description: "Mengembangkan proyek tingkat profesional yang memecahkan masalah dunia nyata.",
    icon: ShieldCheck
  },
  {
    title: "Berorientasi Riset",
    description: "Pendekatan analitis mendalam terhadap tantangan teknis dan ketat secara akademik.",
    icon: Microscope
  }
];

export function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
          <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-primary">Tentang Komunitas Kami</h2>
          <h3 className="text-4xl md:text-5xl font-bold">Tempat Ambisi Bertemu Konektivitas</h3>
          <p className="text-xl text-muted-foreground">
              IoT Campus Krisnadwipayana adalah wadah berkumpulnya mahasiswa Universitas Krisnadwipayana yang memiliki semangat dan minat yang sama dalam Internet of Things (IoT) dan Kecerdasan Buatan (AI).          
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((val, idx) => (
            <div key={idx} className="p-8 rounded-2xl border bg-background hover:border-primary/40 hover:shadow-xl transition-all group">
              <div className="w-14 h-14 rounded-xl bg-secondary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <val.icon className="w-8 h-8 text-primary" />
              </div>
              <h4 className="text-xl font-bold mb-3">{val.title}</h4>
              <p className="text-muted-foreground leading-relaxed">
                {val.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
