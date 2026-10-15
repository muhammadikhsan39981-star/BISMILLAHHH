import {
  Compass,
  Footprints,
  Flashlight,
  Ban,
  Trash2,
  PenLine,
  Flame,
  Volume2,
  DoorClosed,
  Users,
  CloudRain,
  ShieldAlert,
  ShieldCheck,
} from 'lucide-react';
import { caveRules } from '@/data/rules';

const iconMap: Record<string, typeof Compass> = {
  compass: Compass,
  footprints: Footprints,
  flashlight: Flashlight,
  ban: Ban,
  trash: Trash2,
  'pen-line': PenLine,
  flame: Flame,
  volume: Volume2,
  'door-closed': DoorClosed,
  users: Users,
  'cloud-rain': CloudRain,
  'shield-alert': ShieldAlert,
};

export default function CaveRules() {
  return (
    <section id="tata-tertib" className="relative py-20 sm:py-32 bg-gradient-to-b from-stone-950 via-cave-950 to-stone-950">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Section header */}
        <div className="text-center mb-12 sm:mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-light text-turquoise-300 text-xs font-semibold uppercase tracking-widest">
            <ShieldCheck className="w-4 h-4" />
            Tata Tertib
          </span>
          <h2 className="mt-6 font-display font-extrabold text-white text-3xl sm:text-5xl lg:text-6xl tracking-tight">
            Cave Rules & Visitor Safety
          </h2>
          <p className="mt-4 text-stone-400 text-base sm:text-lg max-w-2xl mx-auto">
            Aturan berikut merupakan rancangan awal dan harus disesuaikan dengan kebijakan resmi pengelola setempat.
          </p>
        </div>

        {/* Rules grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {caveRules.map((rule) => {
            const Icon = iconMap[rule.icon] ?? Ban;
            return (
              <div
                key={rule.id}
                className="group glass rounded-2xl p-5 hover:border-turquoise-400/20 transition-all duration-300 hover:bg-white/5"
              >
                <div className="flex items-start gap-4">
                  <div className="shrink-0 w-12 h-12 rounded-xl bg-turquoise-500/10 border border-turquoise-400/20 flex items-center justify-center group-hover:bg-turquoise-500/20 transition">
                    <Icon className="w-6 h-6 text-turquoise-400" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-turquoise-400 text-xs font-bold tabular-nums">
                        {String(rule.id).padStart(2, '0')}
                      </span>
                    </div>
                    <p className="text-stone-300 text-sm leading-relaxed">{rule.text}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Conservation message */}
        <div className="mt-10 sm:mt-14">
          <div className="relative rounded-3xl overflow-hidden">
            <div className="absolute inset-0">
              <img
                src="https://images.pexels.com/photos/14398753/pexels-photo-14398753.jpeg?auto=compress&cs=tinysrgb&w=1920"
                alt="Lingkungan gua"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-stone-950 via-stone-950/80 to-stone-950/40" />
            </div>
            <div className="relative p-8 sm:p-12 lg:p-16">
              <ShieldCheck className="w-10 h-10 text-turquoise-400 mb-4" />
              <p className="font-display text-white text-xl sm:text-2xl lg:text-3xl font-bold leading-snug max-w-2xl">
                "Jelajahi dengan bijak. Lindungi alam, hormati lingkungan, dan tinggalkan gua tanpa sampah."
              </p>
              <p className="mt-4 text-stone-400 text-sm max-w-xl">
                Aturan ini merupakan rancangan awal dan harus disesuaikan dengan kebijakan resmi pengelola setempat.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
