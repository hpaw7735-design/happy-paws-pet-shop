import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export async function PUT(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const body = await request.json();
    const { name, description, emoji } = body;

    console.log("PUT /api/admin/categories/[id]:", { id, body });

    const { data, error } = await supabase
      .from("categories")
      .update({
        name,
        description,
        emoji,
      })
      .eq("id", id)
      .select();

    if (error) {
      console.error("Supabase error:", error);
      throw error;
    }

    console.log("Update successful:", data);
    return NextResponse.json(data[0]);
  } catch (error: any) {
    console.error("Error updating category:", error);
    return NextResponse.json(
      { error: error?.message || "Failed to update category" },
      { status: 500 }
    );
  }
}

export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    console.log("DELETE /api/admin/categories/[id]:", { id });

    const { error } = await supabase
      .from("categories")
      .delete()
      .eq("id", id);

    if (error) {
      console.error("Supabase error:", error);
      throw error;
    }

    console.log("Delete successful");
    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error("Error deleting category:", error);
    return NextResponse.json(
      { error: error?.message || "Failed to delete category" },
      { status: 500 }
    );
  }
}
