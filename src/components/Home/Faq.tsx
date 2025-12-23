"use client";

import React, { useState } from "react";
import { HiChevronDown } from "react-icons/hi";

interface AccordionItemProps {
  title: string;
  content: string;
  isOpen: boolean;
  onClick: () => void;
  index: number;
}

const FAQDATA = [
  {
    title: "Apa yang membuat batik Anda berbeda dari yang lain?",
    content:
      "Setiap batik kami dibuat dengan teknik tradisional oleh pengrajin berpengalaman, menggunakan bahan premium yang ramah kulit. Motif kami memiliki filosofi mendalam yang menjadikan setiap karya bukan sekadar pakaian, tetapi warisan seni yang bermakna.",
  },
  {
    title: "Bagaimana cara memesan batik?",
    content:
      "Anda dapat memesan langsung melalui website kami atau menghubungi tim kami via WhatsApp. Kami juga menyediakan layanan custom design untuk kebutuhan spesial seperti seragam atau acara pernikahan.",
  },
  {
    title: "Apakah tersedia pengiriman ke seluruh Indonesia?",
    content:
      "Ya, kami melayani pengiriman ke seluruh wilayah Indonesia dengan pengemasan premium untuk menjaga kualitas batik. Kami juga melayani pengiriman internasional ke beberapa negara.",
  },
  {
    title: "Apakah ada opsi pembelian grosir?",
    content:
      "Tentu! Kami menerima pesanan dalam jumlah besar dengan harga khusus untuk reseller, korporat, dan kebutuhan event. Hubungi tim sales kami untuk penawaran terbaik.",
  },
  {
    title: "Bagaimana cara merawat batik agar tetap awet?",
    content:
      "Cuci dengan air dingin dan deterjen lembut, hindari mesin cuci untuk hasil terbaik. Jemur di tempat teduh dan setrika dengan suhu rendah. Dengan perawatan tepat, batik Anda akan tetap indah untuk waktu yang lama.",
  },
];

const AccordionItem = ({
  title,
  content,
  isOpen,
  onClick,
  index,
}: AccordionItemProps) => {
  return (
    <div
      className="border border-gray-200 rounded-xl overflow-hidden mb-4 last:mb-0"
      data-aos="fade-up"
      data-aos-delay={index * 50}
    >
      <button
        className={`flex items-center justify-between w-full p-5 text-left transition-all duration-300 ${
          isOpen ? "bg-primary text-white" : "bg-white text-gray-900 hover:bg-gray-50"
        }`}
        onClick={onClick}
      >
        <span className="text-base font-medium pr-4">{title}</span>
        <HiChevronDown
          className={`text-xl flex-shrink-0 transform transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <div className="p-5 bg-gray-50 text-gray-600 leading-relaxed">
          {content}
        </div>
      </div>
    </div>
  );
};

const Faq = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number): void => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 lg:py-28">
      <div className="container px-6 md:px-16">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12" data-aos="fade-up">
            <span className="inline-block text-secondary font-medium text-sm tracking-wider uppercase mb-4">
              Bantuan
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Pertanyaan <span className="text-primary">Umum</span>
            </h2>
            <p className="text-gray-600 text-lg">
              Temukan jawaban untuk pertanyaan yang sering diajukan. Belum
              menemukan jawaban? Hubungi tim kami!
            </p>
          </div>

          {/* FAQ List */}
          <div>
            {FAQDATA.map((faq, index) => (
              <AccordionItem
                key={index}
                index={index}
                title={faq.title}
                content={faq.content}
                isOpen={openIndex === index}
                onClick={() => toggleAccordion(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
