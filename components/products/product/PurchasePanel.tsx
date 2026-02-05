import { Heart, Download, Shield, Infinity } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { StarRating } from "./StarRating";
import type { Product } from "@/data/product-data";

interface PurchasePanelProps {
  product: Product;
  onScrollToReviews: () => void;
}

export function PurchasePanel({ product, onScrollToReviews }: PurchasePanelProps) {
  const discountedPrice = product.discount 
    ? product.price * (1 - product.discount / 100) 
    : product.price;

  return (
    <div className="flex flex-col gap-6">
      {/* Title */}
      <h1 className="font-serif text-3xl font-medium leading-tight md:text-4xl">
        {product.title}
      </h1>

      {/* Description */}
      <p className="text-muted-foreground">{product.description}</p>

      {/* Rating & Reviews */}
      <button 
        onClick={onScrollToReviews}
        className="flex items-center gap-2 self-start hover:opacity-80 transition-opacity"
      >
        <StarRating rating={4.5} showValue />
        <span className="text-sm text-muted-foreground">
          (See reviews)
        </span>
      </button>

      {/* Price Block */}
      <div className="flex items-baseline gap-3">
        <span className="text-3xl font-semibold">
          ${discountedPrice.toFixed(2)}
        </span>
        {product.discount && (
          <>
            <span className="text-lg text-muted-foreground line-through">
              ${product.price.toFixed(2)}
            </span>
            <Badge variant="destructive" className="text-xs">
              {product.discount}% off
            </Badge>
          </>
        )}
      </div>

      {/* Primary Actions */}
      <div className="flex flex-col gap-3">
        <Button size="lg" className="w-full text-base">
          Add to Cart
        </Button>
        <Button variant="outline" size="lg" className="w-full text-base">
          <Heart className="mr-2 h-4 w-4" />
          Add to Wishlist
        </Button>
      </div>

      {/* Trust Signals */}
      <div className="flex flex-col gap-3 pt-4 border-t border-border">
        <div className="flex items-center gap-3 text-sm text-muted-foreground">
          <Download className="h-4 w-4 text-primary" />
          <span>Instant digital download</span>
        </div>
        <div className="flex items-center gap-3 text-sm text-muted-foreground">
          <Shield className="h-4 w-4 text-primary" />
          <span>Secure checkout</span>
        </div>
        <div className="flex items-center gap-3 text-sm text-muted-foreground">
          <Infinity className="h-4 w-4 text-primary" />
          <span>Lifetime access & updates</span>
        </div>
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 pt-4 border-t border-border">
        <Badge variant="secondary" className="capitalize">{product.category}</Badge>
        {product.tags.map((tag) => (
          <Badge key={tag} variant="outline" className="capitalize">
            {tag}
          </Badge>
        ))}
      </div>
    </div>
  );
}
