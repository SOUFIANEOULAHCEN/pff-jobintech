// lib/cart.ts
import { ProductCart } from "@/types"

const CART_KEY = "cart"

function getCart(): ProductCart[] {
  if (typeof window === "undefined") return []
  return JSON.parse(localStorage.getItem(CART_KEY) || "[]")
}

function setCart(cart: ProductCart[]) {
  localStorage.setItem(CART_KEY, JSON.stringify(cart))
  window.dispatchEvent(new Event("cart-updated"))
}

export function addToCart(product: Omit<ProductCart, "quantity">) {
  const cart = getCart()

  const index = cart.findIndex((item) => item.id === product.id)

  if (index !== -1) {
    cart[index].quantity += 1
  } else {
    cart.push({ ...product, quantity: 1 })
  }

  setCart(cart)
}

export function removeFromCart(id: number) {
  const cart = getCart().filter((item) => item.id !== id)
  setCart(cart)
}

export function clearCart() {
  setCart([])
}

export function getCartItems() {
  return getCart()
}
