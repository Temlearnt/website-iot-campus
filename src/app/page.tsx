import React from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { Events } from '@/components/sections/Events';
import { Organization } from '@/components/sections/Organization';
import { Gallery } from '@/components/sections/Gallery';
import { Contact } from '@/components/sections/Contact';
import { Footer } from '@/components/layout/Footer';
import { LoadingScreen } from '@/components/ui/LoadingScreen';
import { SectionWrapper } from '@/components/ui/SectionWrapper';
import { AppProvider } from '@/context/AppContext';

export default function Home() {
  return (
    <AppProvider>
      <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
        {/* Minimalist Orange 1-100% Loading Screen */}
        <LoadingScreen />

        {/* Concise Header Navigation with Theme & Language Toggle */}
        <Navbar />

        {/* Section 1: Hero */}
        <Hero />

        {/* Section 2: About (3D Flip In transition) */}
        <SectionWrapper direction="flip">
          <About />
        </SectionWrapper>

        {/* Section 3: Events (3D Slide from Left with Y-rotation) */}
        <SectionWrapper direction="left">
          <Events />
        </SectionWrapper>

        {/* Section 4: Organization (3D Roll Up transition) */}
        <SectionWrapper direction="up">
          <Organization />
        </SectionWrapper>

        {/* Section 5: Gallery (3D Slide from Right with Y-rotation) */}
        <SectionWrapper direction="right">
          <Gallery />
        </SectionWrapper>

        {/* Section 6: Contact (3D Tilt Up transition) */}
        <SectionWrapper direction="flip">
          <Contact />
        </SectionWrapper>

        {/* Footer */}
        <Footer />
      </main>
    </AppProvider>
  );
}
