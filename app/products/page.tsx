"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import ProductGrid from "@/components/ProductGrid";
import { fetchProducts } from "@/lib/supabase";
import type { Product } from "@/types";

export default function ProductsPage() {
  const searchParams = useSearchParams();
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const categoryFilter = searchParams.get("category");

  useEffect(() => {
    setMounted(true);
    const loadProducts = async () => {
      try {
        const data = await fetchProducts();
        setProducts(data);
        setFilteredProducts(data);
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

  useEffect(() => {
    let filtered = products;

    // Filter by category
    if (categoryFilter) {
      filtered = filtered.filter(
        (product) =>
          product.category.toLowerCase() === categoryFilter.toLowerCase()
      );
    }

    // Filter by search query
    if (searchQuery) {
      filtered = filtered.filter(
        (product) =>
          product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          product.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    setFilteredProducts(filtered);
  }, [categoryFilter, searchQuery, products]);

  if (!mounted) {
    return null;
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-20">
        <div className="mb-16 animate-slideUp">
          <h1 className="text-6xl font-bold text-slate-900 mb-4 tracking-tight">
            {categoryFilter
              ? `${categoryFilter.charAt(0).toUpperCase() + categoryFilter.slice(1)} Products`
              : "Our Products"}
          </h1>
          <p className="text-xl text-slate-600 mb-8">
            Discover our carefully selected range of pet food, toys, and accessories.
          </p>

          {/* Search Bar */}
          <div className="max-w-2xl">
            <div className="relative">
              <input
                type="text"
                placeholder="Search for products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-6 py-4 pl-14 rounded-2xl border-2 border-slate-200 focus:outline-none focus:border-slate-900 transition-all duration-300 text-lg bg-white shadow-sm"
              />
              <span className="absolute left-5 top-1/2 -translate-y-1/2 text-2xl">
                🔍
              </span>
            </div>
          </div>
        </div>

        {loading && (
          <div className="text-center py-20">
            <div className="inline-block animate-pulse text-slate-400 text-lg">
              Loading products...
            </div>
          </div>
        )}

        {error && (
          <div className="bg-red-50 border-2 border-red-200 rounded-2xl p-6 mb-8 animate-slideUp">
            <p className="text-red-700 text-lg">Error: {error}</p>
          </div>
        )}

        {!loading && !error && (
          <>
            {filteredProducts.length === 0 ? (
              <div className="text-center py-20">
                <div className="text-6xl mb-6">🔍</div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">No products found</h3>
                <p className="text-slate-600">Try adjusting your search or filters</p>
              </div>
            ) : (
              <ProductGrid products={filteredProducts} />
            )}
          </>
        )}
      </div>
    </div>
  );
}
