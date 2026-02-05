import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface ResultsBarProps {
  totalResults: number;
  activeFilters?: string[];
  sortBy: string;
  onSortChange: (value: string) => void;
  onClearFilter?: (filter: string) => void;
}

export function ResultsBar({
  totalResults,
  activeFilters = [],
  sortBy,
  onSortChange,
  onClearFilter,
}: ResultsBarProps) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
      <div className="flex items-center gap-3 flex-wrap">
        <span className="text-sm text-muted-foreground">
          {totalResults.toLocaleString()} products
        </span>
        
        {activeFilters.length > 0 && (
          <div className="flex items-center gap-2 flex-wrap">
            {activeFilters.map((filter) => (
              <Badge
                key={filter}
                variant="secondary"
                className="gap-1 pr-1.5 font-normal"
              >
                {filter}
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-4 w-4 hover:bg-transparent"
                  onClick={() => onClearFilter?.(filter)}
                >
                  <X className="h-3 w-3" />
                </Button>
              </Badge>
            ))}
          </div>
        )}
      </div>

      <Select value={sortBy} onValueChange={onSortChange}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Sort by" />
        </SelectTrigger>
        <SelectContent className="bg-popover border-border">
          <SelectItem value="newest">Newest</SelectItem>
          <SelectItem value="popular">Popular</SelectItem>
          <SelectItem value="rating">Best rated</SelectItem>
          <SelectItem value="price-low">Price: low → high</SelectItem>
          <SelectItem value="price-high">Price: high → low</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}
