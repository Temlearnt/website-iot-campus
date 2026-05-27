"use client"

import React, { useState, useEffect } from 'react';
import { Calendar, MapPin, ArrowRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

// Tambahkan registrationLink untuk setiap event
const eventData = [
  {
    id: "e1",
    title: "The AI Collective Jakarta | Humans in AI Week",
    date: "2026-06-01T12:00:00",
    location: "Jakarta, Indonesia",
    category: "Meetup",
    imgId: "event-1",
    registrationLink: "https://luma.com/aic-jakarta-hiai" // Ganti dengan link asli
  },
  {
    id: "e2",
    title: "Kiro Meetup Bekasi",
    date: "2026-06-08T18:00:00",
    location: "Kota Bekasi, Jawa Barat",
    category: "Meetup",
    imgId: "event-2",
    registrationLink: "https://luma.com/sakxkj89?locale=id" // Ganti dengan link asli
  }
];

function Countdown({ targetDate }: { targetDate: string }) {
  // ... (sama seperti kode Anda, tidak berubah)
  const [timeLeft, setTimeLeft] = useState({ hari: 0, jam: 0, menit: 0, detik: 0 });
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
        detik: Math.floor((distance % (1000 * 60)) / 1000),
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="flex gap-4 text-center">
      {Object.entries(timeLeft).map(([label, value]) => (
        <div key={label} className="flex flex-col">
          <span className="text-2xl font-bold tabular-nums text-primary">{value}</span>
          <span className="text-[10px] uppercase font-bold text-muted-foreground">{label}</span>
        </div>
      ))}
    </div>
  );
}

export function Events() {
  return (
    <section id="events" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-4">
            <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-primary">Kegiatan Komunitas</h2>
            <h3 className="text-4xl font-bold">Apa yang Akan Datang?</h3>
          </div>
          <Button variant="outline" className="rounded-full">Lihat Kalender</Button>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {eventData.map((event) => {
            const img = PlaceHolderImages.find(p => p.id === event.imgId);
            return (
              <Card key={event.id} className="overflow-hidden border-none shadow-xl hover:shadow-2xl transition-all group">
                <div className="grid md:grid-cols-2">
                  <div className="relative h-64 md:h-full overflow-hidden bg-muted">
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
                  <CardContent className="p-8 flex flex-col justify-between space-y-6">
                    <div className="space-y-4">
                      <Badge variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20">{event.category}</Badge>
                      <h4 className="text-2xl font-bold leading-tight">{event.title}</h4>
                      
                      <div className="space-y-2 text-sm text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4 text-primary" />
                          <span>{new Date(event.date).toLocaleDateString('id-ID', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4 text-primary" />
                          <span>{event.location}</span>
                        </div>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-border">
                      <p className="text-xs font-bold text-muted-foreground uppercase mb-3">Dimulai Dalam</p>
                      <Countdown targetDate={event.date} />
                    </div>

                    {/* Tombol dengan link registrasi */}
                    <Button asChild className="w-full rounded-full">
                      <a href={event.registrationLink} target="_blank" rel="noopener noreferrer">
                        Daftar Sekarang <ArrowRight className="ml-2 w-4 h-4" />
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