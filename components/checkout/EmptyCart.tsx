import { ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function EmptyCart() {
  return (
    <div className="flex flex-col items-center justify-center py-16 px-4">
      <div className="h-20 w-20 rounded-full bg-muted flex items-center justify-center mb-6">
        <ShoppingCart className="h-10 w-10 text-muted-foreground" />
      </div>
      <h2 className="text-xl font-semibold mb-2">Your cart is empty</h2>
      <p className="text-muted-foreground text-center mb-6 max-w-sm">
        Looks like you haven&apos;t added any products yet. Browse our
        collection to find something you love.
      </p>
      <Link href={"/products"}>
        <Button size="lg" className="gap-2">
          Browse Products
        </Button>
      </Link>
    </div>
  );
}
