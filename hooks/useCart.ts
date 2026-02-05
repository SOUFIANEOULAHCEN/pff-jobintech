import { useState, useEffect } from "react";
import type { CartItem } from "@/types";

const CART_KEY = "cart";

export function useCart() {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(CART_KEY);

      if (stored) {
        const parsed: CartItem[] = JSON.parse(stored);
        setItems(Array.isArray(parsed) ? parsed : []);
      } else {
        setItems([]);
      }
    } catch {
      setItems([]);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const subtotal = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const discount = 0;
  const tax = subtotal > 0 ? Math.round(subtotal * 0.1 * 100) / 100 : 0;
  const total = subtotal - discount + tax;

  const clearCart = () => {
    localStorage.removeItem(CART_KEY);
    setItems([]);
  };

  return {
    items,
    isLoading,
    subtotal,
    discount,
    tax,
    total,
    isEmpty: items.length === 0,
    clearCart,
  };
}
