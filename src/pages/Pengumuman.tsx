import { motion, AnimatePresence } from "framer-motion";
import { Megaphone, Calendar, Pin, X, Paperclip } from "lucide-react";
import { useState } from "react";

const Pengumuman = () => {
  const [selectedAnnouncement, setSelectedAnnouncement] = useState<any>(null);

  const announcements = [
    {
      isPinned: true,
      date: "15 Januari 2025",
      title: "Pendaftaran Anggota Baru Dibuka!",
      content:
        "Karang Taruna RW 06 membuka pendaftaran anggota baru periode 2025. Bagi pemuda usia 17-35 tahun yang berdomisili di RW 06 Manggarai dapat mendaftar melalui sekretariat atau kontak pengurus.",
      fullContent:
        "Karang Taruna RW 06 Manggarai dengan bangga mengumumkan pembukaan pendaftaran anggota baru untuk periode 2025. Program ini terbuka bagi seluruh pemuda berusia 17-35 tahun yang berdomisili di wilayah RW 06 Manggarai, Kelurahan Manggarai, Tebet, Jakarta Selatan.\n\nSebagai anggota, Anda akan mendapatkan berbagai manfaat termasuk akses ke program pelatihan, kegiatan sosial, networking dengan pemuda lainnya, dan kesempatan berkontribusi untuk kemajuan lingkungan.\n\nPendaftaran dapat dilakukan melalui:\n1. Datang langsung ke Sekretariat Karang Taruna (Balai RW 06)\n2. Menghubungi kontak pengurus di halaman Kontak\n3. Mengisi formulir online yang tersedia\n\nPersyaratan:\n- KTP domisili RW 06 Manggarai\n- Foto 3x4 (2 lembar)\n- Fotokopi KTP\n- Mengisi formulir pendaftaran\n\nBatas pendaftaran: 31 Januari 2025. Mari bergabung dan berkontribusi untuk kemajuan bersama!",
      category: "important",
      attachment: null,
    },
    {
      isPinned: true,
      date: "10 Januari 2025",
      title: "Perubahan Jadwal Rapat Koordinasi",
      content:
        "Rapat koordinasi yang seharusnya dilaksanakan tanggal 12 Januari 2025 dipindah menjadi tanggal 15 Januari 2025 pukul 14.00 WIB. Mohon kehadiran seluruh pengurus.",
      fullContent:
        "Kepada seluruh pengurus Karang Taruna RW 06,\n\nDengan ini kami informasikan bahwa rapat koordinasi yang dijadwalkan pada:\n\nJadwal Sebelumnya:\n- Tanggal: 12 Januari 2025\n- Waktu: 10.00 WIB\n- Lokasi: Balai RW 06\n\nDIPINDAH MENJADI:\n- Tanggal: 15 Januari 2025\n- Waktu: 14.00 WIB\n- Lokasi: Balai RW 06 (tetap)\n\nPerubahan jadwal ini dilakukan karena bentrok dengan acara kelurahan yang harus dihadiri oleh beberapa pengurus inti.\n\nAgenda Rapat:\n1. Evaluasi program kerja 2024\n2. Pembahasan program kerja 2025\n3. Pembagian tugas dan tanggung jawab\n4. Rencana anggaran 2025\n\nKehadiran seluruh pengurus sangat diharapkan. Bagi yang berhalangan hadir mohon memberitahukan kepada sekretaris paling lambat H-1.\n\nTerima kasih atas perhatian dan kerjasamanya.",
      category: "urgent",
      attachment: "Agenda Rapat 2025.pdf",
    },
    {
      isPinned: false,
      date: "8 Januari 2025",
      title: "Pelatihan Digital Marketing Gratis",
      content:
        "Akan diadakan pelatihan digital marketing gratis untuk anggota Karang Taruna pada tanggal 20 Januari 2025. Kuota terbatas 30 peserta. Segera daftar!",
      fullContent:
        "Karang Taruna RW 06 dengan senang hati mengumumkan penyelenggaraan Pelatihan Digital Marketing GRATIS untuk seluruh anggota.\n\nDetail Acara:\n- Tanggal: 20 Januari 2025\n- Waktu: 14.00 - 17.00 WIB\n- Lokasi: Ruang Serbaguna Balai RW 06\n- Kuota: 30 peserta (first come first served)\n\nMateri Pelatihan:\n1. Pengenalan Digital Marketing\n2. Social Media Marketing Strategy\n3. Content Creation Tips\n4. Instagram & Facebook Ads Basic\n5. Measuring Campaign Success\n\nNarasumber:\nAhmad Ridwan - Digital Marketing Specialist dengan 8 tahun pengalaman\n\nFasilitas:\n- Sertifikat\n- Modul pelatihan\n- Snack & coffee break\n- Free consultation (30 hari setelah pelatihan)\n\nCara Pendaftaran:\nHubungi sekretariat atau kontak pengurus. Pendaftaran dibuka hingga 18 Januari 2025 atau kuota penuh.\n\nJangan lewatkan kesempatan emas ini untuk upgrade skill digital marketing Anda!",
      category: "event",
      attachment: null,
    },
    {
      isPinned: false,
      date: "5 Januari 2025",
      title: "Donor Darah Rutin Bulan Februari",
      content:
        "Kegiatan donor darah rutin akan dilaksanakan pada tanggal 3 Februari 2025 pukul 08.00-12.00 WIB di Balai RW 06. Mari berbagi kebaikan!",
      fullContent:
        "Dalam rangka memperingati Hari Palang Merah Indonesia dan sebagai bentuk kepedulian sosial, Karang Taruna RW 06 kembali mengadakan kegiatan Donor Darah Rutin.\n\nJadwal:\n- Tanggal: 3 Februari 2025\n- Waktu: 08.00 - 12.00 WIB\n- Lokasi: Balai RW 06 Manggarai\n\nKerjasama:\nPalang Merah Indonesia (PMI) Jakarta Selatan\n\nSyarat Donor:\n- Usia 17-60 tahun\n- Berat badan minimal 45 kg\n- Tekanan darah normal\n- Dalam kondisi sehat\n- Tidak sedang hamil/menyusui\n- Sudah makan dan istirahat cukup\n\nManfaat Donor Darah:\n✓ Membantu menyelamatkan nyawa\n✓ Cek kesehatan gratis\n✓ Regenerasi sel darah\n✓ Mengurangi risiko penyakit jantung\n✓ Sertifikat pendonor\n✓ Snack & minuman gratis\n\nSetiap kantong darah Anda dapat menyelamatkan hingga 3 nyawa!\n\nMari berbagi kehidupan, donor darah adalah sedekah yang mulia.",
      category: "social",
      attachment: null,
    },
    {
      isPinned: false,
      date: "3 Januari 2025",
      title: "Laporan Kegiatan Desember 2024",
      content:
        "Total 8 kegiatan telah terlaksana dengan baik pada bulan Desember 2024. Terima kasih atas partisipasi dan dukungan semua pihak.",
      fullContent:
        "Laporan Kegiatan Karang Taruna RW 06\nBulan: Desember 2024\n\nAlhamdulillah, pada bulan Desember 2024, Karang Taruna RW 06 telah berhasil melaksanakan 8 kegiatan dengan baik.\n\nRingkasan Kegiatan:\n\n1. Donor Darah (5 Des)\n   - 45 pendonor\n   - 135 kantong darah terkumpul\n\n2. Senam Pagi Rutin (setiap Minggu)\n   - Rata-rata 60 peserta/minggu\n   - 4 sesi terlaksana\n\n3. Santunan Anak Yatim (10 Des)\n   - 25 anak yatim menerima santunan\n   - Total santunan: Rp 12.500.000\n\n4. Pelatihan Barista (15 Des)\n   - 20 peserta\n   - 18 lulus sertifikat\n\n5. Turnamen Futsal (17-18 Des)\n   - 8 tim peserta\n   - Sukses dengan antusias tinggi\n\n6. Bersih-Bersih Masjid (22 Des)\n   - 30 volunteer\n   - Masjid Al-Ikhlas bersih total\n\n7. Bazar UMKM (24 Des)\n   - 15 tenant UMKM\n   - Omzet total: Rp 18 juta\n\n8. Halal Bihalal Akhir Tahun (29 Des)\n   - 100+ peserta\n   - Acara penutup tahun yang meriah\n\nTerima kasih kepada seluruh pengurus, anggota, dan warga yang telah mendukung kegiatan kami. Mari terus berkarya di tahun 2025!",
      category: "report",
      attachment: "Laporan Lengkap Desember 2024.pdf",
    },
    {
      isPinned: false,
      date: "28 Desember 2024",
      title: "Selamat Tahun Baru 2025",
      content:
        "Segenap pengurus Karang Taruna RW 06 mengucapkan Selamat Tahun Baru 2025. Semoga tahun ini membawa kebaikan dan kesuksesan untuk kita semua.",
      fullContent:
        "Selamat Tahun Baru 2025!\n\nSegenap Pengurus dan Anggota Karang Taruna RW 06 Manggarai mengucapkan:\n\nSELAMAT TAHUN BARU 2025\n\nDi penghujung tahun 2024, kami mengucapkan terima kasih yang sebesar-besarnya kepada:\n\n✨ Seluruh warga RW 06 atas dukungan dan partisipasinya\n✨ Para donatur dan sponsor yang telah membantu program kami\n✨ Pihak kelurahan yang selalu mendukung kegiatan kami\n✨ Semua pihak yang telah bekerja sama dengan baik\n\nRefleksi 2024:\n- 96 kegiatan terlaksana\n- 500+ peserta program pelatihan\n- Rp 150 juta bantuan sosial tersalurkan\n- Puluhan prestasi diraih\n\nResolusi 2025:\n🎯 Lebih banyak program berkualitas\n🎯 Jangkauan lebih luas\n🎯 Dampak lebih besar\n🎯 Inovasi berkelanjutan\n\nSemoga di tahun 2025 ini:\n- Kesehatan selalu terjaga\n- Rejeki semakin lancar\n- Kebahagiaan selalu menyertai\n- Semua cita-cita tercapai\n\nMari kita sambut tahun baru dengan semangat baru, harapan baru, dan komitmen untuk terus berbuat baik bagi lingkungan dan sesama.\n\nSalam solid,\nKarang Taruna RW 06 Manggarai",
      category: "announcement",
      attachment: null,
    },
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "important":
        return "from-elegant-gold/20 to-elegant-gold-dark/20 border-elegant-gold";
      case "urgent":
        return "from-red-500/20 to-red-600/20 border-red-500";
      case "event":
        return "from-blue-500/20 to-blue-600/20 border-blue-500";
      case "social":
        return "from-green-500/20 to-green-600/20 border-green-500";
      case "report":
        return "from-purple-500/20 to-purple-600/20 border-purple-500";
      default:
        return "from-elegant-surface to-elegant-darker border-elegant-gold/30";
    }
  };

  const getCategoryBadge = (category: string) => {
    const badges: { [key: string]: string } = {
      important: "Penting",
      urgent: "Mendesak",
      event: "Acara",
      social: "Sosial",
      report: "Laporan",
      announcement: "Info",
    };
    return badges[category] || "Info";
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-b from-elegant-darker to-elegant-dark overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute h-1 w-1 rounded-full bg-elegant-gold"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.2, 0.8, 0.2],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex p-4 bg-elegant-gold/10 rounded-full mb-6">
              <Megaphone className="h-12 w-12 text-elegant-gold" />
            </div>
            <h1 className="font-lexend text-5xl md:text-6xl font-bold mb-6">
              <span className="text-elegant-gold">Pengumuman</span>
              <br />
              <span className="text-foreground text-3xl md:text-4xl mt-4 block">
                Announcements
              </span>
            </h1>
            <p className="font-poppins text-elegant-subtext text-lg max-w-3xl mx-auto">
              Stay Updated • Informasi terkini seputar kegiatan Karang Taruna RW 06
            </p>
          </motion.div>
        </div>
      </section>

      {/* Announcements List */}
      <section className="py-24 bg-elegant-dark">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="space-y-6">
            {announcements.map((announcement, index) => (
              <motion.article
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                whileHover={{ y: -5 }}
                className={`bg-gradient-to-r ${getCategoryColor(
                  announcement.category
                )} p-8 rounded-2xl border-l-4 shadow-elegant hover:shadow-gold transition-all duration-300 relative overflow-hidden`}
              >
                {/* Pinned Badge */}
                {announcement.isPinned && (
                  <div className="absolute top-4 right-4">
                    <motion.div
                      animate={{ rotate: [0, -10, 10, -10, 0] }}
                      transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                      className="flex items-center gap-2 bg-elegant-gold text-elegant-dark px-3 py-1 rounded-full"
                    >
                      <Pin className="h-4 w-4" />
                      <span className="font-poppins text-xs font-semibold">Disematkan</span>
                    </motion.div>
                  </div>
                )}

                {/* Category Badge */}
                <div className="mb-4">
                  <span
                    className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                      announcement.category === "urgent"
                        ? "bg-red-500/20 text-red-400"
                        : announcement.category === "important"
                        ? "bg-elegant-gold/20 text-elegant-gold"
                        : "bg-elegant-surface text-elegant-subtext"
                    }`}
                  >
                    {getCategoryBadge(announcement.category)}
                  </span>
                </div>

                {/* Date */}
                <div className="flex items-center gap-2 mb-4 text-elegant-subtext">
                  <Calendar className="h-4 w-4" />
                  <span className="font-poppins text-sm">{announcement.date}</span>
                </div>

                {/* Title */}
                <h2 className="font-lexend text-2xl font-bold text-foreground mb-4">
                  {announcement.title}
                </h2>

                {/* Content */}
                <p className="font-poppins text-elegant-subtext leading-relaxed mb-4">
                  {announcement.content}
                </p>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedAnnouncement(announcement)}
                  className="px-6 py-2 bg-elegant-gold/10 border border-elegant-gold text-elegant-gold font-poppins font-medium rounded-lg hover:bg-elegant-gold hover:text-elegant-dark transition-all duration-300"
                >
                  Selengkapnya
                </motion.button>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Modal Detail */}
      <AnimatePresence>
        {selectedAnnouncement && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedAnnouncement(null)}
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", duration: 0.5 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-elegant-darker border border-elegant-gold rounded-2xl shadow-gold max-w-3xl w-full max-h-[90vh] overflow-y-auto"
            >
              <div className="p-8">
                <div className="flex justify-between items-start mb-6">
                  <div className="flex-1 pr-8">
                    <span
                      className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mb-4 ${
                        selectedAnnouncement.category === "urgent"
                          ? "bg-red-500/20 text-red-400"
                          : selectedAnnouncement.category === "important"
                          ? "bg-elegant-gold/20 text-elegant-gold"
                          : "bg-elegant-surface text-elegant-subtext"
                      }`}
                    >
                      {getCategoryBadge(selectedAnnouncement.category)}
                    </span>
                    <h2 className="font-lexend text-3xl font-bold text-elegant-gold">
                      {selectedAnnouncement.title}
                    </h2>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.1, rotate: 90 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setSelectedAnnouncement(null)}
                    className="text-elegant-gold hover:text-elegant-gold-light transition-colors flex-shrink-0"
                  >
                    <X className="h-6 w-6" />
                  </motion.button>
                </div>

                <div className="flex items-center gap-2 mb-6 text-elegant-subtext">
                  <Calendar className="h-4 w-4" />
                  <span className="font-poppins text-sm">
                    Tanggal Rilis: {selectedAnnouncement.date}
                  </span>
                </div>

                <div className="border-t border-elegant-gold/20 pt-6 mb-6">
                  <div className="font-poppins text-elegant-subtext leading-relaxed whitespace-pre-line">
                    {selectedAnnouncement.fullContent}
                  </div>
                </div>

                {selectedAnnouncement.attachment && (
                  <div className="border-t border-elegant-gold/20 pt-6">
                    <h3 className="font-lexend text-lg font-semibold text-elegant-gold mb-3 flex items-center gap-2">
                      <Paperclip className="h-5 w-5" />
                      Lampiran
                    </h3>
                    <div className="bg-elegant-surface p-4 rounded-lg border border-elegant-gold/20">
                      <p className="font-poppins text-foreground">
                        {selectedAnnouncement.attachment}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Pengumuman;
