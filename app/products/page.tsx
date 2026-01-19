"use client";

import { useEffect, useState } from "react";
import ProductGrid from "@/components/ProductGrid";
import { fetchProducts } from "@/lib/supabase";
import type { Product } from "@/types";

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const loadProducts = async () => {
      try {
        const data = await fetchProducts();
        setProducts(data);
      } catch (err) {
        setError(
          err instanceof Error ? err.message : "Failed to load products"
        );
      } finally {
        setLoading(false);
      }
    };

    loadProducts();
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="section-container animate-fadeIn">
      <div className="mb-2xl">
        <h1 className="heading-1 mb-md">Our Products</h1>
        <p className="text-body text-opacity-75">
          Discover our carefully selected range of pet food, toys, and
          accessories.
        </p>
      </div>

      {loading && (
        <div className="text-center py-2xl">
          <p className="text-body">Loading products...</p>
        </div>
      )}

      {error && (
        <div className="bg-red-50 border border-red-200 rounded p-lg mb-lg">
          <p className="text-red-700">Error: {error}</p>
        </div>
      )}

      {!loading && !error && <ProductGrid products={products} />}
    </div>
  );
}
