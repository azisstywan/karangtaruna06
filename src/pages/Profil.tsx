import { motion } from "framer-motion";
import { Target, Eye, Award } from "lucide-react";

const Profil = () => {
  const visionMission = [
    {
      icon: Eye,
      title: "Visi • Vision",
      content: "Menjadi organisasi pemuda yang solid, kreatif, dan berdaya saing dalam membangun generasi muda yang berkarakter dan berprestasi di wilayah Manggarai.",
    },
    {
      icon: Target,
      title: "Misi • Mission",
      content: "Memberdayakan potensi pemuda melalui program-program yang inovatif, edukatif, dan berkelanjutan untuk kemajuan bersama.",
    },
  ];

  const values = [
    { title: "Integritas", description: "Menjunjung tinggi kejujuran dan transparansi" },
    { title: "Solidaritas", description: "Membangun kebersamaan dan gotong royong" },
    { title: "Kreativitas", description: "Mendorong inovasi dan ide-ide segar" },
    { title: "Profesional", description: "Bekerja dengan standar yang tinggi" },
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
              <span className="text-elegant-gold">Profil Organisasi</span>
              <br />
              <span className="text-foreground text-3xl md:text-4xl mt-4 block">
                Organization Profile
              </span>
            </h1>
            <p className="font-poppins text-elegant-subtext text-lg max-w-3xl mx-auto">
              Mengenal lebih dekat organisasi pemuda yang berkomitmen membangun masa depan cerah
            </p>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 bg-elegant-dark">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-lexend text-4xl font-bold mb-6">
                <span className="text-elegant-gold">Tentang Kami</span>
                <br />
                <span className="text-foreground text-2xl">About Us</span>
              </h2>
              <div className="space-y-4 font-poppins text-elegant-subtext leading-relaxed">
                <p>
                  Karang Taruna RW 06 Manggarai adalah organisasi kepemudaan yang berdiri sejak lebih dari satu dekade yang lalu. Kami adalah wadah bagi para pemuda untuk berkembang, berkarya, dan berkontribusi positif bagi lingkungan sekitar.
                </p>
                <p>
                  Dengan semangat kebersamaan dan gotong royong, kami terus berkomitmen untuk menjalankan berbagai program yang bermanfaat, mulai dari kegiatan sosial, olahraga, hingga pengembangan keterampilan.
                </p>
                <p>
                  Kami percaya bahwa pemuda adalah agent of change yang mampu membawa perubahan positif. Melalui berbagai kegiatan dan program, kami berupaya membentuk karakter pemuda yang tangguh, kreatif, dan peduli terhadap sesama.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="bg-elegant-surface p-8 rounded-2xl shadow-elegant border border-elegant-gold/20">
                <Award className="h-16 w-16 text-elegant-gold mb-6" />
                <h3 className="font-lexend text-2xl font-bold text-foreground mb-4">
                  Komitmen Kami
                </h3>
                <ul className="space-y-3 font-poppins text-elegant-subtext">
                  <li className="flex items-start gap-3">
                    <div className="h-2 w-2 rounded-full bg-elegant-gold mt-2 flex-shrink-0" />
                    <span>Mengembangkan potensi pemuda secara maksimal</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="h-2 w-2 rounded-full bg-elegant-gold mt-2 flex-shrink-0" />
                    <span>Menciptakan lingkungan yang kondusif untuk berkarya</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="h-2 w-2 rounded-full bg-elegant-gold mt-2 flex-shrink-0" />
                    <span>Membangun solidaritas dan kebersamaan</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="h-2 w-2 rounded-full bg-elegant-gold mt-2 flex-shrink-0" />
                    <span>Berkontribusi positif untuk masyarakat</span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-24 bg-elegant-darker">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8">
            {visionMission.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -10 }}
                className="bg-elegant-surface p-10 rounded-2xl shadow-elegant hover:shadow-gold transition-all duration-300 border border-elegant-gold/20"
              >
                <div className="mb-6">
                  <div className="inline-flex p-4 bg-elegant-gold/10 rounded-xl">
                    <item.icon className="h-10 w-10 text-elegant-gold" />
                  </div>
                </div>
                <h3 className="font-lexend text-2xl font-bold text-foreground mb-4">
                  {item.title}
                </h3>
                <p className="font-poppins text-elegant-subtext leading-relaxed">
                  {item.content}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
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
              <span className="text-elegant-gold">Nilai-Nilai Kami</span>
              <br />
              <span className="text-foreground text-2xl mt-2 block">Our Values</span>
            </h2>
            <p className="font-poppins text-elegant-subtext text-lg max-w-2xl mx-auto">
              Prinsip yang menjadi landasan setiap langkah kami
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="bg-gradient-to-br from-elegant-gold/10 to-elegant-surface p-8 rounded-xl border border-elegant-gold/30 text-center"
              >
                <h3 className="font-lexend text-xl font-bold text-elegant-gold mb-3">
                  {value.title}
                </h3>
                <p className="font-poppins text-elegant-subtext text-sm">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Profil;
