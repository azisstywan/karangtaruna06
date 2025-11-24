import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Instagram,
  Twitter,
  Send,
} from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const Kontak = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const contactInfo = [
    {
      icon: MapPin,
      title: "Alamat • Address",
      content:
        "RW 06 Manggarai, Kelurahan Manggarai\nKecamatan Tebet, Jakarta Selatan 12850",
    },
    {
      icon: Phone,
      title: "Telepon • Phone",
      content: "+62 812-3456-7890\n+62 821-9876-5432",
    },
    {
      icon: Mail,
      title: "Email",
      content: "info@karangtaruna-rw06.id\nkarangtaruna.rw06@gmail.com",
    },
  ];

  const socialMedia = [
    {
      icon: Facebook,
      name: "Facebook",
      link: "#",
      color: "hover:text-blue-500",
    },
    {
      icon: Instagram,
      name: "Instagram",
      link: "#",
      color: "hover:text-pink-500",
    },
    { icon: Twitter, name: "Twitter", link: "#", color: "hover:text-sky-500" },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const adminNumber = "6281388301675"; // ganti dengan nomor admin (format tanpa +)

    const text = `Halo, saya *${formData.name}*.
Email: ${formData.email}
Subjek: ${formData.subject}

Pesan:
${formData.message}`;

    const waURL = `https://wa.me/${adminNumber}?text=${encodeURIComponent(
      text
    )}`;

    window.open(waURL, "_blank");

    toast.success("Mengalihkan ke WhatsApp...");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
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
            transition={{ duration: 0.18 }}
            className="text-center"
          >
            <h1 className="font-lexend text-5xl md:text-6xl font-bold mb-6">
              <span className="text-elegant-gold">Hubungi Kami</span>
              <br />
              <span className="text-foreground text-3xl md:text-4xl mt-4 block">
                Contact Us
              </span>
            </h1>
            <p className="font-poppins text-elegant-subtext text-lg max-w-3xl mx-auto">
              Punya pertanyaan atau ingin bergabung? Jangan ragu untuk
              menghubungi kami
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-24 bg-elegant-dark">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-elegant-surface p-8 rounded-2xl shadow-elegant hover:shadow-gold transition-all duration-300 border border-elegant-gold/20 text-center"
              >
                <div className="inline-flex p-4 bg-elegant-gold/10 rounded-xl mb-6">
                  <info.icon className="h-10 w-10 text-elegant-gold" />
                </div>
                <h3 className="font-lexend text-xl font-bold text-elegant-gold mb-4">
                  {info.title}
                </h3>
                <p className="font-poppins text-elegant-subtext whitespace-pre-line leading-relaxed">
                  {info.content}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-24 bg-elegant-darker">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-lexend text-3xl font-bold mb-2">
                <span className="text-elegant-gold">Kirim Pesan</span>
              </h2>
              <p className="font-poppins text-elegant-subtext mb-8">
                Send us a Message
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block font-poppins text-sm text-elegant-subtext mb-2">
                    Nama Lengkap • Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-elegant-surface border border-elegant-gold/20 rounded-lg focus:outline-none focus:border-elegant-gold transition-colors text-foreground"
                    placeholder="Masukkan nama Anda"
                  />
                </div>

                <div>
                  <label className="block font-poppins text-sm text-elegant-subtext mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-elegant-surface border border-elegant-gold/20 rounded-lg focus:outline-none focus:border-elegant-gold transition-colors text-foreground"
                    placeholder="email@example.com"
                  />
                </div>

                <div>
                  <label className="block font-poppins text-sm text-elegant-subtext mb-2">
                    Subjek • Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-elegant-surface border border-elegant-gold/20 rounded-lg focus:outline-none focus:border-elegant-gold transition-colors text-foreground"
                    placeholder="Topik pesan"
                  />
                </div>

                <div>
                  <label className="block font-poppins text-sm text-elegant-subtext mb-2">
                    Pesan • Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-elegant-surface border border-elegant-gold/20 rounded-lg focus:outline-none focus:border-elegant-gold transition-colors text-foreground resize-none"
                    placeholder="Tulis pesan Anda di sini..."
                  />
                </div>

                <motion.button
                  type="submit"
                  whileHover={{
                    scale: 1.02,
                    boxShadow: "0 0 40px rgba(200, 168, 89, 0.5)",
                  }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full px-8 py-4 bg-gradient-to-r from-elegant-gold-dark via-elegant-gold to-elegant-gold-light text-elegant-dark font-semibold rounded-lg transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <Send className="h-5 w-5" />
                  Kirim Pesan
                </motion.button>
              </form>
            </motion.div>

            {/* Map & Social Media */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              {/* Map Placeholder */}
              <div className="bg-elegant-surface rounded-2xl overflow-hidden border border-elegant-gold/20">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d499.6317597315376!2d106.84797305234756!3d-6.212388732802404!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sid!2sid!4v1763996430628!5m2!1sid!2sid"
                  width="600"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>

              {/* Social Media */}
              <div className="bg-elegant-surface p-8 rounded-2xl border border-elegant-gold/20">
                <h3 className="font-lexend text-2xl font-bold text-elegant-gold mb-6">
                  Ikuti Kami • Follow Us
                </h3>
                <div className="space-y-4">
                  {socialMedia.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.link}
                      whileHover={{ x: 10 }}
                      className={`flex items-center gap-4 p-4 bg-elegant-darker rounded-lg transition-all duration-300 ${social.color} group`}
                    >
                      <div className="p-3 bg-elegant-gold/10 rounded-lg group-hover:bg-elegant-gold/20 transition-colors">
                        <social.icon className="h-6 w-6 text-elegant-gold" />
                      </div>
                      <div>
                        <p className="font-poppins font-semibold text-foreground">
                          {social.name}
                        </p>
                        <p className="font-poppins text-sm text-elegant-subtext">
                          @karangtaruna.rw06
                        </p>
                      </div>
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Office Hours */}
              <div className="bg-elegant-surface p-8 rounded-2xl border border-elegant-gold/20">
                <h3 className="font-lexend text-2xl font-bold text-elegant-gold mb-6">
                  Jam Operasional • Office Hours
                </h3>
                <div className="space-y-3 font-poppins text-elegant-subtext">
                  <div className="flex justify-between">
                    <span>Senin - Jumat</span>
                    <span className="text-foreground font-semibold">
                      18:00 - 21:00
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sabtu</span>
                    <span className="text-foreground font-semibold">
                      16:00 - 20:00
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>Minggu</span>
                    <span className="text-foreground font-semibold">Libur</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Kontak;
