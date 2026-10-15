import { useState, useEffect, useRef } from 'react';
import { ArrowRight, Compass, Map, Eye, ChevronLeft, ChevronRight } from 'lucide-react';
import type { SectionId } from '@/types';
import { locations } from '@/data/locations';

interface HeroProps {
  onNavigate: (id: SectionId) => void;
  onOpenVirtual: (locationId: string) => void;
}

export default function Hero({ onNavigate, onOpenVirtual }: HeroProps) {
  const [carouselIdx, setCarouselIdx] = useState(0);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef<number | null>(null);

  const nextSlide = () => setCarouselIdx((i) => (i + 1) % locations.length);
  const prevSlide = () => setCarouselIdx((i) => (i - 1 + locations.length) % locations.length);

  useEffect(() => {
    if (paused) return;
    timerRef.current = window.setInterval(nextSlide, 4000);
    return () => {
      if (timerRef.current) window.clearInterval(timerRef.current);
    };
  }, [paused]);

  const quickAccess: { label: string; icon: typeof Compass; section: SectionId; action: () => void }[] = [
    { label: 'Storytelling', icon: Compass, section: 'storytelling', action: () => onNavigate('storytelling') },
    { label: 'Digital Map', icon: Map, section: 'digital-mapping', action: () => onNavigate('digital-mapping') },
    { label: 'Virtual Tour', icon: Eye, section: 'virtual-experience', action: () => onNavigate('virtual-experience') },
  ];

  return (
    <section id="beranda" className="relative h-screen min-h-[700px] w-full overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/17494951/pexels-photo-17494951.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Interior Hidden Karst Lipu dengan formasi stalaktit"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-stone-950/80 via-stone-950/50 to-stone-950" />
        <div className="absolute inset-0 bg-gradient-to-r from-stone-950/70 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col">
        {/* Top area — exploration bar */}
        <div className="pt-28 sm:pt-32 px-5 sm:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap items-center gap-2 sm:gap-3 animate-fade-in-down">
              <span className="text-stone-400 text-xs font-medium uppercase tracking-widest mr-1 hidden sm:inline">
                Akses Cepat
              </span>
              {quickAccess.map((item) => (
                <button
                  key={item.label}
                  onClick={item.action}
                  className="group flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-full glass-light text-white text-xs sm:text-sm font-medium hover:bg-turquoise-500/20 hover:border-turquoise-400/30 transition-all duration-300"
                >
                  <item.icon className="w-4 h-4 text-turquoise-400 group-hover:scale-110 transition-transform" />
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Center — title */}
        <div className="flex-1 flex items-center px-5 sm:px-8">
          <div className="max-w-7xl mx-auto w-full">
            <div className="max-w-2xl">
              <p className="text-turquoise-400 text-sm font-semibold uppercase tracking-widest mb-4 animate-fade-in-up">
                Digital Cave Experience
              </p>
              <h1 className="font-display font-extrabold text-white text-4xl sm:text-5xl lg:text-7xl leading-[1.05] tracking-tight text-shadow-lg animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                Discover the Hidden World of Laumehe
              </h1>
              <p className="mt-6 text-stone-300 text-base sm:text-lg leading-relaxed max-w-xl text-shadow-md animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                Jelajahi ruang-ruang gua, kenali cerita alam dan budaya, serta rasakan pengalaman eksplorasi digital Hidden Karst Lipu.
              </p>
              <div className="mt-8 flex flex-wrap gap-3 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                <button
                  onClick={() => onNavigate('digital-mapping')}
                  className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-turquoise-500 hover:bg-turquoise-400 text-stone-950 font-bold text-sm transition-all duration-300 shadow-lg shadow-turquoise-500/30 hover:shadow-xl hover:shadow-turquoise-500/40 hover:scale-[1.02]"
                >
                  Start Exploring
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
                <button
                  onClick={() => onOpenVirtual(locations[0].id)}
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full glass-light text-white font-medium text-sm hover:bg-white/10 transition-all duration-300"
                >
                  <Eye className="w-4 h-4 text-turquoise-400" />
                  Virtual Experience
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom-right — location carousel */}
        <div className="pb-6 sm:pb-10 px-5 sm:px-8">
          <div className="max-w-7xl mx-auto flex items-end justify-between gap-4">
            <div className="hidden sm:block">
              <div className="text-stone-500 text-xs uppercase tracking-widest mb-1">Scroll to Explore</div>
              <div className="flex items-center gap-2">
                <span className="w-12 h-px bg-turquoise-400/50" />
                <span className="text-stone-400 text-sm">6 Lokasi</span>
              </div>
            </div>

            <div
              className="relative w-full max-w-md"
              onMouseEnter={() => setPaused(true)}
              onMouseLeave={() => setPaused(false)}
            >
              <div className="flex items-center gap-2 mb-2 justify-end">
                <button
                  onClick={prevSlide}
                  className="w-8 h-8 rounded-full glass-light flex items-center justify-center text-white hover:bg-turquoise-500/20 transition"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <span className="text-stone-400 text-xs tabular-nums">
                  {String(carouselIdx + 1).padStart(2, '0')} / {String(locations.length).padStart(2, '0')}
                </span>
                <button
                  onClick={nextSlide}
                  className="w-8 h-8 rounded-full glass-light flex items-center justify-center text-white hover:bg-turquoise-500/20 transition"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>

              <div className="overflow-hidden rounded-2xl">
                <div
                  className="flex transition-transform duration-700 ease-out"
                  style={{ transform: `translateX(-${carouselIdx * 100}%)` }}
                >
                  {locations.map((loc, i) => (
                    <button
                      key={loc.id}
                      onClick={() => {
                        onNavigate('digital-mapping');
                      }}
                      className="min-w-full shrink-0 pr-0 text-left group"
                      style={{ opacity: i === carouselIdx ? 1 : 0.4 }}
                    >
                      <div className="relative h-44 rounded-2xl overflow-hidden glass">
                        <img
                          src={loc.image}
                          alt={loc.name}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/30 to-transparent" />
                        <div className="absolute bottom-0 left-0 right-0 p-4">
                          <span className="text-turquoise-400 text-xs font-bold tabular-nums">{loc.number}</span>
                          <h3 className="text-white font-display font-bold text-lg leading-tight">{loc.name}</h3>
                          <p className="text-stone-400 text-xs mt-0.5 line-clamp-1">{loc.subtitle}</p>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
