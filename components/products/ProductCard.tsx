import { Eye, ShoppingCart, Star } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "../ui/button";
import { BiDollar } from "react-icons/bi";
import { addToCart } from "@/lib/cart";
import Link from "next/link";

export interface Product {
  id: number;
  title: string;
  vendor: string;
  price: number;
  rating: number;
  reviewCount: number;
  thumbnail: string;
  category: string;
  isFree?: boolean;
  isBestseller?: boolean;
}

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Card className="group relative overflow-hidden py-0 border-border bg-card transition-all duration-200 hover:border-muted-foreground/30 hover:shadow-md">
      <CardContent className="p-0">
        {/* Thumbnail */}
        <div className="relative aspect-[4/3] overflow-hidden bg-secondary">
          <img
            src={product.thumbnail}
            alt={product.title}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />

          {/* Badges */}
          <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
            {product.isFree && (
              <Badge
                variant="secondary"
                className="bg-background/90 text-foreground text-xs font-medium backdrop-blur-sm"
              >
                Free
              </Badge>
            )}
            {product.isBestseller && (
              <Badge className="bg-accent text-accent-foreground text-xs font-medium">
                Bestseller
              </Badge>
            )}
          </div>
        </div>

        <div className="p-4 space-y-2">
          <h3 className="font-medium text-foreground leading-snug line-clamp-2 group-hover:text-accent transition-colors">
            {product.title}
          </h3>

          {/* Vendor */}
          <p className="text-sm text-muted-foreground">{product.vendor}</p>

          {/* Rating & Reviews */}
          <div className="flex items-center gap-1.5">
            <div className="flex items-center">
              <Star className="h-3.5 w-3.5 fill-accent text-accent" />
              <span className="ml-1 text-sm font-medium text-foreground">
                {product.rating.toFixed(1)}
              </span>
            </div>
            <span className="text-sm text-muted-foreground">
              ({product.reviewCount.toLocaleString()})
            </span>
          </div>

          {/* Price */}
          <div className="pt-1">
            {product.isFree ? (
              <span className="font-semibold text-foreground">Free</span>
            ) : (
              <span className="font-semibold text-foreground">
                ${product.price.toFixed(2)}
              </span>
            )}
          </div>
        </div>

        <CardFooter className="w-full py-2 flex gap-2">
          <Button
            onClick={() =>
              addToCart({
                id: product.id,
                title: product.title,
                price: product.price,
                image: product.thumbnail,
              })
            }
            variant={"outline"}
            className="w-1/2"
          >
            <ShoppingCart />
            Add To Cart
          </Button>
          <Link className="w-full" href={`/products/${product.id}`}>
            <Button className="w-full">
              <Eye />
              View Product
            </Button>
          </Link>
        </CardFooter>
      </CardContent>
    </Card>
  );
}
