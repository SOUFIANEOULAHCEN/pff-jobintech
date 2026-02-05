import { Star } from "lucide-react";
import { Card } from "@/components/ui/card";
import type { Product } from "@/data/product-data";
import Link from "next/link";

interface RelatedProductsProps {
  products: Product[];
  currentCategory: string;
}

export function RelatedProducts({ products, currentCategory }: RelatedProductsProps) {
  if (products.length === 0) return null;

  return (
    <section className="border-t border-border pt-8">
      <h2 className="text-2xl font-serif font-medium mb-6 capitalize">
        More in {currentCategory}
      </h2>

      <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
        {products.map((product) => (
          <Link key={product.id} href={`/product/${product.id}`}>
            <Card className="group overflow-hidden border border-border bg-card transition-shadow hover:shadow-md">
              <div className="aspect-square overflow-hidden bg-secondary">
                <img
                  src={product.coverImage}
                  alt={product.title}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              <div className="p-4">
                <h3 className="font-medium text-sm line-clamp-2 mb-2 group-hover:underline">
                  {product.title}
                </h3>
                <div className="flex items-center justify-between">
                  <span className="font-semibold">${product.price.toFixed(2)}</span>
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <Star className="h-3.5 w-3.5 fill-foreground text-foreground" />
                    <span>4.5</span>
                  </div>
                </div>
              </div>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  );
}
