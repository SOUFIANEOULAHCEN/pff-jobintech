import { Star, MessageSquare, Archive, Filter } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const reviews = [
  {
    id: 1,
    product: "Ultimate UI Kit",
    productImage:
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=80&h=80&fit=crop",
    reviewer: "John Smith",
    rating: 5,
    text: "Absolutely amazing quality! The components are well-organized and the documentation is excellent. Saved me weeks of work.",
    date: "Mar 15, 2024",
    replied: false,
  },
  {
    id: 2,
    product: "React Component Library",
    productImage:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=80&h=80&fit=crop",
    reviewer: "Sarah Johnson",
    rating: 4,
    text: "Great library with useful components. Would love to see more animation options in future updates.",
    date: "Mar 14, 2024",
    replied: true,
  },
  {
    id: 3,
    product: "Icon Collection Pro",
    productImage:
      "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=80&h=80&fit=crop",
    reviewer: "Mike Chen",
    rating: 5,
    text: "Best icon pack I've ever purchased. The variety and quality are unmatched. Highly recommended!",
    date: "Mar 13, 2024",
    replied: false,
  },
  {
    id: 4,
    product: "Notion Templates Pack",
    productImage:
      "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=80&h=80&fit=crop",
    reviewer: "Emma Wilson",
    rating: 3,
    text: "Good templates but some of them are a bit basic. Expected more advanced features for the price.",
    date: "Mar 12, 2024",
    replied: true,
  },
  {
    id: 5,
    product: "E-commerce Starter Kit",
    productImage:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=80&h=80&fit=crop",
    reviewer: "Alex Turner",
    rating: 5,
    text: "Perfect starter kit for my e-commerce project. Clean code and easy to customize. Great support too!",
    date: "Mar 11, 2024",
    replied: false,
  },
];

const renderStars = (rating: number) => {
  return Array.from({ length: 5 }, (_, i) => (
    <Star
      key={i}
      className={`h-3.5 w-3.5 ${
        i < rating ? "fill-primary text-primary" : "text-muted"
      }`}
    />
  ));
};

const ReviewsPage = () => {
  return (
    <div className="w-full flex flex-col p-6">
      <div className="w-full flex items-center py-5">
        <div className="w-full flex items-start lg:justify-start flex-col gap-1">
          <h1 className="text-2xl lg:text-4xl font-bold">Latest Reviews</h1>
          <p className="text-sm text-muted-foreground">
            Manage and organize all your products in one place.{" "}
            <span className="hidden lg:inline">
              View, edit, or add new items to your inventory.
            </span>
          </p>
        <p className="text-xs text-muted-foreground mt-2">
            You have <span className="font-semibold">{reviews.length} reviews</span> from your customers. Respond to feedback and build trust with your audience.
        </p>
        </div>
      </div>
      <div className="flex items-center gap-4 mb-6">
        <Select defaultValue="all">
          <SelectTrigger className="w-[180px] bg-card">
            <SelectValue placeholder="All Products" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Products</SelectItem>
            <SelectItem value="ui-kit">Ultimate UI Kit</SelectItem>
            <SelectItem value="react">React Component Library</SelectItem>
            <SelectItem value="icons">Icon Collection Pro</SelectItem>
          </SelectContent>
        </Select>
        <Select defaultValue="all">
          <SelectTrigger className="w-[140px] bg-card">
            <SelectValue placeholder="Rating" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Ratings</SelectItem>
            <SelectItem value="5">5 Stars</SelectItem>
            <SelectItem value="4">4 Stars</SelectItem>
            <SelectItem value="3">3 Stars</SelectItem>
            <SelectItem value="2">2 Stars</SelectItem>
            <SelectItem value="1">1 Star</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Reviews List */}
      <div className="space-y-4">
        {reviews.map((review) => (
          <Card key={review.id} className="p-5 bg-card border-border">
            <div className="flex gap-4">
              <img
                src={review.productImage}
                alt={review.product}
                className="w-14 h-14 rounded-lg object-cover flex-shrink-0"
              />
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-sm font-medium text-foreground">
                      {review.product}
                    </h3>
                    <div className="flex items-center gap-2 mt-1">
                      <div className="flex">{renderStars(review.rating)}</div>
                      <span className="text-xs text-muted-foreground">
                        by {review.reviewer}
                      </span>
                    </div>
                  </div>
                  <span className="text-xs text-muted-foreground flex-shrink-0">
                    {review.date}
                  </span>
                </div>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  {review.text}
                </p>
                <div className="flex items-center gap-2 mt-4">
                  <Button variant="outline" size="sm" className="h-8 text-xs">
                    <MessageSquare className="mr-1.5 h-3 w-3" />
                    {review.replied ? "View Reply" : "Reply"}
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="h-8 text-xs text-muted-foreground"
                  >
                    <Archive className="mr-1.5 h-3 w-3" />
                    Archive
                  </Button>
                  {review.replied && (
                    <Badge variant="secondary" className="text-xs ml-auto">
                      Replied
                    </Badge>
                  )}
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ReviewsPage;
