"use client";
import { useState } from "react";
import { CheckoutHeader } from "@/components/checkout/CheckoutHeader";
import { CustomerInfoSection } from "@/components/checkout/CustomerInfoSection";
import { BillingSection } from "@/components/checkout/BillingSection";
import { PaymentMethodSection } from "@/components/checkout/PaymentMethodSection";
import { PromoCodeSection } from "@/components/checkout/PromoCodeSection";
import { OrderSummary } from "@/components/checkout/OrderSummary";
import { MobileOrderSummary } from "@/components/checkout/MobileOrderSummary";
import { EmptyCart } from "@/components/checkout/EmptyCart";
import { CheckoutSuccess } from "@/components/checkout/CheckoutSuccess";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Loader2 } from "lucide-react";
import { useCart } from "@/hooks/useCart";
import Link from "next/link";

export default function CheckoutPage() {
  const {
    items,
    isLoading,
    subtotal,
    discount,
    tax,
    total,
    isEmpty,
    clearCart,
  } = useCart();

  const [isProcessing, setIsProcessing] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  // Form state
  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [address, setAddress] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [paymentMethod, setPaymentMethod] = useState<
    "card" | "paypal" | "wallet"
  >("card");
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvc, setCvc] = useState("");
  const [promoCode, setPromoCode] = useState("");

  const handlePlaceOrder = async () => {
    setIsProcessing(true);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsProcessing(false);
    setIsComplete(true);
  };

  const isFreeCheckout = total === 0;

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
      </div>
    );
  }

  if (isComplete) {
    return <CheckoutSuccess items={items} total={total} />;
  }

  if (isEmpty) {
    return (
      <div className="min-h-screen bg-background">
        <CheckoutHeader />
        <EmptyCart />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <CheckoutHeader />

      <main className="container max-w-6xl mx-auto px-4 py-8">
        <div className="mb-6">
          <MobileOrderSummary
            items={items}
            subtotal={subtotal}
            discount={discount}
            tax={tax}
            total={total}
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-7 space-y-6">
            <CustomerInfoSection
              email={email}
              fullName={fullName}
              onEmailChange={setEmail}
              onFullNameChange={setFullName}
            />

            <BillingSection
              country={country}
              city={city}
              address={address}
              postalCode={postalCode}
              onCountryChange={setCountry}
              onCityChange={setCity}
              onAddressChange={setAddress}
              onPostalCodeChange={setPostalCode}
            />

            <PaymentMethodSection
              paymentMethod={paymentMethod}
              cardNumber={cardNumber}
              expiryDate={expiryDate}
              cvc={cvc}
              onPaymentMethodChange={setPaymentMethod}
              onCardNumberChange={setCardNumber}
              onExpiryDateChange={setExpiryDate}
              onCvcChange={setCvc}
              isFreeCheckout={isFreeCheckout}
            />

            {!isFreeCheckout && (
              <PromoCodeSection
                promoCode={promoCode}
                onPromoCodeChange={setPromoCode}
              />
            )}
            <div className="hidden lg:flex flex-col gap-4 pt-4">
              <Button
                onClick={handlePlaceOrder}
                disabled={isProcessing}
                className="w-full"
              >
                {isProcessing ? (
                  <>
                    <Loader2 className="h-5 w-5 animate-spin" />
                    Processing…
                  </>
                ) : (
                  `Place order${!isFreeCheckout ? ` • $${total.toFixed(2)}` : ""}`
                )}
              </Button>
              <Link href={"/products"}>
                <Button variant="ghost" size="sm" className="gap-2">
                  <ArrowLeft className="h-4 w-4" />
                  Back to cart
                </Button>
              </Link>
            </div>
          </div>

          <div className="hidden lg:block lg:col-span-5">
            <div className="sticky top-8">
              <OrderSummary
                items={items}
                subtotal={subtotal}
                discount={discount}
                tax={tax}
                total={total}
              />
            </div>
          </div>
        </div>
      </main>

      <div className="fixed bottom-0 left-0 right-0 p-4 bg-card border-t border-border lg:hidden">
        <div className="flex flex-col gap-2 container max-w-6xl mx-auto">
          <Button
            onClick={handlePlaceOrder}
            disabled={isProcessing}
            className="w-full"
          >
            {isProcessing ? (
              <>
                <Loader2 className="h-5 w-5 animate-spin" />
                Processing…
              </>
            ) : (
              `Place order${!isFreeCheckout ? ` • $${total.toFixed(2)}` : ""}`
            )}
          </Button>
          <Link href={"/products"}>
            <Button variant="ghost" size="sm" className="gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to cart
            </Button>
          </Link>
        </div>
      </div>

      <div className="h-32 lg:hidden" />
    </div>
  );
}
