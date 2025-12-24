"use client";

/**
 * Product Detail Page
 *
 * A clean, elegant, and responsive product detail layout
 * with modern e-commerce UI patterns and premium cultural branding.
 */

import renderStars from "@/components/RenderStar";
import { products } from "@/utils/products";
import Image from "next/image";
import { useParams } from "next/navigation";
import React, { useState } from "react";
import Link from "next/link";

// Bottom options
import Pants1 from "@/assets/img/celana.png";
import Pants2 from "@/assets/img/celana-abu.png";
import Pants3 from "@/assets/img/celana-cream.png";
import Skirt1 from "@/assets/img/rok.png";
import Skirt2 from "@/assets/img/rok-abu.png";
import Skirt3 from "@/assets/img/rok-cream.png";

import OrderForm from "@/components/Products/OrderForm";
import BatikOrnament from "@/components/ui/BatikOrnament";
import {
  HiOutlineSparkles,
  HiOutlineTruck,
  HiOutlineShieldCheck,
  HiOutlineArrowLeft,
} from "react-icons/hi2";

// Configuration data
const PANTS = [
  { src: Pants1, color: "Hitam" },
  { src: Pants2, color: "Abu" },
  { src: Pants3, color: "Cream" },
];

const SKIRT = [
  { src: Skirt1, color: "Hitam" },
  { src: Skirt2, color: "Abu" },
  { src: Skirt3, color: "Cream" },
];

const SIZES = ["S", "M", "L", "XL"];

const MATERIALS = [
  { name: "Katun", price: 0, description: "Nyaman & adem" },
  { name: "Mori", price: 50000, description: "Klasik & elegan" },
  { name: "Sutra", price: 100000, description: "Mewah & lembut" },
  { name: "Shantung", price: 150000, description: "Berkilau & premium" },
  { name: "Paris", price: 200000, description: "Ringan & jatuh indah" },
  { name: "Ceruti", price: 250000, description: "Halus & ekslusif" },
  { name: "Rayon", price: 300000, description: "Dingin & berkualitas" },
];

const SIZE_CHART = [
  { size: "S", chest: "104cm", length: "70cm" },
  { size: "M", chest: "110cm", length: "72cm" },
  { size: "L", chest: "116cm", length: "74cm" },
  { size: "XL", chest: "122cm", length: "76cm" },
];

// Selection button component
const SelectionButton = ({
  selected,
  onClick,
  children,
  className = "",
}: {
  selected: boolean;
  onClick: () => void;
  children: React.ReactNode;
  className?: string;
}) => (
  <button
    onClick={onClick}
    className={`px-4 py-2.5 border-2 rounded-xl font-medium transition-all duration-200 ${
      selected
        ? "border-primary bg-primary text-white shadow-md"
        : "border-gray-200 bg-white text-gray-700 hover:border-primary-300 hover:bg-primary-50"
    } ${className}`}
  >
    {children}
  </button>
);

