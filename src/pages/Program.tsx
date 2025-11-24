import { motion } from "framer-motion";
import { BookOpen, Heart, Trophy, Lightbulb, Users, Calendar } from "lucide-react";

const Program = () => {
  const programs = [
    {
      icon: BookOpen,
      title: "Pendidikan & Pelatihan",
      description: "Program pengembangan keterampilan dan pengetahuan untuk pemuda",
      items: [
        "Pelatihan komputer dan digital marketing",
        "Kursus bahasa Inggris gratis",
        "Workshop kewirausahaan",
        "Bimbingan belajar untuk pelajar",
      ],
    },
    {
      icon: Heart,
      title: "Kegiatan Sosial",
      description: "Bakti sosial dan kegiatan kepedulian terhadap masyarakat",
      items: [
        "Donor darah rutin setiap 3 bulan",
        "Santunan anak yatim dan dhuafa",
        "Bersih-bersih lingkungan RT/RW",
        "Bantuan untuk korban bencana",
      ],
    },
    {
      icon: Trophy,
      title: "Olahraga & Kompetisi",
      description: "Kegiatan olahraga dan turnamen untuk membangun jiwa sportif",
      items: [
        "Turnamen futsal antar RW",
        "Senam pagi setiap minggu",
        "Lomba 17 Agustus",
        "Pelatihan bela diri",
      ],
    },
    {
      icon: Lightbulb,
      title: "Kreativitas & Seni",
      description: "Wadah mengembangkan bakat seni dan kreativitas pemuda",
      items: [
        "Workshop fotografi dan videografi",
        "Pelatihan desain grafis",
        "Pentas seni dan musik",
        "Festival budaya lokal",
      ],
    },
    {
      icon: Users,
      title: "Kewirausahaan",
      description: "Program pemberdayaan ekonomi dan pengembangan UMKM",
      items: [
        "Pelatihan bisnis online",
        "Bazar produk UMKM warga",
        "Pendampingan usaha kecil",
        "Koperasi pemuda",
      ],
    },
    {
      icon: Calendar,
      title: "Kegiatan Rutin",
      description: "Agenda berkala untuk mempererat kebersamaan anggota",
      items: [
        "Rapat koordinasi bulanan",
        "Gathering dan outbound",
        "Halal bihalal tahunan",
        "Perayaan hari besar nasional",
      ],
    },
  ];

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
              <span className="text-elegant-gold">Program Unggulan</span>
              <br />
              <span className="text-foreground text-3xl md:text-4xl mt-4 block">
                Our Programs
              </span>
            </h1>
            <p className="font-poppins text-elegant-subtext text-lg max-w-3xl mx-auto">
              Berbagai kegiatan yang dirancang untuk memberdayakan dan mengembangkan potensi pemuda
            </p>
          </motion.div>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="py-24 bg-elegant-dark">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-elegant-surface p-8 rounded-2xl shadow-elegant hover:shadow-gold transition-all duration-300 border border-elegant-gold/20"
              >
                <div className="mb-6">
                  <div className="inline-flex p-4 bg-elegant-gold/10 rounded-xl">
                    <program.icon className="h-10 w-10 text-elegant-gold" />
                  </div>
                </div>
                <h3 className="font-lexend text-2xl font-bold text-elegant-gold mb-3">
                  {program.title}
                </h3>
                <p className="font-poppins text-elegant-subtext mb-6">
                  {program.description}
                </p>
                <ul className="space-y-3">
                  {program.items.map((item, idx) => (
                    <li
                      key={idx}
                      className="font-poppins text-sm text-foreground flex items-start gap-3"
                    >
                      <div className="h-1.5 w-1.5 rounded-full bg-elegant-gold mt-2 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Section */}
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
              <span className="text-elegant-gold">Dampak Program</span>
              <br />
              <span className="text-foreground text-2xl mt-2 block">Program Impact</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="inline-flex p-6 bg-elegant-gold/10 rounded-full mb-6"
              >
                <Users className="h-12 w-12 text-elegant-gold" />
              </motion.div>
              <h3 className="font-lexend text-3xl font-bold text-elegant-gold mb-2">500+</h3>
              <p className="font-poppins text-elegant-subtext">
                Pemuda yang Terlibat
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-center"
            >
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="inline-flex p-6 bg-elegant-gold/10 rounded-full mb-6"
              >
                <Trophy className="h-12 w-12 text-elegant-gold" />
              </motion.div>
              <h3 className="font-lexend text-3xl font-bold text-elegant-gold mb-2">50+</h3>
              <p className="font-poppins text-elegant-subtext">
                Program Terlaksana
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center"
            >
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="inline-flex p-6 bg-elegant-gold/10 rounded-full mb-6"
              >
                <Heart className="h-12 w-12 text-elegant-gold" />
              </motion.div>
              <h3 className="font-lexend text-3xl font-bold text-elegant-gold mb-2">100+</h3>
              <p className="font-poppins text-elegant-subtext">
                Kegiatan Sosial
              </p>
            </motion.div>
          </div>
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
            className="bg-gradient-to-r from-elegant-gold-dark via-elegant-gold to-elegant-gold-light p-12 md:p-16 rounded-2xl text-center shadow-gold"
          >
            <h2 className="font-lexend text-3xl md:text-4xl font-bold text-elegant-dark mb-4">
              Ikuti Program Kami
            </h2>
            <p className="font-poppins text-elegant-dark/80 text-lg mb-8 max-w-2xl mx-auto">
              Jadilah bagian dari perubahan positif melalui berbagai program yang kami tawarkan
            </p>
            <motion.a
              href="/kontak"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block px-10 py-4 bg-elegant-dark text-elegant-gold font-semibold rounded-lg hover:bg-elegant-darker transition-all duration-300"
            >
              Daftar Sekarang
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Program;
