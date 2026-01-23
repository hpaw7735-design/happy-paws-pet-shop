"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { fetchCategories } from "@/lib/supabase";

interface Category {
  id: string;
  name: string;
  description?: string;
  emoji?: string;
}

export default function Categories() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadCategories = async () => {
      try {
        const data = await fetchCategories();
        setCategories(data);
      } catch (err) {
        console.error("Error loading categories:", err);
      } finally {
        setLoading(false);
      }
    };

    loadCategories();
  }, []);

  if (loading) {
    return (
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex justify-center">
            <div className="animate-pulse text-slate-400">Loading categories...</div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-slate-900 mb-4 tracking-tight">
            Shop by Category
          </h2>
          <p className="text-xl text-slate-600">
            Find exactly what your pet needs
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <Link
              key={category.id}
              href={`/products?category=${category.name.toLowerCase()}`}
              className="group bg-white rounded-3xl p-10 text-center transition-all duration-500 hover:shadow-2xl hover:-translate-y-4 border border-slate-100 animate-slideUp"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {category.emoji && (
                <div className="text-7xl mb-6 transform transition-all duration-500 group-hover:scale-125 group-hover:rotate-12">
                  {category.emoji}
                </div>
              )}
              <h3 className="text-2xl font-bold mb-3 text-slate-900 tracking-tight">
                {category.name}
              </h3>
              {category.description && (
                <p className="text-slate-600 leading-relaxed">
                  {category.description}
                </p>
              )}
              <div className="mt-6 inline-flex items-center text-slate-900 font-semibold group-hover:gap-3 gap-2 transition-all duration-300">
                <span>Explore</span>
                <span className="transform group-hover:translate-x-1 transition-transform duration-300">→</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
