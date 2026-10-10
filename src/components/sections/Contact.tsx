"use client";

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Mail, MessageSquare, MapPin, Phone, CheckCircle2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { useApp } from '@/context/AppContext';

export function Contact() {
  const { toast } = useToast();
  const { t } = useApp();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    const subject = encodeURIComponent(`Kontak Website: ${data.subject || 'Pertanyaan IoT Campus'}`);
    const body = encodeURIComponent(`Nama: ${data.name}\nEmail: ${data.email}\n\nPesan:\n${data.message}`);
    const mailtoUrl = `mailto:iotcampuskrisnadwipayana@gmail.com?subject=${subject}&body=${body}`;

    toast({
      title: t("Pesan Sedang Disiapkan", "Message Prepared"),
      description: t(
        "Membuka aplikasi email Anda untuk mengirim pesan ke iotcampuskrisnadwipayana@gmail.com",
        "Opening your email client to send a message to iotcampuskrisnadwipayana@gmail.com"
      ),
    });

    window.location.href = mailtoUrl;
    setIsSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-white dark:bg-neutral-950 border-t border-neutral-200/60 dark:border-neutral-800/80 transition-colors">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-start">
          {/* Bagian kiri: info kontak */}
          <div className="space-y-8 md:space-y-10">
            <div className="space-y-3 md:space-y-4">
              <span className="text-xs md:text-sm font-bold uppercase tracking-[0.2em] text-primary block">
                {t("Hubungi Kami", "Contact Us")}
              </span>
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold font-headline text-neutral-900 dark:text-white tracking-tight">
                {t("Terhubung dengan", "Connect with")}{" "}
                <span className="text-primary italic">IoT Campus</span>
              </h3>
              <p className="text-base md:text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed">
                {t(
                  "Apakah Anda seorang mahasiswa yang ingin bergabung, anggota fakultas yang mengusulkan kolaborasi riset, atau mitra industri, kami siap terhubung.",
                  "Whether you are a student looking to join, faculty proposing research collaboration, or an industry partner, we are ready to connect."
                )}
              </p>
            </div>

            <div className="space-y-4 md:space-y-5">
              <ContactInfoItem 
                icon={<Mail className="w-5 h-5 md:w-6 md:h-6" />}
                title={t("Email Kami", "Email Us")}
                content="iotcampuskrisnadwipayana@gmail.com"
                href="mailto:iotcampuskrisnadwipayana@gmail.com"
              />
              <ContactInfoItem 
                icon={<Phone className="w-5 h-5 md:w-6 md:h-6" />}
                title={t("Telepon Kami", "Call Us")}
                content="+62 21 8462 229"
                href="tel:+62218462229"
              />
              <ContactInfoItem 
                icon={<MapPin className="w-5 h-5 md:w-6 md:h-6" />}
                title={t("Lokasi", "Location")}
                content="Fakultas Teknik, Universitas Krisnadwipayana, Jakarta"
              />
            </div>
          </div>

          {/* Bagian kanan: form kartu */}
          <Card className="border border-neutral-200/80 dark:border-neutral-800 shadow-xl bg-neutral-50/80 dark:bg-neutral-900/90 backdrop-blur-sm rounded-3xl overflow-hidden transition-colors">
            <CardContent className="p-6 md:p-8 lg:p-10">
              {isSubmitted ? (
                <div className="h-full flex flex-col items-center justify-center text-center space-y-4 py-8 md:py-12">
                  <div className="w-16 h-16 md:w-20 md:h-20 bg-green-100 dark:bg-green-950/60 text-green-600 dark:text-green-400 rounded-full flex items-center justify-center ring-8 ring-green-50 dark:ring-green-950/30">
                    <CheckCircle2 className="w-8 h-8 md:w-10 md:h-10" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold font-headline text-neutral-900 dark:text-white">
                    {t("Terima Kasih!", "Thank You!")}
                  </h3>
                  <p className="text-sm md:text-base text-neutral-600 dark:text-neutral-400 px-2 max-w-sm">
                    {t(
                      "Pesan Anda telah disiapkan di aplikasi email Anda. Mohon pastikan untuk menekan 'Kirim' pada aplikasi tersebut.",
                      "Your message has been drafted in your email app. Please hit 'Send' to complete delivery."
                    )}
                  </p>
                  <Button 
                    variant="outline" 
                    onClick={() => setIsSubmitted(false)} 
                    className="rounded-full mt-2 border-neutral-300 dark:border-neutral-700 hover:bg-neutral-100 dark:hover:bg-neutral-800 text-neutral-900 dark:text-neutral-100"
                  >
                    {t("Kirim Pesan Lain", "Send Another Message")}
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-xs sm:text-sm font-semibold text-neutral-700 dark:text-neutral-200">
                        {t("Nama Lengkap", "Full Name")}
                      </Label>
                      <Input 
                        id="name" 
                        name="name" 
                        placeholder={t("Nama Anda", "Your Name")} 
                        required 
                        className="w-full bg-white dark:bg-neutral-950 border-neutral-300 dark:border-neutral-800 text-neutral-900 dark:text-white placeholder:text-neutral-400 dark:placeholder:text-neutral-600 focus-visible:ring-primary h-11 rounded-xl" 
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-xs sm:text-sm font-semibold text-neutral-700 dark:text-neutral-200">
                        {t("Alamat Email", "Email Address")}
                      </Label>
                      <Input 
                        id="email" 
                        name="email" 
                        type="email" 
                        placeholder="email@example.com" 
                        required 
                        className="w-full bg-white dark:bg-neutral-950 border-neutral-300 dark:border-neutral-800 text-neutral-900 dark:text-white placeholder:text-neutral-400 dark:placeholder:text-neutral-600 focus-visible:ring-primary h-11 rounded-xl" 
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="subject" className="text-xs sm:text-sm font-semibold text-neutral-700 dark:text-neutral-200">
                      {t("Subjek", "Subject")}
                    </Label>
                    <Input 
                      id="subject" 
                      name="subject" 
                      placeholder={t("Pertanyaan tentang riset atau keanggotaan", "Inquiry about research or membership")} 
                      required 
                      className="w-full bg-white dark:bg-neutral-950 border-neutral-300 dark:border-neutral-800 text-neutral-900 dark:text-white placeholder:text-neutral-400 dark:placeholder:text-neutral-600 focus-visible:ring-primary h-11 rounded-xl" 
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-xs sm:text-sm font-semibold text-neutral-700 dark:text-neutral-200">
                      {t("Pesan Anda", "Your Message")}
                    </Label>
                    <Textarea 
                      id="message" 
                      name="message" 
                      placeholder={t("Tuliskan pesan atau pertanyaan Anda di sini...", "Type your message or questions here...")} 
                      rows={4} 
                      className="w-full bg-white dark:bg-neutral-950 border-neutral-300 dark:border-neutral-800 text-neutral-900 dark:text-white placeholder:text-neutral-400 dark:placeholder:text-neutral-600 focus-visible:ring-primary rounded-xl resize-none" 
                    />
                  </div>
                  <Button 
                    type="submit" 
                    className="w-full h-11 md:h-12 rounded-full text-sm md:text-base font-semibold bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/20 hover:shadow-xl transition-all hover:scale-[1.01] active:scale-[0.99] cursor-pointer"
                  >
                    {t("Kirim Pesan", "Send Message")}
                    <MessageSquare className="ml-2 w-4 h-4" />
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

interface ContactInfoItemProps {
  icon: React.ReactNode;
  title: string;
  content: string;
  href?: string;
}

function ContactInfoItem({ icon, title, content, href }: ContactInfoItemProps) {
  const contentElement = (
    <div className="group flex items-start gap-4 p-3 rounded-2xl transition-colors hover:bg-neutral-100/70 dark:hover:bg-neutral-900/60">
      <div className="w-12 h-12 rounded-xl bg-orange-100 dark:bg-orange-950/40 border border-orange-200 dark:border-orange-900/50 flex items-center justify-center text-primary shrink-0 transition-transform group-hover:scale-105 shadow-xs">
        {icon}
      </div>
      <div>
        <h4 className="font-bold text-base text-neutral-900 dark:text-white font-headline">
          {title}
        </h4>
        <p className="text-sm text-neutral-600 dark:text-neutral-400 break-words group-hover:text-primary transition-colors">
          {content}
        </p>
      </div>
    </div>
  );

  if (href) {
    return (
      <a href={href} className="block cursor-pointer">
        {contentElement}
      </a>
    );
  }

  return contentElement;
}
