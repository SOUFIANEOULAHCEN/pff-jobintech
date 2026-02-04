import { useState } from "react";
import { Check, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import type { Product } from "@/data/product-data";

interface ProductDetailsProps {
  product: Product;
}

type TabId = "description" | "features" | "tags";

export function ProductDetails({ product }: ProductDetailsProps) {
  const [activeTab, setActiveTab] = useState<TabId>("description");
  const [isExpanded, setIsExpanded] = useState(false);

  const tabs: { id: TabId; label: string }[] = [
    { id: "description", label: "Description" },
    { id: "features", label: "Features" },
    { id: "tags", label: "Tags" },
  ];

  const shouldTruncate = product.description.length > 300 && !isExpanded;
  const displayDescription = shouldTruncate
    ? product.description.slice(0, 300) + "..."
    : product.description;

  return (
    <div className="border-t border-border pt-8">
      {/* Tab Navigation */}
      <div className="flex gap-8 border-b border-border">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={cn(
              "pb-4 text-sm font-medium transition-colors relative",
              activeTab === tab.id
                ? "text-foreground"
                : "text-muted-foreground hover:text-foreground"
            )}
          >
            {tab.label}
            {activeTab === tab.id && (
              <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-foreground" />
            )}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="py-8">
        {activeTab === "description" && (
          <div className="max-w-3xl">
            <div className="prose prose-neutral dark:prose-invert">
              <p className="text-muted-foreground leading-relaxed mb-4">
                {displayDescription}
              </p>
            </div>
            {product.description.length > 300 && (
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="flex items-center gap-1 mt-4 text-sm font-medium hover:underline"
              >
                {isExpanded ? "Show less" : "Read more"}
                <ChevronDown 
                  className={cn(
                    "h-4 w-4 transition-transform",
                    isExpanded && "rotate-180"
                  )} 
                />
              </button>
            )}
          </div>
        )}

        {activeTab === "features" && (
          <ul className="grid gap-3 max-w-xl md:grid-cols-2">
            <li className="flex items-start gap-3">
              <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
              <span>Instant digital download</span>
            </li>
            <li className="flex items-start gap-3">
              <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
              <span>Lifetime access</span>
            </li>
            <li className="flex items-start gap-3">
              <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
              <span>Regular updates</span>
            </li>
            <li className="flex items-start gap-3">
              <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
              <span>Premium support</span>
            </li>
          </ul>
        )}

        {activeTab === "tags" && (
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1.5 bg-secondary rounded-full text-sm capitalize">
              {product.category}
            </span>
            {product.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1.5 bg-secondary rounded-full text-sm capitalize"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
