import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import type { SectionId } from '@/types';

interface NavbarProps {
  activeSection: SectionId;
  onNavigate: (id: SectionId) => void;
}

const navItems: { id: SectionId; label: string }[] = [
  { id: 'beranda', label: 'Beranda' },
  { id: 'storytelling', label: 'Storytelling' },
  { id: 'digital-mapping', label: 'Digital Mapping' },
  { id: 'virtual-experience', label: 'Virtual Experience' },
  { id: 'tata-tertib', label: 'Tata Tertib' },
  { id: 'informasi', label: 'Informasi' },
];

export default function Navbar({ activeSection, onNavigate }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavigate = (id: SectionId) => {
    onNavigate(id);
    setMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-stone-950/90 backdrop-blur-xl border-b border-white/5 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 flex items-center justify-between">
        <button
          onClick={() => handleNavigate('beranda')}
          className="flex items-center gap-2 group"
        >
          <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-turquoise-400 to-cave-600 flex items-center justify-center shadow-lg shadow-turquoise-500/20">
            <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-white">
              <path
                d="M12 2L3 7v6c0 5.5 3.8 9.5 9 9.5s9-4 9-9.5V7l-9-5z"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinejoin="round"
              />
              <path
                d="M9 12l2-3 2 3v4l-2 1.5L9 16v-4z"
                fill="currentColor"
                opacity="0.6"
              />
            </svg>
          </div>
          <span className="font-display font-bold text-white tracking-wide text-lg">
            HIDDEN <span className="text-turquoise-400">KARST</span> LIPU
          </span>
        </button>

        <div className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavigate(item.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeSection === item.id
                  ? 'bg-turquoise-500/15 text-turquoise-300'
                  : 'text-stone-300 hover:text-white hover:bg-white/5'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden text-white p-2 rounded-lg hover:bg-white/5 transition"
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-5 pb-4 pt-2 space-y-1 bg-stone-950/95 backdrop-blur-xl">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavigate(item.id)}
              className={`w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                activeSection === item.id
                  ? 'bg-turquoise-500/15 text-turquoise-300'
                  : 'text-stone-300 hover:text-white hover:bg-white/5'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}
