import {
  Truck,
  Warehouse,
  Network,
  Thermometer,
  Boxes,
  PlusCircle,
  Pill,
  Stethoscope,
  ShoppingBag,
  Leaf,
  Store,
  Building2,
  LucideIcon,
} from 'lucide-react';

const map: Record<string, LucideIcon> = {
  truck: Truck,
  warehouse: Warehouse,
  network: Network,
  cross: PlusCircle,
  thermometer: Thermometer,
  boxes: Boxes,
  pill: Pill,
  stethoscope: Stethoscope,
  'shopping-bag': ShoppingBag,
  leaf: Leaf,
  store: Store,
  'building-2': Building2,
};

export default function Icon({ name, className = 'h-6 w-6' }: { name: string; className?: string }) {
  const Cmp = map[name] ?? Truck;
  return <Cmp className={className} strokeWidth={1.8} />;
}
