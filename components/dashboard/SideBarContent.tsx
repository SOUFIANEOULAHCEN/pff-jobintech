"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import {
  LayoutGrid,
  Package,
  ShoppingCart,
  BarChart3,
  Star,
  DollarSign,
  Settings,
  ChevronRight,
  ChevronLeft,
  Menu,
} from "lucide-react";

import {
  Avatar as AvatarComponent,
  AvatarImage,
  AvatarFallback,
} from "@/components/ui/avatar";

type User = {
  userType: "vendor" | "customer";
};

export default function SideBarContent() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const [mounted, setMounted] = useState(false);

  /* ---------- SAFE CLIENT INIT ---------- */
  useEffect(() => {
    setMounted(true);

    try {
      const stored = localStorage.getItem("user");
      if (stored) {
        setUser(JSON.parse(stored));
      }
    } catch (err) {
      console.error("Invalid user in localStorage");
    }
  }, []);

  /* ---------- PREVENT HYDRATION ISSUES ---------- */
  if (!mounted) return null;

  /* ---------- LINKS ---------- */

  const vendorLinks = [
    { icon: LayoutGrid, label: "Dashboard", href: "/dashboard" },
    { icon: Package, label: "Products", href: "/dashboard/products" },
    { icon: ShoppingCart, label: "Sales", href: "/dashboard/sales" },
    { icon: BarChart3, label: "Analytics", href: "/dashboard/analytics" },
    { icon: Star, label: "Reviews", href: "/dashboard/reviews" },
    { icon: DollarSign, label: "Payouts", href: "/dashboard/payouts" },
    { icon: Settings, label: "Settings", href: "/dashboard/settings" },
  ];

  const customerLinks = [
    { icon: LayoutGrid, label: "Dashboard", href: "/customer/dashboard" },
    { icon: Package, label: "My Purchases", href: "/customer/dashboard/purchases" },
    { icon: ShoppingCart, label: "Downloads", href: "/customer/dashboard/downloads" },
    { icon: Star, label: "Reviews", href: "/customer/dashboard/reviews" },
    { icon: BarChart3, label: "Wishlist", href: "/customer/dashboard/wishlist" },
    { icon: Settings, label: "Settings", href: "/customer/dashboard/settings" },
  ];

  const links =
    user?.userType === "vendor" ? vendorLinks : customerLinks;

  /* ---------- ACTIVE LOGIC (FIXED) ---------- */
  const isLinkActive = (href: string) => {
    if (href === "/dashboard" || href === "/customer/dashboard") {
      return pathname === href;
    }
    return pathname.startsWith(href + "/");
  };

  /* ---------- UI ---------- */

  return (
    <>
      {/* Mobile toggle */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed top-4 left-4 z-50 lg:hidden p-2 rounded-lg hover:bg-primary/10"
      >
        <Menu size={22} />
      </button>

      <aside
        className={`fixed lg:relative z-40 h-screen w-64 bg-card border-r transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b">
          <img src="/logo.png" alt="Logo" />
          <button
            onClick={() => setIsOpen(false)}
            className="lg:hidden p-1.5 rounded-lg hover:bg-muted"
          >
            <ChevronLeft size={18} />
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-3 py-6 space-y-1 overflow-y-auto">
          {links.map((item) => {
            const active = isLinkActive(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition ${
                  active
                    ? "bg-primary/15 text-primary font-medium"
                    : "text-muted-foreground hover:bg-primary/5"
                }`}
              >
                <item.icon size={18} />
                <span className="text-sm">{item.label}</span>
                {active && <ChevronRight size={16} className="ml-auto opacity-70" />}
              </Link>
            );
          })}
        </nav>

        {/* User */}
        <div className="border-t p-4">
          <div className="flex items-center gap-3">
            <AvatarComponent className="h-9 w-9">
              <AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=user" />
              <AvatarFallback>U</AvatarFallback>
            </AvatarComponent>
            <div>
              <p className="text-sm font-medium">Account</p>
              <p className="text-xs text-muted-foreground capitalize">
                {user?.userType ?? "guest"}
              </p>
            </div>
          </div>
        </div>
      </aside>

      {/* Backdrop */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black/50 z-30 lg:hidden"
        />
      )}
    </>
  );
}
