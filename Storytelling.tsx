import { useState } from 'react';
import { ArrowRight, MapPin, ChevronLeft, ChevronRight, BookOpen } from 'lucide-react';
import { chapters } from '@/data/chapters';
import { locations } from '@/data/locations';
import type { SectionId } from '@/types';

interface StorytellingProps {
  selectedChapterId: string | null;
  setSelectedChapterId: (id: string | null) => void;
  markChapterExplored: (id: string) => void;
  onNavigateToMap: (locationId: string) => void;
}

export default function Storytelling({
  selectedChapterId,
  setSelectedChapterId,
  markChapterExplored,
  onNavigateToMap,
}: StorytellingProps) {
  const [activeIdx, setActiveIdx] = useState(0);
  const chapter = chapters[activeIdx];
  const linkedLocation = chapter.locationId
    ? locations.find((l) => l.id === chapter.locationId)
    : null;

  const goToChapter = (idx: number) => {
    const newIdx = (idx + chapters.length) % chapters.length;
    setActiveIdx(newIdx);
    setSelectedChapterId(chapters[newIdx].id);
    markChapterExplored(chapters[newIdx].id);
  };

  return (
    <section id="storytelling" className="relative py-20 sm:py-32 bg-stone-950 bg-grid">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Section header */}
        <div className="text-center mb-12 sm:mb-20">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-light text-turquoise-300 text-xs font-semibold uppercase tracking-widest">
            <BookOpen className="w-4 h-4" />
            Digital Storytelling
          </span>
          <h2 className="mt-6 font-display font-extrabold text-white text-3xl sm:text-5xl lg:text-6xl tracking-tight">
            Every Cave Has a Story
          </h2>
          <p className="mt-4 text-stone-400 text-base sm:text-lg max-w-2xl mx-auto">
            Enam bab yang membawa Anda menyusuri ruang, sejarah alam, dan upaya pelestarian Hidden Karst Lipu.
          </p>
        </div>

        {/* Chapter navigation timeline */}
        <div className="mb-10 sm:mb-16">
          <div className="flex items-center gap-1 sm:gap-2 overflow-x-auto no-scrollbar pb-2">
            {chapters.map((ch, i) => (
              <button
                key={ch.id}
                onClick={() => goToChapter(i)}
                className={`flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium whitespace-nowrap transition-all duration-300 ${
                  i === activeIdx
                    ? 'bg-turquoise-500 text-stone-950'
                    : 'glass text-stone-400 hover:text-white'
                }`}
              >
                <span className={`tabular-nums font-bold ${i === activeIdx ? 'text-stone-900' : 'text-turquoise-400'}`}>
                  {ch.number}
                </span>
                <span className="hidden sm:inline">{ch.title}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Active chapter display */}
        <div
          key={chapter.id}
          className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center animate-fade-in"
        >
          {/* Image */}
          <div className="relative group order-1 lg:order-none">
            <div className="relative rounded-3xl overflow-hidden aspect-[4/3] shadow-2xl shadow-black/50">
              <img
                src={chapter.image}
                alt={chapter.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/60 to-transparent" />
              <div className="absolute top-6 left-6">
                <span className="font-display font-extrabold text-white text-7xl sm:text-8xl leading-none opacity-30">
                  {chapter.number}
                </span>
              </div>
            </div>
            {/* Decorative accent */}
            <div className="absolute -bottom-4 -right-4 w-32 h-32 rounded-full bg-turquoise-500/10 blur-3xl" />
          </div>

          {/* Text content */}
          <div className="order-2 lg:order-none">
            <span className="text-turquoise-400 text-sm font-bold uppercase tracking-widest">
              Bab {chapter.number}
            </span>
            <h3 className="mt-2 font-display font-bold text-white text-2xl sm:text-3xl lg:text-4xl leading-tight">
              {chapter.title}
            </h3>
            <p className="mt-1 text-stone-500 text-sm sm:text-base italic">
              {chapter.subtitle}
            </p>
            <p className="mt-6 text-stone-300 text-base sm:text-lg leading-relaxed">
              {chapter.narrative}
            </p>

            {/* Action buttons */}
            <div className="mt-8 flex flex-wrap gap-3">
              <button
                onClick={() => {
                  setSelectedChapterId(chapter.id);
                  markChapterExplored(chapter.id);
                }}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white/5 hover:bg-white/10 text-white text-sm font-medium transition border border-white/10"
              >
                <BookOpen className="w-4 h-4 text-turquoise-400" />
                Baca Cerita
              </button>
              {linkedLocation && (
                <button
                  onClick={() => onNavigateToMap(linkedLocation.id)}
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-turquoise-500/15 hover:bg-turquoise-500/25 text-turquoise-300 text-sm font-medium transition border border-turquoise-400/20"
                >
                  <MapPin className="w-4 h-4" />
                  Lihat di Peta
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Navigation controls */}
        <div className="mt-12 flex items-center justify-between">
          <button
            onClick={() => goToChapter(activeIdx - 1)}
            className="flex items-center gap-2 px-4 py-2.5 rounded-full glass text-white text-sm hover:bg-white/10 transition"
          >
            <ChevronLeft className="w-4 h-4" />
            <span className="hidden sm:inline">Bab Sebelumnya</span>
          </button>

          {/* Progress dots */}
          <div className="flex items-center gap-2">
            {chapters.map((ch, i) => (
              <button
                key={ch.id}
                onClick={() => goToChapter(i)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === activeIdx
                    ? 'w-8 bg-turquoise-400'
                    : 'w-2 bg-stone-700 hover:bg-stone-600'
                }`}
                aria-label={`Go to chapter ${i + 1}`}
              />
            ))}
          </div>

          <button
            onClick={() => goToChapter(activeIdx + 1)}
            className="flex items-center gap-2 px-4 py-2.5 rounded-full glass text-white text-sm hover:bg-white/10 transition"
          >
            <span className="hidden sm:inline">Bab Berikutnya</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
