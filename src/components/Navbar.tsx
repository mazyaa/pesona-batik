"use client";

import React, { useState, useEffect } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarMenuToggle,
  NavbarMenuItem,
  NavbarMenu,
  NavbarContent,
  NavbarItem,
} from "@heroui/react";

// Updated icons - more suitable for fashion/cultural platform
import { HiOutlineHome, HiOutlineUserGroup, HiOutlineChatBubbleLeftRight } from "react-icons/hi2";
import { GiClothes } from "react-icons/gi";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const currentPath = usePathname();

  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [currentPath]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const menuItems = [
    { name: "Beranda", href: "/", icon: HiOutlineHome },
    { name: "Koleksi", href: "/products", icon: GiClothes },
    { name: "Tentang Kami", href: "/about", icon: HiOutlineUserGroup },
    { name: "Kontak", href: "/contact", icon: HiOutlineChatBubbleLeftRight },
  ];

  const handleMenuItemClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <Navbar
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      shouldHideOnScroll
      isBordered
      maxWidth="full"
      className="z-[100] bg-white/95 backdrop-blur-md shadow-sm fixed top-0 left-0 right-0"
      classNames={{
        wrapper: "px-4 sm:px-6 md:px-16",
        menuItem: "py-3",
      }}
    >
      {/* Logo dan Menu Toggle */}
      <NavbarContent className="gap-4">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden h-10 w-10 flex items-center justify-center rounded-lg hover:bg-gray-100 active:bg-gray-200 transition-colors touch-manipulation"
        />
        <NavbarBrand className="grow-0">
          <Link href="/" className="inline-flex items-center gap-2" onClick={handleMenuItemClick}>
            <Image src="/img/logo-tp.png" alt="logo" width={44} height={36} className="w-10 h-auto sm:w-11" />
            <div className="flex flex-col">
              <p className="text-lg sm:text-xl font-bold tracking-tight leading-none">
                <span className="text-secondary">PESONA</span>{" "}
                <span className="text-primary-800">BATIK</span>
              </p>
              <span className="text-[9px] sm:text-[10px] text-primary-400 tracking-widest">
                WARISAN NUSANTARA
              </span>
            </div>
          </Link>
        </NavbarBrand>
      </NavbarContent>

      {/* Menu Utama untuk Desktop */}
      <NavbarContent
        className="hidden gap-8 lg:flex"
        justify="center"
      >
        {menuItems.map((item, index) => (
          <NavbarItem key={index}>
            <Link
              href={item.href}
              className={`flex items-center gap-2 font-medium transition-colors duration-300 ${
                currentPath === item.href
                  ? "text-primary"
                  : "text-gray-600 hover:text-primary"
              }`}
            >
              <item.icon className="text-lg" />
              {item.name}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      {/* CTA Button */}
      <NavbarContent justify="end" className="hidden sm:flex">
        <NavbarItem className="flex items-center gap-3">
          <Link href="/contact">
            <button className="px-5 py-2.5 bg-primary text-white text-sm font-medium rounded-lg hover:bg-primary-600 transition-all duration-300 shadow-sm hover:shadow-md active:scale-95">
              Pesan Sekarang
            </button>
          </Link>
        </NavbarItem>
      </NavbarContent>

      {/* Menu untuk Mobile - Fixed overlay and interaction */}
      <NavbarMenu className="pt-6 pb-8 bg-white/98 backdrop-blur-lg z-[99] top-[64px] max-h-[calc(100vh-64px)] overflow-y-auto">
        <div className="flex flex-col gap-2">
          {menuItems.map((item, index) => (
            <NavbarMenuItem key={index}>
              <Link
                href={item.href}
                onClick={handleMenuItemClick}
                className={`flex items-center gap-4 px-4 py-4 text-lg font-medium rounded-xl transition-all duration-200 touch-manipulation ${
                  currentPath === item.href
                    ? "text-primary bg-primary-50"
                    : "text-gray-700 hover:text-primary hover:bg-gray-50 active:bg-gray-100"
                }`}
              >
                <item.icon className="text-2xl flex-shrink-0" />
                <span>{item.name}</span>
              </Link>
            </NavbarMenuItem>
          ))}
        </div>
        
        {/* Mobile CTA */}
        <div className="mt-6 px-4">
          <Link href="/contact" onClick={handleMenuItemClick} className="block">
            <button className="w-full px-6 py-4 bg-primary text-white font-semibold text-base rounded-xl hover:bg-primary-600 active:bg-primary-700 transition-all duration-300 shadow-md touch-manipulation">
              Pesan Sekarang
            </button>
          </Link>
        </div>

        {/* Mobile contact info */}
        <div className="mt-8 px-4 pt-6 border-t border-gray-100">
          <p className="text-sm text-gray-500 mb-2">Butuh bantuan?</p>
          <a 
            href="tel:+6287885793483" 
            className="text-primary font-medium hover:underline touch-manipulation"
          >
            +62 878 8579 3483
          </a>
        </div>
      </NavbarMenu>
    </Navbar>
  );
};

export default Header;