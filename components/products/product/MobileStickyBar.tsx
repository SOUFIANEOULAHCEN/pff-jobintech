import { Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { Product } from "@/data/product-data";

interface MobileStickyBarProps {
  product: Product;
}

export function MobileStickyBar({ product }: MobileStickyBarProps) {
  const discountedPrice = product.discount 
    ? product.price * (1 - product.discount / 100) 
    : product.price;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-border bg-background p-4 md:hidden">
      <div className="flex items-center gap-3">
        <div className="flex-1">
          <span className="text-xl font-semibold">${discountedPrice.toFixed(2)}</span>
          {product.discount && (
            <span className="ml-2 text-sm text-muted-foreground line-through">
              ${product.price.toFixed(2)}
            </span>
          )}
        </div>
        <Button variant="outline" size="icon" className="flex-shrink-0">
          <Heart className="h-4 w-4" />
        </Button>
        <Button size="lg" className="flex-1">
          Add to Cart
        </Button>
      </div>
    </div>
  );
}
