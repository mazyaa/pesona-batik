"use client";

import { FaMapLocationDot, FaWhatsapp } from "react-icons/fa6";
import { IoMdCall, IoMdMail } from "react-icons/io";
import { FaClock } from "react-icons/fa";
import GoogleMapsEmbed from "./Maps";

const CONTACT_INFO = [
  {
    icon: FaMapLocationDot,
    title: "Alamat",
    content:
      "Plakaran, Baturetno, Banguntapan, Bantul Regency, Special Region of Yogyakarta 55197",
  },
  {
    icon: IoMdCall,
    title: "Telepon",
    content: "+62 878 8579 3483",
    href: "tel:+6287885793483",
  },
  {
    icon: IoMdMail,
    title: "Email",
    content: "hello@pesonabatik.id",
    href: "mailto:hello@pesonabatik.id",
  },
  {
    icon: FaClock,
    title: "Jam Operasional",
    content: "Senin - Sabtu: 09:00 - 18:00",
  },
];

export default function Contact() {
  return (
    <section
      id="kontak"
      className="py-16 md:py-20 lg:py-28 bg-gradient-to-b from-white to-primary-50/30"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          className="text-center max-w-2xl mx-auto mb-14"
          data-aos="fade-up"
        >
          <span className="text-secondary font-semibold text-sm tracking-widest uppercase">
            Hubungi Kami
          </span>
          <h2 className="mt-3 text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
            Mari <span className="text-primary">Terhubung</span>
          </h2>
          <p className="mt-4 text-gray-600 text-base md:text-lg">
            Kami siap membantu Anda menemukan batik terbaik untuk kebutuhan
            personal maupun bisnis.
          </p>
        </div>

        {/* Contact Cards */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-14"
          data-aos="fade-up"
        >
          {CONTACT_INFO.map((item, i) => (
            <div
              key={i}
              className="flex gap-4 p-5 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition"
            >
              <div className="w-11 h-11 flex items-center justify-center rounded-xl bg-primary-50 text-primary">
                <item.icon className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 text-sm mb-1">
                  {item.title}
                </h4>
                {item.href ? (
                  <a
                    href={item.href}
                    className="text-sm text-gray-600 hover:text-primary transition"
                  >
                    {item.content}
                  </a>
                ) : (
                  <p className="text-sm text-gray-600">{item.content}</p>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Map + CTA */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Map */}
          <div
            className="lg:col-span-2 bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm"
            data-aos="fade-right"
          >
            <div className="h-[380px] md:h-[460px]">
              <GoogleMapsEmbed />
            </div>
          </div>

          {/* CTA Panel */}
          <div
            className="bg-primary text-white rounded-2xl p-8 flex flex-col justify-between"
            data-aos="fade-left"
          >
            <div>
              <h3 className="text-2xl font-bold mb-3">
                Konsultasi Batik Sekarang
              </h3>
              <p className="text-white/90 text-sm leading-relaxed">
                Hubungi kami langsung melalui WhatsApp atau email untuk respon
                lebih cepat.
              </p>
            </div>

            <div className="mt-8 flex flex-col gap-4">
              <a
                href="https://wa.me/6285692807166"
                target="_blank"
                className="flex items-center justify-center gap-3 px-6 py-3 rounded-xl bg-white text-primary font-semibold hover:bg-gray-100 transition"
              >
                <FaWhatsapp className="w-5 h-5" />
                Chat via WhatsApp
              </a>

              <a
                href="mailto:hello@pesonabatik.id"
                className="flex items-center justify-center gap-3 px-6 py-3 rounded-xl border border-white/40 hover:bg-white/10 transition"
              >
                <IoMdMail className="w-5 h-5" />
                Kirim Email
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
