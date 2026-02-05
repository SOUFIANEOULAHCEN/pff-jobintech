import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Eye, Heart, ShoppingCart, X } from "lucide-react";

const wishlistItems = [
  {
    id: 1,
    name: "Tailwind Starter Kit",
    vendor: "Design Studio Co",
    price: "$39.00",
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=300&fit=crop",
  },
  {
    id: 2,
    name: "Next.js Dashboard Template",
    vendor: "CodeCraft Labs",
    price: "$89.00",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop",
  },
  {
    id: 3,
    name: "E-commerce UI Kit",
    vendor: "ShopDesign Pro",
    price: "$59.00",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop",
  },
  {
    id: 4,
    name: "SaaS Landing Page Pack",
    vendor: "Landing Masters",
    price: "$49.00",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop",
  },
  {
    id: 5,
    name: "Mobile App UI Kit",
    vendor: "AppDesign Studio",
    price: "$69.00",
    image:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=300&fit=crop",
  },
  {
    id: 6,
    name: "Illustration Pack Pro",
    vendor: "ArtWorks Inc",
    price: "$29.00",
    image:
      "https://images.unsplash.com/photo-1618788372246-79faff0c3742?w=400&h=300&fit=crop",
  },
];

export default function page() {
  return (
    <div className="w-full flex flex-col gap-5">
      <div>
        <h2 className="text-2xl font-semibold text-foreground">Whishlist</h2>
        <p className="mt-1 text-muted-foreground">
          Add items you love to your wishlist and easily manage them. You can
          view product details, add items to your cart, or remove them whenever
          you want.
        </p>
      </div>
      <div className="space-y-6">
        <div className="flex items-center gap-4">
          <p className="text-sm text-muted-foreground">
            <span className="font-medium text-foreground">7 items</span> in your
            wishlist
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {wishlistItems.map((item) => (
            <Card
              key={item.id}
              className="group overflow-hidden bg-card border-border py-0"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-full w-full object-cover transition-transform group-hover:scale-105"
                />
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute right-2 top-2 h-8 w-8 bg-background/80 backdrop-blur-sm hover:bg-background"
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
              <div className="p-4">
                <h3 className="font-medium text-foreground">{item.name}</h3>
                <p className="mt-1 text-xs text-muted-foreground">
                  {item.vendor}
                </p>
                <div className="mt-3 flex items-center justify-between">
                  <p className="font-semibold text-foreground">{item.price}</p>
                  <div className="flex items-center gap-1">
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <Eye className="h-4 w-4" />
                    </Button>
                    <Button size="sm" className="gap-1.5">
                      <ShoppingCart className="h-3.5 w-3.5" />
                      Add to cart
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="hidden">
          <Card className="flex flex-col items-center justify-center p-12 bg-card border-border text-center">
            <div className="rounded-full bg-muted/50 p-4">
              <Heart className="h-8 w-8 text-muted-foreground" />
            </div>
            <h3 className="mt-4 text-lg font-medium text-foreground">
              Your wishlist is empty
            </h3>
            <p className="mt-2 text-sm text-muted-foreground max-w-sm">
              Save products you&apos;re interested in for later by clicking the heart
              icon
            </p>
            <Button className="mt-4">Explore marketplace</Button>
          </Card>
        </div>
      </div>
    </div>
  );
}
