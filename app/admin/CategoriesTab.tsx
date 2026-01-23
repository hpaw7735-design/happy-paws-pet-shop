"use client";

import { useState, useEffect } from "react";

interface Category {
  id: string;
  name: string;
  description?: string;
  emoji?: string;
}

export default function CategoriesTab() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editingCategory, setEditingCategory] = useState<Category | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    emoji: "",
  });

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const res = await fetch("/api/admin/categories");
      const data = await res.json();
      setCategories(data);
    } catch (error) {
      console.error("Error fetching categories:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const url = editingCategory
      ? `/api/admin/categories/${editingCategory.id}`
      : "/api/admin/categories";
    const method = editingCategory ? "PUT" : "POST";

    console.log("Submitting:", { url, method, formData });

    try {
      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      console.log("Response:", { status: res.status, data });

      if (res.ok) {
        fetchCategories();
        resetForm();
        alert("Category saved successfully!");
      } else {
        alert(`Error: ${data.error || "Failed to save category"}`);
      }
    } catch (error) {
      console.error("Error saving category:", error);
      alert("Network error. Check console for details.");
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this category?")) return;

    console.log("Deleting category:", id);

    try {
      const res = await fetch(`/api/admin/categories/${id}`, {
        method: "DELETE",
      });

      const data = await res.json();
      console.log("Delete response:", { status: res.status, data });

      if (res.ok) {
        fetchCategories();
        alert("Category deleted successfully!");
      } else {
        alert(`Error: ${data.error || "Failed to delete category"}`);
      }
    } catch (error) {
      console.error("Error deleting category:", error);
      alert("Network error. Check console for details.");
    }
  };

  const handleEdit = (category: Category) => {
    setEditingCategory(category);
    setFormData({
      name: category.name,
      description: category.description || "",
      emoji: category.emoji || "",
    });
    setShowForm(true);
  };

  const resetForm = () => {
    setFormData({
      name: "",
      description: "",
      emoji: "",
    });
    setEditingCategory(null);
    setShowForm(false);
  };

  if (loading) return <div className="text-center py-12 text-slate-600">Loading...</div>;

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <div>
          <h2 className="text-3xl font-bold text-slate-900 tracking-tight">Categories</h2>
          <p className="text-slate-600 mt-1">{categories.length} total categories</p>
        </div>
        <button
          onClick={() => setShowForm(!showForm)}
          className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
            showForm
              ? "bg-slate-200 text-slate-700 hover:bg-slate-300"
              : "bg-slate-900 text-white hover:bg-slate-800 hover:scale-105 shadow-lg"
          }`}
        >
          {showForm ? "✕ Cancel" : "+ Add Category"}
        </button>
      </div>

      {showForm && (
        <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-lg border border-slate-200 p-8 mb-8 animate-slideUp">
          <h3 className="text-2xl font-bold text-slate-900 mb-6 tracking-tight">
            {editingCategory ? "Edit Category" : "Add New Category"}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">Category Name</label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full border-2 border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:border-slate-900 transition-colors duration-300"
                placeholder="Dog Food"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">Emoji</label>
              <input
                type="text"
                value={formData.emoji}
                onChange={(e) => setFormData({ ...formData, emoji: e.target.value })}
                className="w-full border-2 border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:border-slate-900 transition-colors duration-300"
                placeholder="🐶"
              />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-semibold text-slate-700 mb-2">Description</label>
              <textarea
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                className="w-full border-2 border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:border-slate-900 transition-colors duration-300"
                rows={3}
                placeholder="Describe the category..."
              />
            </div>
          </div>
          <div className="flex gap-3 mt-8">
            <button
              type="submit"
              className="px-6 py-3 bg-slate-900 text-white rounded-xl font-semibold hover:bg-slate-800 transition-all duration-300 hover:scale-105"
            >
              {editingCategory ? "Update Category" : "Create Category"}
            </button>
            <button
              type="button"
              onClick={resetForm}
              className="px-6 py-3 bg-slate-100 text-slate-700 rounded-xl font-semibold hover:bg-slate-200 transition-all duration-300"
            >
              Cancel
            </button>
          </div>
        </form>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((category, index) => (
          <div
            key={category.id}
            className="bg-white rounded-2xl shadow-lg border border-slate-200 p-8 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 animate-slideUp"
            style={{ animationDelay: `${index * 0.05}s` }}
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-4">
                <span className="text-5xl">{category.emoji}</span>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 tracking-tight">
                    {category.name}
                  </h3>
                  {category.description && (
                    <p className="text-sm text-slate-600 mt-1">
                      {category.description}
                    </p>
                  )}
                </div>
              </div>
            </div>
            <div className="flex gap-3 mt-6 pt-6 border-t border-slate-100">
              <button
                onClick={() => handleEdit(category)}
                className="flex-1 px-4 py-2 text-slate-700 bg-slate-100 rounded-xl font-semibold hover:bg-slate-200 transition-all duration-300"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(category.id)}
                className="flex-1 px-4 py-2 text-red-600 bg-red-50 rounded-xl font-semibold hover:bg-red-100 transition-all duration-300"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
