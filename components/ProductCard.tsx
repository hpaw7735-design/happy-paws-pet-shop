"use client";

import { useCart } from "@/context/CartContext";
import type { Product } from "@/types";
import { useState } from "react";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();
  const [isAdding, setIsAdding] = useState(false);

  const handleAddToCart = () => {
    setIsAdding(true);
    addToCart(product);
    setTimeout(() => setIsAdding(false), 600);
  };

  return (
    <div className="group bg-white rounded-3xl overflow-hidden border border-slate-100 transition-all duration-500 hover:shadow-2xl hover:-translate-y-3 flex flex-col h-full">
      <div className="relative bg-gradient-to-br from-slate-50 to-slate-100 h-64 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-slate-200 opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
        <span className="text-8xl transform transition-all duration-500 group-hover:scale-125 group-hover:rotate-12">
          {product.emoji || "📦"}
        </span>
        {product.featured && (
          <div className="absolute top-4 right-4 bg-amber-400 text-slate-900 px-4 py-1.5 rounded-full text-xs font-bold tracking-wide shadow-lg">
            ⭐ FEATURED
          </div>
        )}
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <div className="mb-3">
          <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
            {product.category}
          </span>
        </div>
        
        <h3 className="text-2xl font-bold text-slate-900 mb-3 tracking-tight">
          {product.name}
        </h3>

        <p className="text-slate-600 mb-6 leading-relaxed flex-grow line-clamp-2">
          {product.description}
        </p>

        <div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-100">
          <div>
            <div className="text-xs text-slate-500 mb-1">Price</div>
            <span className="text-3xl font-bold text-slate-900">
              €{product.price.toFixed(2)}
            </span>
          </div>
          <button
            onClick={handleAddToCart}
            disabled={isAdding}
            className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
              isAdding
                ? "bg-green-500 text-white scale-95"
                : "bg-slate-900 text-white hover:bg-slate-800 hover:scale-105 hover:shadow-xl"
            } active:scale-95`}
          >
            {isAdding ? "✓ Added!" : "Add to Cart"}
          </button>
        </div>
      </div>
    </div>
  );
}
