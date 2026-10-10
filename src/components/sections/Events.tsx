"use client";

import React, { useState, useEffect } from 'react';
import { Calendar, MapPin, ArrowRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { useApp } from '@/context/AppContext';

const eventData = [
  {
    id: "e1",
    title: "The AI Collective Jakarta | Humans in AI Week",
    date: "2026-06-01T12:00:00",
    location: "Jakarta, Indonesia",
    category: "Meetup",
    imgId: "event-1",
    registrationLink: "https://luma.com/aic-jakarta-hiai"
  },
  {
    id: "e2",
    title: "Kiro Meetup Bekasi",
    date: "2026-06-08T18:00:00",
    location: "Kota Bekasi, Jawa Barat",
    category: "Meetup",
    imgId: "event-2",
    registrationLink: "https://luma.com/sakxkj89?locale=id"
  }
];

function Countdown({ targetDate }: { targetDate: string }) {
  const [timeLeft, setTimeLeft] = useState({ hari: 0, jam: 0, menit: 0, detik: 0 });
  const { t } = useApp();

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = new Date(targetDate).getTime() - now;
      if (distance < 0) {
        clearInterval(timer);
        return;
      }
      setTimeLeft({
        hari: Math.floor(distance / (1000 * 60 * 60 * 24)),
        jam: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        menit: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        detik: Math.floor((distance % (1000 * 60)) / 1000)
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="grid grid-cols-4 gap-2 text-center">
      <div className="bg-neutral-100 dark:bg-neutral-800 p-2 rounded-xl">
        <span className="block font-bold text-lg text-primary tabular-nums">{timeLeft.hari}</span>
        <span className="text-[10px] text-muted-foreground uppercase">{t("Hari", "Days")}</span>
      </div>
      <div className="bg-neutral-100 dark:bg-neutral-800 p-2 rounded-xl">
        <span className="block font-bold text-lg text-primary tabular-nums">{timeLeft.jam}</span>
        <span className="text-[10px] text-muted-foreground uppercase">{t("Jam", "Hours")}</span>
      </div>
      <div className="bg-neutral-100 dark:bg-neutral-800 p-2 rounded-xl">
        <span className="block font-bold text-lg text-primary tabular-nums">{timeLeft.menit}</span>
        <span className="text-[10px] text-muted-foreground uppercase">{t("Menit", "Min")}</span>
      </div>
      <div className="bg-neutral-100 dark:bg-neutral-800 p-2 rounded-xl">
        <span className="block font-bold text-lg text-primary tabular-nums">{timeLeft.detik}</span>
        <span className="text-[10px] text-muted-foreground uppercase">{t("Detik", "Sec")}</span>
      </div>
    </div>
  );
}

export function Events() {
  const { t, lang } = useApp();

  return (
    <section id="events" className="py-24 bg-neutral-50/50 dark:bg-neutral-900/30 transition-colors">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-4">
            <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-primary">
              {t("Kegiatan Komunitas", "Community Events")}
            </h2>
            <h3 className="text-4xl md:text-5xl font-bold font-headline text-foreground">
              {t("Agenda Mendatang", "Upcoming Agenda")}
            </h3>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {eventData.map((event) => {
            const img = PlaceHolderImages.find(p => p.id === event.imgId);
            return (
              <Card key={event.id} className="overflow-hidden border border-neutral-200/80 dark:border-neutral-800 shadow-xl hover:shadow-2xl transition-all duration-300 group rounded-3xl bg-white dark:bg-neutral-900">
                <div className="grid md:grid-cols-2 h-full">
                  <div className="relative h-64 md:h-full overflow-hidden bg-neutral-100 dark:bg-neutral-800">
                    {img?.imageUrl ? (
                      <Image
                        src={img.imageUrl}
                        alt={event.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    ) : (
                      <div className="flex items-center justify-center h-full">
                        <Calendar className="w-10 h-10 text-primary/10" />
                      </div>
                    )}
                  </div>
                  <CardContent className="p-7 flex flex-col justify-between space-y-6">
                    <div className="space-y-4">
                      <Badge variant="secondary" className="bg-primary/10 text-primary dark:bg-primary/20 hover:bg-primary/20">
                        {event.category}
                      </Badge>
                      <h4 className="text-xl sm:text-2xl font-bold font-headline leading-tight text-neutral-900 dark:text-white">
                        {event.title}
                      </h4>
                      
                      <div className="space-y-2 text-sm text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4 text-primary shrink-0" />
                          <span>
                            {new Date(event.date).toLocaleDateString(lang === 'id' ? 'id-ID' : 'en-US', {
                              month: 'long',
                              day: 'numeric',
                              year: 'numeric'
                            })}
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4 text-primary shrink-0" />
                          <span>{event.location}</span>
                        </div>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-neutral-100 dark:border-neutral-800">
                      <p className="text-xs font-bold text-muted-foreground uppercase mb-3">
                        {t("Dimulai Dalam", "Starts In")}
                      </p>
                      <Countdown targetDate={event.date} />
                    </div>

                    {/* Tombol dengan link registrasi */}
                    <Button asChild className="w-full rounded-full font-semibold shadow-md hover:shadow-lg">
                      <a href={event.registrationLink} target="_blank" rel="noopener noreferrer">
                        {t("Daftar Sekarang", "Register Now")} <ArrowRight className="ml-2 w-4 h-4" />
                      </a>
                    </Button>
                  </CardContent>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
