export type SectionId =
  | 'beranda'
  | 'storytelling'
  | 'digital-mapping'
  | 'virtual-experience'
  | 'tata-tertib'
  | 'informasi';

export interface NavContext {
  activeSection: SectionId;
  scrollToSection: (id: SectionId) => void;
  selectedLocationId: string | null;
  setSelectedLocationId: (id: string | null) => void;
  selectedChapterId: string | null;
  setSelectedChapterId: (id: string | null) => void;
  highlightMarkerId: string | null;
  setHighlightMarkerId: (id: string | null) => void;
  openVirtualLocationId: string | null;
  setOpenVirtualLocationId: (id: string | null) => void;
  exploredLocationIds: Set<string>;
  markLocationExplored: (id: string) => void;
  exploredChapterIds: Set<string>;
  markChapterExplored: (id: string) => void;
}
