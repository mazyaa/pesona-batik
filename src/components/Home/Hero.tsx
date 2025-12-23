import React from "react";
import HeroImg from "@/assets/img/model1.png";
import Image from "next/image";
import Link from "next/link";
import { HiOutlineShoppingBag, HiOutlineArrowRight } from "react-icons/hi2";

const Hero = () => {
  return (
    <section className="min-h-[calc(100vh-64px)] py-8 sm:py-12 lg:py-0 flex items-center overflow-hidden relative">
      {/* Subtle background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container px-6 md:px-16 relative z-10">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-10 lg:gap-16 xl:gap-20">
          {/* Content */}
          <div
            className="flex-1 text-center lg:text-left"
            data-aos="fade-right"
            data-aos-duration="800"
          >
            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Keanggunan dalam{" "}
              <span className="text-primary relative inline-block">
                Setiap Helai
                <svg
                  className="absolute -bottom-1 left-0 w-full hidden sm:block"
                  viewBox="0 0 200 8"
                  fill="none"
                >
                  <path
                    d="M2 6C50 2 150 2 198 6"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    className="text-primary/30"
                  />
                </svg>
              </span>{" "}
              Batik
            </h1>

            {/* Subheadline */}
            <p className="text-gray-600 text-base sm:text-lg md:text-xl leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0">
              Temukan koleksi batik premium dengan motif autentik yang
              menceritakan keindahan warisan nusantara. Dibuat oleh pengrajin
              ahli untuk Anda yang menghargai seni dan kualitas.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link href="/products" className="w-full sm:w-auto">
                <button className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-white font-semibold rounded-xl hover:bg-primary-600 transition-all duration-300 shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5 active:scale-95">
                  <HiOutlineShoppingBag className="text-xl" />
                  Jelajahi Koleksi
                  <HiOutlineArrowRight className="text-lg opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                </button>
              </Link>
              <Link href="/about" className="w-full sm:w-auto">
                <button className="w-full sm:w-auto px-8 py-4 border-2 border-primary/20 text-primary font-semibold rounded-xl hover:border-primary hover:bg-primary-50 transition-all duration-300 active:scale-95">
                  Tentang Kami
                </button>
              </Link>
            </div>

            {/* Social proof */}
            <div className="mt-10 pt-8 border-t border-gray-100 hidden sm:block">
              <div className="flex items-center justify-center lg:justify-start gap-8">
                <div className="text-center lg:text-left">
                  <p className="text-2xl lg:text-3xl font-bold text-primary">
                    500+
                  </p>
                  <p className="text-sm text-gray-500">Produk Terjual</p>
                </div>
                <div className="w-px h-12 bg-gray-200"></div>
                <div className="text-center lg:text-left">
                  <p className="text-2xl lg:text-3xl font-bold text-primary">
                    4.9★
                  </p>
                  <p className="text-sm text-gray-500">Rating Pelanggan</p>
                </div>
                <div className="w-px h-12 bg-gray-200"></div>
                <div className="text-center lg:text-left">
                  <p className="text-2xl lg:text-3xl font-bold text-primary">
                    100%
                  </p>
                  <p className="text-sm text-gray-500">Batik Asli</p>
                </div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div
            className="flex-1 w-full max-w-xs sm:max-w-sm lg:max-w-xl"
            data-aos="fade-left"
            data-aos-duration="800"
          >
            <div className="relative">
              {/* Background decoration */}
              <div className="absolute -inset-2 sm:-inset-4 rounded-2xl bg-primary/10 -rotate-3"></div>

              {/* Main image */}
              <div className="relative rounded-2xl overflow-hidden bg-secondary shadow-gray-50 shadow-2x">
                <Image
                  alt="Koleksi Batik Premium"
                  src={HeroImg}
                  width={600}
                  height={600}
                  priority
                  className="relative w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
