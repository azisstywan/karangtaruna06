import { ReactNode } from "react";
import Navigation from "./Navigation";
import Footer from "./Footer";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-elegant-dark text-foreground">
      <Navigation />
      <main className="pt-20">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
