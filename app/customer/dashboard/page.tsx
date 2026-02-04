import { Card } from "@/components/ui/card";
import { ShoppingBag, Download, Star, Heart, FileDown, CreditCard, MessageSquare } from "lucide-react";
import { cn } from "@/lib/utils";

const summaryCards = [
  { label: "Total Purchases", value: "24" },
  { label: "Active Downloads", value: "18" },
  { label: "Reviews Written", value: "12" },
  { label: "Wishlist Items", value: "7" },
];

const recentActivity = [
  {
    icon: FileDown,
    text: "Downloaded Ultimate UI Kit",
    time: "5 minutes ago",
    iconBg: "bg-primary/10 text-primary",
  },
  {
    icon: CreditCard,
    text: "Purchased React Components Pro",
    time: "2 hours ago",
    iconBg: "bg-primary/10 text-primary",
  },
  {
    icon: MessageSquare,
    text: "Left a review on Notion Templates",
    time: "Yesterday",
    iconBg: "bg-accent text-accent-foreground",
  },
  {
    icon: FileDown,
    text: "Downloaded Icon Pack Premium",
    time: "2 days ago",
    iconBg: "bg-muted/50 text-muted-foreground",
  },
  {
    icon: CreditCard,
    text: "Purchased Figma Design System",
    time: "3 days ago",
    iconBg: "bg-muted/50 text-muted-foreground",
  },
  {
    icon: Heart,
    text: "Added to wishlist: Tailwind Starter Kit",
    time: "4 days ago",
    iconBg: "bg-muted/50 text-muted-foreground",
  },
];

export default function CustomerOverviewPage() {
  return (
    <>
      <div className="space-y-6">
        {/* Welcome Block */}
        <div>
          <h2 className="text-2xl font-semibold text-foreground">
            Welcome back, Alex
          </h2>
          <p className="mt-1 text-muted-foreground">
            Your digital library at a glance
          </p>
        </div>

        {/* Summary Cards */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {summaryCards.map((card) => (
            <Card key={card.label} className="p-5 bg-card border-border">
              <p className="text-sm text-muted-foreground">{card.label}</p>
              <p className="mt-1 text-3xl font-semibold text-foreground">
                {card.value}
              </p>
            </Card>
          ))}
        </div>

        {/* Recent Activity */}
        <Card className="p-5 bg-card border-border">
          <h3 className="text-sm font-medium text-foreground">Recent Activity</h3>
          <div className="mt-4 space-y-4">
            {recentActivity.map((activity, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className={cn("rounded-full p-2", activity.iconBg)}>
                  <activity.icon className="h-3.5 w-3.5" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-foreground">{activity.text}</p>
                  <p className="text-xs text-muted-foreground">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </>
  );
}
