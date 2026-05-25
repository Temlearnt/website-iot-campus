import React from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { Events } from '@/components/sections/Events';
import { Organization } from '@/components/sections/Organization';
import { Gallery } from '@/components/sections/Gallery';
import { Contact } from '@/components/sections/Contact';
import { Footer } from '@/components/layout/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Events />
      <Organization />
      <Gallery />
      <Contact />
      <Footer />
    </main>
  );
}
