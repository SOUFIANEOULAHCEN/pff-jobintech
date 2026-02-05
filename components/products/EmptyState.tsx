import { Package } from "lucide-react";
import { Button } from "@/components/ui/button";

interface EmptyStateProps {
  onClearFilters: () => void;
}

export function EmptyState({ onClearFilters }: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center py-20 text-center">
      <div className="rounded-full bg-secondary p-4 mb-4">
        <Package className="h-8 w-8 text-muted-foreground" />
      </div>
      <h3 className="text-lg font-medium text-foreground mb-2">
        No products match your filters
      </h3>
      <p className="text-muted-foreground mb-6 max-w-sm">
        Try adjusting your filters or search terms to find what you&apos;re looking for.
      </p>
      <Button onClick={onClearFilters}>
        Clear filters
      </Button>
    </div>
  );
}
