import {
  Plane, ConciergeBell, TriangleAlert, FileCheck2, Route, ShieldCheck, Wrench, Users,
  Fuel, Sofa, Hotel, Car, Utensils, ArrowRight, Menu, X, Phone, Mail, MapPin, Clock, ChevronDown,
} from 'lucide-react';

const icons = {
  plane: Plane, concierge: ConciergeBell, alert: TriangleAlert, file: FileCheck2, route: Route,
  shield: ShieldCheck, wrench: Wrench, users: Users, fuel: Fuel, sofa: Sofa, hotel: Hotel,
  car: Car, utensils: Utensils, arrow: ArrowRight, menu: Menu, close: X, phone: Phone, mail: Mail,
  pin: MapPin, clock: Clock, down: ChevronDown,
} as const;

export type IconName = keyof typeof icons;

export default function Icon({ name, size = 22, className = '' }: { name: string; size?: number; className?: string }) {
  const C = icons[name as IconName] ?? Plane;
  return <C size={size} strokeWidth={1.5} className={className} aria-hidden="true" />;
}
