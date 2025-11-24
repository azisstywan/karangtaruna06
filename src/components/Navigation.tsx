import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logoImg from "@/assets/logoo.png";
import ThemeToggle from "@/components/theme-toggle";

const navItems = [
  { name: "Home", path: "/" },
  { name: "Profil", path: "/profil" },
  { name: "Kepengurusan", path: "/kepengurusan" },
  { name: "Program", path: "/program" },
  { name: "Jadwal", path: "/jadwal" },
  { name: "Pengumuman", path: "/pengumuman" },
  { name: "Galeri", path: "/galeri" },
  { name: "Kontak", path: "/kontak" },
];

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "bg-elegant-dark/90 backdrop-blur-lg shadow-elegant"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group">
              <img
                src={logoImg}
                alt="Logo"
                className="h-12 w-12 object-contain transition-transform duration-300 group-hover:scale-110"
              />
              <div className="hidden md:block">
                <h1 className="font-lexend text-lg font-bold text-elegant-gold">
                  Karang Taruna RW 06
                </h1>
                <p className="font-poppins text-xs text-elegant-subtext">
                  Manggarai, Tebet
                </p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navItems.map((item, index) => (
                <Link key={item.path} to={item.path} className="relative group">
                  <motion.span
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className={`font-poppins text-sm transition-colors duration-300 ${
                      location.pathname === item.path
                        ? "text-elegant-gold"
                        : "text-foreground hover:text-elegant-gold"
                    }`}
                  >
                    {item.name}
                  </motion.span>
                  <span
                    className={`absolute -bottom-1 left-0 h-0.5 bg-elegant-gold transition-all duration-300 ${
                      location.pathname === item.path
                        ? "w-full"
                        : "w-0 group-hover:w-full"
                    }`}
                  />
                </Link>
              ))}
            </div>

            {/* Theme Toggle */}
            <ThemeToggle />

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-elegant-gold hover:bg-elegant-surface rounded-lg transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: isMobileMenuOpen ? 0 : "100%" }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="fixed top-0 right-0 bottom-0 w-80 bg-elegant-dark/95 backdrop-blur-lg z-50 lg:hidden shadow-2xl"
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between p-6 border-b border-elegant-gold/20">
            <h2 className="font-lexend text-lg font-bold text-elegant-gold">
              Menu
            </h2>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-2 text-elegant-gold hover:bg-elegant-surface rounded-lg transition-colors"
            >
              <X size={24} />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto py-6">
            {navItems.map((item, index) => (
              <Link
                key={item.path}
                to={item.path}
                className="block px-6 py-4 group"
              >
                <motion.div
                  initial={{ x: 50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: index * 0.05 }}
                  className={`font-poppins text-base transition-all duration-300 ${
                    location.pathname === item.path
                      ? "text-elegant-gold translate-x-2"
                      : "text-foreground group-hover:text-elegant-gold group-hover:translate-x-2"
                  }`}
                >
                  {item.name}
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsMobileMenuOpen(false)}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
        />
      )}
    </>
  );
};

export default Navigation;
