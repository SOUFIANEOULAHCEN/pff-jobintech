import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { CheckCircle2, Download, ArrowRight } from "lucide-react";
import type { CartItem } from "@/types";
import Link from "next/link";

interface CheckoutSuccessProps {
  items: CartItem[];
  total: number;
}

export function CheckoutSuccess({ items, total }: CheckoutSuccessProps) {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="w-full max-w-lg">
        <div className="text-center mb-8">
          <div className="inline-flex h-16 w-16 rounded-full bg-success/10 items-center justify-center mb-4">
            <CheckCircle2 className="h-8 w-8 text-success" />
          </div>
          <h1 className="text-2xl font-semibold mb-2">
            Thank you for your purchase!
          </h1>
          <p className="text-muted-foreground">
            We&apos;ve sent a confirmation email with your receipt and download
            links.
          </p>
        </div>

        <Card className="border border-border shadow-sm mb-6">
          <CardContent className="pt-6">
            <h3 className="font-medium mb-4">Your products</h3>
            <div className="space-y-4">
              {items.map((item) => (
                <div key={item.id} className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-lg bg-muted flex-shrink-0 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-sm font-medium truncate">
                      {item.title}
                    </h4>
                    <p className="text-xs text-muted-foreground">
                      {item.price === 0
                        ? "Free"
                        : `$${(item.price * item.quantity).toFixed(2)}`}
                    </p>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    className="gap-1.5 flex-shrink-0"
                  >
                    <Download className="h-3.5 w-3.5" />
                    Download
                  </Button>
                </div>
              ))}
            </div>

            <Separator className="my-6" />

            <div className="flex justify-between items-center">
              <span className="text-muted-foreground">Total paid</span>
              <span className="text-lg font-semibold">
                {total === 0 ? "Free" : `$${total.toFixed(2)}`}
              </span>
            </div>
          </CardContent>
        </Card>

        <div className="flex flex-col sm:flex-row gap-3">
          <Link className="w-full" href={"/products"}>
            <Button variant="outline" className="w-full">
              Browse Products
            </Button>
          </Link>
        </div>

        <p className="text-center text-xs text-muted-foreground mt-6">
          Order #SEL-{Date.now().toString().slice(-8)} •{" "}
          {new Date().toLocaleDateString()}
        </p>
      </div>
    </div>
  );
}
