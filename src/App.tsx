import { useState, useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Layout from "./components/Layout";
import LoadingScreen from "./components/LoadingScreen";
import Home from "./pages/Home";
import Profil from "./pages/Profil";
import Kepengurusan from "./pages/Kepengurusan";
import Program from "./pages/Program";
import Jadwal from "./pages/Jadwal";
import Pengumuman from "./pages/Pengumuman";
import Galeri from "./pages/Galeri";
import Kontak from "./pages/Kontak";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate initial load
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <AnimatePresence mode="wait">
            {isLoading ? (
              <LoadingScreen key="loading" onComplete={() => setIsLoading(false)} />
            ) : (
              <Layout key="content">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/profil" element={<Profil />} />
                  <Route path="/kepengurusan" element={<Kepengurusan />} />
                  <Route path="/program" element={<Program />} />
                  <Route path="/jadwal" element={<Jadwal />} />
                  <Route path="/pengumuman" element={<Pengumuman />} />
                  <Route path="/galeri" element={<Galeri />} />
                  <Route path="/kontak" element={<Kontak />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </Layout>
            )}
          </AnimatePresence>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
