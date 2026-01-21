import ProductDashboardCard from "@/components/dashboard/products dashboard/ProductDashboardCard";
import ProductModal from "@/components/Modals/ProductModal";
import React from "react";

function page() {
  const mockProducts = [
    {
      title: "Wireless Headphones",
      category: "Electronics",
      tags: ["audio", "wireless", "premium"],
      description: "High-quality wireless headphones with noise cancellation",
      coverImage:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&h=500&fit=crop",
      imgs: [
        {
          url: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&h=500&fit=crop",
          name: "headphones",
        },
      ],
      pricingModel: "paid",
      basePrice: 199.99,
      finalPrice: 149.99,
      discount: 25,
    },
    {
      title: "Mechanical Keyboard",
      category: "Accessories",
      tags: ["gaming", "keyboard", "rgb"],
      description: "RGB mechanical keyboard for gaming and typing",
      coverImage:
        "https://images.unsplash.com/photo-1587829191301-6f359c1ef882?w=500&h=500&fit=crop",
      imgs: [
        {
          url: "https://images.unsplash.com/photo-1587829191301-6f359c1ef882?w=500&h=500&fit=crop",
          name: "keyboard",
        },
      ],
      pricingModel: "paid",
      basePrice: 129.99,
      finalPrice: 99.99,
      discount: 23,
    },
    {
      title: "USB-C Cable",
      category: "Cables",
      tags: ["charging", "usb-c", "durable"],
      description: "Fast charging USB-C cable with braided design",
      coverImage:
        "https://images.unsplash.com/photo-1625948515291-69613efd103f?w=500&h=500&fit=crop",
      imgs: [
        {
          url: "https://images.unsplash.com/photo-1625948515291-69613efd103f?w=500&h=500&fit=crop",
          name: "cable",
        },
      ],
      pricingModel: "paid",
      basePrice: 19.99,
      finalPrice: 14.99,
      discount: 25,
    },
    {
      title: "Laptop Stand",
      category: "Accessories",
      tags: ["ergonomic", "workspace", "adjustable"],
      description: "Adjustable aluminum laptop stand for better posture",
      coverImage:
        "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=500&h=500&fit=crop",
      imgs: [
        {
          url: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=500&h=500&fit=crop",
          name: "stand",
        },
      ],
      pricingModel: "paid",
      basePrice: 49.99,
      finalPrice: 39.99,
      discount: 20,
    },
    {
      title: "Wireless Mouse",
      category: "Peripherals",
      tags: ["mouse", "wireless", "ergonomic"],
      description: "Precision wireless mouse with long battery life",
      coverImage:
        "https://images.unsplash.com/photo-1527814050087-3793815479db?w=500&h=500&fit=crop",
      imgs: [
        {
          url: "https://images.unsplash.com/photo-1527814050087-3793815479db?w=500&h=500&fit=crop",
          name: "mouse",
        },
      ],
      pricingModel: "paid",
      basePrice: 79.99,
      finalPrice: 59.99,
      discount: 25,
    },
    {
      title: "Desk Lamp",
      category: "Lighting",
      tags: ["led", "adjustable", "workspace"],
      description:
        "LED desk lamp with adjustable brightness and color temperature",
      coverImage:
        "https://images.unsplash.com/photo-1565636192335-14b6f56ce398?w=500&h=500&fit=crop",
      imgs: [
        {
          url: "https://images.unsplash.com/photo-1565636192335-14b6f56ce398?w=500&h=500&fit=crop",
          name: "lamp",
        },
      ],
      pricingModel: "paid",
      basePrice: 59.99,
      finalPrice: 44.99,
      discount: 25,
    },
  ];

  return (
    <div className="w-full flex flex-col p-5">
      <div className="w-full flex items-center p-5">
        <div className="w-full flex items-start lg:justify-start flex-col gap-1">
          <h1 className="text-2xl lg:text-4xl font-bold">My Products</h1>
          <p className="text-sm text-muted-foreground">
            Manage and organize all your products in one place.{" "}
            <span className="hidden lg:inline">
              View, edit, or add new items to your inventory.
            </span>
          </p>
        </div>
        <div className="w-full flex items-center justify-end">
          <ProductModal />
        </div>
      </div>
      <div className="w-full flex flex-col items-center lg:flex-row flex-wrap p-5 gap-3">
        {mockProducts.map((item, idx) => (
          <ProductDashboardCard data={item} key={idx} />
        ))}
      </div>
    </div>
  );
}

export default page;
