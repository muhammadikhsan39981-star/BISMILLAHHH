export interface Chapter {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  narrative: string;
  image: string;
  locationId?: string;
}

export const chapters: Chapter[] = [
  {
    id: 'chapter-01',
    number: '01',
    title: 'Mengenal Hidden Karst Lipu',
    subtitle: 'Awal Perjalanan Menuju Dunia Bawah Tanah',
    narrative:
      'Hidden Karst Lipu terletak di Wantopi, Kecamatan Mawasangka Timur, Kabupaten Buton Tengah, Sulawesi Tenggara. Gua ini menjadi salah satu potensi wisata alam yang menampilkan keindahan bentang alam bawah tanah khas kawasan Sulawesi Tenggara. [Informasi detail tentang sejarah penemuan dan penamaan gua dapat ditambahkan setelah verifikasi dengan pengelola setempat.]',
    image:
      'https://images.pexels.com/photos/30749809/pexels-photo-30749809.jpeg?auto=compress&cs=tinysrgb&w=1200',
    locationId: 'pintu-masuk',
  },
  {
    id: 'chapter-02',
    number: '02',
    title: 'Lanskap dan Lingkungan Gua',
    subtitle: 'Keseimbangan Ekosistem Sekitar Gua',
    narrative:
      'Lanskap di sekitar Hidden Karst Lipu didominasi oleh formasi geologi khas Pulau Buton. Vegetasi yang mengelilingi area gua turut menjaga kestabilan ekosistem dan kualitas air di dalam gua. [Deskripsi spesifik tentang flora, fauna, dan kondisi geologi lingkungan dapat dilengkapi oleh ahli lokal.]',
    image:
      'https://images.pexels.com/photos/20042347/pexels-photo-20042347.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
  {
    id: 'chapter-03',
    number: '03',
    title: 'Formasi Alam dan Keunikan Gua',
    subtitle: 'Stalaktit, Stalagmit, dan Speleothem',
    narrative:
      'Stalaktit dan stalagmit merupakan formasi speleothem yang terbentuk dari pengendapan mineral kalsium karbonat selama ribuan tahun. Setiap tetes air yang meresap melalui batuan kapur meninggalkan jejak mineral yang perlahan membangun struktur ini. [Informasi spesifik tentang jenis formasi dan usia geologi Hidden Karst Lipu dapat ditambahkan setelah kajian geologi.]',
    image:
      'https://images.pexels.com/photos/11144695/pexels-photo-11144695.jpeg?auto=compress&cs=tinysrgb&w=1200',
    locationId: 'ruang-stalaktit',
  },
  {
    id: 'chapter-04',
    number: '04',
    title: 'Menelusuri Ruang Gua',
    subtitle: 'Dari Lorong Sempit hingga Ruang Luas',
    narrative:
      'Penelusuran ruang gua mengajak pengunjung melewati lorong-lorong yang terhubung satu sama lain. Setiap ruang memiliki karakter dan bentuk alam yang berbeda, dari ruang sempit hingga ruang luas dengan formasi yang menarik. [Peta denah rinci dan deskripsi setiap ruang dapat ditambahkan berdasarkan survei lapangan.]',
    image:
      'https://images.pexels.com/photos/11669267/pexels-photo-11669267.jpeg?auto=compress&cs=tinysrgb&w=1200',
    locationId: 'danau-biru',
  },
  {
    id: 'chapter-05',
    number: '05',
    title: 'Cerita dan Pengetahuan Lokal',
    subtitle: 'Warisan yang Dijaga Masyarakat',
    narrative:
      'Masyarakat sekitar gua memiliki pengetahuan dan hubungan dengan kawasan ini yang diwariskan dari generasi ke generasi. [Cerita rakyat, pengetahuan tradisional, dan makna budaya yang spesifik perlu dikumpulkan dan diverifikasi bersama masyarakat dan pengelola setempat sebelum dipublikasikan.]',
    image:
      'https://images.pexels.com/photos/14776269/pexels-photo-14776269.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
  {
    id: 'chapter-06',
    number: '06',
    title: 'Pelestarian dan Wisata Berkelanjutan',
    subtitle: 'Menjaga Gua untuk Generasi Mendatang',
    narrative:
      'Wisata gua yang berkelanjutan mengutamakan konservasi bentang alam bawah tanah. Formasi stalaktit dan stalagmit yang rusak tidak dapat diperbaiki dan membutuhkan waktu ribuan tahun untuk terbentuk kembali. Pengelolaan yang baik mencakup pembatasan jumlah pengunjung, jalur yang jelas, dan edukasi tentang pentingnya menjaga ekosistem gua.',
    image:
      'https://images.pexels.com/photos/14398753/pexels-photo-14398753.jpeg?auto=compress&cs=tinysrgb&w=1200',
    locationId: 'ruang-akhir',
  },
];

export const getChapterById = (id: string): Chapter | undefined =>
  chapters.find((ch) => ch.id === id);
