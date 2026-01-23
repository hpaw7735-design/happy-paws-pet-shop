"use client";

import { useState, useEffect } from "react";

interface Analytics {
  totalProducts: number;
  totalCategories: number;
  featuredProducts: number;
  productsByCategory: { category: string; count: number }[];
  averagePrice: number;
  priceRange: { min: number; max: number };
}

export default function AnalyticsTab() {
  const [analytics, setAnalytics] = useState<Analytics | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchAnalytics();
  }, []);

  const fetchAnalytics = async () => {
    try {
      const res = await fetch("/api/admin/analytics");
      const data = await res.json();
      setAnalytics(data);
    } catch (error) {
      console.error("Error fetching analytics:", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <div className="text-center py-12 text-slate-600">Loading...</div>;
  if (!analytics) return <div className="text-center py-12 text-slate-600">No data available</div>;

  const stats = [
    { label: "Total Products", value: analytics.totalProducts, icon: "📦", color: "bg-blue-500" },
    { label: "Categories", value: analytics.totalCategories, icon: "🏷️", color: "bg-purple-500" },
    { label: "Featured", value: analytics.featuredProducts, icon: "⭐", color: "bg-amber-500" },
    { label: "Avg Price", value: `€${analytics.averagePrice.toFixed(2)}`, icon: "💰", color: "bg-green-500" },
  ];

  return (
    <div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-slate-900 tracking-tight mb-2">Analytics</h2>
        <p className="text-slate-600">Overview of your store performance</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <div
            key={stat.label}
            className="bg-white rounded-2xl shadow-lg border border-slate-200 p-6 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 animate-slideUp"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="flex items-center justify-between mb-4">
              <div className={`w-12 h-12 ${stat.color} rounded-xl flex items-center justify-center text-2xl shadow-lg`}>
                {stat.icon}
              </div>
            </div>
            <div className="text-sm font-semibold text-slate-500 mb-1">
              {stat.label}
            </div>
            <div className="text-3xl font-bold text-slate-900">
              {stat.value}
            </div>
          </div>
        ))}
      </div>

      {/* Price Range */}
      <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-8 mb-8 animate-slideUp" style={{ animationDelay: "0.4s" }}>
        <h3 className="text-xl font-bold text-slate-900 mb-6 tracking-tight">Price Range</h3>
        <div className="flex justify-between items-center">
          <div className="text-center">
            <div className="text-sm text-slate-500 mb-2">Minimum</div>
            <div className="text-4xl font-bold text-slate-900">
              €{analytics.priceRange.min.toFixed(2)}
            </div>
          </div>
          <div className="text-4xl text-slate-300">—</div>
          <div className="text-center">
            <div className="text-sm text-slate-500 mb-2">Maximum</div>
            <div className="text-4xl font-bold text-slate-900">
              €{analytics.priceRange.max.toFixed(2)}
            </div>
          </div>
        </div>
      </div>

      {/* Products by Category */}
      <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-8 animate-slideUp" style={{ animationDelay: "0.5s" }}>
        <h3 className="text-xl font-bold text-slate-900 mb-6 tracking-tight">Products by Category</h3>
        <div className="space-y-6">
          {analytics.productsByCategory.map((item, index) => (
            <div key={item.category} className="animate-slideInLeft" style={{ animationDelay: `${(index + 6) * 0.1}s` }}>
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-semibold text-slate-700">
                  {item.category}
                </span>
                <span className="text-sm font-bold text-slate-900 bg-slate-100 px-3 py-1 rounded-full">
                  {item.count} products
                </span>
              </div>
              <div className="w-full bg-slate-100 rounded-full h-3 overflow-hidden">
                <div
                  className="bg-slate-900 h-3 rounded-full transition-all duration-1000 ease-out"
                  style={{
                    width: `${(item.count / analytics.totalProducts) * 100}%`,
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
