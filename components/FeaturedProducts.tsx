"use client";

import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { fetchFeaturedProducts } from "@/lib/supabase";
import type { Product } from "@/types";

export default function FeaturedProducts() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const data = await fetchFeaturedProducts();
        setProducts(data.slice(0, 3));
      } catch (err) {
        console.error("Failed to load featured products:", err);
      } finally {
        setLoading(false);
      }
    };

    loadProducts();
  }, []);

  if (loading) {
    return (
      <section className="section-container py-xl md:py-2xl">
        <p className="text-center text-body">Loading featured products...</p>
      </section>
    );
  }

  if (products.length === 0) {
    return null;
  }

  return (
    <section className="section-container py-xl md:py-2xl bg-secondary rounded-lg">
      <h2 className="heading-2 mb-lg text-center animate-slideUp">
        Featured Products
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-lg">
        {products.map((product, index) => (
          <div
            key={product.id}
            className="animate-slideUp"
            style={{ animationDelay: `${(index + 1) * 0.1}s` }}
          >
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </section>
  );
}
