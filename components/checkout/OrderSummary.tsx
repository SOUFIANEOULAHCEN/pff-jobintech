import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import { ShoppingBag, Shield, Zap, AlertCircle } from 'lucide-react';
import type { CartItem } from '@/types';

interface OrderSummaryProps {
  items: CartItem[];
  subtotal: number;
  discount: number;
  tax: number;
  total: number;
}

export function OrderSummary({ items, subtotal, discount, tax, total }: OrderSummaryProps) {
  const formatPrice = (price: number) => {
    if (price === 0) return 'Free';
    return `$${price.toFixed(2)}`;
  };

  return (
    <Card className="border border-border shadow-sm">
      <CardHeader className="pb-4">
        <CardTitle className="flex items-center gap-2 text-lg font-medium">
          <ShoppingBag className="h-5 w-5 text-muted-foreground" />
          Order Summary
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Cart items */}
        <div className="space-y-3">
          {items.map((item) => (
            <div key={item.id} className="flex gap-3">
              <div className="h-14 w-14 rounded-lg bg-muted flex-shrink-0 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="text-sm font-medium truncate">{item.title}</h4>
                <p className="text-xs text-muted-foreground">Qty: {item.quantity}</p>
              </div>
              <div className="text-sm font-medium flex-shrink-0">
                {item.price === 0 ? (
                  <Badge variant="secondary" className="text-success">Free</Badge>
                ) : (
                  formatPrice(item.price * item.quantity)
                )}
              </div>
            </div>
          ))}
        </div>

        <Separator />

        {/* Price breakdown */}
        <div className="space-y-2 text-sm">
          <div className="flex justify-between">
            <span className="text-muted-foreground">Subtotal</span>
            <span>{formatPrice(subtotal)}</span>
          </div>
          {discount > 0 && (
            <div className="flex justify-between text-success">
              <span>Discount</span>
              <span>-{formatPrice(discount)}</span>
            </div>
          )}
          <div className="flex justify-between">
            <span className="text-muted-foreground">Tax (estimated)</span>
            <span>{formatPrice(tax)}</span>
          </div>
        </div>

        <Separator />

        {/* Total */}
        <div className="flex justify-between items-center">
          <span className="text-lg font-semibold">Total</span>
          <span className="text-2xl font-bold">
            {total === 0 ? (
              <span className="text-success">Free</span>
            ) : (
              formatPrice(total)
            )}
          </span>
        </div>

        {/* Trust indicators */}
        <div className="pt-2 space-y-2">
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <Zap className="h-3.5 w-3.5 text-accent" />
            <span>Instant digital delivery</span>
          </div>
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <Shield className="h-3.5 w-3.5 text-accent" />
            <span>Secure payment processing</span>
          </div>
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <AlertCircle className="h-3.5 w-3.5" />
            <span>Digital products are non-refundable</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
