export interface CaveLocation {
  id: string;
  number: string;
  name: string;
  subtitle: string;
  description: string;
  educationalInfo: string;
  image: string;
  galleryImages: string[];
  markerPosition: { x: number; y: number };
  chapterId: string;
}

export const locations: CaveLocation[] = [
  {
    id: 'pintu-masuk',
    number: '01',
    name: 'Pintu Masuk',
    subtitle: 'Gerbang Menuju Dunia Bawah Tanah',
    description:
      'Titik awal penelusuran Hidden Karst Lipu. Pengunjung bersiap memasuki lorong gua dengan pemandu dan peralatan yang sesuai.',
    educationalInfo:
      'Pintu masuk gua menjadi zona transisi antara lingkungan luar dan ekosistem gua yang memiliki suhu, kelembapan, dan intensitas cahaya berbeda.',
    image:
      'https://images.pexels.com/photos/30749809/pexels-photo-30749809.jpeg?auto=compress&cs=tinysrgb&w=1200',
    galleryImages: [
      'https://images.pexels.com/photos/30749809/pexels-photo-30749809.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/20042347/pexels-photo-20042347.jpeg?auto=compress&cs=tinysrgb&w=1200',
    ],
    markerPosition: { x: 8, y: 74 },
    chapterId: 'chapter-01',
  },
  {
    id: 'ruang-stalaktit',
    number: '02',
    name: 'Ruang Stalaktit',
    subtitle: 'Langit-langit Batu yang Bernyawa',
    description:
      'Ruang dengan formasi stalaktit yang menggantung dari langit-langit gua, tercipta dari proses alam selama ribuan tahun.',
    educationalInfo:
      'Stalaktit terbentuk dari tetesan air yang mengandung kalsium karbonat. Setiap tetes meninggalkan lapisan mineral yang perlahan membentuk struktur kerucut menggantung.',
    image:
      'https://images.pexels.com/photos/17494951/pexels-photo-17494951.jpeg?auto=compress&cs=tinysrgb&w=1200',
    galleryImages: [
      'https://images.pexels.com/photos/17494951/pexels-photo-17494951.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/11144695/pexels-photo-11144695.jpeg?auto=compress&cs=tinysrgb&w=1200',
    ],
    markerPosition: { x: 26, y: 44 },
    chapterId: 'chapter-03',
  },
  {
    id: 'ruang-stalagmit',
    number: '03',
    name: 'Ruang Stalagmit',
    subtitle: 'Pilar-Pilar yang Tumbuh dari Bawah',
    description:
      'Ruang dengan formasi stalagmit yang tumbuh dari lantai gua ke atas, merupakan pasangan alami dari stalaktit.',
    educationalInfo:
      'Stalagmit terbentuk ketika tetesan air jatuh ke lantai gua dan mengendapkan kalsium karbonat. Jika stalaktit dan stalagmit bertemu, mereka membentuk pilar gua.',
    image:
      'https://images.pexels.com/photos/6870966/pexels-photo-6870966.jpeg?auto=compress&cs=tinysrgb&w=1200',
    galleryImages: [
      'https://images.pexels.com/photos/6870966/pexels-photo-6870966.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/19469428/pexels-photo-19469428.jpeg?auto=compress&cs=tinysrgb&w=1200',
    ],
    markerPosition: { x: 47, y: 24 },
    chapterId: 'chapter-03',
  },
  {
    id: 'danau-biru',
    number: '04',
    name: 'Danau Biru',
    subtitle: 'Permukaan Air yang Memantulkan Keindahan Gua',
    description:
      'Danau alami di dalam gua dengan air jernih yang memantulkan formasi batuan di sekitarnya.',
    educationalInfo:
      'Air di dalam gua dapat mengandung mineral terlarut yang memengaruhi warna dan kejernihannya. Danau gua menjadi indikator kualitas ekosistem bawah tanah.',
    image:
      'https://images.pexels.com/photos/6877022/pexels-photo-6877022.jpeg?auto=compress&cs=tinysrgb&w=1200',
    galleryImages: [
      'https://images.pexels.com/photos/6877022/pexels-photo-6877022.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/17718562/pexels-photo-17718562.jpeg?auto=compress&cs=tinysrgb&w=1200',
    ],
    markerPosition: { x: 64, y: 41 },
    chapterId: 'chapter-04',
  },
  {
    id: 'ruang-besar',
    number: '05',
    name: 'Ruang Besar',
    subtitle: 'Ruang Luas dengan Pemandangan Megah',
    description:
      'Ruang terluas di dalam Hidden Karst Lipu, dengan langit-langit tinggi dan formasi batuan yang beragam.',
    educationalInfo:
      'Ruang besar gua terbentuk dari proses pelarutan batuan kapur oleh air dalam jangka waktu geologis yang panjang. Ukuran ruang mencerminkan sejarah hidrologi gua.',
    image:
      'https://images.pexels.com/photos/19160537/pexels-photo-19160537.jpeg?auto=compress&cs=tinysrgb&w=1200',
    galleryImages: [
      'https://images.pexels.com/photos/19160537/pexels-photo-19160537.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/8863841/pexels-photo-8863841.png?auto=compress&cs=tinysrgb&w=1200',
    ],
    markerPosition: { x: 79, y: 58 },
    chapterId: 'chapter-04',
  },
  {
    id: 'ruang-akhir',
    number: '06',
    name: 'Ruang Akhir',
    subtitle: 'Titik Akhir Penelusuran',
    description:
      'Ruang terakhir pada jalur penelusuran Hidden Karst Lipu, menandai akhir perjalanan eksplorasi sebelum kembali ke pintu masuk.',
    educationalInfo:
      'Setiap gua memiliki zona yang aman untuk dikunjungi dan zona yang terbatas. Ruang akhir menjadi batas eksplorasi untuk menjaga kelestarian gua dan keselamatan pengunjung.',
    image:
      'https://images.pexels.com/photos/28593374/pexels-photo-28593374.jpeg?auto=compress&cs=tinysrgb&w=1200',
    galleryImages: [
      'https://images.pexels.com/photos/28593374/pexels-photo-28593374.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/14776269/pexels-photo-14776269.jpeg?auto=compress&cs=tinysrgb&w=1200',
    ],
    markerPosition: { x: 90, y: 28 },
    chapterId: 'chapter-06',
  },
];

export const getLocationById = (id: string): CaveLocation | undefined =>
  locations.find((loc) => loc.id === id);
