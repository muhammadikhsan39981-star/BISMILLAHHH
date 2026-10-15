import { MapPin, Clock, Leaf, Mail } from 'lucide-react';
import type { SectionId } from '@/types';

interface FooterProps {
  onNavigate: (id: SectionId) => void;
}

const footerNav: { id: SectionId; label: string }[] = [
  { id: 'beranda', label: 'Beranda' },
  { id: 'storytelling', label: 'Storytelling' },
  { id: 'digital-mapping', label: 'Digital Mapping' },
  { id: 'virtual-experience', label: 'Virtual Experience' },
  { id: 'tata-tertib', label: 'Tata Tertib' },
  { id: 'informasi', label: 'Informasi' },
];

export default function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="relative bg-stone-950 border-t border-white/5">
      {/* Top accent line */}
      <div className="h-1 bg-gradient-to-r from-transparent via-turquoise-500/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 py-12 sm:py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-turquoise-400 to-cave-600 flex items-center justify-center">
                <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-white">
                  <path d="M12 2L3 7v6c0 5.5 3.8 9.5 9 9.5s9-4 9-9.5V7l-9-5z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
                  <path d="M9 12l2-3 2 3v4l-2 1.5L9 16v-4z" fill="currentColor" opacity="0.6" />
                </svg>
              </div>
              <span className="font-display font-bold text-white tracking-wide text-lg">
                HIDDEN <span className="text-turquoise-400">KARST</span> LIPU
              </span>
            </div>
            <p className="text-stone-500 text-sm leading-relaxed mb-4">
              Digital Cave Experience — eksplorasi digital gua yang menggabungkan storytelling,
              mapping, dan virtual experience.
            </p>
            <div className="flex items-center gap-2 px-3 py-2 rounded-full bg-cave-900/50 border border-cave-600/30 inline-flex">
              <Leaf className="w-4 h-4 text-cave-400" />
              <span className="text-cave-300 text-xs">Wisata Berkelanjutan</span>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-widest mb-4">Navigasi</h4>
            <ul className="space-y-2.5">
              {footerNav.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => onNavigate(item.id)}
                    className="text-stone-400 text-sm hover:text-turquoise-300 transition"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Location */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-widest mb-4">Lokasi</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-turquoise-400 shrink-0 mt-0.5" />
                <p className="text-stone-400 text-sm leading-relaxed">
                  Hidden Karst Lipu, Wantopi, Kecamatan Mawasangka Timur, Kabupaten Buton Tengah, Sulawesi Tenggara
                </p>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-turquoise-400 shrink-0 mt-0.5" />
                <div>
                  <p className="text-stone-400 text-sm">07.00–17.00 WITA</p>
                  <p className="text-stone-600 text-xs mt-0.5">Hari operasional: konfirmasi pengelola</p>
                </div>
              </div>
            </div>
          </div>

          {/* Conservation reminder */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-widest mb-4">Konservasi</h4>
            <p className="text-stone-400 text-sm leading-relaxed mb-4">
              "Jelajahi dengan bijak. Lindungi alam, hormati lingkungan, dan tinggalkan gua tanpa sampah."
            </p>
            <div className="glass-light rounded-xl p-4">
              <p className="text-stone-500 text-xs leading-relaxed">
                Formasi stalaktit dan stalagmit rusak tidak dapat diperbaiki dan membutuhkan waktu
                ribuan tahun untuk terbentuk kembali.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-stone-600 text-xs text-center sm:text-left">
            © {new Date().getFullYear()} Hidden Karst Lipu — Digital Cave Experience. Proyek wisata digital.
          </p>
          <div className="flex items-center gap-2 text-stone-600 text-xs">
            <Mail className="w-3.5 h-3.5" />
            <span>Kontak pengelola untuk informasi lebih lanjut</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
