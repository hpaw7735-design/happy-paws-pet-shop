"use client";

import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { useState, useEffect } from "react";

export default function Header() {
  const { cartCount } = useCart();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/80 backdrop-blur-xl shadow-lg"
          : "bg-white"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-12 h-12 bg-slate-900 rounded-2xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
              <span className="text-2xl">🐾</span>
            </div>
            <span className="font-bold text-xl text-slate-900 hidden sm:inline tracking-tight">
              Happy Paws
            </span>
          </Link>

          <nav className="flex items-center gap-8">
            <Link
              href="/"
              className="text-slate-700 hover:text-slate-900 transition-all duration-300 font-medium relative group"
            >
              Home
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-slate-900 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              href="/products"
              className="text-slate-700 hover:text-slate-900 transition-all duration-300 font-medium relative group"
            >
              Products
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-slate-900 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              href="/admin"
              className="text-slate-700 hover:text-slate-900 transition-all duration-300 font-medium relative group hidden md:block"
            >
              Admin
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-slate-900 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <a
              href="#contact"
              className="text-slate-700 hover:text-slate-900 transition-all duration-300 font-medium relative group"
            >
              Contact
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-slate-900 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <Link
              href="/checkout"
              className="relative group"
            >
              <div className="w-11 h-11 rounded-xl bg-slate-100 flex items-center justify-center transition-all duration-300 group-hover:bg-slate-900 group-hover:scale-110">
                <span className="text-xl group-hover:scale-110 transition-transform duration-300">🛒</span>
              </div>
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center animate-scaleIn shadow-lg">
                  {cartCount}
                </span>
              )}
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
