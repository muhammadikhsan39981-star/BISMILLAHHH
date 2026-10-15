import { Clock, MapPin, Calendar, ExternalLink, AlertCircle } from 'lucide-react';

export default function VisitingHours() {
  return (
    <section id="informasi" className="relative py-20 sm:py-32 bg-stone-950 bg-grid">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Section header */}
        <div className="text-center mb-12 sm:mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-light text-turquoise-300 text-xs font-semibold uppercase tracking-widest">
            <Clock className="w-4 h-4" />
            Informasi
          </span>
          <h2 className="mt-6 font-display font-extrabold text-white text-3xl sm:text-5xl lg:text-6xl tracking-tight">
            Visiting Hours
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Hours card */}
          <div className="glass rounded-3xl p-7 sm:p-8 text-center lg:text-left">
            <div className="w-14 h-14 rounded-2xl bg-turquoise-500/10 border border-turquoise-400/20 flex items-center justify-center mb-5">
              <Clock className="w-7 h-7 text-turquoise-400" />
            </div>
            <h3 className="text-stone-400 text-xs font-bold uppercase tracking-widest mb-2">Jam Operasional</h3>
            <p className="font-display font-extrabold text-white text-3xl sm:text-4xl tracking-tight">
              07.00–17.00
            </p>
            <p className="text-turquoise-300 text-sm font-medium mt-1">WITA (Waktu Indonesia Tengah)</p>
            <div className="mt-5 pt-5 border-t border-white/5">
              <div className="flex items-start gap-2 text-stone-400 text-sm">
                <AlertCircle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>
                  Informasi operasional yang diberikan pemilik proyek. Belum diverifikasi oleh pihak pengelola.
                </span>
              </div>
            </div>
          </div>

          {/* Days card */}
          <div className="glass rounded-3xl p-7 sm:p-8 text-center lg:text-left">
            <div className="w-14 h-14 rounded-2xl bg-turquoise-500/10 border border-turquoise-400/20 flex items-center justify-center mb-5">
              <Calendar className="w-7 h-7 text-turquoise-400" />
            </div>
            <h3 className="text-stone-400 text-xs font-bold uppercase tracking-widest mb-2">Hari Operasional</h3>
            <p className="font-display font-bold text-white text-xl sm:text-2xl leading-tight">
              Konfirmasi Pengelola
            </p>
            <p className="text-stone-400 text-sm mt-2 leading-relaxed">
              Hari operasional perlu dikonfirmasikan kepada pengelola setempat sebelum melakukan kunjungan.
            </p>
            <div className="mt-5 pt-5 border-t border-white/5">
              <p className="text-stone-500 text-xs">
                Disarankan menghubungi pengelola untuk informasi hari buka, kapasitas, dan jadwal pemandu.
              </p>
            </div>
          </div>

          {/* Location card */}
          <div className="glass rounded-3xl p-7 sm:p-8 text-center lg:text-left">
            <div className="w-14 h-14 rounded-2xl bg-turquoise-500/10 border border-turquoise-400/20 flex items-center justify-center mb-5">
              <MapPin className="w-7 h-7 text-turquoise-400" />
            </div>
            <h3 className="text-stone-400 text-xs font-bold uppercase tracking-widest mb-2">Lokasi</h3>
            <p className="font-display font-bold text-white text-lg leading-tight">
              Hidden Karst Lipu
            </p>
            <p className="text-stone-400 text-sm mt-2 leading-relaxed">
              Wantopi, Kecamatan Mawasangka Timur, Kabupaten Buton Tengah, Sulawesi Tenggara
            </p>
            <a
              href="https://www.google.com/maps/search/?api=1&query=Gua+Laumehe+Wantopi+Mawasangka+Timur+Buton+Tengah"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 px-5 py-3 rounded-full bg-turquoise-500 hover:bg-turquoise-400 text-stone-950 text-sm font-bold transition"
            >
              Lihat Lokasi
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Reminder banner */}
        <div className="mt-8 rounded-2xl bg-amber-500/10 border border-amber-400/20 p-5 sm:p-6 flex items-start gap-4">
          <AlertCircle className="w-6 h-6 text-amber-400 shrink-0 mt-0.5" />
          <p className="text-amber-100 text-sm sm:text-base leading-relaxed">
            <span className="font-bold">Pengingat:</span> Rencanakan kunjungan sebelum jam operasional berakhir.
            Akses dan penelusuran ruang gua mengikuti kondisi lapangan serta arahan pengelola.
          </p>
        </div>
      </div>
    </section>
  );
}
