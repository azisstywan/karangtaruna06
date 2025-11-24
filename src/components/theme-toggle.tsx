import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

const ThemeToggle = () => {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    const saved = localStorage.getItem("theme") || "dark";
    setTheme(saved);
    document.documentElement.classList.toggle("dark", saved === "light");
  }, []);

  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    localStorage.setItem("theme", next);

    // Jika next mode adalah light → tambahkan class "dark"
    document.documentElement.classList.toggle("dark", next === "light");
  };

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full border border-elegant-gold hover:bg-elegant-gold/20 transition-all"
    >
      {theme === "dark" ? (
        <Sun size={20} className="text-elegant-gold" />
      ) : (
        <Moon size={20} className="text-elegant-gold" />
      )}
    </button>
  );
};

export default ThemeToggle;
