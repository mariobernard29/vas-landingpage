import { ArrowRight, ArrowUp, Menu, X, Plus, ChevronDown, ArrowUpRight, Mail } from 'lucide-react';

// Solo iconos funcionales (navegación y acciones); nada decorativo.
const icons = { arrow: ArrowRight, up: ArrowUp, menu: Menu, close: X, plus: Plus, down: ChevronDown, out: ArrowUpRight, mail: Mail } as const;

export type IconName = keyof typeof icons;

export default function Icon({ name, size = 16, className = '' }: { name: IconName; size?: number; className?: string }) {
  const C = icons[name];
  return <C size={size} strokeWidth={1.5} className={className} aria-hidden="true" />;
}
