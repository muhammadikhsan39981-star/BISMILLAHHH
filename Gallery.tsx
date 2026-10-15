import { Camera, Maximize2, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';
import { galleryImages } from '@/data/gallery';

export default function Gallery() {
  const [lightboxIdx, setLightboxIdx] = useState<number | null>(null);

  const closeLightbox = () => setLightboxIdx(null);
  const nextImage = () => setLightboxIdx((i) => (i === null ? 0 : (i + 1) % galleryImages.length));
  const prevImage = () => setLightboxIdx((i) => (i === null ? 0 : (i - 1 + galleryImages.length) % galleryImages.length));

  return (
    <section className="relative py-20 sm:py-32 bg-gradient-to-b from-stone-950 to-cave-950">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Section header */}
        <div className="text-center mb-12 sm:mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-light text-turquoise-300 text-xs font-semibold uppercase tracking-widest">
            <Camera className="w-4 h-4" />
            Galeri
          </span>
          <h2 className="mt-6 font-display font-extrabold text-white text-3xl sm:text-5xl lg:text-6xl tracking-tight">
            Hidden Karst Lipu Gallery
          </h2>
          <p className="mt-4 text-stone-400 text-base sm:text-lg max-w-2xl mx-auto">
            Kumpulan foto formasi alam, ruang gua, dan keindahan bentang alam bawah tanah.
          </p>
        </div>

        {/* Masonry-style grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
          {galleryImages.map((img, i) => (
            <button
              key={img.id}
              onClick={() => setLightboxIdx(i)}
              className={`group relative rounded-2xl overflow-hidden ${
                i % 5 === 0 ? 'row-span-2 aspect-[1/2]' : 'aspect-square'
              }`}
            >
              <img
                src={img.url}
                alt={img.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-990 via-stone-950/20 to-transparent opacity-50 group-hover:opacity-80 transition-opacity" />
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

        {/* About summary */}
        <div className="mt-12 sm:mt-16 grid lg:grid-cols-2 gap-8 items-center">
          <div className="relative rounded-3xl overflow-hidden aspect-[4/3]">
            <img
              src="https://images.pexels.com/photos/18942190/pexels-photo-18942190.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Formasi gua"
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950/60 to-transparent" />
          </div>
          <div>
            <h3 className="font-display font-bold text-white text-2xl sm:text-3xl mb-4">
              Tentang Hidden Karst Lipu
            </h3>
            <p className="text-stone-300 text-sm sm:text-base leading-relaxed mb-4">
              Hidden Karst Lipu adalah bentang alam bawah tanah yang berada di Wantopi, Mawasangka Timur,
              Buton Tengah, Sulawesi Tenggara. Gua ini menyimpan formasi geologi seperti stalaktit dan
              stalagmit yang terbentuk melalui proses alam selama ribuan tahun.
            </p>
            <p className="text-stone-400 text-sm leading-relaxed mb-4">
              Sebagai destinasi wisata digital, Hidden Karst Lipu menghadirkan pengalaman eksplorasi yang
              menggabungkan edukasi geologi, konservasi alam, dan cerita budaya. Pengunjung dapat
              menjelajahi ruang-ruang gua melalui peta digital, menyimak cerita setiap bab, dan
              merasakan suasana gua melalui galeri virtual.
            </p>
            <div className="flex flex-wrap gap-2">
              {['Edukasi Geologi', 'Konservasi', 'Wisata Digital', 'Bentang Alam'].map((tag) => (
                <span key={tag} className="px-3 py-1.5 rounded-full glass-light text-turquoise-300 text-xs font-medium">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox */}
      {lightboxIdx !== null && (
        <div
          className="fixed inset-0 z-[60] bg-stone-950/95 backdrop-blur-md flex items-center justify-center p-4 animate-fade-in"
          onClick={closeLightbox}
        >
          <button
            onClick={closeLightbox}
            className="absolute top-5 right-5 w-11 h-11 rounded-full glass flex items-center justify-center text-white hover:bg-red-500/30 transition z-10"
          >
            <X className="w-6 h-6" />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); prevImage(); }}
            className="absolute left-3 sm:left-8 w-12 h-12 rounded-full glass flex items-center justify-center text-white hover:bg-turquoise-500/20 transition"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <div className="max-w-4xl max-h-[85vh] w-full" onClick={(e) => e.stopPropagation()}>
            <img
              src={galleryImages[lightboxIdx].url}
              alt={galleryImages[lightboxIdx].title}
              className="w-full h-full object-contain rounded-2xl max-h-[75vh]"
            />
            <div className="text-center mt-4">
              <p className="text-white font-semibold">{galleryImages[lightboxIdx].title}</p>
              <p className="text-stone-400 text-sm">{galleryImages[lightboxIdx].description}</p>
              <p className="text-stone-500 text-xs mt-1">{lightboxIdx + 1} / {galleryImages.length}</p>
            </div>
          </div>
          <button
            onClick={(e) => { e.stopPropagation(); nextImage(); }}
            className="absolute right-3 sm:right-8 w-12 h-12 rounded-full glass flex items-center justify-center text-white hover:bg-turquoise-500/20 transition"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      )}
    </section>
  );
}
