export interface CaveRule {
  id: number;
  text: string;
  icon: string;
}

export const caveRules: CaveRule[] = [
  { id: 1, text: 'Ikuti arahan pemandu atau pengelola setempat.', icon: 'compass' },
  { id: 2, text: 'Gunakan alas kaki yang sesuai dan tidak licin.', icon: 'footprints' },
  { id: 3, text: 'Bawa lampu penerangan yang memadai jika diperlukan.', icon: 'flashlight' },
  { id: 4, text: 'Jangan menyentuh, mematahkan, mengambil, atau merusak stalaktit dan stalagmit.', icon: 'ban' },
  { id: 5, text: 'Jangan membuang sampah di dalam atau sekitar gua.', icon: 'trash' },
  { id: 6, text: 'Jangan mencoret dinding atau meninggalkan tanda pada batuan.', icon: 'pen-line' },
  { id: 7, text: 'Jangan membuat api atau merokok di dalam gua.', icon: 'flame' },
  { id: 8, text: 'Jaga suara dan hormati pengunjung serta lingkungan sekitar.', icon: 'volume' },
  { id: 9, text: 'Jangan memasuki lorong yang ditutup atau melanjutkan penelusuran di luar jalur yang diizinkan.', icon: 'door-closed' },
  { id: 10, text: 'Jangan memasuki gua sendirian; lakukan penelusuran bersama pemandu atau pendamping yang kompeten.', icon: 'users' },
  { id: 11, text: 'Perhatikan kondisi cuaca, genangan air, permukaan licin, dan potensi bahaya setempat.', icon: 'cloud-rain' },
  { id: 12, text: 'Jika merasa tidak aman atau kondisi berubah, hentikan penelusuran dan ikuti instruksi pemandu.', icon: 'shield-alert' },
];
