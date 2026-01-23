import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export async function GET() {
  try {
    // Fetch all products
    const { data: products, error: productsError } = await supabase
      .from("products")
      .select("*");

    if (productsError) throw productsError;

    // Fetch all categories
    const { data: categories, error: categoriesError } = await supabase
      .from("categories")
      .select("*");

    if (categoriesError) throw categoriesError;

    // Calculate analytics
    const totalProducts = products?.length || 0;
    const totalCategories = categories?.length || 0;
    const featuredProducts =
      products?.filter((p) => p.featured).length || 0;

    // Products by category
    const productsByCategory = products?.reduce((acc: any[], product) => {
      const existing = acc.find((item) => item.category === product.category);
      if (existing) {
        existing.count++;
      } else {
        acc.push({ category: product.category, count: 1 });
      }
      return acc;
    }, []) || [];

    // Price analytics
    const prices = products?.map((p) => p.price) || [];
    const averagePrice =
      prices.length > 0
        ? prices.reduce((sum, price) => sum + price, 0) / prices.length
        : 0;
    const priceRange = {
      min: prices.length > 0 ? Math.min(...prices) : 0,
      max: prices.length > 0 ? Math.max(...prices) : 0,
    };

    return NextResponse.json({
      totalProducts,
      totalCategories,
      featuredProducts,
      productsByCategory,
      averagePrice,
      priceRange,
    });
  } catch (error) {
    console.error("Error fetching analytics:", error);
    return NextResponse.json(
      { error: "Failed to fetch analytics" },
      { status: 500 }
    );
  }
}
