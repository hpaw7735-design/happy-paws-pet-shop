"use client";

import { useState } from "react";
import ProductsTab from "./ProductsTab";
import CategoriesTab from "./CategoriesTab";
import AnalyticsTab from "./AnalyticsTab";

type Tab = "products" | "categories" | "analytics";

export default function AdminPage() {
  const [activeTab, setActiveTab] = useState<Tab>("products");

  const tabs = [
    { id: "products" as Tab, label: "Products", icon: "📦" },
    { id: "categories" as Tab, label: "Categories", icon: "🏷️" },
    { id: "analytics" as Tab, label: "Analytics", icon: "📊" },
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-8">
          <h1 className="text-4xl font-bold text-slate-900 mb-2 tracking-tight">Admin Panel</h1>
          <p className="text-slate-600">Manage your products, categories, and view analytics</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8">
        {/* Tabs */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-2 mb-8 inline-flex gap-2">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center gap-2 ${
                activeTab === tab.id
                  ? "bg-slate-900 text-white shadow-lg scale-105"
                  : "text-slate-600 hover:bg-slate-50"
              }`}
            >
              <span className="text-xl">{tab.icon}</span>
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="animate-fadeIn">
          {activeTab === "products" && <ProductsTab />}
          {activeTab === "categories" && <CategoriesTab />}
          {activeTab === "analytics" && <AnalyticsTab />}
        </div>
      </div>
    </div>
  );
}
