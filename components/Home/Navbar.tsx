"use client";

import { Button } from "@/components/ui/button";

import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { LogOut, Menu, ShoppingCart, User, X } from "lucide-react";
import gsap from "gsap/all";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { ProductCart } from "@/types";
import { getCartItems, removeFromCart } from "@/lib/cart";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { BsGear } from "react-icons/bs";
import { useRouter } from "next/navigation";

const Links = [
  { label: "Home", href: "/" },
  { label: "Products", href: "/products" },
  { label: "About us", href: "/about" },
  { label: "Contact us", href: "/contact" },
];

function Navbar({ className }: { className?: string }) {
  const storedUser = localStorage.getItem("currentUser");
  const user = storedUser ? JSON.parse(storedUser) : null;
  return (
    <nav
      className={`w-full fixed top-0 z-50 bg-background border-b border-border backdrop-blur-sm ${className}`}
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center w-[20%]">
          <img
            src="/landing_logo.png"
            alt="logo"
            className="w-full object-cover"
          />
        </div>

        {/* Navigation Links - Center */}
        <div className="hidden md:flex items-center w-[80%] justify-center gap-12">
          {Links.map((link, idx) => (
            <Link
              href={link.href}
              key={idx}
              className="text-lg font-medium text-muted-foreground hover:text-accent transition-colors duration-200 relative group"
            >
              {link.label}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300"></span>
            </Link>
          ))}
        </div>

        {/* Right Section - Auth & Cart */}
        <div className="flex items-center gap-4 w-[20%] justify-end">
          {user ? (
            <ProfileDropDown />
          ) : (
            <>
              <Link
                href={"/login"}
                className="text-sm font-medium text-muted-foreground hover:text-accent transition-colors"
              >
                Login
              </Link>
              <Link
                href={"/signup"}
                className="text-sm font-medium px-4 py-2 border border-accent text-accent hover:bg-accent hover:text-accent-foreground transition-all duration-200"
              >
                Sign Up
              </Link>
            </>
          )}

          <CartDrawer />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

export const MobileNav = () => {
  const barRef = useRef(null);
  const onOpen = () => {
    gsap.to(barRef.current, {
      x: 0,
    });
  };
  const onClose = () => {
    gsap.to(barRef.current, {
      x: -600,
    });
  };
  return (
    <>
      <nav className="w-full h-20 fixed top-0 z-40 bg-background border-b border-border flex items-center justify-between px-4">
        <img src="./S_Icon.png" className="h-10 w-auto" alt="Logo" />
        <button
          onClick={onOpen}
          className="p-2 text-muted-foreground hover:text-accent transition-colors"
        >
          <Menu size={24} />
        </button>
      </nav>
      <div
        ref={barRef}
        className="-translate-x-100 fixed inset-0 z-50 bg-background border-r border-border px-4 py-6"
      >
        {/* Header */}
        <div className="flex items-center justify-between mb-10">
          <img src="./S_Icon.png" className="h-10 w-auto" alt="Logo" />
          <button
            onClick={onClose}
            className="p-2 text-muted-foreground hover:text-accent transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        {/* Nav Links */}
        <nav className="flex flex-col gap-6">
          {Links.map((link, idx) => (
            <Link
              key={idx}
              href={link.href}
              onClick={onClose}
              className="text-muted-foreground hover:text-accent text-lg font-medium transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </>
  );
};

const CartDrawer = () => {
  const [cartItems, setCartItems] = useState<ProductCart[]>([]);

  useEffect(() => {
    const updateCart = () => {
      setCartItems(getCartItems());
    };

    updateCart();
    window.addEventListener("cart-updated", updateCart);

    return () => {
      window.removeEventListener("cart-updated", updateCart);
    };
  }, []);

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

  const totalQuantity = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const navigate = useRouter()
  return (
    <Drawer direction="right">
      <DrawerTrigger asChild>
        <button className="p-2 text-muted-foreground hover:text-accent transition-colors relative cursor-pointer group">
          <ShoppingCart size={20} />
          {totalQuantity > 0 && (
            <div className="absolute -top-1 -right-2 bg-accent text-accent-foreground text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
              {totalQuantity}
            </div>
          )}
        </button>
      </DrawerTrigger>

      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Shopping Cart</DrawerTitle>
          <DrawerDescription>
            {cartItems.length} items in your cart
          </DrawerDescription>
        </DrawerHeader>

        <div className="px-4 space-y-3 max-h-96 overflow-y-auto">
          {cartItems.map((item) => (
            <div key={item.id} className="flex gap-3 p-3 rounded-lg border">
              <img
                src={item.image || "/placeholder.svg"}
                alt={item.title}
                className="h-20 w-20 rounded-md object-cover"
              />

              <div className="flex-1">
                <h4 className="text-sm font-medium">{item.title}</h4>
                <p className="text-xs">Qty: {item.quantity}</p>
                <p className="font-semibold">
                  ${(item.price * item.quantity).toFixed(2)}
                </p>
              </div>

              <Button
                size="sm"
                variant="destructive"
                onClick={() => removeFromCart(item.id)}
              >
                ✕
              </Button>
            </div>
          ))}

          {cartItems.length === 0 && (
            <p className="text-center py-10 text-muted-foreground">
              Your cart is empty
            </p>
          )}
        </div>

        <DrawerFooter>
          <div className="flex justify-between mb-4">
            <span>Total</span>
            <span className="font-bold">${total.toFixed(2)}</span>
          </div>

          <Button onClick={() => navigate.push("/checkout")}>Proceed To Checkout</Button>

          <DrawerClose asChild>
            <Button variant="outline">Close</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

const ProfileDropDown = () => {
  const storedUser = localStorage.getItem("user");
  const user = storedUser ? JSON.parse(storedUser) : null;
  const onLogout = () => {
    localStorage.removeItem("currentUser");
  };
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="cursor-pointer p-2 text-muted-foreground hover:text-accent transition-colors flex items-center justify-center">
          <User size={20} />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="bg-card border border-border text-foreground">
        <Link
          href={
            user?.userType === "customer" ? "/customer/dashboard" : "/dashboard"
          }
        >
          <DropdownMenuItem className="hover:bg-muted hover:text-accent cursor-pointer">
            <User size={16} className="mr-2" />
            Profile
          </DropdownMenuItem>
        </Link>
        <Link
          href={
            user?.userType === "customer"
              ? "/customer/dashboard/settings"
              : "/dashboard/settings"
          }
        >
          <DropdownMenuItem className="hover:bg-muted hover:text-accent cursor-pointer">
            <BsGear className="mr-2" />
            Settings
          </DropdownMenuItem>
        </Link>
        <DropdownMenuItem
          onClick={onLogout}
          className="hover:bg-muted hover:text-accent cursor-pointer"
        >
          <LogOut size={16} className="mr-2" />
          Logout
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
