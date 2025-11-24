import { motion } from "framer-motion";
import { ArrowRight, Users, Target, Award, Calendar } from "lucide-react";
import { Link } from "react-router-dom";
import heroImg from "@/assets/back-home.png";

const Home = () => {
  const stats = [
    { number: "100+", label: "Anggota Aktif" },
    { number: "50+", label: "Program Terlaksana" },
    { number: "10+", label: "Tahun Berkarya" },
    { number: "25+", label: "Prestasi" },
  ];

  return (
    <div>
      {/* Hero Section with Parallax */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Parallax */}
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0"
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${heroImg})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-elegant-dark/80 via-elegant-dark/60 to-elegant-dark" />
        </motion.div>

        {/* Floating Particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(30)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute h-1 w-1 rounded-full bg-elegant-gold"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -40, 0],
                opacity: [0.2, 1, 0.2],
              }}
              transition={{
                duration: 3 + Math.random() * 3,
                repeat: Infinity,
                delay: Math.random() * 3,
              }}
            />
          ))}
        </div>

        {/* Hero Content */}
        <div className="relative z-10 container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="font-lexend text-5xl md:text-7xl font-bold mb-6">
              <span className="text-elegant-gold">Karang Taruna</span>
              <br />
              <span className="text-foreground">RW 06 Manggarai</span>
            </h1>
            <p className="font-poppins text-xl md:text-2xl text-elegant-subtext mb-4">
              Youth Organization • Organisasi Pemuda
            </p>
            <p className="font-poppins text-base md:text-lg text-elegant-subtext max-w-2xl mx-auto mb-12">
              Membangun generasi muda yang kreatif, inovatif, dan berprestasi
              untuk kemajuan bersama
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/profil">
                <motion.button
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 0 40px rgba(200, 168, 89, 0.5)",
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-elegant-gold-dark via-elegant-gold to-elegant-gold-light text-elegant-dark font-semibold rounded-lg transition-all duration-300 flex items-center gap-2 mx-auto sm:mx-0"
                >
                  Tentang Kami
                  <ArrowRight className="h-5 w-5" />
                </motion.button>
              </Link>
              <Link to="/kontak">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-transparent border-2 border-elegant-gold text-elegant-gold font-semibold rounded-lg hover:bg-elegant-gold/10 transition-all duration-300 mx-auto sm:mx-0"
                >
                  Hubungi Kami
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-6 h-10 border-2 border-elegant-gold rounded-full flex items-start justify-center p-2"
          >
            <motion.div className="w-1 h-2 bg-elegant-gold rounded-full" />
          </motion.div>
        </motion.div>
      </section>

      {/* Profile Section */}
      <section className="py-24 bg-elegant-darker">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="font-lexend text-4xl md:text-5xl font-bold mb-4">
              <span className="text-elegant-gold">Profil Singkat</span>
              <span className="text-foreground"> • Brief Profile</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto bg-elegant-surface p-8 md:p-12 rounded-2xl border border-elegant-gold/20 shadow-elegant"
          >
            <p className="font-poppins text-elegant-subtext text-lg leading-relaxed text-center">
              Karang Taruna RW 06 Manggarai adalah organisasi kepemudaan yang
              bergerak di wilayah RW 06, Kelurahan Manggarai, Kecamatan Tebet,
              Jakarta Selatan. Kami hadir sebagai wadah bagi generasi muda untuk
              mengembangkan potensi, berkreasi, dan berkontribusi positif bagi
              lingkungan. Dengan semangat gotong royong dan inovasi, kami
              menjalankan berbagai program sosial, pendidikan, olahraga, dan
              pengembangan kewirausahaan yang memberdayakan masyarakat sekitar.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Core Leadership Section */}
      <section className="py-24 bg-elegant-dark">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-lexend text-4xl md:text-5xl font-bold mb-4">
              <span className="text-elegant-gold">Kepengurusan Inti</span>
              <span className="text-foreground"> • Core Leadership</span>
            </h2>
            <p className="font-poppins text-elegant-subtext text-lg max-w-2xl mx-auto">
              Pengurus inti yang memimpin organisasi kami
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              { position: "Ketua", name: "TBA" },
              { position: "Wakil Ketua", name: "TBA" },
              { position: "Sekretaris", name: "TBA" },
              { position: "Bendahara", name: "TBA" },
            ].map((leader, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{
                  y: -10,
                  boxShadow: "0 0 40px rgba(200, 168, 89, 0.4)",
                }}
                className="bg-elegant-surface p-8 rounded-2xl border border-elegant-gold shadow-elegant hover:shadow-gold transition-all duration-500"
              >
                <div className="mb-6">
                  <div className="w-24 h-24 mx-auto bg-elegant-gold/10 rounded-full flex items-center justify-center border-2 border-elegant-gold">
                    <Users className="h-12 w-12 text-elegant-gold" />
                  </div>
                </div>
                <h3 className="font-lexend text-xl font-bold text-elegant-gold mb-2 text-center">
                  {leader.position}
                </h3>
                <p className="font-poppins text-elegant-subtext text-center">
                  {leader.name}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Programs Section */}
      <section className="py-24 bg-elegant-darker">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-lexend text-4xl md:text-5xl font-bold mb-4">
              <span className="text-elegant-gold">Program Unggulan</span>
              <span className="text-foreground"> • Featured Programs</span>
            </h2>
            <p className="font-poppins text-elegant-subtext text-lg max-w-2xl mx-auto">
              Tiga program kerja utama kami untuk masyarakat
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: Target,
                title: "Pemberdayaan Pemuda",
                description:
                  "Program pelatihan dan workshop untuk mengembangkan keterampilan dan potensi generasi muda di RW 06.",
              },
              {
                icon: Award,
                title: "Kegiatan Sosial",
                description:
                  "Aksi sosial rutin seperti donor darah, santunan, dan bakti sosial untuk membantu sesama warga.",
              },
              {
                icon: Calendar,
                title: "Olahraga & Seni",
                description:
                  "Turnamen olahraga dan festival seni budaya untuk memperkuat kebersamaan dan kreativitas.",
              },
            ].map((program, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                whileHover={{
                  y: -10,
                  boxShadow: "0 0 40px rgba(200, 168, 89, 0.4)",
                }}
                className="bg-elegant-surface p-8 rounded-2xl border border-elegant-gold shadow-elegant hover:shadow-gold transition-all duration-500"
              >
                <div className="mb-6">
                  <div className="inline-flex p-4 bg-elegant-gold/10 rounded-xl border border-elegant-gold/30">
                    <program.icon className="h-10 w-10 text-elegant-gold" />
                  </div>
                </div>
                <h3 className="font-lexend text-2xl font-bold text-foreground mb-4">
                  {program.title}
                </h3>
                <p className="font-poppins text-elegant-subtext leading-relaxed">
                  {program.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section
      <section className="py-24 bg-elegant-dark relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-r from-elegant-gold/20 to-transparent" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <motion.h3
                  className="font-lexend text-5xl md:text-6xl font-bold text-elegant-gold mb-2"
                  whileHover={{ scale: 1.1 }}
                >
                  {stat.number}
                </motion.h3>
                <p className="font-poppins text-elegant-subtext text-sm md:text-base">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default Home;
