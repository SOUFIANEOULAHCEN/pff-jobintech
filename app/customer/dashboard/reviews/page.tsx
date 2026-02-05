import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Star, Pencil, Trash2 } from "lucide-react";
import { cn } from "@/lib/utils";

const reviews = [
  {
    id: 1,
    productName: "Ultimate UI Kit",
    productImage:
      "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=100&h=100&fit=crop",
    rating: 5,
    text: "Absolutely fantastic UI kit! The components are well-organized and easy to customize. Saved me countless hours on my project.",
    date: "Jan 15, 2024",
  },
  {
    id: 2,
    productName: "React Components Pro",
    productImage:
      "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=100&h=100&fit=crop",
    rating: 4,
    text: "Great collection of React components. Documentation could be better, but overall a solid purchase.",
    date: "Jan 10, 2024",
  },
  {
    id: 3,
    productName: "Notion Templates Bundle",
    productImage:
      "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=100&h=100&fit=crop",
    rating: 5,
    text: "These templates transformed my workflow. The project management template alone was worth the price.",
    date: "Jan 5, 2024",
  },
  {
    id: 4,
    productName: "Icon Collection Premium",
    productImage:
      "https://images.unsplash.com/photo-1618788372246-79faff0c3742?w=100&h=100&fit=crop",
    rating: 4,
    text: "Beautiful icons with consistent style. Would love to see more categories added in future updates.",
    date: "Dec 28, 2023",
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          className={cn(
            "h-4 w-4",
            star <= rating
              ? "fill-primary text-primary"
              : "fill-muted text-muted",
          )}
        />
      ))}
    </div>
  );
}

export default function CustomerReviewsPage() {
  return (
    <div className="w-full flex flex-col gap-5">
      <div>
        <h2 className="text-2xl font-semibold text-foreground">
          Your Reviews
        </h2>
        <p className="mt-1 text-muted-foreground">
        Manage and track all your product reviews in one place. Edit or delete your reviews anytime.
        </p>
      </div>
      <div className="space-y-6">
        <div className="flex flex-wrap items-center gap-3">
          <Select defaultValue="all">
            <SelectTrigger className="w-[140px] bg-card">
              <SelectValue placeholder="Rating" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All ratings</SelectItem>
              <SelectItem value="5">5 stars</SelectItem>
              <SelectItem value="4">4 stars</SelectItem>
              <SelectItem value="3">3 stars</SelectItem>
              <SelectItem value="2">2 stars</SelectItem>
              <SelectItem value="1">1 star</SelectItem>
            </SelectContent>
          </Select>
          <Select defaultValue="newest">
            <SelectTrigger className="w-[140px] bg-card">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="newest">Newest first</SelectItem>
              <SelectItem value="oldest">Oldest first</SelectItem>
              <SelectItem value="highest">Highest rated</SelectItem>
              <SelectItem value="lowest">Lowest rated</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Reviews Summary */}
        <div className="grid gap-4 sm:grid-cols-3">
          <Card className="p-4 bg-card border-border">
            <p className="text-xs text-muted-foreground">Total Reviews</p>
            <p className="mt-1 text-2xl font-semibold text-foreground">12</p>
          </Card>
          <Card className="p-4 bg-card border-border">
            <p className="text-xs text-muted-foreground">Average Rating</p>
            <div className="mt-1 flex items-center gap-2">
              <p className="text-2xl font-semibold text-foreground">4.5</p>
              <StarRating rating={5} />
            </div>
          </Card>
          <Card className="p-4 bg-card border-border">
            <p className="text-xs text-muted-foreground">5-Star Reviews</p>
            <p className="mt-1 text-2xl font-semibold text-foreground">8</p>
          </Card>
        </div>

        {/* Reviews List */}
        <div className="space-y-4">
          {reviews.map((review) => (
            <Card key={review.id} className="p-5 bg-card border-border">
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-start gap-4">
                  <img
                    src={review.productImage}
                    alt={review.productName}
                    className="h-12 w-12 rounded-md object-cover"
                  />
                  <div className="flex-1">
                    <h3 className="font-medium text-foreground">
                      {review.productName}
                    </h3>
                    <div className="mt-1 flex items-center gap-2">
                      <StarRating rating={review.rating} />
                      <span className="text-xs text-muted-foreground">
                        {review.date}
                      </span>
                    </div>
                    <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                      {review.text}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-1">
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    <Pencil className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8 text-destructive hover:text-destructive hover:bg-destructive/10"
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
