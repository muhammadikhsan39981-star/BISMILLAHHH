import { useState, useEffect, useCallback } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Storytelling from '@/components/Storytelling';
import DigitalMapping from '@/components/DigitalMapping';
import VirtualExperience from '@/components/VirtualExperience';
import CaveRules from '@/components/CaveRules';
import VisitingHours from '@/components/VisitingHours';
import Gallery from '@/components/Gallery';
import Footer from '@/components/Footer';
import type { SectionId } from '@/types';
import { chapters } from '@/data/chapters';

function App() {
  const [activeSection, setActiveSection] = useState<SectionId>('beranda');
  const [selectedLocationId, setSelectedLocationId] = useState<string | null>(null);
  const [selectedChapterId, setSelectedChapterId] = useState<string | null>(null);
  const [highlightMarkerId, setHighlightMarkerId] = useState<string | null>(null);
  const [openVirtualLocationId, setOpenVirtualLocationId] = useState<string | null>(null);
  const [exploredLocationIds, setExploredLocationIds] = useState<Set<string>>(new Set());
  const [exploredChapterIds, setExploredChapterIds] = useState<Set<string>>(new Set());

  const scrollToSection = useCallback((id: SectionId) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setActiveSection(id);
  }, []);

  // Track active section via IntersectionObserver
  useEffect(() => {
    const sectionIds: SectionId[] = [
      'beranda',
      'storytelling',
      'digital-mapping',
      'virtual-experience',
      'tata-tertib',
      'informasi',
    ];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id as SectionId);
          }
        });
      },
      { threshold: 0.25, rootMargin: '-100px 0px -100px 0px' }
    );
    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const markLocationExplored = useCallback((id: string) => {
    setExploredLocationIds((prev) => new Set(prev).add(id));
  }, []);

  const markChapterExplored = useCallback((id: string) => {
    setExploredChapterIds((prev) => new Set(prev).add(id));
  }, []);

  // Cross-feature navigation handlers
  const handleNavigateToMap = useCallback(
    (locationId: string) => {
      setHighlightMarkerId(locationId);
      setSelectedLocationId(locationId);
      scrollToSection('digital-mapping');
    },
    [scrollToSection]
  );

  const handleOpenVirtual = useCallback(
    (locationId: string) => {
      setOpenVirtualLocationId(locationId);
      scrollToSection('virtual-experience');
    },
    [scrollToSection]
  );

  const handleOpenChapter = useCallback(
    (chapterId: string) => {
      setSelectedChapterId(chapterId);
      const chIdx = chapters.findIndex((c) => c.id === chapterId);
      if (chIdx >= 0) {
        markChapterExplored(chapterId);
      }
      scrollToSection('storytelling');
    },
    [scrollToSection, markChapterExplored]
  );

  return (
    <div className="min-h-screen bg-stone-950 text-stone-100 overflow-x-hidden">
      <Navbar activeSection={activeSection} onNavigate={scrollToSection} />

      <Hero onNavigate={scrollToSection} onOpenVirtual={handleOpenVirtual} />

      <Storytelling
        selectedChapterId={selectedChapterId}
        setSelectedChapterId={setSelectedChapterId}
        markChapterExplored={markChapterExplored}
        onNavigateToMap={handleNavigateToMap}
      />

      <DigitalMapping
        highlightMarkerId={highlightMarkerId}
        setHighlightMarkerId={setHighlightMarkerId}
        onOpenVirtual={handleOpenVirtual}
        onOpenChapter={handleOpenChapter}
        markLocationExplored={markLocationExplored}
      />

      <VirtualExperience
        openLocationId={openVirtualLocationId}
        setOpenLocationId={setOpenVirtualLocationId}
        onNavigateToMap={handleNavigateToMap}
        onOpenChapter={handleOpenChapter}
        markLocationExplored={markLocationExplored}
      />

      <CaveRules />

      <VisitingHours />

      <Gallery />

      <Footer onNavigate={scrollToSection} />
    </div>
  );
}

export default App;
