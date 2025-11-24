import { motion, AnimatePresence } from "framer-motion";
import { Camera, Image as ImageIcon, X, Calendar } from "lucide-react";
import { useState } from "react";

const Galeri = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedImage, setSelectedImage] = useState<any>(null);

  const categories = [
    { id: "all", name: "Semua" },
    { id: "social", name: "Kegiatan Sosial" },
    { id: "sport", name: "Olahraga" },
    { id: "training", name: "Pelatihan" },
    { id: "celebration", name: "Perayaan" },
  ];

  const galleryItems = [
    {
      id: 1,
      category: "social",
      title: "Donor Darah Rutin",
      description: "Kegiatan donor darah bersama PMI",
      date: "Oktober 2024",
    },
    {
      id: 2,
      category: "sport",
      title: "Turnamen Futsal",
      description: "Turnamen futsal antar RW se-Kelurahan",
      date: "September 2024",
    },
    {
      id: 3,
      category: "training",
      title: "Workshop Digital Marketing",
      description: "Pelatihan digital marketing untuk UMKM",
      date: "Agustus 2024",
    },
    {
      id: 4,
      category: "celebration",
      title: "Perayaan HUT RI ke-79",
      description: "Lomba 17 Agustus tingkat RW",
      date: "Agustus 2024",
    },
    {
      id: 5,
      category: "social",
      title: "Santunan Anak Yatim",
      description: "Bakti sosial santunan anak yatim",
      date: "Juli 2024",
    },
    {
      id: 6,
      category: "sport",
      title: "Senam Pagi Bersama",
      description: "Senam pagi rutin setiap minggu",
      date: "Juli 2024",
    },
    {
      id: 7,
      category: "training",
      title: "Pelatihan Fotografi",
      description: "Workshop fotografi untuk pemula",
      date: "Juni 2024",
    },
    {
      id: 8,
      category: "celebration",
      title: "Halal Bihalal",
      description: "Halal bihalal Idul Fitri 2024",
      date: "Mei 2024",
    },
    {
      id: 9,
      category: "social",
      title: "Bersih-Bersih Lingkungan",
      description: "Gotong royong bersih lingkungan",
      date: "April 2024",
    },
  ];

  const filteredItems =
    selectedCategory === "all"
      ? galleryItems
      : galleryItems.filter((item) => item.category === selectedCategory);

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
              <Camera className="h-12 w-12 text-elegant-gold" />
            </div>
            <h1 className="font-lexend text-5xl md:text-6xl font-bold mb-6">
              <span className="text-elegant-gold">Galeri Kegiatan</span>
              <br />
              <span className="text-foreground text-3xl md:text-4xl mt-4 block">
                Activity Gallery
              </span>
            </h1>
            <p className="font-poppins text-elegant-subtext text-lg max-w-3xl mx-auto">
              Dokumentasi perjalanan dan kegiatan Karang Taruna RW 06
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 bg-elegant-darker sticky top-20 z-30 border-b border-elegant-gold/20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-wrap justify-center gap-3"
          >
            {categories.map((category) => (
              <motion.button
                key={category.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-lg font-poppins font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? "bg-gradient-to-r from-elegant-gold-dark via-elegant-gold to-elegant-gold-light text-elegant-dark shadow-gold"
                    : "bg-elegant-surface text-elegant-subtext hover:text-elegant-gold border border-elegant-gold/20"
                }`}
              >
                {category.name}
              </motion.button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-24 bg-elegant-dark">
        <div className="container mx-auto px-6">
          <motion.div
            layout
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ y: -10 }}
                className="group relative bg-elegant-surface rounded-2xl overflow-hidden shadow-elegant hover:shadow-gold transition-all duration-300 border border-elegant-gold/20"
              >
                {/* Image Placeholder */}
                <div className="aspect-[4/3] bg-gradient-to-br from-elegant-gold/20 to-elegant-surface flex items-center justify-center relative overflow-hidden">
                  <ImageIcon className="h-20 w-20 text-elegant-gold/30" />

                  {/* Overlay on Hover */}
                  <div className="absolute inset-0 bg-elegant-dark/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileHover={{ scale: 1 }}
                      className="text-center"
                    >
                      <Camera className="h-12 w-12 text-elegant-gold mx-auto mb-2" />
                      <p className="font-poppins text-elegant-gold text-sm">
                        View Details
                      </p>
                    </motion.div>
                  </div>
                </div>

                {/* Info */}
                <div className="p-6">
                  <span className="inline-block px-3 py-1 bg-elegant-gold/10 text-elegant-gold text-xs font-semibold rounded-full mb-3">
                    {item.date}
                  </span>
                  <h3 className="font-lexend text-xl font-bold text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="font-poppins text-elegant-subtext text-sm mb-4">
                    {item.description}
                  </p>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setSelectedImage(item)}
                    className="w-full px-4 py-2 bg-elegant-gold/10 border border-elegant-gold text-elegant-gold font-poppins font-medium rounded-lg hover:bg-elegant-gold hover:text-elegant-dark transition-all duration-300"
                  >
                    Selengkapnya
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Empty State */}
          {filteredItems.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <ImageIcon className="h-24 w-24 text-elegant-gold/30 mx-auto mb-6" />
              <h3 className="font-lexend text-2xl font-bold text-foreground mb-2">
                Belum Ada Foto
              </h3>
              <p className="font-poppins text-elegant-subtext">
                Galeri untuk kategori ini masih kosong
              </p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Note Section */}
      <section className="py-16 bg-elegant-darker">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center bg-elegant-surface p-8 rounded-2xl border border-elegant-gold/20"
          >
            <Camera className="h-12 w-12 text-elegant-gold mx-auto mb-4" />
            <h3 className="font-lexend text-2xl font-bold text-foreground mb-3">
              Dokumentasi Kegiatan
            </h3>
            <p className="font-poppins text-elegant-subtext">
              Foto-foto kegiatan kami tersedia lengkap di Instagram
              @karangtaruna.rw06
              <br />
              Follow untuk update dokumentasi terbaru!
            </p>
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 40px rgba(200, 168, 89, 0.5)",
              }}
              whileTap={{ scale: 0.95 }}
              className="mt-6 px-8 py-3 bg-gradient-to-r from-elegant-gold-dark via-elegant-gold to-elegant-gold-light text-elegant-dark font-semibold rounded-lg transition-all duration-300"
            >
              Kunjungi Instagram
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Modal Detail Gambar */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 bg-black/95 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", duration: 0.6 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-5xl"
            >
              <div className="relative">
                {/* Close Button */}
                <motion.button
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setSelectedImage(null)}
                  className="absolute -top-12 right-0 text-elegant-gold hover:text-elegant-gold-light transition-colors z-10"
                >
                  <X className="h-8 w-8" />
                </motion.button>

                {/* Image Container */}
                <div className="bg-elegant-darker border-2 border-elegant-gold rounded-2xl shadow-gold overflow-hidden">
                  {/* Large Image Placeholder */}
                  <div className="aspect-video bg-gradient-to-br from-elegant-gold/20 to-elegant-surface flex items-center justify-center relative">
                    <ImageIcon className="h-32 w-32 text-elegant-gold/40" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Camera className="h-20 w-20 text-elegant-gold/60" />
                    </div>
                  </div>

                  {/* Info Section */}
                  <div className="p-8 bg-elegant-darker">
                    <div className="flex items-center gap-3 mb-4">
                      <Calendar className="h-5 w-5 text-elegant-gold" />
                      <span className="font-poppins text-elegant-gold">
                        {selectedImage.date}
                      </span>
                    </div>

                    <h2 className="font-lexend text-3xl md:text-4xl font-bold text-foreground mb-4">
                      {selectedImage.title}
                    </h2>

                    <div className="border-t border-elegant-gold/20 pt-4">
                      <p className="font-poppins text-elegant-subtext text-lg leading-relaxed">
                        {selectedImage.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Galeri;
