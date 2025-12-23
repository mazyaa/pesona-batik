import React from "react";
import { FaHistory, FaAward } from "react-icons/fa";

const Description = () => {
  return (
    <section className="py-20 lg:py-28">
      <div className="container px-6 md:px-16">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16" data-aos="fade-up">
          <span className="inline-block text-secondary font-medium text-sm tracking-wider uppercase mb-4">
            Tentang Kami
          </span>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Melestarikan Warisan,{" "}
            <span className="text-primary">Menginspirasi Generasi</span>
          </h1>
          <p className="text-gray-600 text-lg leading-relaxed">
            Sejak 2020, kami berkomitmen menghadirkan batik berkualitas premium
            yang memadukan keindahan tradisi dengan sentuhan kontemporer.
            Setiap karya kami adalah bukti cinta terhadap warisan budaya Indonesia.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <article
            className="group bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="inline-flex items-center justify-center w-14 h-14 bg-primary-100 rounded-xl mb-6 group-hover:bg-primary transition-colors duration-300">
              <FaHistory className="w-6 h-6 text-primary group-hover:text-white transition-colors duration-300" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Perjalanan Kami</h3>
            <p className="text-gray-600 leading-relaxed">
              Berawal dari Serang, Banten, kami membangun fondasi dengan
              memberdayakan pengrajin lokal berbakat untuk menciptakan
              karya batik autentik yang sarat makna dan keindahan.
            </p>
          </article>

          <article
            className="group bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="inline-flex items-center justify-center w-14 h-14 bg-primary-100 rounded-xl mb-6 group-hover:bg-primary transition-colors duration-300">
              <FaAward className="w-6 h-6 text-primary group-hover:text-white transition-colors duration-300" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Keunggulan Kami</h3>
            <p className="text-gray-600 leading-relaxed">
              Perpaduan sempurna antara desain tradisional dan inovasi modern
              menghasilkan koleksi yang relevan, bernilai seni tinggi,
              dan cocok untuk berbagai kesempatan.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Description;
