"use client";

import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { fetchFeaturedProducts } from "@/lib/supabase";
import type { Product } from "@/types";
import Link from "next/link";

export default function FeaturedProducts() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const loadProducts = async () => {
      try {
        const data = await fetchFeaturedProducts();
        setProducts(data.slice(0, 3));
      } catch (err) {
        console.error("Failed to load featured products:", err);
        setProducts([]);
      } finally {
        setLoading(false);
      }
    };

    loadProducts();
  }, []);

  if (!mounted) return null;

  if (loading) {
    return (
      <section className="max-w-7xl mx-auto px-4 md:px-8 py-20">
        <div className="flex justify-center">
          <div className="animate-pulse text-slate-400">Loading featured products...</div>
        </div>
      </section>
    );
  }

  if (products.length === 0) {
    return null;
  }

  return (
    <section className="max-w-7xl mx-auto px-4 md:px-8 py-20 bg-white">
      <div className="flex items-center justify-between mb-12">
        <div>
          <h2 className="text-5xl font-bold text-slate-900 mb-3 tracking-tight">
            Featured Products
          </h2>
          <p className="text-xl text-slate-600">
            Hand-picked favorites for your furry friends
          </p>
        </div>
        <Link
          href="/products"
          className="hidden md:flex items-center gap-2 px-6 py-3 bg-slate-900 text-white rounded-xl font-semibold transition-all duration-300 hover:bg-slate-800 hover:scale-105 hover:shadow-xl group"
        >
          <span>View All</span>
          <span className="transform group-hover:translate-x-1 transition-transform duration-300">→</span>
        </Link>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product, index) => (
          <div
            key={product.id}
            className="animate-slideUp"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <ProductCard product={product} />
          </div>
        ))}
      </div>

      <div className="mt-12 text-center md:hidden">
        <Link
          href="/products"
          className="inline-flex items-center gap-2 px-6 py-3 bg-slate-900 text-white rounded-xl font-semibold transition-all duration-300 hover:bg-slate-800 hover:scale-105 hover:shadow-xl group"
        >
          <span>View All Products</span>
          <span className="transform group-hover:translate-x-1 transition-transform duration-300">→</span>
        </Link>
      </div>
    </section>
  );
}
