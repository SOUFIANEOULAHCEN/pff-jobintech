import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { CreditCard, Lock } from 'lucide-react';
import { cn } from '@/lib/utils';

interface PaymentMethodSectionProps {
  paymentMethod: 'card' | 'paypal' | 'wallet';
  cardNumber: string;
  expiryDate: string;
  cvc: string;
  onPaymentMethodChange: (method: 'card' | 'paypal' | 'wallet') => void;
  onCardNumberChange: (value: string) => void;
  onExpiryDateChange: (value: string) => void;
  onCvcChange: (value: string) => void;
  isFreeCheckout?: boolean;
}

export function PaymentMethodSection({
  paymentMethod,
  cardNumber,
  expiryDate,
  cvc,
  onPaymentMethodChange,
  onCardNumberChange,
  onExpiryDateChange,
  onCvcChange,
  isFreeCheckout = false,
}: PaymentMethodSectionProps) {
  if (isFreeCheckout) {
    return (
      <Card className="border border-border shadow-sm">
        <CardHeader className="pb-4">
          <CardTitle className="flex items-center gap-2 text-lg font-medium">
            <CreditCard className="h-5 w-5 text-muted-foreground" />
            Payment
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center gap-3 p-4 bg-success/10 rounded-lg border border-success/20">
            <div className="h-10 w-10 rounded-full bg-success/20 flex items-center justify-center">
              <span className="text-success text-lg">✓</span>
            </div>
            <div>
              <p className="font-medium text-foreground">No payment required</p>
              <p className="text-sm text-muted-foreground">This order is free</p>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="border border-border shadow-sm">
      <CardHeader className="pb-4">
        <CardTitle className="flex items-center gap-2 text-lg font-medium">
          <CreditCard className="h-5 w-5 text-muted-foreground" />
          Payment Method
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Payment method tabs */}
        <div className="grid grid-cols-3 gap-2">
          <button
            type="button"
            onClick={() => onPaymentMethodChange('card')}
            className={cn(
              'flex flex-col items-center gap-1.5 p-3 rounded-lg border-2 transition-all',
              paymentMethod === 'card'
                ? 'border-accent bg-accent/5'
                : 'border-border hover:border-muted-foreground/30'
            )}
          >
            <CreditCard className="h-5 w-5" />
            <span className="text-xs font-medium">Card</span>
          </button>
          <button
            type="button"
            disabled
            className="flex flex-col items-center gap-1.5 p-3 rounded-lg border-2 border-border opacity-50 cursor-not-allowed relative"
          >
            <span className="text-sm font-bold">P</span>
            <span className="text-xs font-medium">PayPal</span>
            <Badge variant="secondary" className="absolute -top-1.5 -right-1.5 text-[10px] px-1.5 py-0">
              Soon
            </Badge>
          </button>
          <button
            type="button"
            disabled
            className="flex flex-col items-center gap-1.5 p-3 rounded-lg border-2 border-border opacity-50 cursor-not-allowed relative"
          >
            <span className="text-sm">💳</span>
            <span className="text-xs font-medium">Wallet</span>
            <Badge variant="secondary" className="absolute -top-1.5 -right-1.5 text-[10px] px-1.5 py-0">
              Soon
            </Badge>
          </button>
        </div>

        {/* Card fields */}
        {paymentMethod === 'card' && (
          <div className="space-y-4 pt-2">
            <div className="space-y-2">
              <Label htmlFor="cardNumber" className="text-sm font-medium">
                Card number
              </Label>
              <div className="relative">
                <Input
                  id="cardNumber"
                  type="text"
                  placeholder="1234 5678 9012 3456"
                  value={cardNumber}
                  onChange={(e) => onCardNumberChange(e.target.value)}
                  className="h-11 pr-12"
                  maxLength={19}
                />
                <div className="absolute right-3 top-1/2 -translate-y-1/2 flex gap-1">
                  <div className="w-6 h-4 bg-muted rounded flex items-center justify-center text-[8px] font-bold text-muted-foreground">
                    VISA
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="expiryDate" className="text-sm font-medium">
                  Expiry date
                </Label>
                <Input
                  id="expiryDate"
                  type="text"
                  placeholder="MM / YY"
                  value={expiryDate}
                  onChange={(e) => onExpiryDateChange(e.target.value)}
                  className="h-11"
                  maxLength={7}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="cvc" className="text-sm font-medium">
                  CVC
                </Label>
                <div className="relative">
                  <Input
                    id="cvc"
                    type="text"
                    placeholder="123"
                    value={cvc}
                    onChange={(e) => onCvcChange(e.target.value)}
                    className="h-11"
                    maxLength={4}
                  />
                  <Lock className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                </div>
              </div>
            </div>
          </div>
        )}

        <p className="text-xs text-muted-foreground flex items-center gap-1.5 pt-1">
          <Lock className="h-3 w-3" />
          Your payment info is encrypted and secure
        </p>
      </CardContent>
    </Card>
  );
}
