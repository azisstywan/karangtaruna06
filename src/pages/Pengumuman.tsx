import { motion } from "framer-motion";
import { Megaphone, Calendar, Pin } from "lucide-react";

const Pengumuman = () => {
  const announcements = [
    {
      isPinned: true,
      date: "15 Januari 2025",
      title: "Pendaftaran Anggota Baru Dibuka!",
      content:
        "Karang Taruna RW 06 membuka pendaftaran anggota baru periode 2025. Bagi pemuda usia 17-35 tahun yang berdomisili di RW 06 Manggarai dapat mendaftar melalui sekretariat atau kontak pengurus.",
      category: "important",
    },
    {
      isPinned: true,
      date: "10 Januari 2025",
      title: "Perubahan Jadwal Rapat Koordinasi",
      content:
        "Rapat koordinasi yang seharusnya dilaksanakan tanggal 12 Januari 2025 dipindah menjadi tanggal 15 Januari 2025 pukul 14.00 WIB. Mohon kehadiran seluruh pengurus.",
      category: "urgent",
    },
    {
      isPinned: false,
      date: "8 Januari 2025",
      title: "Pelatihan Digital Marketing Gratis",
      content:
        "Akan diadakan pelatihan digital marketing gratis untuk anggota Karang Taruna pada tanggal 20 Januari 2025. Kuota terbatas 30 peserta. Segera daftar!",
      category: "event",
    },
    {
      isPinned: false,
      date: "5 Januari 2025",
      title: "Donor Darah Rutin Bulan Februari",
      content:
        "Kegiatan donor darah rutin akan dilaksanakan pada tanggal 3 Februari 2025 pukul 08.00-12.00 WIB di Balai RW 06. Mari berbagi kebaikan!",
      category: "social",
    },
    {
      isPinned: false,
      date: "3 Januari 2025",
      title: "Laporan Kegiatan Desember 2024",
      content:
        "Total 8 kegiatan telah terlaksana dengan baik pada bulan Desember 2024. Terima kasih atas partisipasi dan dukungan semua pihak.",
      category: "report",
    },
    {
      isPinned: false,
      date: "28 Desember 2024",
      title: "Selamat Tahun Baru 2025",
      content:
        "Segenap pengurus Karang Taruna RW 06 mengucapkan Selamat Tahun Baru 2025. Semoga tahun ini membawa kebaikan dan kesuksesan untuk kita semua.",
      category: "announcement",
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
                <p className="font-poppins text-elegant-subtext leading-relaxed">
                  {announcement.content}
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Subscribe Section */}
      <section className="py-24 bg-elegant-darker">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <Megaphone className="h-16 w-16 text-elegant-gold mx-auto mb-6" />
            <h2 className="font-lexend text-3xl md:text-4xl font-bold text-foreground mb-4">
              Dapatkan Update Terbaru
            </h2>
            <p className="font-poppins text-elegant-subtext text-lg mb-8">
              Follow media sosial kami agar tidak ketinggalan informasi penting
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 0 40px rgba(200, 168, 89, 0.5)" }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-elegant-gold-dark via-elegant-gold to-elegant-gold-light text-elegant-dark font-semibold rounded-lg transition-all duration-300"
              >
                Follow Instagram
              </motion.button>
              <motion.a
                href="/kontak"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-transparent border-2 border-elegant-gold text-elegant-gold font-semibold rounded-lg hover:bg-elegant-gold/10 transition-all duration-300 inline-block"
              >
                Hubungi Kami
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Pengumuman;
