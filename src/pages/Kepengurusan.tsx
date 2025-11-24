import { motion } from "framer-motion";
import { User } from "lucide-react";

const Kepengurusan = () => {
  const leadership = [
    { position: "Ketua", name: "Ahmad Rizki Pratama" },
    { position: "Wakil Ketua", name: "Siti Nurhaliza" },
    { position: "Sekretaris", name: "Budi Santoso" },
    { position: "Bendahara", name: "Dewi Lestari" },
  ];

  const divisions = [
    {
      name: "Bidang Pendidikan & Keterampilan",
      head: "Eko Prasetyo",
      members: ["Rina Wijaya", "Dani Firmansyah", "Lisa Maharani"],
    },
    {
      name: "Bidang Olahraga & Seni",
      head: "Fajar Nugroho",
      members: ["Maya Kartika", "Rudi Hermawan", "Sari Indah"],
    },
    {
      name: "Bidang Sosial & Kemasyarakatan",
      head: "Indah Permatasari",
      members: ["Hendra Wijaya", "Putri Ayu", "Dimas Prasetyo"],
    },
    {
      name: "Bidang Usaha & Ekonomi Kreatif",
      head: "Yoga Aditama",
      members: ["Nina Safitri", "Arif Rahman", "Tika Wulandari"],
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
              <span className="text-elegant-gold">Struktur Kepengurusan</span>
              <br />
              <span className="text-foreground text-3xl md:text-4xl mt-4 block">
                Organization Structure
              </span>
            </h1>
            <p className="font-poppins text-elegant-subtext text-lg max-w-3xl mx-auto">
              Mengenal pengurus Karang Taruna RW 06 Periode 2024-2026
            </p>
          </motion.div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-24 bg-elegant-dark">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-lexend text-4xl font-bold mb-4">
              <span className="text-elegant-gold">Pimpinan Inti</span>
              <br />
              <span className="text-foreground text-2xl mt-2 block">Core Leadership</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {leadership.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-elegant-surface rounded-2xl overflow-hidden shadow-elegant hover:shadow-gold transition-all duration-300 border border-elegant-gold/20"
              >
                <div className="aspect-square bg-gradient-to-br from-elegant-gold/20 to-elegant-surface flex items-center justify-center">
                  <User className="h-24 w-24 text-elegant-gold" />
                </div>
                <div className="p-6 text-center">
                  <h3 className="font-lexend text-xl font-bold text-elegant-gold mb-2">
                    {member.position}
                  </h3>
                  <p className="font-poppins text-foreground">
                    {member.name}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Divisions Section */}
      <section className="py-24 bg-elegant-darker">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-lexend text-4xl font-bold mb-4">
              <span className="text-elegant-gold">Bidang-Bidang</span>
              <br />
              <span className="text-foreground text-2xl mt-2 block">Divisions</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {divisions.map((division, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-elegant-surface p-8 rounded-2xl shadow-elegant border border-elegant-gold/20"
              >
                <h3 className="font-lexend text-2xl font-bold text-elegant-gold mb-4">
                  {division.name}
                </h3>
                <div className="mb-6 pb-6 border-b border-elegant-gold/20">
                  <p className="font-poppins text-sm text-elegant-subtext mb-2">
                    Kepala Bidang • Head of Division
                  </p>
                  <p className="font-poppins text-lg text-foreground font-semibold">
                    {division.head}
                  </p>
                </div>
                <div>
                  <p className="font-poppins text-sm text-elegant-subtext mb-3">
                    Anggota • Members
                  </p>
                  <ul className="space-y-2">
                    {division.members.map((member, idx) => (
                      <li
                        key={idx}
                        className="font-poppins text-foreground flex items-center gap-2"
                      >
                        <div className="h-1.5 w-1.5 rounded-full bg-elegant-gold" />
                        {member}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
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
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="font-lexend text-3xl md:text-4xl font-bold text-foreground mb-4">
              Tertarik Bergabung?
            </h2>
            <p className="font-poppins text-elegant-subtext text-lg mb-8">
              Kami selalu terbuka untuk anggota baru yang bersemangat dan berkomitmen
            </p>
            <motion.a
              href="/kontak"
              whileHover={{ scale: 1.05, boxShadow: "0 0 40px rgba(200, 168, 89, 0.5)" }}
              whileTap={{ scale: 0.95 }}
              className="inline-block px-10 py-4 bg-gradient-to-r from-elegant-gold-dark via-elegant-gold to-elegant-gold-light text-elegant-dark font-semibold rounded-lg transition-all duration-300"
            >
              Hubungi Kami
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Kepengurusan;
