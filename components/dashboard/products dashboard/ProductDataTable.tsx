"use client";

interface Product {
  title: string;
  category: string;
  basePrice: number;
  finalPrice: number;
  discount: number;
  coverImage: string;
}

interface ProductsTableProps {
  products: Product[];
}

export function ProductDataTable({ products }: ProductsTableProps) {
  return (
    <div className="w-full overflow-x-auto rounded-lg border border-border/50 bg-card shadow-xl">
      <table className="w-full">
        <thead>
          <tr className="border-b border-border/50 bg-accent/5">
            <th className="px-6 py-4 text-left text-sm font-semibold text-foreground/70">Image</th>
            <th className="px-6 py-4 text-left text-sm font-semibold text-foreground/70">Title</th>
            <th className="px-6 py-4 text-left text-sm font-semibold text-foreground/70">Category</th>
            <th className="px-6 py-4 text-left text-sm font-semibold text-foreground/70">Base Price</th>
            <th className="px-6 py-4 text-left text-sm font-semibold text-foreground/70">Final Price</th>
            <th className="px-6 py-4 text-left text-sm font-semibold text-foreground/70">Discount</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr
              key={index}
              className="border-b border-border/30 transition-colors hover:bg-accent/5"
            >
              <td className="px-6 py-4">
                <img
                  src={product.coverImage || "/placeholder.svg"}
                  alt={product.title}
                  className="h-12 w-12 rounded-lg object-cover shadow-md"
                  crossOrigin="anonymous"
                />
              </td>
              <td className="px-6 py-4 font-medium text-foreground">{product.title}</td>
              <td className="px-6 py-4 text-sm text-foreground/70">{product.category}</td>
              <td className="px-6 py-4 text-sm text-foreground/60">
                <span className="line-through">${product.basePrice.toFixed(2)}</span>
              </td>
              <td className="px-6 py-4 font-semibold text-primary">
                ${product.finalPrice.toFixed(2)}
              </td>
              <td className="px-6 py-4">
                <span className="inline-flex items-center gap-2 rounded-full bg-accent/20 px-3 py-1 text-sm font-medium text-accent">
                  {product.discount}%
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
