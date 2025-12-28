import React from "react";
import { FaGem, FaPalette, FaHeadset } from "react-icons/fa";

const FEATURES = [
  {
    icon: FaGem,
    title: "Kualitas Premium",
    description:
      "Bahan pilihan terbaik dengan teknik pewarnaan tradisional yang ramah lingkungan dan tahan lama.",
  },
  {
    icon: FaPalette,
    title: "Desain Eksklusif",
    description:
      "Motif unik yang mencerminkan kekayaan budaya Indonesia, dari klasik hingga kontemporer.",
  },
  {
    icon: FaHeadset,
    title: "Layanan Personal",
    description:
      "Tim kami siap membantu dengan respons cepat dan solusi terbaik untuk setiap kebutuhan Anda.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-20 lg:py-28 bg-primary-900">
      <div className="container px-6 md:px-16">
        {/* Header */}
        <div
          className="text-center max-w-2xl mx-auto mb-14"
          data-aos="fade-up"
        >
          <span className="inline-block text-secondary font-medium text-sm tracking-wider uppercase mb-4">
            Keunggulan Kami
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Mengapa Memilih Batik Kami?
          </h2>
          <p className="text-primary-300 text-lg">
            Kami berkomitmen memberikan yang terbaik untuk setiap pelanggan
            dengan standar kualitas tertinggi.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {FEATURES.map((feature, index) => (
            <article
              key={index}
              className="group bg-white rounded-2xl p-8 text-center hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              data-aos="zoom-in"
              data-aos-delay={index * 100}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-2xl mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                <feature.icon className="w-8 h-8 text-primary group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
