import React from 'react';
import { CodexSection } from '@/components/sections/CodexSection';

export const metadata = { title: "Codex Lore | Karan Kumar Maloo" };

export default function CodexPage() {
  return (
    <div className="min-h-screen px-4 pb-12">
      <div className="animate-in fade-in slide-in-from-bottom-10 duration-700 delay-500 fill-mode-both">
        <CodexSection />
      </div>
    </div>
  );
}