const ProductItemPage = () => {
  const { id } = useParams();
  const product = products.find((product) => product.id === Number(id));

  const [selectedSize, setSelectedSize] = useState(SIZES[0]);
  const [selectedMaterial, setSelectedMaterial] = useState(MATERIALS[0]);
  const [selectedPants, setSelectedPants] = useState(PANTS[0]);
  const [selectedSkirt, setSelectedSkirt] = useState(SKIRT[0]);
  const [selectedColor, setSelectedColor] = useState(
    product?.image[0]?.color || ""
  );
  const [showSizeChart, setShowSizeChart] = useState(false);
  const [bottomType, setBottomType] = useState<"pants" | "skirt">("pants");

  // Get selected image
  const selectedImage = product?.image.find(
    (img) => img.color === selectedColor
  );

  // Calculate total price
  const totalPrice =
    Number(product?.price || 0) + Number(selectedMaterial?.price || 0);

  // 404 - Product not found
  if (!product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Produk Tidak Ditemukan
          </h1>
          <p className="text-gray-600 mb-8">
            Maaf, produk yang Anda cari tidak tersedia.
          </p>
          <Link
            href="/products"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-xl font-medium hover:bg-primary-600 transition-colors"
          >
            <HiOutlineArrowLeft />
            Kembali ke Koleksi
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-100">
        <div className="container px-6 md:px-16 py-4 pt-10">
          <nav className="flex items-center gap-2 text-xs sm:text-sm">
            <Link
              href="/"
              className="text-gray-500 hover:text-primary transition-colors"
            >
              Beranda
            </Link>
            <span className="text-gray-300">/</span>
            <Link
              href="/products"
              className="text-gray-500 hover:text-primary transition-colors"
            >
              Koleksi
            </Link>
            <span className="text-gray-300">/</span>
            <span className="text-gray-900 font-medium">{product.name}</span>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="container md:px-16 py-8 lg:py-12">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Left Column - Product Images */}
          <div className="relative">
            {/* Batik Ornament */}

            {/* Main Image */}
            <div className="relative bg-white rounded-2xl shadow-sm overflow-hidden">
              <div className="aspect-square relative">
                <Image
                  src={selectedImage?.src || product.image[0]?.src}
                  alt={product.name}
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              {/* Bottom wear overlay (pants/skirt) */}
              {(product.gender === "Pria" ||
                (product.gender === "Unisex" && bottomType === "pants")) && (
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 pointer-events-none">
                  <Image
                    src={selectedPants.src}
                    alt="Celana"
                    width={400}
                    height={400}
                    className="w-full h-auto"
                  />
                </div>
              )}
              {(product.gender === "Wanita" ||
                (product.gender === "Unisex" && bottomType === "skirt")) && (
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4/5 pointer-events-none">
                  <Image
                    src={selectedSkirt.src}
                    alt="Rok"
                    width={400}
                    height={400}
                    className="w-full h-auto"
                  />
                </div>
              )}

              {/* Badge */}
              <div className="absolute top-4 left-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-secondary/90 text-white text-sm font-medium rounded-full backdrop-blur-sm">
                  <HiOutlineSparkles className="text-base" />
                  Terlaris
                </span>
              </div>
            </div>

            {/* Color Thumbnail Gallery */}
            <div className="flex flex-col justify-center">
              <div className="mt-4 inline-grid grid-cols-3 sm:grid-cols-6 gap-3 overflow-x-auto pb-2">
                {product.image.map((img, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedColor(img.color)}
                    className={`flex-shrink-0 w-20 h-20  rounded-xl overflow-hidden border-2 transition-all ${
                      selectedColor === img.color
                        ? "border-primary shadow-md"
                        : "border-gray-200 hover:border-gray-300"
                    }`}
                  >
                    <Image
                      src={img.src}
                      alt={img.color}
                      width={80}
                      height={80}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Product Info */}
          <div className="flex flex-col">
            {/* Header */}
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-sm text-gray-500">{product.gender}</span>
                <span className="text-gray-300">•</span>
                <span className="text-sm text-gray-500">
                  Terjual {product.sold}+
                </span>
              </div>
              <h1 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3">
                {product.name}
              </h1>
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1.5">
                  {renderStars(product.rating)}
                  <span className="text-gray-600 font-medium">
                    {product.rating}
                  </span>
                </div>
              </div>
            </div>

            {/* Price */}
            <div className="bg-gradient-to-r from-secondary/10 to-transparent rounded-xl p-4 mb-6">
              <div className="flex items-baseline gap-2">
                <span className="text-3xl lg:text-4xl font-bold text-primary">
                  Rp {totalPrice.toLocaleString("id-ID")}
                </span>
                {selectedMaterial.price > 0 && (
                  <span className="text-sm text-gray-500 line-through">
                    Rp {product.price.toLocaleString("id-ID")}
                  </span>
                )}
              </div>
              {selectedMaterial.price > 0 && (
                <p className="text-sm text-gray-600 mt-1">
                  Termasuk upgrade bahan {selectedMaterial.name}
                </p>
              )}
            </div>

            {/* Selections */}
            <div className="space-y-6">
              {/* Size Selection */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-semibold text-gray-900">Ukuran</h3>
                  <button
                    onClick={() => setShowSizeChart(!showSizeChart)}
                    className="text-sm text-primary hover:underline"
                  >
                    Panduan Ukuran
                  </button>
                </div>
                <div className="flex flex-wrap gap-2">
                  {SIZES.map((size) => (
                    <SelectionButton
                      key={size}
                      selected={selectedSize === size}
                      onClick={() => setSelectedSize(size)}
                      className="min-w-[60px]"
                    >
                      {size}
                    </SelectionButton>
                  ))}
                </div>

                {/* Size Chart Modal */}
                {showSizeChart && (
                  <div className="mt-4 p-4 bg-gray-50 rounded-xl">
                    <h4 className="font-medium text-gray-900 mb-3">
                      Panduan Ukuran
                    </h4>
                    <div className="overflow-x-auto">
                      <table className="w-full text-sm">
                        <thead>
                          <tr className="border-b border-gray-200">
                            <th className="text-left py-2 px-3 font-medium text-gray-600">
                              Ukuran
                            </th>
                            <th className="text-left py-2 px-3 font-medium text-gray-600">
                              Lingkar Dada
                            </th>
                            <th className="text-left py-2 px-3 font-medium text-gray-600">
                              Panjang
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {SIZE_CHART.map((row) => (
                            <tr
                              key={row.size}
                              className="border-b border-gray-100"
                            >
                              <td className="py-2 px-3 font-medium">
                                {row.size}
                              </td>
                              <td className="py-2 px-3 text-gray-600">
                                {row.chest}
                              </td>
                              <td className="py-2 px-3 text-gray-600">
                                {row.length}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}
              </div>

              {/* Color Selection */}
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">
                  Warna Batik:{" "}
                  <span className="font-normal text-primary">
                    {selectedColor}
                  </span>
                </h3>
                <div className="flex flex-wrap gap-2">
                  {product.image.map((img) => (
                    <SelectionButton
                      key={img.color}
                      selected={selectedColor === img.color}
                      onClick={() => setSelectedColor(img.color)}
                    >
                      {img.color}
                    </SelectionButton>
                  ))}
                </div>
              </div>

              {/* Bottom Type Selection (for Unisex) */}
              {product.gender === "Unisex" && (
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">
                    Jenis Bawahan
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    <SelectionButton
                      selected={bottomType === "pants"}
                      onClick={() => setBottomType("pants")}
                    >
                      Celana
                    </SelectionButton>
                    <SelectionButton
                      selected={bottomType === "skirt"}
                      onClick={() => setBottomType("skirt")}
                    >
                      Rok
                    </SelectionButton>
                  </div>
                </div>
              )}

              {/* Bottom Color Selection */}
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">
                  Warna{" "}
                  {product.gender === "Pria" ||
                  (product.gender === "Unisex" && bottomType === "pants")
                    ? "Celana"
                    : "Rok"}
                  :{" "}
                  <span className="font-normal text-primary">
                    {product.gender === "Pria" ||
                    (product.gender === "Unisex" && bottomType === "pants")
                      ? selectedPants.color
                      : selectedSkirt.color}
                  </span>
                </h3>
                <div className="flex flex-wrap gap-2">
                  {(product.gender === "Pria" ||
                  (product.gender === "Unisex" && bottomType === "pants")
                    ? PANTS
                    : SKIRT
                  ).map((item) => (
                    <SelectionButton
                      key={item.color}
                      selected={
                        product.gender === "Pria" ||
                        (product.gender === "Unisex" && bottomType === "pants")
                          ? selectedPants.color === item.color
                          : selectedSkirt.color === item.color
                      }
                      onClick={() =>
                        product.gender === "Pria" ||
                        (product.gender === "Unisex" && bottomType === "pants")
                          ? setSelectedPants(item)
                          : setSelectedSkirt(item)
                      }
                    >
                      {item.color}
                    </SelectionButton>
                  ))}
                </div>
              </div>

              {/* Material Selection */}
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Bahan</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2">
                  {MATERIALS.map((material) => (
                    <button
                      key={material.name}
                      onClick={() => setSelectedMaterial(material)}
                      className={`p-3 rounded-xl border-2 text-left transition-all ${
                        selectedMaterial.name === material.name
                          ? "border-primary bg-primary-50"
                          : "border-gray-200 hover:border-primary-300"
                      }`}
                    >
                      <p
                        className={`font-medium ${
                          selectedMaterial.name === material.name
                            ? "text-primary"
                            : "text-gray-900"
                        }`}
                      >
                        {material.name}
                      </p>
                      <p className="text-xs text-gray-500 mt-0.5">
                        {material.price > 0
                          ? `+Rp ${material.price.toLocaleString("id-ID")}`
                          : "Termasuk"}
                      </p>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="mt-8 pt-6 border-t border-gray-100">
              <OrderForm
                product={product}
                material={selectedMaterial.name}
                color={selectedColor}
                size={selectedSize}
                totalPrices={totalPrice}
              />
            </div>

            {/* Trust Badges */}
            <div className="mt-6 grid grid-cols-2 gap-4">
              <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl">
                <HiOutlineTruck className="text-2xl text-primary" />
                <div>
                  <p className="text-sm font-medium text-gray-900">
                    Pengiriman Aman
                  </p>
                  <p className="text-xs text-gray-500">Ke seluruh Indonesia</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl">
                <HiOutlineShieldCheck className="text-2xl text-primary" />
                <div>
                  <p className="text-sm font-medium text-gray-900">
                    Kualitas Terjamin
                  </p>
                  <p className="text-xs text-gray-500">Batik asli premium</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Product Description Section */}
        <div className="mt-12 lg:mt-16">
          <div className="bg-white rounded-2xl shadow-sm overflow-hidden relative">
            {/* Subtle ornament */}
            <BatikOrnament position="bottom-right" opacity={0.02} size="xl" />

            <div className="p-6 lg:p-10">
              <h2 className="text-xl lg:text-2xl font-bold text-gray-900 mb-6">
                Tentang Produk Ini
              </h2>

              <div className="prose prose-gray max-w-none">
                <div className="grid md:grid-cols-2 gap-8">
                  {/* Left - Description */}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">
                      Deskripsi
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      {product.name} adalah kreasi eksklusif dari pengrajin
                      batik kami dengan motif yang sarat akan makna budaya.
                      Dibuat dengan teknik tradisional dan bahan berkualitas
                      tinggi untuk memberikan kenyamanan sepanjang hari.
                    </p>
                    <p className="text-gray-600 leading-relaxed">
                      Setiap helai batik kami dibuat dengan ketelitian tinggi,
                      memadukan keindahan warisan nusantara dengan desain modern
                      yang cocok untuk berbagai kesempatan.
                    </p>
                  </div>

                  {/* Right - Specifications */}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">
                      Spesifikasi
                    </h3>
                    <div className="space-y-3">
                      <div className="flex justify-between py-2 border-b border-gray-100">
                        <span className="text-gray-600">Model</span>
                        <span className="font-medium text-gray-900">
                          {product.name}
                        </span>
                      </div>
                      <div className="flex justify-between py-2 border-b border-gray-100">
                        <span className="text-gray-600">Kategori</span>
                        <span className="font-medium text-gray-900">
                          {product.gender}
                        </span>
                      </div>
                      <div className="flex justify-between py-2 border-b border-gray-100">
                        <span className="text-gray-600">Bahan Dipilih</span>
                        <span className="font-medium text-gray-900">
                          {selectedMaterial.name}
                        </span>
                      </div>
                      <div className="flex justify-between py-2 border-b border-gray-100">
                        <span className="text-gray-600">Ukuran Tersedia</span>
                        <span className="font-medium text-gray-900">
                          S, M, L, XL
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Care Instructions */}
                <div className="mt-8 p-6 bg-primary-50 rounded-xl">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    Panduan Perawatan
                  </h3>
                  <ul className="grid sm:grid-cols-2 gap-3 text-gray-600">
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">✓</span>
                      <span>Cuci dengan tangan menggunakan air dingin</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">✓</span>
                      <span>Rendam maksimal 5-10 menit</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">✓</span>
                      <span>Jemur di tempat teduh, hindari sinar langsung</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">✓</span>
                      <span>Setrika dengan suhu rendah hingga sedang</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">✓</span>
                      <span>
                        Gunakan sabun khusus batik untuk hasil terbaik
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">✓</span>
                      <span>Hindari penggunaan mesin cuci</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductItemPage;
