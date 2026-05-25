"use client"

import React from 'react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Badge } from '@/components/ui/badge';
import { ChevronRight } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const galleryItems = [
  { id: 'gallery-1', tag: 'Hackaton' },
  { id: 'gallery-2', tag: 'Seminar' },
  { id: 'gallery-3', tag: 'IoT Class' },
  { id: 'gallery-4', tag: 'Workshop' },
  { id: 'gallery-5', tag: 'Collaboration' },
  { id: 'gallery-6', tag: 'Exhibition' }
];

export function Gallery() {
  return (
    <section id="gallery" className="py-24 bg-background overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
          <Badge variant="outline" className="px-4 py-1 text-primary border-primary/20 bg-primary/5 uppercase tracking-widest text-xs font-bold">
            Pameran Inovasi
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold font-headline tracking-tight text-foreground">
            Inovasi dalam <span className="text-primary italic">Aksi</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Dokumentasi proyek terbaru, workshop, dan kegiatan dari komunitas kami.
          </p>
        </div>

        <div className="relative px-4 md:px-12">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {galleryItems.map((item) => {
                const img = PlaceHolderImages.find(p => p.id === item.id);
                if (!img) return null;
                
                return (
                  <CarouselItem key={item.id} className="pl-4 basis-full md:basis-1/2 lg:basis-1/3">
                    <div className="group relative overflow-hidden rounded-[2rem] cursor-pointer bg-muted aspect-video border border-border/50 shadow-sm transition-all hover:shadow-xl">
                      <Image
                        src={img.imageUrl}
                        alt={img.description || 'Gambar Inovasi'}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                        <Badge className="w-fit mb-2 bg-primary text-white font-bold text-[10px]">{item.tag}</Badge>
                        <h4 className="text-white font-bold text-lg leading-tight">{img.description}</h4>
                      </div>
                    </div>
                  </CarouselItem>
                );
              })}
            </CarouselContent>
            <div className="hidden md:block">
              <CarouselPrevious className="absolute -left-12 top-1/2 -translate-y-1/2 bg-white hover:bg-primary hover:text-white border-slate-200" />
              <CarouselNext className="absolute -right-12 top-1/2 -translate-y-1/2 bg-white hover:bg-primary hover:text-white border-slate-200" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
}
