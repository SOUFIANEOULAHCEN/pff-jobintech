import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

interface StarRatingProps {
  rating: number;
  size?: "sm" | "md";
  showValue?: boolean;
}

export function StarRating({
  rating,
  size = "md",
  showValue = false,
}: StarRatingProps) {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  const starSize = size === "sm" ? "h-3.5 w-3.5" : "h-4 w-4";

  return (
    <div className="flex items-center gap-1">
      <div className="flex">
        {[...Array(fullStars)].map((_, i) => (
          <Star
            key={`full-${i}`}
            className={cn(starSize, "fill-foreground text-foreground")}
          />
        ))}
        {hasHalfStar && (
          <div className="relative">
            <Star className={cn(starSize, "text-muted-foreground/30")} />
            <div className="absolute inset-0 overflow-hidden w-1/2">
              <Star
                className={cn(starSize, "fill-foreground text-foreground")}
              />
            </div>
          </div>
        )}
        {[...Array(emptyStars)].map((_, i) => (
          <Star
            key={`empty-${i}`}
            className={cn(starSize, "text-muted-foreground/30")}
          />
        ))}
      </div>
      {showValue && (
        <span className="text-sm font-medium">{rating.toFixed(1)}</span>
      )}
    </div>
  );
}
