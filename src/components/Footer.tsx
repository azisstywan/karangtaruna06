import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Facebook,
  Instagram,
  Twitter,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import logoImg from "@/assets/logoo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "Profil", path: "/profil" },
    { name: "Program", path: "/program" },
    { name: "Galeri", path: "/galeri" },
  ];

  const infoLinks = [
    { name: "Kepengurusan", path: "/kepengurusan" },
    { name: "Jadwal", path: "/jadwal" },
    { name: "Pengumuman", path: "/pengumuman" },
    { name: "Kontak", path: "/kontak" },
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Mail, href: "mailto:info@karangtaruna-rw06.id", label: "Email" },
  ];

  return (
    <footer className="bg-elegant-darker border-t border-elegant-gold/20">
      <div className="container mx-auto px-6 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* About Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <div className="flex items-center gap-3 mb-4">
              <img
                src={logoImg}
                alt="Logo"
                className="h-16 w-16 object-contain"
              />
              <div>
                <h3 className="font-lexend text-lg font-bold text-elegant-gold">
                  Karang Taruna
                </h3>
                <p className="font-poppins text-sm text-elegant-subtext">
                  RW 06 Manggarai
                </p>
              </div>
            </div>
            <p className="font-poppins text-sm text-elegant-subtext leading-relaxed">
              Organisasi pemuda yang bergerak dalam pemberdayaan generasi muda
              di wilayah Manggarai, Tebet, Jakarta Selatan.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="font-lexend text-base font-semibold text-elegant-gold mb-6">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="font-poppins text-sm text-elegant-subtext hover:text-elegant-gold transition-colors duration-300 inline-block group"
                  >
                    <span className="relative">
                      {link.name}
                      <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-elegant-gold group-hover:w-full transition-all duration-300" />
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Info Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="font-lexend text-base font-semibold text-elegant-gold mb-6">
              Informasi
            </h4>
            <ul className="space-y-3">
              {infoLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="font-poppins text-sm text-elegant-subtext hover:text-elegant-gold transition-colors duration-300 inline-block group"
                  >
                    <span className="relative">
                      {link.name}
                      <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-elegant-gold group-hover:w-full transition-all duration-300" />
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="font-lexend text-base font-semibold text-elegant-gold mb-6">
              Hubungi Kami
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-elegant-gold flex-shrink-0 mt-0.5" />
                <span className="font-poppins text-sm text-elegant-subtext">
                  RW 06 Manggarai, Tebet
                  <br />
                  Jakarta Selatan 12850
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-elegant-gold flex-shrink-0" />
                <span className="font-poppins text-sm text-elegant-subtext">
                  +62 812-3456-7890
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-elegant-gold flex-shrink-0" />
                <span className="font-poppins text-sm text-elegant-subtext">
                  info@karangtaruna-rw06.id
                </span>
              </li>
            </ul>

            {/* Social Links */}
            <div className="flex items-center gap-3 mt-6">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="p-2 bg-elegant-surface hover:bg-elegant-gold/20 rounded-lg transition-colors duration-300 group"
                >
                  <social.icon className="h-5 w-5 text-elegant-gold group-hover:scale-110 transition-transform duration-300" />
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-elegant-gold/30 to-transparent mb-8" />

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <p className="font-poppins text-sm text-elegant-subtext">
            © {currentYear} Karang Taruna RW 06 Manggarai. All rights reserved.
          </p>
          <p className="font-poppins text-xs text-elegant-subtext mt-2">
            Made with <span className="text-elegant-gold">❤</span> for the
            community
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
