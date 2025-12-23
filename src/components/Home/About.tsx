"use client";

import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import React from "react";
import Model2 from "@/assets/img/model2.png";
import Model3 from "@/assets/img/model3.png";
import Model4 from "@/assets/img/model4.png";
import { FaCheckCircle } from "react-icons/fa";
import Image from "next/image";

const ITEMS = [
  "Kualitas premium dengan bahan pilihan terbaik",
  "Motif autentik karya pengrajin berpengalaman",
  "Desain eksklusif dari klasik hingga kontemporer",
  "Layanan custom sesuai kebutuhan Anda",
  "Komitmen melestarikan warisan budaya Indonesia",
];

const AboutUs = () => {
  return (
    <section className="py-16 sm:py-20 lg:py-28 bg-primary-900 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10 sm:gap-12 lg:gap-16 xl:gap-20">
          {/* Image */}
          <div className="w-full max-w-sm sm:max-w-md lg:max-w-none mx-auto lg:mx-0">
            <div className="relative">
              <div className="absolute -inset-3 sm:-inset-4 bg-secondary/20 rounded-2xl sm:rounded-3xl rotate-3"></div>

              <Swiper
                modules={[Autoplay]}
                autoplay={{
                  delay: 2000,
                  disableOnInteraction: false,
                }}
                loop
                className="relative bg-secondary/60 w-full aspect-[3/4] sm:aspect-[4/5] md:h-[420px] lg:h-[480px] rounded-xl sm:rounded-2xl -rotate-1 shadow-lg overflow-hidden"
              >
                <SwiperSlide>
                  <Image
                    src={Model2}
                    alt="Model Batik 1"
                    fill
                    className="object-cover"
                    priority
                  />
                </SwiperSlide>

                <SwiperSlide>
                  <Image
                    src={Model3}
                    alt="Model Batik 2"
                    fill
                    className="object-cover"
                  />
                </SwiperSlide>

                <SwiperSlide>
                  <Image
                    src={Model4}
                    alt="Model Batik 3"
                    fill
                    className="object-cover"
                  />
                </SwiperSlide>
              </Swiper>
            </div>
          </div>

          {/* Content */}
          <div
            className="text-center lg:text-left"
            data-aos="fade-left"
            data-aos-duration="800"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4 sm:mb-6">
              Batik Berkualitas{" "}
              <span className="text-secondary">Nusantara</span>
            </h2>
            <p className="text-primary-200 text-base sm:text-lg leading-relaxed mb-6 sm:mb-8 max-w-xl mx-auto lg:mx-0">
              Setiap helai batik kami menyimpan filosofi mendalam dan dibuat
              dengan ketelitian tinggi oleh tangan-tangan terampil. Kami hadir
              untuk menghadirkan keindahan tradisi dalam sentuhan modern.
            </p>

            <ul className="space-y-3 sm:space-y-4 text-left max-w-lg mx-auto lg:mx-0">
              {ITEMS.map((item, index) => (
                <li
                  key={index}
                  className="flex items-start sm:items-center gap-3 sm:gap-4 text-primary-100"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <FaCheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-secondary flex-shrink-0 mt-0.5 sm:mt-0" />
                  <span className="text-sm sm:text-base lg:text-lg leading-snug">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
