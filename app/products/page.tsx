"use client";

import { useEffect, useMemo, useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";

import Navbar from "@/components/Home/Navbar";
import { Filters, FilterSidebar } from "@/components/products/FilterSidebar";
import { PageHeader } from "@/components/products/PageHeader";
import { ResultsBar } from "@/components/products/ResultsBar";
import { ProductGrid } from "@/components/products/ProductGrid";
import { Pagination } from "@/components/products/Pagination";
import { EmptyState } from "@/components/products/EmptyState";
import { products } from "@/data/product-data";
import Footer from "@/components/Home/Footer";

const ITEMS_PER_PAGE = 9;

const Page = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  const [filters, setFilters] = useState<Filters>({
    categories: [],
    priceType: "all",
    minPrice: undefined,
    maxPrice: undefined,
    rating: undefined,
    sortBy: "newest",
  });

  const filteredProducts = useMemo(() => {
    return products
      .filter((p) => {
        if (
          filters.categories.length &&
          !filters.categories.includes(p.category)
        )
          return false;

        if (filters.priceType === "free" && p.price > 0) return false;
        if (filters.priceType === "paid" && p.price === 0) return false;

        if (filters.minPrice !== undefined && p.price < filters.minPrice)
          return false;

        if (filters.maxPrice !== undefined && p.price > filters.maxPrice)
          return false;

        if (filters.rating && p.rating < filters.rating) return false;

        return true;
      })
      .sort((a, b) => {
        switch (filters.sortBy) {
          case "price-low":
            return a.price - b.price;
          case "price-high":
            return b.price - a.price;
          case "rating":
            return b.rating - a.rating;
          case "newest":
          default:
            return Number(b.id) - Number(a.id);
        }
      });
  }, [filters]);

  const totalPages = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE);

  const paginatedProducts = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    const end = start + ITEMS_PER_PAGE;
    return filteredProducts.slice(start, end);
  }, [filteredProducts, currentPage]);

  useEffect(() => {
    setCurrentPage(1);
  }, [filters]);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <div className="h-20" />

      {/* Mobile Filters */}
      <Sheet open={mobileFiltersOpen} onOpenChange={setMobileFiltersOpen}>
        <SheetContent side="left" className="w-[300px] sm:w-[350px]">
          <SheetHeader>
            <SheetTitle>Filters</SheetTitle>
          </SheetHeader>
          <div className="mt-6">
            <FilterSidebar filters={filters} onChange={setFilters} />
          </div>
        </SheetContent>
      </Sheet>

      <main className="px-4 md:px-6 py-8 md:py-12 w-full">
        <PageHeader />

        <div className="flex gap-8 lg:gap-12">
          <FilterSidebar
            filters={filters}
            onChange={setFilters}
            className="hidden md:block w-64"
          />

          {/* Content */}
          <div className="flex-1 min-w-0">
            <ResultsBar
              totalResults={filteredProducts.length}
              sortBy={filters.sortBy}
              onSortChange={(value) =>
                setFilters((prev) => ({ ...prev, sortBy: value }))
              }
            />

            {filteredProducts.length ? (
              <>
                <ProductGrid products={paginatedProducts} />

                {totalPages > 1 && (
                  <Pagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={setCurrentPage}
                  />
                )}
              </>
            ) : (
              <EmptyState
                onClearFilters={() =>
                  setFilters({
                    categories: [],
                    priceType: "all",
                    minPrice: undefined,
                    maxPrice: undefined,
                    rating: undefined,
                    sortBy: "newest",
                  })
                }
              />
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Page;
