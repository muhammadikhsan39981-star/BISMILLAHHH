import { useState, useEffect, useCallback } from 'react';
import {
  Eye,
  ChevronLeft,
  ChevronRight,
  X,
  Maximize2,
  BookOpen,
  Map as MapIcon,
  Info,
  Camera,
} from 'lucide-react';
import { locations } from '@/data/locations';
import { galleryImages } from '@/data/gallery';
import type { SectionId } from '@/types';

interface VirtualExperienceProps {
  openLocationId: string | null;
  setOpenLocationId: (id: string | null) => void;
  onNavigateToMap: (locationId: string) => void;
  onOpenChapter: (chapterId: string) => void;
  markLocationExplored: (id: string) => void;
}

export default function VirtualExperience({
  openLocationId,
  setOpenLocationId,
  onNavigateToMap,
  onOpenChapter,
  markLocationExplored,
}: VirtualExperienceProps) {
  const [activeIdx, setActiveIdx] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIdx, setLightboxIdx] = useState(0);
  const [isFullscreenView, setIsFullscreenView] = useState(false);

  const location = locations[activeIdx];

  // Handle external open request
  useEffect(() => {
    if (openLocationId) {
      const idx = locations.findIndex((l) => l.id === openLocationId);
      if (idx >= 0) {
        setActiveIdx(idx);
        markLocationExplored(locations[idx].id);
      }
      setOpenLocationId(null);
    }
  }, [openLocationId, setOpenLocationId, markLocationExplored]);

  const goNext = useCallback(() => {
    const newIdx = (activeIdx + 1) % locations.length;
    setActiveIdx(newIdx);
    markLocationExplored(locations[newIdx].id);
  }, [activeIdx, markLocationExplored]);

  const goPrev = useCallback(() => {
    const newIdx = (activeIdx - 1 + locations.length) % locations.length;
    setActiveIdx(newIdx);
    markLocationExplored(locations[newIdx].id);
  }, [activeIdx, markLocationExplored]);

  // Keyboard navigation
  useEffect(() => {
    if (!isFullscreenView) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') goNext();
      if (e.key === 'ArrowLeft') goPrev();
      if (e.key === 'Escape') setIsFullscreenView(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [isFullscreenView, goNext, goPrev]);

  const openLightbox = (idx: number) => {
    setLightboxIdx(idx);
    setLightboxOpen(true);
  };

  const lightboxImages = [...location.galleryImages, ...galleryImages.map((g) => g.url)];
  const uniqueLightbox = [...new Set(lightboxImages)];

  return (
    <section id="virtual-experience" className="relative py-20 sm:py-32 bg-stone-950">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Section header */}
        <div className="text-center mb-10 sm:mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-light text-turquoise-300 text-xs font-semibold uppercase tracking-widest">
            <Eye className="w-4 h-4" />
            Virtual Experience
          </span>
          <h2 className="mt-6 font-display font-extrabold text-white text-3xl sm:text-5xl lg:text-6xl tracking-tight">
            Experience Laumehe Virtually
          </h2>
          <p className="mt-4 text-stone-400 text-base sm:text-lg max-w-2xl mx-auto">
            Lihat gambaran ruang gua sebelum berkunjung.Navigasi antar lokasi yang terhubung dengan enam titik peta.
          </p>
          <div className="mt-4 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-500/10 border border-amber-400/20">
            <Info className="w-3.5 h-3.5 text-amber-400" />
            <span className="text-amber-300 text-xs">Pratinjau galeri — bukan simulasi 3D atau 360 derajat</span>
          </div>
        </div>

        {/* Main viewer */}
        <div className="grid lg:grid-cols-[1fr_300px] gap-6">
          {/* Viewer */}
          <div className="relative">
            <div
              className={`relative rounded-3xl overflow-hidden glass ${isFullscreenView ? 'fixed inset-0 z-50 rounded-none' : 'aspect-[16/10]'}`}
            >
              {/* Main image */}
              <img
                key={location.id}
                src={location.image}
                alt={location.name}
                className="w-full h-full object-cover animate-scale-in"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/20 to-transparent" />

              {/* Top bar */}
              <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1.5 rounded-full glass text-turquoise-300 text-xs font-bold">
                    {location.number} / 06
                  </span>
                  <span className="px-3 py-1.5 rounded-full glass text-stone-300 text-xs">
                    Pratinjau Galeri
                  </span>
                </div>
                <button
                  onClick={() => setIsFullscreenView(!isFullscreenView)}
                  className="w-9 h-9 rounded-full glass flex items-center justify-center text-white hover:bg-turquoise-500/20 transition"
                  aria-label="Toggle fullscreen"
                >
                  {isFullscreenView ? <X className="w-5 h-5" /> : <Maximize2 className="w-5 h-5" />}
                </button>
              </div>

              {/* Bottom info bar */}
              <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-8 z-10">
                <span className="text-turquoise-400 text-xs font-bold uppercase tracking-widest">
                  Lokasi {location.number}
                </span>
                <h3 className="font-display font-bold text-white text-xl sm:text-3xl leading-tight mt-1">
                  {location.name}
                </h3>
                <p className="text-stone-400 text-sm sm:text-base mt-1 max-w-lg line-clamp-2">
                  {location.description}
                </p>

                {/* Progress indicator */}
                <div className="mt-4 flex items-center gap-2">
                  {locations.map((loc, i) => (
                    <button
                      key={loc.id}
                      onClick={() => {
                        setActiveIdx(i);
                        markLocationExplored(locations[i].id);
                      }}
                      className={`h-1.5 rounded-full transition-all duration-300 ${
                        i === activeIdx
                          ? 'flex-1 max-w-[60px] bg-turquoise-400'
                          : 'w-6 bg-stone-700 hover:bg-stone-600'
                      }`}
                      aria-label={`Go to ${loc.name}`}
                    />
                  ))}
                </div>
              </div>

              {/* Navigation arrows */}
              <button
                onClick={goPrev}
                className="absolute left-3 sm:left-5 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full glass flex items-center justify-center text-white hover:bg-turquoise-500/20 transition z-10"
                aria-label="Lokasi sebelumnya"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={goNext}
                className="absolute right-3 sm:right-5 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full glass flex items-center justify-center text-white hover:bg-turquoise-500/20 transition z-10"
                aria-label="Lokasi berikutnya"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            {/* Action buttons below viewer */}
            <div className="mt-4 flex flex-wrap gap-3">
              <button
                onClick={() => onNavigateToMap(location.id)}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass text-white text-sm font-medium hover:bg-white/10 transition"
              >
                <MapIcon className="w-4 h-4 text-turquoise-400" />
                Kembali ke Peta Digital
              </button>
              <button
                onClick={() => onOpenChapter(location.chapterId)}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass text-white text-sm font-medium hover:bg-white/10 transition"
              >
                <BookOpen className="w-4 h-4 text-turquoise-400" />
                Baca Cerita
              </button>
            </div>
          </div>

          {/* Sidebar — location list */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-stone-400 text-xs uppercase tracking-widest px-1">
              <Camera className="w-4 h-4" />
              <span>Galeri Lokasi</span>
            </div>
            {locations.map((loc, i) => (
              <button
                key={loc.id}
                onClick={() => {
                  setActiveIdx(i);
                  markLocationExplored(loc.id);
                }}
                className={`w-full flex items-center gap-3 p-2.5 rounded-2xl transition-all group ${
                  i === activeIdx
                    ? 'glass border-turquoise-400/20'
                    : 'bg-white/5 hover:bg-white/10 border border-transparent'
                }`}
              >
                <div className="relative w-16 h-12 rounded-lg overflow-hidden shrink-0">
                  <img src={loc.image} alt={loc.name} className="w-full h-full object-cover" loading="lazy" />
                </div>
                <div className="text-left flex-1 min-w-0">
                  <span className="text-turquoise-400 text-[10px] font-bold">{loc.number}</span>
                  <p className="text-white text-sm font-medium truncate">{loc.name}</p>
                  <p className="text-stone-500 text-xs truncate">{loc.subtitle}</p>
                </div>
                {i === activeIdx && (
                  <div className="w-2 h-2 rounded-full bg-turquoise-400 shrink-0" />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Photo grid gallery */}
        <div className="mt-12 sm:mt-20">
          <div className="flex items-center gap-2 mb-6">
            <Camera className="w-5 h-5 text-turquoise-400" />
            <h3 className="font-display font-bold text-white text-xl sm:text-2xl">Galeri Foto Eksplorasi</h3>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
            {galleryImages.map((img, i) => (
              <button
                key={img.id}
                onClick={() => openLightbox(i)}
                className="group relative rounded-2xl overflow-hidden aspect-square"
              >
                <img
                  src={img.url}
                  alt={img.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-transparent to-transparent opacity-60 group-hover:opacity-90 transition-opacity" />
                <div className="absolute bottom-0 left-0 right-0 p-3 text-left">
                  <p className="text-white text-xs font-semibold truncate">{img.title}</p>
                  <p className="text-stone-400 text-[10px] truncate">{img.description}</p>
                </div>
                <div className="absolute top-2 right-2 w-7 h-7 rounded-full glass flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                  <Maximize2 className="w-3.5 h-3.5 text-white" />
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox modal */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 z-[60] bg-stone-950/95 backdrop-blur-md flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setLightboxOpen(false)}
        >
          <button
            onClick={() => setLightboxOpen(false)}
            className="absolute top-5 right-5 w-11 h-11 rounded-full glass flex items-center justify-center text-white hover:bg-red-500/30 transition z-10"
          >
            <X className="w-6 h-6" />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              setLightboxIdx((i) => (i - 1 + uniqueLightbox.length) % uniqueLightbox.length);
            }}
            className="absolute left-3 sm:left-8 w-12 h-12 rounded-full glass flex items-center justify-center text-white hover:bg-turquoise-500/20 transition"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <div className="max-w-5xl max-h-[85vh] w-full" onClick={(e) => e.stopPropagation()}>
            <img
              src={uniqueLightbox[lightboxIdx]}
              alt="Gallery"
              className="w-full h-full object-contain rounded-2xl max-h-[80vh]"
            />
            <p className="text-center text-stone-400 text-sm mt-3">
              {lightboxIdx + 1} / {uniqueLightbox.length}
            </p>
          </div>
          <button
            onClick={(e) => {
              e.stopPropagation();
              setLightboxIdx((i) => (i + 1) % uniqueLightbox.length);
            }}
            className="absolute right-3 sm:right-8 w-12 h-12 rounded-full glass flex items-center justify-center text-white hover:bg-turquoise-500/20 transition"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      )}
    </section>
  );
}
