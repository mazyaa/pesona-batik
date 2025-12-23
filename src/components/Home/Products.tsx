// components/Home/Products.js
import { products } from "@/utils/products";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import renderStars from "../RenderStar";

const Products = () => {
  const productSlice = products.slice(0, 4);

  return (
    <section className="py-20 lg:py-28">
      <div className="container px-6 md:px-16">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14" data-aos="fade-up">
          <span className="inline-block text-secondary font-medium text-sm tracking-wider uppercase mb-4">
            Koleksi Terbaik
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Pilihan <span className="text-primary">Unggulan</span> Kami
          </h2>
          <p className="text-gray-600 text-lg">
            Temukan koleksi batik pilihan yang didesain dengan cinta dan dibuat
            dengan keahlian tinggi untuk tampilan yang memukau.
          </p>
        </div>

        {/* Product Grid */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          data-aos="fade-up"
        >
          {productSlice.map((product, index) => (
            <Link key={index} href={`/products/${product.id}`}>
              <article
                className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                data-aos="zoom-in"
                data-aos-delay={index * 100}
              >
                <div className="relative overflow-hidden">
                  <Image
                    src={product.image[0].src}
                    alt={product.name}
                    width={400}
                    height={400}
                    className="w-full h-72 object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-1">
                    {product.name}
                  </h3>
                  <div className="flex items-center gap-2 mb-3">
                    {renderStars(product.rating)}
                    <span className="text-gray-500 text-sm">
                      ({product.rating})
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <p className="text-lg font-bold text-primary">
                      Rp {product.price.toLocaleString("id-ID")}
                    </p>
                    <span className="text-sm text-gray-500">
                      {product.sold} terjual
                    </span>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center mt-14" data-aos="fade-up">
          <Link href="/products">
            <button className="px-8 py-4 bg-primary text-white font-semibold rounded-xl hover:bg-primary-600 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5">
              Lihat Semua Koleksi
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Products;
