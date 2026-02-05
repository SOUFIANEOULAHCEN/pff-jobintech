import { useState } from 'react';
import { ChevronDown, ChevronUp, ShoppingBag } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import type { CartItem } from '@/types';

interface MobileOrderSummaryProps {
  items: CartItem[];
  subtotal: number;
  discount: number;
  tax: number;
  total: number;
}

export function MobileOrderSummary({ items, subtotal, discount, tax, total }: MobileOrderSummaryProps) {
  const [isOpen, setIsOpen] = useState(false);

  const formatPrice = (price: number) => {
    if (price === 0) return 'Free';
    return `$${price.toFixed(2)}`;
  };

  return (
    <Card className="border border-border shadow-sm lg:hidden">
      <Collapsible open={isOpen} onOpenChange={setIsOpen}>
        <CollapsibleTrigger className="w-full">
          <div className="flex items-center justify-between p-4">
            <div className="flex items-center gap-2">
              <ShoppingBag className="h-5 w-5 text-muted-foreground" />
              <span className="font-medium">Order Summary</span>
              <Badge variant="secondary" className="ml-1">{items.length}</Badge>
            </div>
            <div className="flex items-center gap-3">
              <span className="font-semibold">
                {total === 0 ? 'Free' : formatPrice(total)}
              </span>
              {isOpen ? (
                <ChevronUp className="h-4 w-4 text-muted-foreground" />
              ) : (
                <ChevronDown className="h-4 w-4 text-muted-foreground" />
              )}
            </div>
          </div>
        </CollapsibleTrigger>
        <CollapsibleContent>
          <Separator />
          <CardContent className="pt-4 space-y-4">
            {/* Cart items */}
            <div className="space-y-3">
              {items.map((item) => (
                <div key={item.id} className="flex gap-3">
                  <div className="h-12 w-12 rounded-lg bg-muted flex-shrink-0 overflow-hidden">
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
          </CardContent>
        </CollapsibleContent>
      </Collapsible>
    </Card>
  );
}
