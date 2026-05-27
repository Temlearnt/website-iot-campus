"use client";

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Mail, MessageSquare, MapPin, Phone, CheckCircle2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export function Contact() {
  const { toast } = useToast();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    const subject = encodeURIComponent(`Kontak Website: ${data.subject || 'Pertanyaan IoT Campus'}`);
    const body = encodeURIComponent(`Nama: ${data.name}\nEmail: ${data.email}\n\nPesan:\n${data.message}`);
    const mailtoUrl = `mailto:iotcampuskrisnadwipayana@gmail.com?subject=${subject}&body=${body}`;

    toast({
      title: "Pesan Sedang Disiapkan",
      description: "Membuka aplikasi email Anda untuk mengirim pesan ke iotcampuskrisnadwipayana@gmail.com",
    });

    window.location.href = mailtoUrl;
    setIsSubmitted(true);
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
          {/* Bagian kiri: info kontak */}
          <div className="space-y-8 md:space-y-12">
            <div className="space-y-3 md:space-y-4">
              <h2 className="text-xs md:text-sm font-bold uppercase tracking-[0.2em] text-primary">Hubungi Kami</h2>
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold">Terhubung dengan IoT Campus</h3>
              <p className="text-base md:text-lg text-muted-foreground">
                Apakah Anda seorang mahasiswa yang ingin bergabung, anggota fakultas yang mengusulkan kolaborasi riset, atau mitra industri, kami siap terhubung.
              </p>
            </div>

            <div className="space-y-4 md:space-y-6">
              <ContactInfoItem 
                icon={<Mail className="w-5 h-5 md:w-6 md:h-6" />}
                title="Email Kami"
                content="iotcampuskrisnadwipayana@gmail.com"
              />
              <ContactInfoItem 
                icon={<Phone className="w-5 h-5 md:w-6 md:h-6" />}
                title="Telepon Kami"
                content="+62 21 8462 229"
              />
              <ContactInfoItem 
                icon={<MapPin className="w-5 h-5 md:w-6 md:h-6" />}
                title="Lokasi"
                content="Fakultas Teknik, Universitas Krisnadwipayana, Jakarta"
              />
            </div>
          </div>

          {/* Bagian kanan: form */}
          <Card className="border-none shadow-2xl bg-secondary/30">
            <CardContent className="p-5 md:p-8 lg:p-10">
              {isSubmitted ? (
                <div className="h-full flex flex-col items-center justify-center text-center space-y-4 py-8 md:py-12">
                  <div className="w-16 h-16 md:w-20 md:h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center">
                    <CheckCircle2 className="w-8 h-8 md:w-10 md:h-10" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold">Terima Kasih!</h3>
                  <p className="text-sm md:text-base text-muted-foreground px-2">Pesan Anda telah disiapkan di aplikasi email Anda. Mohon pastikan untuk menekan 'Kirim' pada aplikasi tersebut.</p>
                  <Button variant="outline" onClick={() => setIsSubmitted(false)} className="rounded-full mt-2">Kirim Pesan Lain</Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5 md:space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-sm font-medium">Nama Lengkap</Label>
                      <Input id="name" name="name" placeholder="Nama Anda" required className="w-full" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-sm font-medium">Alamat Email</Label>
                      <Input id="email" name="email" type="email" placeholder="email@example.com" required className="w-full" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="subject" className="text-sm font-medium">Subjek</Label>
                    <Input id="subject" name="subject" placeholder="Pertanyaan tentang keanggotaan" required className="w-full" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-sm font-medium">Pesan Anda</Label>
                    <Textarea id="message" name="message" placeholder="Beri tahu kami lebih banyak tentang minat Anda..." rows={4} className="w-full" />
                  </div>
                  <Button type="submit" className="w-full h-11 md:h-12 rounded-full text-base shadow-lg shadow-primary/20">
                    Kirim Pesan <MessageSquare className="ml-2 w-4 h-4" />
                  </Button>
                </form>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

function ContactInfoItem({ icon, title, content }: { icon: React.ReactNode; title: string; content: string }) {
  return (
    <div className="flex items-start gap-3 md:gap-4">
      <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-secondary flex items-center justify-center text-primary shrink-0">
        {icon}
      </div>
      <div>
        <h4 className="font-bold text-base md:text-lg">{title}</h4>
        <p className="text-sm md:text-base text-muted-foreground break-words">{content}</p>
      </div>
    </div>
  );
}
