import { useState, useRef, useEffect } from 'react';
import {
  Map as MapIcon,
  Maximize,
  ZoomIn,
  ZoomOut,
  BookOpen,
  Eye,
  X,
  MapPin,
  Layers,
} from 'lucide-react';
import { locations } from '@/data/locations';
import type { CaveLocation } from '@/data/locations';

interface DigitalMappingProps {
  highlightMarkerId: string | null;
  setHighlightMarkerId: (id: string | null) => void;
  onOpenVirtual: (locationId: string) => void;
  onOpenChapter: (chapterId: string) => void;
  markLocationExplored: (id: string) => void;
}

export default function DigitalMapping({
  highlightMarkerId,
  setHighlightMarkerId,
  onOpenVirtual,
  onOpenChapter,
  markLocationExplored,
}: DigitalMappingProps) {
  const [selectedLocation, setSelectedLocation] = useState<CaveLocation | null>(null);
  const [zoom, setZoom] = useState(1);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const mapContainerRef = useRef<HTMLDivElement>(null);

  const handleMarkerClick = (loc: CaveLocation) => {
    setSelectedLocation(loc);
    setHighlightMarkerId(loc.id);
    markLocationExplored(loc.id);
  };

  // Handle external highlight (from storytelling)
  useEffect(() => {
    if (highlightMarkerId) {
      const loc = locations.find((l) => l.id === highlightMarkerId);
      if (loc) {
        setSelectedLocation(loc);
      }
    }
  }, [highlightMarkerId]);

  const toggleFullscreen = () => {
    if (!isFullscreen) {
      mapContainerRef.current?.requestFullscreen?.();
    } else if (document.fullscreenElement) {
      document.exitFullscreen?.();
    }
    setIsFullscreen(!isFullscreen);
  };

  return (
    <section id="digital-mapping" className="relative py-20 sm:py-32 bg-gradient-to-b from-stone-950 via-cave-950 to-stone-950">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Section header */}
        <div className="text-center mb-10 sm:mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-light text-turquoise-300 text-xs font-semibold uppercase tracking-widest">
            <MapIcon className="w-4 h-4" />
            Digital Mapping
          </span>
          <h2 className="mt-6 font-display font-extrabold text-white text-3xl sm:text-5xl lg:text-6xl tracking-tight">
            Explore the Cave
          </h2>
          <p className="mt-4 text-stone-400 text-base sm:text-lg max-w-2xl mx-auto">
            Peta interaktif Hidden Karst Lipu dengan enam titik lokasi. Tekan marker untuk melihat informasi ruang.
          </p>
        </div>

        <div className="grid lg:grid-cols-[1fr_360px] gap-6">
          {/* Map area */}
          <div
            ref={mapContainerRef}
            className={`relative rounded-3xl overflow-hidden glass ${isFullscreen ? 'h-screen' : 'aspect-[16/10]'}`}
          >
            {/* Map image */}
            <div
              className="absolute inset-0 flex items-center justify-center bg-cave-900 transition-transform duration-300"
              style={{ transform: `scale(${zoom})` }}
            >
              {/* Stylized cave map background */}
              <div className="relative w-full h-full">
                {/* SVG cave map */}
                <svg viewBox="0 0 100 70" preserveAspectRatio="xMidYMid meet" className="w-full h-full">
                  <defs>
                    <radialGradient id="caveBg" cx="50%" cy="50%" r="60%">
                      <stop offset="0%" stopColor="#1a2e1c" />
                      <stop offset="100%" stopColor="#050a06" />
                    </radialGradient>
                    <linearGradient id="pathGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#2dd4bf" stopOpacity="0.6" />
                      <stop offset="100%" stopColor="#14b8a6" stopOpacity="0.2" />
                    </linearGradient>
                  </defs>
                  <rect width="100" height="70" fill="url(#caveBg)" />
                  {/* Grid */}
                  {[...Array(10)].map((_, i) => (
                    <line key={`v${i}`} x1={i * 10} y1="0" x2={i * 10} y2="70" stroke="#ffffff" strokeOpacity="0.03" strokeWidth="0.15" />
                  ))}
                  {[...Array(7)].map((_, i) => (
                    <line key={`h${i}`} x1="0" y1={i * 10} x2="100" y2={i * 10} stroke="#ffffff" strokeOpacity="0.03" strokeWidth="0.15" />
                  ))}
                  {/* Cave path — connecting lines between markers */}
                  <path
                    d="M 8,52 Q 18,38 26,31 Q 37,20 47,17 Q 55,20 64,29 Q 72,35 79,41 Q 85,48 90,20"
                    stroke="url(#pathGrad)"
                    strokeWidth="0.8"
                    fill="none"
                    strokeDasharray="2,1.5"
                    strokeLinecap="round"
                  />
                  {/* Cave wall outline */}
                  <path
                    d="M 4,58 Q 6,45 12,42 Q 20,38 22,28 Q 25,18 35,14 Q 45,10 55,12 Q 65,15 70,24 Q 76,30 82,34 Q 88,38 94,30 Q 96,22 92,14"
                    stroke="#4f7a54"
                    strokeWidth="0.4"
                    fill="none"
                    strokeOpacity="0.4"
                  />
                  <path
                    d="M 4,62 Q 8,68 16,66 Q 26,62 32,64 Q 40,66 48,62 Q 56,58 66,60 Q 74,62 84,58 Q 90,54 94,48"
                    stroke="#4f7a54"
                    strokeWidth="0.4"
                    fill="none"
                    strokeOpacity="0.4"
                  />
                </svg>

                {/* Markers */}
                {locations.map((loc) => {
                  const isActive = selectedLocation?.id === loc.id;
                  const isHighlighted = highlightMarkerId === loc.id;
                  return (
                    <button
                      key={loc.id}
                      onClick={() => handleMarkerClick(loc)}
                      className="absolute group"
                      style={{
                        left: `${loc.markerPosition.x}%`,
                        top: `${loc.markerPosition.y}%`,
                        transform: 'translate(-50%, -50%)',
                      }}
                      aria-label={loc.name}
                    >
                      {/* Pulse ring */}
                      {(isActive || isHighlighted) && (
                        <span className="absolute inset-0 w-8 h-8 -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 rounded-full bg-turquoise-400/30 animate-pulse-marker" />
                      )}
                      {/* Marker dot */}
                      <span
                        className={`relative flex items-center justify-center w-7 h-7 rounded-full border-2 transition-all duration-300 ${
                          isActive
                            ? 'bg-turquoise-400 border-turquoise-200 scale-125 shadow-lg shadow-turquoise-500/50'
                            : 'bg-cave-800 border-turquoise-400/60 group-hover:border-turquoise-300 group-hover:scale-110'
                        }`}
                      >
                        <span className={`text-[10px] font-bold ${isActive ? 'text-stone-950' : 'text-turquoise-300'}`}>
                          {loc.number}
                        </span>
                      </span>
                      {/* Tooltip */}
                      <span
                        className={`absolute left-1/2 top-full mt-1 -translate-x-1/2 whitespace-nowrap text-xs px-2 py-1 rounded-md glass text-white transition-opacity duration-200 pointer-events-none ${
                          isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                        }`}
                      >
                        {loc.name}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Map controls */}
            <div className="absolute top-4 right-4 flex flex-col gap-2 z-10">
              <button
                onClick={() => setZoom((z) => Math.min(z + 0.25, 2))}
                className="w-10 h-10 rounded-xl glass flex items-center justify-center text-white hover:bg-turquoise-500/20 transition"
                aria-label="Zoom in"
              >
                <ZoomIn className="w-5 h-5" />
              </button>
              <button
                onClick={() => setZoom((z) => Math.max(z - 0.25, 1))}
                className="w-10 h-10 rounded-xl glass flex items-center justify-center text-white hover:bg-turquoise-500/20 transition"
                aria-label="Zoom out"
              >
                <ZoomOut className="w-5 h-5" />
              </button>
              <button
                onClick={toggleFullscreen}
                className="w-10 h-10 rounded-xl glass flex items-center justify-center text-white hover:bg-turquoise-500/20 transition"
                aria-label="Fullscreen"
              >
                <Maximize className="w-5 h-5" />
              </button>
            </div>

            {/* Legend */}
            <div className="absolute bottom-4 left-4 z-10 glass rounded-xl p-3 sm:p-4 max-w-[180px]">
              <div className="flex items-center gap-2 mb-2">
                <Layers className="w-4 h-4 text-turquoise-400" />
                <span className="text-white text-xs font-semibold uppercase tracking-wider">Legenda</span>
              </div>
              <div className="space-y-1.5">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-turquoise-400 border border-turquoise-200" />
                  <span className="text-stone-400 text-xs">Lokasi Aktif</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-cave-800 border border-turquoise-400/60" />
                  <span className="text-stone-400 text-xs">Lokasi Gua</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-4 h-0.5 bg-turquoise-400/40" style={{ borderTop: '1px dashed' }} />
                  <span className="text-stone-400 text-xs">Jalur Gua</span>
                </div>
              </div>
            </div>
          </div>

          {/* Info panel */}
          <div className="lg:sticky lg:top-24 self-start">
            {selectedLocation ? (
              <div key={selectedLocation.id} className="glass rounded-3xl overflow-hidden animate-slide-in-right">
                {/* Image */}
                <div className="relative h-44 overflow-hidden">
                  <img
                    src={selectedLocation.image}
                    alt={selectedLocation.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950 to-transparent" />
                  <button
                    onClick={() => {
                      setSelectedLocation(null);
                      setHighlightMarkerId(null);
                    }}
                    className="absolute top-3 right-3 w-8 h-8 rounded-full glass flex items-center justify-center text-white hover:bg-red-500/30 transition"
                  >
                    <X className="w-4 h-4" />
                  </button>
                  <div className="absolute bottom-3 left-4">
                    <span className="text-turquoise-400 text-xs font-bold">{selectedLocation.number}</span>
                    <h3 className="text-white font-display font-bold text-lg leading-tight">{selectedLocation.name}</h3>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 max-h-[400px] overflow-y-auto scrollbar-thin">
                  <p className="text-stone-500 text-xs italic mb-3">{selectedLocation.subtitle}</p>
                  <p className="text-stone-300 text-sm leading-relaxed mb-4">{selectedLocation.description}</p>

                  <div className="rounded-xl bg-cave-900/60 border border-turquoise-400/10 p-3 mb-4">
                    <div className="flex items-center gap-2 mb-1.5">
                      <span className="text-turquoise-400 text-xs font-bold uppercase tracking-wider">Info Edukatif</span>
                    </div>
                    <p className="text-stone-400 text-xs leading-relaxed">{selectedLocation.educationalInfo}</p>
                  </div>

                  <div className="flex flex-col gap-2">
                    <button
                      onClick={() => onOpenVirtual(selectedLocation.id)}
                      className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-full bg-turquoise-500 hover:bg-turquoise-400 text-stone-950 text-sm font-bold transition"
                    >
                      <Eye className="w-4 h-4" />
                      Buka Virtual Experience
                    </button>
                    <button
                      onClick={() => onOpenChapter(selectedLocation.chapterId)}
                      className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-full bg-white/5 hover:bg-white/10 text-white text-sm font-medium transition border border-white/10"
                    >
                      <BookOpen className="w-4 h-4 text-turquoise-400" />
                      Buka Cerita
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <div className="glass rounded-3xl p-6 text-center">
                <MapPin className="w-10 h-10 text-turquoise-400/40 mx-auto mb-3" />
                <h3 className="text-white font-display font-bold text-lg mb-2">Pilih Lokasi</h3>
                <p className="text-stone-400 text-sm">
                  Tekan salah satu marker pada peta untuk melihat informasi ruang gua.
                </p>
                <div className="mt-6 space-y-2">
                  {locations.map((loc) => (
                    <button
                      key={loc.id}
                      onClick={() => handleMarkerClick(loc)}
                      className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl bg-white/5 hover:bg-turquoise-500/10 text-left transition group"
                    >
                      <span className="w-7 h-7 rounded-full bg-cave-800 border border-turquoise-400/40 flex items-center justify-center text-turquoise-300 text-[10px] font-bold shrink-0">
                        {loc.number}
                      </span>
                      <span className="text-stone-300 text-sm group-hover:text-white transition">{loc.name}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Placeholder note */}
        <p className="mt-6 text-center text-stone-600 text-xs italic max-w-2xl mx-auto">
          Peta ini merupakan representasi visual. Peta asli Hidden Karst Lipu yang diunggah dapat menggantikan ilustrasi ini.
        </p>
      </div>
    </section>
  );
}
