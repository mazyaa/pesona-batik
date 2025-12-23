import React from "react";
import { FaEye, FaRocket } from "react-icons/fa";

const VisiMisi = () => {
  return (
    <section className="py-20 lg:py-28 bg-primary-900">
      <div className="container px-6 md:px-16">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16" data-aos="fade-up">
          <span className="inline-block text-secondary font-medium text-sm tracking-wider uppercase mb-4">
            Komitmen Kami
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
            Visi & <span className="text-secondary">Misi</span>
          </h2>
        </div>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Visi */}
          <div
            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8"
            data-aos="fade-right"
          >
            <div className="inline-flex items-center justify-center w-14 h-14 bg-secondary rounded-xl mb-6">
              <FaEye className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Visi</h3>
            <p className="text-primary-200 text-lg leading-relaxed">
              Menjadi pelopor dalam membawa keindahan batik Indonesia ke
              panggung global, dengan standar kualitas tertinggi dan nilai
              seni yang autentik.
            </p>
          </div>

          {/* Misi */}
          <div
            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8"
            data-aos="fade-left"
          >
            <div className="inline-flex items-center justify-center w-14 h-14 bg-secondary rounded-xl mb-6">
              <FaRocket className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Misi</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-primary-200">
                <span className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></span>
                <span>Melestarikan tradisi melalui inovasi desain yang relevan</span>
              </li>
              <li className="flex items-start gap-3 text-primary-200">
                <span className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></span>
                <span>Memberdayakan pengrajin lokal demi kesejahteraan bersama</span>
              </li>
              <li className="flex items-start gap-3 text-primary-200">
                <span className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></span>
                <span>Memperkenalkan batik sebagai identitas bangsa ke seluruh dunia</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisiMisi;
