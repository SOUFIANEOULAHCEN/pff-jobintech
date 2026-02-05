"use client";

import { Star, RotateCcw } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export type Filters = {
  categories: string[];
  priceType: "all" | "free" | "paid";
  minPrice?: number;
  maxPrice?: number;
  rating?: number;
  sortBy: string;
};

const categories = [
  { id: "ebooks", label: "Ebooks", count: 342 },
  { id: "courses", label: "Courses", count: 156 },
  { id: "software", label: "Software", count: 1 },
  { id: "art", label: "Art", count: 1 },
  { id: "design-assets", label: "Design assets", count: 1 },
  { id: "ui-kit", label: "Ui Kits", count: 2 },
  { id: "play-game", label: "Play Game", count: 1 },
  { id: "app", label: "Apps", count: 2 },
  { id: "tools", label: "Tools", count: 67 },
];

const ratings = [
  { value: "4", label: "4★ & up" },
  { value: "3", label: "3★ & up" },
  { value: "2", label: "2★ & up" },
];

interface FilterSidebarProps {
  filters: Filters;
  onChange: (filters: Filters) => void;
  className?: string;
}

export function FilterSidebar({
  filters,
  onChange,
  className,
}: FilterSidebarProps) {
  const toggleCategory = (id: string) => {
    const updated = filters.categories.includes(id)
      ? filters.categories.filter((c) => c !== id)
      : [...filters.categories, id];

    onChange({ ...filters, categories: updated });
  };

  const resetFilters = () => {
    onChange({
      categories: [],
      priceType: "all",
      minPrice: undefined,
      maxPrice: undefined,
      rating: undefined,
      sortBy: "newest",
    });
  };

  const hasActiveFilters =
    filters.categories.length ||
    filters.priceType !== "all" ||
    filters.minPrice ||
    filters.maxPrice ||
    filters.rating;

  return (
    <aside className={className}>
      <div className="sticky top-20 space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="font-medium">Filters</h2>
          {hasActiveFilters && (
            <Button
              variant="ghost"
              size="sm"
              onClick={resetFilters}
              className="h-auto p-0 text-muted-foreground hover:text-foreground"
            >
              <RotateCcw className="h-3 w-3 mr-1" />
              Reset
            </Button>
          )}
        </div>

        <Accordion
          type="multiple"
          defaultValue={["category", "price", "rating", "sort"]}
        >
          {/* CATEGORY */}
          <AccordionItem value="category">
            <AccordionTrigger>Category</AccordionTrigger>
            <AccordionContent className="space-y-3 overflow-y-auto scroll-smooth">
              {categories.map((cat) => (
                <div key={cat.id} className="flex items-center gap-2">
                  <Checkbox
                    checked={filters.categories.includes(cat.id)}
                    onCheckedChange={() => toggleCategory(cat.id)}
                  />
                  <Label className="flex-1 cursor-pointer">{cat.label}</Label>
                  <span className="text-xs text-muted-foreground">
                    {cat.count}
                  </span>
                </div>
              ))}
            </AccordionContent>
          </AccordionItem>

          {/* PRICE */}
          <AccordionItem value="price">
            <AccordionTrigger>Price</AccordionTrigger>
            <AccordionContent className="space-y-4">
              <RadioGroup
                value={filters.priceType}
                onValueChange={(v) =>
                  onChange({ ...filters, priceType: v as Filters["priceType"] })
                }
              >
                {["all", "free", "paid"].map((p) => (
                  <div key={p} className="flex items-center gap-2">
                    <RadioGroupItem value={p} />
                    <Label className="capitalize">{p}</Label>
                  </div>
                ))}
              </RadioGroup>

              <div className="flex gap-2">
                <Input
                  type="number"
                  placeholder="Min"
                  value={filters.minPrice ?? ""}
                  onChange={(e) =>
                    onChange({
                      ...filters,
                      minPrice: e.target.value
                        ? Number(e.target.value)
                        : undefined,
                    })
                  }
                />
                <Input
                  type="number"
                  placeholder="Max"
                  value={filters.maxPrice ?? ""}
                  onChange={(e) =>
                    onChange({
                      ...filters,
                      maxPrice: e.target.value
                        ? Number(e.target.value)
                        : undefined,
                    })
                  }
                />
              </div>
            </AccordionContent>
          </AccordionItem>

          {/* RATING */}
          <AccordionItem value="rating">
            <AccordionTrigger>Rating</AccordionTrigger>
            <AccordionContent>
              <RadioGroup
                value={filters.rating?.toString() ?? ""}
                onValueChange={(v) =>
                  onChange({ ...filters, rating: Number(v) })
                }
              >
                {ratings.map((r) => (
                  <div key={r.value} className="flex items-center gap-2">
                    <RadioGroupItem value={r.value} />
                    <Label className="flex items-center gap-1">
                      <Star className="h-3 w-3 fill-accent text-accent" />
                      {r.label}
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </AccordionContent>
          </AccordionItem>

          {/* SORT */}
          <AccordionItem value="sort">
            <AccordionTrigger>Sort by</AccordionTrigger>
            <AccordionContent>
              <Select
                value={filters.sortBy}
                onValueChange={(v) => onChange({ ...filters, sortBy: v })}
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="newest">Newest</SelectItem>
                  <SelectItem value="rating">Best rated</SelectItem>
                  <SelectItem value="price-low">Price: low → high</SelectItem>
                  <SelectItem value="price-high">Price: high → low</SelectItem>
                </SelectContent>
              </Select>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </aside>
  );
}
