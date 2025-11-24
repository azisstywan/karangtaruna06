import { motion, AnimatePresence } from "framer-motion";
import { Calendar, Clock, MapPin, X, User } from "lucide-react";
import { useState } from "react";

const Jadwal = () => {
  const [selectedEvent, setSelectedEvent] = useState<any>(null);

  const schedules = [
    {
      month: "Januari 2025",
      events: [
        {
          date: "5 Jan",
          time: "09:00 - 12:00",
          title: "Rapat Koordinasi Awal Tahun",
          location: "Balai RW 06",
          type: "meeting",
          pic: "Budi Santoso",
          description: "Rapat koordinasi untuk membahas program kerja tahun 2025, evaluasi tahun sebelumnya, dan penetapan target organisasi. Harap semua pengurus hadir tepat waktu.",
        },
        {
          date: "12 Jan",
          time: "07:00 - 09:00",
          title: "Senam Pagi Bersama",
          location: "Lapangan Manggarai",
          type: "sport",
          pic: "Siti Nurhaliza",
          description: "Kegiatan senam pagi rutin untuk meningkatkan kesehatan dan kebersamaan warga. Terbuka untuk semua usia. Instruktur senam berpengalaman akan memandu.",
        },
        {
          date: "20 Jan",
          time: "14:00 - 17:00",
          title: "Workshop Digital Marketing",
          location: "Ruang Serbaguna",
          type: "training",
          pic: "Ahmad Ridwan",
          description: "Pelatihan digital marketing gratis untuk pelaku UMKM dan pemuda yang ingin belajar pemasaran online. Materi mencakup social media marketing, content creation, dan strategi branding.",
        },
      ],
    },
    {
      month: "Februari 2025",
      events: [
        {
          date: "3 Feb",
          time: "08:00 - 12:00",
          title: "Donor Darah Rutin",
          location: "Balai RW 06",
          type: "social",
          pic: "Dr. Fitria",
          description: "Kegiatan donor darah bekerjasama dengan PMI Jakarta Selatan. Syarat donor: sehat, usia 17-60 tahun, berat badan minimal 45kg. Dapatkan sertifikat dan snack gratis.",
        },
        {
          date: "14 Feb",
          time: "16:00 - 18:00",
          title: "Perayaan Hari Kasih Sayang",
          location: "Taman RW 06",
          type: "celebration",
          pic: "Dewi Lestari",
          description: "Perayaan Valentine Day dengan berbagai games seru, doorprize menarik, dan penampilan musik akustik. Acara keluarga yang fun dan menghibur.",
        },
        {
          date: "25 Feb",
          time: "13:00 - 16:00",
          title: "Pelatihan Fotografi",
          location: "Ruang Serbaguna",
          type: "training",
          pic: "Rudi Hartono",
          description: "Workshop fotografi basic untuk pemula. Belajar teknik komposisi, lighting, dan editing foto. Peserta wajib membawa kamera/smartphone. Kuota terbatas 30 orang.",
        },
      ],
    },
    {
      month: "Maret 2025",
      events: [
        {
          date: "8 Mar",
          time: "09:00 - 12:00",
          title: "Peringatan Hari Perempuan",
          location: "Balai RW 06",
          type: "celebration",
          pic: "Ratna Sari",
          description: "Acara peringatan Hari Perempuan Internasional dengan talkshow inspiratif, demo memasak, dan doorprize. Menghargai peran perempuan dalam membangun keluarga dan masyarakat.",
        },
        {
          date: "15 Mar",
          time: "14:00 - 17:00",
          title: "Turnamen Futsal",
          location: "Lapangan Manggarai",
          type: "sport",
          pic: "Eko Prasetyo",
          description: "Turnamen futsal antar RW se-Kelurahan Manggarai. Pendaftaran dibuka untuk tim putra usia 17-35 tahun. Hadiah total 5 juta rupiah untuk juara 1, 2, dan 3.",
        },
        {
          date: "22 Mar",
          time: "10:00 - 14:00",
          title: "Bazar UMKM Warga",
          location: "Halaman Balai RW",
          type: "business",
          pic: "Joko Susilo",
          description: "Bazar UMKM untuk memberdayakan usaha warga. Gratis untuk pedagang warga RW 06. Berbagai produk kuliner, fashion, dan kerajinan tersedia dengan harga terjangkau.",
        },
      ],
    },
  ];

  const getEventColor = (type: string) => {
    switch (type) {
      case "meeting":
        return "from-blue-500/20 to-blue-600/20 border-blue-500/30";
      case "sport":
        return "from-green-500/20 to-green-600/20 border-green-500/30";
      case "training":
        return "from-purple-500/20 to-purple-600/20 border-purple-500/30";
      case "social":
        return "from-red-500/20 to-red-600/20 border-red-500/30";
      case "celebration":
        return "from-yellow-500/20 to-yellow-600/20 border-yellow-500/30";
      case "business":
        return "from-elegant-gold/20 to-elegant-gold-light/20 border-elegant-gold/30";
      default:
        return "from-elegant-gold/20 to-elegant-surface border-elegant-gold/30";
    }
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
            <h1 className="font-lexend text-5xl md:text-6xl font-bold mb-6">
              <span className="text-elegant-gold">Jadwal Kegiatan</span>
              <br />
              <span className="text-foreground text-3xl md:text-4xl mt-4 block">
                Event Schedule
              </span>
            </h1>
            <p className="font-poppins text-elegant-subtext text-lg max-w-3xl mx-auto">
              Agenda dan jadwal kegiatan Karang Taruna RW 06 untuk periode mendatang
            </p>
          </motion.div>
        </div>
      </section>

      {/* Schedule Timeline */}
      <section className="py-24 bg-elegant-dark">
        <div className="container mx-auto px-6">
          <div className="space-y-16">
            {schedules.map((schedule, monthIndex) => (
              <motion.div
                key={monthIndex}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: monthIndex * 0.1 }}
              >
                <div className="flex items-center gap-4 mb-8">
                  <Calendar className="h-8 w-8 text-elegant-gold" />
                  <h2 className="font-lexend text-3xl font-bold text-elegant-gold">
                    {schedule.month}
                  </h2>
                  <div className="flex-1 h-px bg-gradient-to-r from-elegant-gold/50 to-transparent" />
                </div>

                <div className="space-y-6">
                  {schedule.events.map((event, eventIndex) => (
                    <motion.div
                      key={eventIndex}
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: eventIndex * 0.1 }}
                      whileHover={{ x: 10 }}
                      className={`bg-gradient-to-r ${getEventColor(
                        event.type
                      )} p-6 rounded-xl border-l-4 shadow-elegant hover:shadow-gold transition-all duration-300`}
                    >
                      <div className="flex flex-col lg:flex-row lg:items-center gap-4">
                        <div className="flex-shrink-0">
                          <div className="bg-elegant-surface px-4 py-2 rounded-lg text-center">
                            <p className="font-lexend text-2xl font-bold text-elegant-gold">
                              {event.date.split(" ")[0]}
                            </p>
                            <p className="font-poppins text-sm text-elegant-subtext">
                              {event.date.split(" ")[1]}
                            </p>
                          </div>
                        </div>

                        <div className="flex-1">
                          <h3 className="font-lexend text-xl font-bold text-foreground mb-2">
                            {event.title}
                          </h3>
                          <div className="flex flex-col sm:flex-row gap-4 text-elegant-subtext mb-4">
                            <div className="flex items-center gap-2">
                              <Clock className="h-4 w-4 text-elegant-gold" />
                              <span className="font-poppins text-sm">{event.time}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <MapPin className="h-4 w-4 text-elegant-gold" />
                              <span className="font-poppins text-sm">{event.location}</span>
                            </div>
                          </div>
                          <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => setSelectedEvent(event)}
                            className="px-6 py-2 bg-elegant-gold/10 border border-elegant-gold text-elegant-gold font-poppins font-medium rounded-lg hover:bg-elegant-gold hover:text-elegant-dark transition-all duration-300"
                          >
                            Selengkapnya
                          </motion.button>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Legend Section */}
      <section className="py-16 bg-elegant-darker">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <h3 className="font-lexend text-2xl font-bold text-elegant-gold mb-6 text-center">
              Kategori Kegiatan • Event Categories
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {[
                { name: "Rapat", color: "blue" },
                { name: "Olahraga", color: "green" },
                { name: "Pelatihan", color: "purple" },
                { name: "Sosial", color: "red" },
                { name: "Perayaan", color: "yellow" },
                { name: "Bisnis", color: "gold" },
              ].map((category, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="flex items-center gap-2 bg-elegant-surface p-3 rounded-lg"
                >
                  <div
                    className={`h-3 w-3 rounded-full ${
                      category.color === "gold"
                        ? "bg-elegant-gold"
                        : `bg-${category.color}-500`
                    }`}
                  />
                  <span className="font-poppins text-sm text-foreground">
                    {category.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Modal Detail */}
      <AnimatePresence>
        {selectedEvent && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedEvent(null)}
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", duration: 0.5 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-elegant-darker border border-elegant-gold rounded-2xl shadow-gold max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            >
              <div className="p-8">
                <div className="flex justify-between items-start mb-6">
                  <h2 className="font-lexend text-3xl font-bold text-elegant-gold pr-8">
                    {selectedEvent.title}
                  </h2>
                  <motion.button
                    whileHover={{ scale: 1.1, rotate: 90 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setSelectedEvent(null)}
                    className="text-elegant-gold hover:text-elegant-gold-light transition-colors"
                  >
                    <X className="h-6 w-6" />
                  </motion.button>
                </div>

                <div className="space-y-4 mb-6">
                  <div className="flex items-center gap-3 text-foreground">
                    <Calendar className="h-5 w-5 text-elegant-gold" />
                    <span className="font-poppins">{selectedEvent.date}</span>
                  </div>
                  <div className="flex items-center gap-3 text-foreground">
                    <Clock className="h-5 w-5 text-elegant-gold" />
                    <span className="font-poppins">{selectedEvent.time}</span>
                  </div>
                  <div className="flex items-center gap-3 text-foreground">
                    <MapPin className="h-5 w-5 text-elegant-gold" />
                    <span className="font-poppins">{selectedEvent.location}</span>
                  </div>
                  <div className="flex items-center gap-3 text-foreground">
                    <User className="h-5 w-5 text-elegant-gold" />
                    <span className="font-poppins">
                      Penanggung Jawab: {selectedEvent.pic}
                    </span>
                  </div>
                </div>

                <div className="border-t border-elegant-gold/20 pt-6">
                  <h3 className="font-lexend text-lg font-semibold text-elegant-gold mb-3">
                    Deskripsi Lengkap
                  </h3>
                  <p className="font-poppins text-elegant-subtext leading-relaxed">
                    {selectedEvent.description}
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Jadwal;
