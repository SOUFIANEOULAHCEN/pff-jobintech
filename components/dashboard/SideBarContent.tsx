"use client";

import { useState } from "react";
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
import Link from "next/link";

export default function SideBarContent() {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("/dashboard");

  const navItems = [
    { icon: LayoutGrid, label: "Dashboard", href: "/dashboard" },
    { icon: Package, label: "Products", href: "/dashboard/products" },
    { icon: ShoppingCart, label: "Sales", href: "/dashboard/sales" },
    { icon: BarChart3, label: "Analytics", href: "/dashboard/analytics" },
    { icon: Star, label: "Reviews", href: "/dashboard/reviews" },
    { icon: DollarSign, label: "Payouts", href: "/dashboard/payouts" },
    { icon: Settings, label: "Settings", href: "/dashboard/settings" },
  ];

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 left-4 z-50 lg:hidden p-2 rounded-lg hover:bg-primary/10 text-muted-foreground hover:text-secondary-foreground transition-colors"
        aria-label="Toggle sidebar"
      >
        <Menu size={24} />
      </button>

      <aside
        className={`fixed lg:relative left-0 top-0 h-screen bg-card border-r border-border transition-all duration-300 ease-in-out flex flex-col w-64 z-40 lg:z-auto ${
          !isOpen ? "-translate-x-full lg:translate-x-0" : "translate-x-0"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-border">
          <div>
            <img src={"./logo.png"} className="" />
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="p-1.5 rounded-lg hover:bg-primary/10 text-muted-foreground hover:text-secondary-foreground transition-colors lg:hidden"
            aria-label="Close sidebar"
          >
            <ChevronLeft size={20} />
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-3 py-6 space-y-1 overflow-y-auto">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200 group ${
                active === item.href.toLocaleLowerCase()
                  ? "bg-primary/15 border border-primary/30 text-primary font-medium hover:bg-primary/20"
                  : "text-muted-foreground hover:bg-primary/5 hover:text-secondary-foreground"
              }`}
              onClick={() => {
                setActive(item.href.toLocaleLowerCase());
                setIsOpen(false);
              }}
              title={item.label}
            >
              <item.icon size={18} className="flex-shrink-0" />
              <span className="text-sm">{item.label}</span>
              {active === item.href.toLocaleLowerCase() && (
                <ChevronRight
                  size={16}
                  className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity"
                />
              )}
            </Link>
          ))}
        </nav>

        {/* User Profile */}
        <div className="border-t border-border p-4">
          <div className="flex items-center gap-3">
            <AvatarComponent className="h-9 w-9 flex-shrink-0 ring-2 ring-primary/20">
              <AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah" />
              <AvatarFallback>SD</AvatarFallback>
            </AvatarComponent>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-secondary-foreground truncate">
                Sarah Design
              </p>
              <p className="text-xs text-muted-foreground truncate">
                Vendor Account
              </p>
            </div>
          </div>
        </div>
      </aside>

      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
}
