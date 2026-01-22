"use client";
import React from "react";
import {
  Search,
  ChevronDown,
  Star
} from "lucide-react";

// --- Types ---
interface Product {
  id: number;
  title: string;
  creator: string;
  creatorAvatar: string; // Changed to required string for image URL
  price: string;
  rating: number;
  reviews: number;
  image: string;
}

// --- Data Configuration (with Real Creator Images) ---
const PRODUCTS: Product[] = [
  {
    id: 1,
    title: "Abstract 3D Pack Vol. 2",
    creator: "Sarah Design",
    creatorAvatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop",
    price: "$49",
    rating: 5,
    reviews: 128,
    image:
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Notion Life OS",
    creator: "James Work",
    creatorAvatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=150&auto=format&fit=crop",
    price: "$29",
    rating: 4.8,
    reviews: 85,
    image:
      "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=2672&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Ultimate UI Kit",
    creator: "Design Master",
    creatorAvatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150&auto=format&fit=crop",
    price: "$89",
    rating: 4.9,
    reviews: 210,
    image:
      "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?q=80&w=2670&auto=format&fit=crop",
  },
  {
    id: 4,
    title: "React Hooks Library",
    creator: "Code Ninja",
    creatorAvatar:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=150&auto=format&fit=crop",
    price: "$0",
    rating: 5,
    reviews: 324,
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2670&auto=format&fit=crop",
  },
  {
    id: 5,
    title: "The Freelance Guide",
    creator: "Emily White",
    creatorAvatar:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=150&auto=format&fit=crop",
    price: "$19",
    rating: 4.7,
    reviews: 56,
    image:
      "https://images.unsplash.com/photo-1455390582262-044cdead277a?q=80&w=2573&auto=format&fit=crop",
  },
  {
    id: 6,
    title: "Super Icons Set",
    creator: "Iconify",
    creatorAvatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop",
    price: "$24",
    rating: 4.6,
    reviews: 92,
    image:
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=2000&auto=format&fit=crop",
  },
  {
    id: 7,
    title: "Lo-Fi Beats Pack",
    creator: "Audio Lab",
    creatorAvatar:
      "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=150&auto=format&fit=crop",
    price: "$15",
    rating: 4.8,
    reviews: 45,
    image:
      "https://images.unsplash.com/photo-1511379938547-c1f69419868d?q=80&w=2670&auto=format&fit=crop",
  },
  {
    id: 8,
    title: "Pitch Deck Template",
    creator: "Startup Pro",
    creatorAvatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=150&auto=format&fit=crop",
    price: "$39",
    rating: 4.9,
    reviews: 178,
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop",
  },
];

const FILTERS = ["Category", "Price Range", "Rating", "Creator"];

const FOOTER_LINKS = {
  Marketplace: ["About", "Blog", "Jobs", "Brand"],
  Product: ["Features", "Pricing", "Testimonials", "Integration"],
  Support: ["Help Center", "Guidelines", "Terms of Service", "Privacy Policy"],
};

// --- Sub-Components ---

const ProductCard = ({ product }: { product: Product }) => (
  <div className="group bg-card text-card-foreground rounded-2xl overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-border/40">
    {/* Product Image Area */}
    <div className="aspect-[4/3] overflow-hidden bg-muted relative">
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
    </div>

    {/* Content Area */}
    <div className="p-5">
      <h3 className="font-bold text-lg mb-2 truncate">{product.title}</h3>

      {/* Creator with Real Avatar Image */}
      <div className="flex items-center gap-2 mb-4">
        <img
          src={product.creatorAvatar}
          alt={product.creator}
          className="w-5 h-5 rounded-full object-cover border border-border/50"
        />
        <span className="text-sm text-muted-foreground">{product.creator}</span>
      </div>

      {/* Footer: Price & Rating */}
      <div className="flex items-center justify-between mt-auto">
        <span className="text-lg font-bold text-foreground">
          {product.price}
        </span>
        <div className="flex items-center gap-1.5">
          <div className="flex">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star
                key={star}
                className={`w-3.5 h-3.5 ${star <= Math.round(product.rating) ? "fill-orange-400 text-orange-400" : "text-muted"}`}
              />
            ))}
          </div>
          <span className="text-xs text-muted-foreground">
            ({product.reviews})
          </span>
        </div>
      </div>
    </div>
  </div>
);

const DiscoverProducts = () => {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <section className="pt-16 pb-12 px-6 text-center max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
          Discover Digital Products
        </h1>
        <p className="text-lg text-muted-foreground mb-10">
          Ebooks, courses, and software created by independent makers.
        </p>

        {/* Large Search Bar */}
        <div className="relative max-w-2xl mx-auto">
          <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-muted-foreground/60" />
          </div>
          <input
            type="text"
            placeholder="Search ebooks, courses, software..."
            className="w-full pl-12 pr-4 py-4 rounded-full bg-card border border-border shadow-sm focus:ring-2 focus:ring-primary/20 focus:border-primary focus:outline-none transition-all placeholder:text-muted-foreground/60"
          />
        </div>
      </section>

      {/* 3. Filters & Sorting */}
      <section className="px-6 pb-8 max-w-[1400px] mx-auto">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-3">
            {FILTERS.map((filter) => (
              <button
                key={filter}
                className="flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-background hover:bg-muted/50 transition-colors text-sm font-medium text-foreground"
              >
                {filter}
                <ChevronDown className="w-3.5 h-3.5 text-muted-foreground" />
              </button>
            ))}
            <button className="px-2 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors ml-2">
              Clear filters
            </button>
          </div>

          <div className="flex items-center gap-2 text-sm">
            <span className="text-muted-foreground">Sort by:</span>
            <button className="font-medium flex items-center gap-1 hover:text-primary">
              Most Popular <ChevronDown className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </section>

      {/* 4. Products Grid */}
      <section className="px-6 pb-16 max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10">
          {PRODUCTS.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center items-center gap-8 mt-16">
          <button className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Previous
          </button>
          <div className="flex items-center gap-2">
            <button className="w-9 h-9 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-medium">
              1
            </button>
            <button className="w-9 h-9 rounded-full hover:bg-muted text-muted-foreground flex items-center justify-center text-sm font-medium transition-colors">
              2
            </button>
            <button className="w-9 h-9 rounded-full hover:bg-muted text-muted-foreground flex items-center justify-center text-sm font-medium transition-colors">
              3
            </button>
            <span className="text-muted-foreground text-sm">...</span>
            <button className="w-9 h-9 rounded-full hover:bg-muted text-muted-foreground flex items-center justify-center text-sm font-medium transition-colors">
              12
            </button>
          </div>
          <button className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Next
          </button>
        </div>
      </section>
    </div>
  );
};

export default DiscoverProducts;
