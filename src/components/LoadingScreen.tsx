import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import logoImg from "@/assets/logo.png";

interface LoadingScreenProps {
  onComplete: () => void;
}

const LoadingScreen = ({ onComplete }: LoadingScreenProps) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 500);
          return 100;
        }
        return prev + 2;
      });
    }, 30);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-elegant-dark"
    >
      {/* Floating particles background */}
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

      {/* Logo with glow effect */}
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative mb-12"
      >
        {/* Outer glow rings */}
        <motion.div
          className="absolute inset-0 rounded-full"
          animate={{
            boxShadow: [
              "0 0 30px 10px rgba(200, 168, 89, 0.3)",
              "0 0 50px 20px rgba(200, 168, 89, 0.5)",
              "0 0 30px 10px rgba(200, 168, 89, 0.3)",
            ],
          }}
          transition={{ duration: 2, repeat: Infinity }}
        />
        
        <img 
          src={logoImg} 
          alt="Karang Taruna Logo" 
          className="relative z-10 h-40 w-40 object-contain"
        />
      </motion.div>

      {/* Organization name */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="text-center mb-8"
      >
        <h1 className="font-lexend text-2xl font-bold text-elegant-gold mb-2">
          Karang Taruna RW 06
        </h1>
        <p className="font-poppins text-elegant-subtext text-sm">
          Manggarai, Tebet, Jakarta Selatan
        </p>
      </motion.div>

      {/* Loading bar */}
      <div className="w-64 h-0.5 bg-elegant-surface rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-elegant-gold-dark via-elegant-gold to-elegant-gold-light"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.3 }}
        />
      </div>

      {/* Percentage */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mt-4 font-poppins text-sm text-elegant-gold"
      >
        {progress}%
      </motion.p>
    </motion.div>
  );
};

export default LoadingScreen;
