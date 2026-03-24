"use client";

import dynamic from 'next/dynamic';

export const ClientHeroCanvas = dynamic(
  () => import('./HeroCanvas').then((mod) => mod.HeroCanvas),
  { ssr: false }
);
