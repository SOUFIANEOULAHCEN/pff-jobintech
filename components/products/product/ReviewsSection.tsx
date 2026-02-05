import { forwardRef } from "react";
import { StarRating } from "./StarRating";
import { Review } from "@/data/product-data";

interface ReviewsSectionProps {
  reviews: Review[];
  averageRating: number;
  totalReviews: number;
}

export const ReviewsSection = forwardRef<HTMLDivElement, ReviewsSectionProps>(
  ({ reviews, averageRating, totalReviews }, ref) => {
    const formatDate = (dateString: string) => {
      return new Date(dateString).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      });
    };

    return (
      <section ref={ref} className="border-t border-border pt-8">
        {/* Header */}
        <div className="flex flex-col gap-4 mb-8 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-2xl font-serif font-medium mb-2">Customer Reviews</h2>
            <div className="flex items-center gap-3">
              <StarRating rating={averageRating} showValue />
              <span className="text-sm text-muted-foreground">
                Based on {totalReviews} reviews
              </span>
            </div>
          </div>
        </div>

        {/* Review List */}
        <div className="grid gap-6">
          {reviews.map((review) => (
            <article
              key={review.id}
              className="pb-6 border-b border-border last:border-0"
            >
              <div className="flex items-start justify-between gap-4 mb-3">
                <div>
                  <p className="font-medium">{review.reviewerName}</p>
                  <p className="text-sm text-muted-foreground">
                    {formatDate(review.date)}
                  </p>
                </div>
                <StarRating rating={review.rating} size="sm" />
              </div>
              <p className="text-muted-foreground leading-relaxed">
                {review.text}
              </p>
            </article>
          ))}
        </div>
      </section>
    );
  }
);

ReviewsSection.displayName = "ReviewsSection";
