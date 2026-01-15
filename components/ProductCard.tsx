import type { Product } from "@/types";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="card flex flex-col h-full">
      <div className="bg-accent rounded mb-md h-48 flex items-center justify-center">
        <span className="text-6xl">{product.emoji || "📦"}</span>
      </div>

      <h3 className="heading-3 mb-sm flex-grow">{product.name}</h3>

      <p className="text-body text-opacity-75 mb-md">{product.description}</p>

      <div className="flex items-center justify-between mt-auto">
        <span className="text-lg font-bold text-primary">
          €{product.price.toFixed(2)}
        </span>
        <button className="btn-primary text-sm py-xs px-md">Add to Cart</button>
      </div>
    </div>
  );
}
