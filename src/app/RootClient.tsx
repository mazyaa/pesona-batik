"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Navbar";
import { HeroUIProvider } from "@heroui/react";
import Aos from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";

const RootClient = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    Aos.init({
      duration: 800,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <HeroUIProvider>
      <div className="flex flex-col min-h-screen">
        <Header />
        {/* Main content wrapper with proper spacing for fixed navbar */}
        <main className="flex-grow pt-16 sm:pt-[64px]">
          {children}
        </main>
        <Footer />
      </div>
    </HeroUIProvider>
  );
};

export default RootClient;