import { motion } from "framer-motion";
import { Calendar, Clock, MapPin } from "lucide-react";

const Jadwal = () => {
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
        },
        {
          date: "12 Jan",
          time: "07:00 - 09:00",
          title: "Senam Pagi Bersama",
          location: "Lapangan Manggarai",
          type: "sport",
        },
        {
          date: "20 Jan",
          time: "14:00 - 17:00",
          title: "Workshop Digital Marketing",
          location: "Ruang Serbaguna",
          type: "training",
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
        },
        {
          date: "14 Feb",
          time: "16:00 - 18:00",
          title: "Perayaan Hari Kasih Sayang",
          location: "Taman RW 06",
          type: "celebration",
        },
        {
          date: "25 Feb",
          time: "13:00 - 16:00",
          title: "Pelatihan Fotografi",
          location: "Ruang Serbaguna",
          type: "training",
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
        },
        {
          date: "15 Mar",
          time: "14:00 - 17:00",
          title: "Turnamen Futsal",
          location: "Lapangan Manggarai",
          type: "sport",
        },
        {
          date: "22 Mar",
          time: "10:00 - 14:00",
          title: "Bazar UMKM Warga",
          location: "Halaman Balai RW",
          type: "business",
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
                          <div className="flex flex-col sm:flex-row gap-4 text-elegant-subtext">
                            <div className="flex items-center gap-2">
                              <Clock className="h-4 w-4 text-elegant-gold" />
                              <span className="font-poppins text-sm">{event.time}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <MapPin className="h-4 w-4 text-elegant-gold" />
                              <span className="font-poppins text-sm">{event.location}</span>
                            </div>
                          </div>
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

      {/* CTA Section */}
      <section className="py-24 bg-elegant-dark">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="font-lexend text-3xl md:text-4xl font-bold text-foreground mb-4">
              Jangan Lewatkan Kegiatan Kami
            </h2>
            <p className="font-poppins text-elegant-subtext text-lg mb-8">
              Follow media sosial kami untuk update jadwal terbaru dan reminder kegiatan
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
                href="/pengumuman"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-transparent border-2 border-elegant-gold text-elegant-gold font-semibold rounded-lg hover:bg-elegant-gold/10 transition-all duration-300 inline-block"
              >
                Lihat Pengumuman
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Jadwal;
