import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles, Cpu } from 'lucide-react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

// Ganti dengan URL Google Form yang sebenarnya
const GOOGLE_FORM_URL = "https://forms.gle/RvGMnNxZpFR9URse6";

export function Hero() {
  const heroImg = PlaceHolderImages.find(img => img.id === 'hero-iot');

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 z-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,#EA580C_0%,transparent_50%)]" />
      </div>

      <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary text-primary text-sm font-semibold border border-primary/20">
            <Sparkles className="w-4 h-4" />
            <span>Komunitas IoT Universitas Krisnadwipayana</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold leading-[1.1] tracking-tight text-foreground">
            Membangun <span className="text-primary italic">Masa Depan</span> dengan IoT dan AI
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-lg leading-relaxed">
            Komunitas inovasi utama IoT Campus Krisnadwipayana yang didedikasikan untuk mengeksplorasi sinergi antara perangkat terhubung dan kecerdasan buatan.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            {/* Tombol Bergabung Sekarang menuju Google Form */}
            <a href={GOOGLE_FORM_URL} target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="rounded-full h-14 px-8 text-lg font-semibold shadow-lg shadow-primary/25">
                Bergabung Sekarang <ArrowRight className="ml-2" />
              </Button>
            </a>
            <div className="flex flex-col justify-center">
              <span className="text-sm font-bold uppercase tracking-widest text-primary">Slogan Kami</span>
              <span className="text-lg font-headline font-medium text-foreground">Fun, Serious, Research & Analysis</span>
            </div>
          </div>
        </div>

        <div className="relative h-[500px] lg:h-[600px] rounded-2xl overflow-hidden shadow-2xl ring-8 ring-white/50 bg-muted">
          {heroImg?.imageUrl ? (
            <Image
              src={heroImg.imageUrl}
              alt={heroImg.description || 'IoT Campus Hero'}
              fill
              className="object-cover"
              priority
              data-ai-hint="smart city iot"
            />
          ) : (
            <div className="flex items-center justify-center h-full">
              <Cpu className="w-16 h-16 text-primary/10" />
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
          <div className="absolute bottom-6 left-6 right-6 p-6 bg-white/10 backdrop-blur-md rounded-xl border border-white/20 text-white">
            <p className="text-sm font-medium opacity-80 uppercase tracking-wider mb-1">Kegiatan Kami</p>
            <h3 className="text-2xl font-bold">IoT Campus Krisnadwipayana</h3>
            <p className="text-sm">Workshop Arduino seru tapi mendalam. Dari eksperimen santai hingga analisis data nyata.</p>
          </div>
        </div>
      </div>
    </section>
  );
}