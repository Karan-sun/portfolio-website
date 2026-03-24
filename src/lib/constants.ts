export const NAV_ITEMS = [
  { label: 'SAGA', href: '/saga', icon: 'swords' },
  { label: 'ARSENAL', href: '/arsenal', icon: 'shield' },
  { label: 'MISSIONS', href: '/missions', icon: 'scroll' },
  { label: 'CHRONICLES', href: '/chronicles', icon: 'book-open' },
  { label: 'TROPHIES', href: '/trophies', icon: 'award' },
  { label: 'CODEX', href: '/codex', icon: 'library' },
  { label: 'TRANSMIT', href: '/transmit', icon: 'satellite' },
];

export const CHAPTERS: Record<string, string> = {
  '/': 'CHAPTER 01 — THE PROTAGONIST EMERGES',
  '/saga': 'CHAPTER 02 — THE ORIGIN ARC',
  '/arsenal': 'CHAPTER 03 — THE ARSENAL: JUTSU UNLOCKED',
  '/missions': 'CHAPTER 04 — COMPLETED MISSIONS',
  '/chronicles': 'CHAPTER 05 — CHRONICLES OF WAR',
  '/trophies': 'CHAPTER 06 — THE TROPHY HALL',
  '/codex': 'CHAPTER 07 — CLASSIFIED LORE',
  '/transmit': 'CHAPTER 08 — OPEN COMMUNICATION CHANNEL',
};

export const COLORS = {
  primary: '#E63946',
  secondary: '#1D3557',
  accent: '#F4A261',
  highlight: '#A8DADC',
  bgDark: '#0D0D0D',
  bgPanel: '#111827',
  textPrimary: '#F1FAEE',
  textMuted: '#8892A4',
};
