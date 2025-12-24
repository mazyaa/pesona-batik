"use client";

import { Product } from "@/types/product";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Input,
} from "@heroui/react";
import Link from "next/link";
import { useEffect, useState } from "react";

interface OrderFormProps {
  product: Product;
  material: string;
  color: string;
  size: string;
  totalPrices: number;
}

export default function OrderForm({
  product,
  material,
  color,
  size,
  totalPrices,
}: OrderFormProps) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const [quantity, setQuantity] = useState(1);
  const [totalPrice, setTotalPrice] = useState(totalPrices);
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");

  const handleQuantityChange = (value: number) => {
    if (value < 1) return;
    setQuantity(value);
    setTotalPrice(totalPrices * value);
  };

  useEffect(() => {
    setTotalPrice(totalPrices);
  }, [totalPrices]);

  const generateWhatsAppLink = () => {
    const orderId = "ORD" + Math.floor(Math.random() * 1000000);
    const productPrice = `Rp ${totalPrice.toLocaleString("id-ID")}`;

    const message = `
Halo, saya ingin memesan produk:

Nomor Pemesanan: ${orderId}
Nama: ${name}
Alamat: ${address}
No. HP: ${phone}

Produk: ${product.name}
Bahan: ${material}
Warna: ${color}
Ukuran: ${size}
Jumlah: ${quantity}
Harga: ${productPrice}

Apakah produk ini tersedia?
    `;

    return `https://api.whatsapp.com/send/?phone=6281314574274&text=${encodeURIComponent(
      message
    )}`;
  };

  return (
    <div>
      <Button color="primary" onPress={onOpen}>
        Beli Sekarang
      </Button>

      <Modal
        isOpen={isOpen}
        placement="center"
        onOpenChange={onOpenChange}
        scrollBehavior="inside"
        classNames={{
          wrapper: "z-[99999]",
          backdrop: "z-[99998]",
        }}
      >
        <ModalContent className="max-h-[90vh] bg-white mx-4 rounded-xl">
          {(onClose) => (
            <>
              <ModalHeader className="text-lg sm:text-xl font-semibold">
                Form Pemesanan
              </ModalHeader>

              <ModalBody className="gap-4">
                <Input
                  label="Nama Lengkap"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  variant="bordered"
                  placeholder="Masukkan nama lengkap Anda"
                  size="sm"
                  isRequired
                />

                {/* Alamat */}
                <Input
                  label="Alamat Lengkap"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  variant="bordered"
                  placeholder="Masukkan alamat lengkap Anda"
                  size="sm"
                  isRequired
                />

                {/* Telepon */}
                <Input
                  label="Nomor Telepon"
                  type="tel"
                  placeholder="Masukkan nomor telepon Anda"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  variant="bordered"
                  size="sm"
                  isRequired
                />

                {/* Jumlah */}
                <Input
                  label="Jumlah Produk"
                  type="number"
                  min={1}
                  value={quantity.toString()}
                  onChange={(e) =>
                    handleQuantityChange(
                      parseInt(e.target.value, 10) || 1
                    )
                  }
                  variant="bordered"
                  size="sm"
                />

                {/* Keterangan */}
                <div className="mt-2">
                  <h3 className="text-base font-semibold mb-2">
                    Keterangan Pesanan
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
                    <p>
                      <span className="font-medium">Produk:</span>{" "}
                      {product.name}
                    </p>
                    <p>
                      <span className="font-medium">Bahan:</span> {material}
                    </p>
                    <p>
                      <span className="font-medium">Warna:</span> {color}
                    </p>
                    <p>
                      <span className="font-medium">Ukuran:</span> {size}
                    </p>
                  </div>
                </div>

                {/* Total */}
                <div className="p-3 bg-primary-50 rounded-lg">
                  <p className="text-base sm:text-lg font-semibold text-primary">
                    Total: Rp {totalPrice.toLocaleString("id-ID")}
                  </p>
                </div>
              </ModalBody>

              <ModalFooter className="gap-2">
                <Button
                  color="danger"
                  variant="flat"
                  onPress={onClose}
                  size="sm"
                >
                  Batal
                </Button>

                <Link href={generateWhatsAppLink()} target="_blank">
                  <Button color="primary" size="sm">
                    Pesan Sekarang
                  </Button>
                </Link>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
}
