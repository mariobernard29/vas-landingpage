import { ArrowRight, ArrowUp, Menu, X, Plus, ChevronDown, ArrowUpRight, Mail } from 'lucide-react';

// Lucide ya no incluye logos de marcas: Instagram dibujado con el mismo trazo.
const Instagram = ({ size = 16, strokeWidth = 1.5, className = '' }: { size?: number; strokeWidth?: number; className?: string; [k: string]: unknown }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" />
  </svg>
);

// Solo iconos funcionales (navegación, acciones y redes); nada decorativo.
const icons = { arrow: ArrowRight, up: ArrowUp, menu: Menu, close: X, plus: Plus, down: ChevronDown, out: ArrowUpRight, mail: Mail, instagram: Instagram } as const;

export type IconName = keyof typeof icons;

export default function Icon({ name, size = 16, className = '' }: { name: IconName; size?: number; className?: string }) {
  const C = icons[name];
  return <C size={size} strokeWidth={1.5} className={className} aria-hidden="true" />;
}
