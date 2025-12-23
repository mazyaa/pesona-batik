import React from "react";
import Link from "next/link";
import { HiOutlineSparkles, HiOutlineShoppingBag } from "react-icons/hi2";

const CallToAction = () => {
  return (
    <section className="py-24 lg:py-32 bg-gradient-to-br from-primary-800 via-primary to-primary-700 relative overflow-hidden">
      {/* Enhanced Background Pattern */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Decorative circles */}
        <div className="absolute top-0 left-0 w-80 h-80 bg-secondary/15 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-secondary/10 rounded-full translate-x-1/4 translate-y-1/4 blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/5 rounded-full blur-3xl"></div>
        
        {/* Subtle grid pattern overlay */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="container px-6 md:px-16 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div 
            className="flex justify-center mb-8"
            data-aos="fade-up"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm text-white/90 text-sm font-medium rounded-full border border-white/20">
              <HiOutlineSparkles className="text-secondary" />
              Koleksi Premium Tersedia
            </span>
          </div>

          {/* Headline with improved hierarchy */}
          <h2
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center mb-6 leading-tight"
            data-aos="fade-up"
            data-aos-delay="50"
          >
            Siap Tampil{" "}
            <span className="text-secondary relative">
              Elegan
              <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 8.5C50 2.5 150 2.5 198 8.5" stroke="currentColor" strokeWidth="3" strokeLinecap="round" className="text-secondary/50"/>
              </svg>
            </span>{" "}
            dengan Batik?
          </h2>

          {/* Subheadline */}
          <p
            className="text-base sm:text-lg md:text-xl text-white/80 text-center mb-12 leading-relaxed max-w-2xl mx-auto"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Temukan koleksi batik premium kami dan rasakan keindahan warisan
            budaya Indonesia dalam setiap helai kain pilihan Anda.
          </p>

          {/* CTA Buttons - Improved visibility and spacing */}
          <div
            className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center"
            data-aos="fade-up"
            data-aos-delay="150"
          >
            <Link href="/products" className="w-full sm:w-auto">
              <button className="group w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 sm:px-10 sm:py-5 bg-secondary text-white font-semibold text-base sm:text-lg rounded-2xl hover:bg-secondary-400 transition-all duration-300 shadow-xl shadow-secondary/30 hover:shadow-2xl hover:shadow-secondary/40 hover:-translate-y-1">
                <HiOutlineShoppingBag className="text-xl sm:text-2xl group-hover:scale-110 transition-transform" />
                Jelajahi Koleksi
              </button>
            </Link>
            <Link href="/contact" className="w-full sm:w-auto">
              <button className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 sm:px-10 sm:py-5 bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white font-semibold text-base sm:text-lg rounded-2xl hover:bg-white/20 hover:border-white/50 transition-all duration-300">
                Hubungi Kami
              </button>
            </Link>
          </div>

          {/* Trust indicators */}
          <div 
            className="mt-12 pt-8 border-t border-white/10"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-10 text-white/60 text-sm">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-secondary" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                </svg>
                <span>Pengiriman Seluruh Indonesia</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-secondary" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                </svg>
                <span>Kualitas Premium</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-secondary" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                </svg>
                <span>Garansi Keaslian</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
