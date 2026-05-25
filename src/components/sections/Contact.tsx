"use client"

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

    // Construct mailto link as a simple way to "submit to email"
    const subject = encodeURIComponent(`Kontak Website: ${data.subject || 'Pertanyaan IoT Campus'}`);
    const body = encodeURIComponent(`Nama: ${data.name}\nEmail: ${data.email}\n\nPesan:\n${data.message}`);
    const mailtoUrl = `mailto:iotcampuskrisnadwipayana@gmail.com?subject=${subject}&body=${body}`;

    // Show feedback
    toast({
      title: "Pesan Sedang Disiapkan",
      description: "Membuka aplikasi email Anda untuk mengirim pesan ke iotcampuskrisnadwipayana@gmail.com",
    });

    window.location.href = mailtoUrl;
    setIsSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          <div className="space-y-12">
            <div className="space-y-4">
              <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-primary">Hubungi Kami</h2>
              <h3 className="text-4xl font-bold">Terhubung dengan IoT Campus</h3>
              <p className="text-lg text-muted-foreground">
                Apakah Anda seorang mahasiswa yang ingin bergabung, anggota fakultas yang mengusulkan kolaborasi riset, atau mitra industri, kami siap terhubung.
              </p>
            </div>

            <div className="space-y-6">
              <ContactInfoItem 
                icon={<Mail className="w-6 h-6" />}
                title="Email Kami"
                content="iotcampuskrisnadwipayana@gmail.com"
              />
              <ContactInfoItem 
                icon={<Phone className="w-6 h-6" />}
                title="Telepon Kami"
                content="+62 21 8462 229"
              />
              <ContactInfoItem 
                icon={<MapPin className="w-6 h-6" />}
                title="Lokasi"
                content="Fakultas Teknik, Universitas Krisnadwipayana, Jakarta"
              />
            </div>
          </div>

          <Card className="border-none shadow-2xl bg-secondary/30">
            <CardContent className="p-10">
              {isSubmitted ? (
                <div className="h-full flex flex-col items-center justify-center text-center space-y-4 py-12">
                  <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-bold">Terima Kasih!</h3>
                  <p className="text-muted-foreground">Pesan Anda telah disiapkan di aplikasi email Anda. Mohon pastikan untuk menekan 'Kirim' pada aplikasi tersebut.</p>
                  <Button variant="outline" onClick={() => setIsSubmitted(false)} className="rounded-full">Kirim Pesan Lain</Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Nama Lengkap</Label>
                      <Input id="name" name="name" placeholder="andi" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Alamat Email</Label>
                      <Input id="email" name="email" type="email" placeholder="andi@example.com" required />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subjek</Label>
                    <Input id="subject" name="subject" placeholder="Pertanyaan tentang keanggotaan" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Pesan Anda</Label>
                    <Textarea id="message" name="message" placeholder="Beri tahu kami lebih banyak tentang minat Anda..." rows={5} required />
                  </div>
                  <Button type="submit" className="w-full h-12 rounded-full text-lg shadow-lg shadow-primary/20">
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

function ContactInfoItem({ icon, title, content }: { icon: React.ReactNode, title: string, content: string }) {
  return (
    <div className="flex items-start gap-4">
      <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-primary shrink-0">
        {icon}
      </div>
      <div>
        <h4 className="font-bold text-lg">{title}</h4>
        <p className="text-muted-foreground">{content}</p>
      </div>
    </div>
  );
}
