import type { Metadata, Viewport } from 'next';
import { Bangers, Nunito, Share_Tech_Mono } from 'next/font/google';
import './globals.css';
import { AnimeNav } from '@/components/layout/AnimeNav';
import { KaiMascot } from '@/components/layout/KaiMascot';
import { ChapterCard } from '@/components/layout/ChapterCard';
import { InkTransition } from '@/components/layout/InkTransition';
import { SakuraCursor } from '@/components/layout/SakuraCursor';
import { Footer } from '@/components/layout/Footer';

const bangers = Bangers({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-bangers',
  display: 'swap',
});

const nunito = Nunito({
  weight: ['400', '600', '700', '800'],
  subsets: ['latin'],
  variable: '--font-nunito',
  display: 'swap',
});

const shareTech = Share_Tech_Mono({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-share',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Karan Kumar Maloo — AI-ML Engineer | Code Alchemist',
  description: 'Portfolio of Karan Kumar Maloo, B.Tech AI-ML student at Poornima University. Python developer, ML engineer, SAS certified. GDG Core Team. Jaipur, India.',
  keywords: [
    'Karan Maloo', 'AI ML developer', 'Python', 'TensorFlow', 'OpenCV',
    'SAS Certified', 'Poornima University', 'Jaipur developer'
  ],
  openGraph: {
    title: 'Karan Kumar Maloo — AI-ML Engineer',
    description: 'Anime-styled portfolio of an ambitious developer.',
    type: 'website',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${bangers.variable} ${nunito.variable} ${shareTech.variable}`}>
      <body className="bg-[#0D0D0D] text-[#F1FAEE] font-nunito overflow-x-hidden min-h-screen selection:bg-[#E63946] selection:text-white">
        <SakuraCursor />
        <AnimeNav />
        <KaiMascot />
        <ChapterCard />
        <InkTransition />

        <main className="relative z-10 pt-[72px] min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
