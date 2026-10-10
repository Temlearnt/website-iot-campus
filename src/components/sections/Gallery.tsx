"use client"

import React from 'react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Badge } from '@/components/ui/badge';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useApp } from '@/context/AppContext';

const galleryItems = [
  { id: 'gallery-1', tag: 'Hackathon' },
  { id: 'gallery-2', tag: 'Seminar' },
  { id: 'gallery-3', tag: 'IoT Class' },
  { id: 'gallery-4', tag: 'Workshop' },
  { id: 'gallery-5', tag: 'Collaboration' },
  { id: 'gallery-6', tag: 'Exhibition' }
];

export function Gallery() {
  const { t } = useApp();

  return (
    <section id="gallery" className="py-24 bg-white dark:bg-neutral-950 overflow-hidden transition-colors">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
          <Badge variant="outline" className="px-4 py-1 text-primary border-primary/20 bg-primary/5 uppercase tracking-widest text-xs font-bold">
            {t("Pameran Inovasi", "Innovation Showcase")}
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold font-headline tracking-tight text-neutral-900 dark:text-white">
            {t("Inovasi dalam", "Innovation in")}{" "}
            <span className="text-primary italic">{t("Aksi", "Action")}</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            {t(
              "Dokumentasi proyek terbaru, workshop, dan kegiatan dari komunitas kami.",
              "Documentation of current projects, workshops, and activities from our community."
            )}
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
                    <div className="group relative overflow-hidden rounded-[2rem] cursor-pointer bg-neutral-100 dark:bg-neutral-900 aspect-video border border-neutral-200/80 dark:border-neutral-800 shadow-sm transition-all hover:shadow-xl">
                      <Image
                        src={img.imageUrl}
                        alt={img.description || 'Gambar Inovasi'}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-6">
                        <Badge className="w-fit mb-2 bg-primary text-white border-none">
                          {item.tag}
                        </Badge>
                        <p className="text-white text-sm font-medium line-clamp-2">
                          {img.description}
                        </p>
                      </div>
                    </div>
                  </CarouselItem>
                );
              })}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex -left-4 border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 text-neutral-900 dark:text-white hover:bg-neutral-100 dark:hover:bg-neutral-800" />
            <CarouselNext className="hidden md:flex -right-4 border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 text-neutral-900 dark:text-white hover:bg-neutral-100 dark:hover:bg-neutral-800" />
          </Carousel>
        </div>
      </div>
    </section>
  );
}
