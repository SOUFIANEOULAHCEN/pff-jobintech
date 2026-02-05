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
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Download, Eye, Star, ShoppingBag } from "lucide-react";

const purchases = [
  {
    id: 1,
    name: "Ultimate UI Kit",
    vendor: "Design Studio Co",
    date: "Jan 15, 2024",
    price: "$49.00",
    status: "Available",
    image:
      "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=100&h=100&fit=crop",
  },
  {
    id: 2,
    name: "React Components Pro",
    vendor: "CodeCraft Labs",
    date: "Jan 12, 2024",
    price: "$79.00",
    status: "Updated",
    image:
      "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=100&h=100&fit=crop",
  },
  {
    id: 3,
    name: "Notion Templates Bundle",
    vendor: "Productivity Plus",
    date: "Jan 8, 2024",
    price: "$29.00",
    status: "Available",
    image:
      "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=100&h=100&fit=crop",
  },
  {
    id: 4,
    name: "Icon Collection Premium",
    vendor: "IconMaster",
    date: "Dec 28, 2023",
    price: "$19.00",
    status: "Available",
    image:
      "https://images.unsplash.com/photo-1618788372246-79faff0c3742?w=100&h=100&fit=crop",
  },
  {
    id: 5,
    name: "Figma Design System",
    vendor: "Design Studio Co",
    date: "Dec 20, 2023",
    price: "$99.00",
    status: "Updated",
    image:
      "https://images.unsplash.com/photo-1609921212029-bb5a28e60960?w=100&h=100&fit=crop",
  },
];

export default function MyPurchasesPage() {
  return (
    <div className="w-full flex flex-col gap-5">
      <div>
        <h2 className="text-2xl font-semibold text-foreground">
          Your Purchases
        </h2>
        <p className="mt-1 text-muted-foreground">
          Your digital Purchases all in one place
        </p>
      </div>
      <div className="space-y-6">
        <div className="flex flex-wrap items-center gap-3">
          <Select defaultValue="all">
            <SelectTrigger className="w-[140px] bg-card">
              <SelectValue placeholder="Date" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All time</SelectItem>
              <SelectItem value="30d">Last 30 days</SelectItem>
              <SelectItem value="90d">Last 90 days</SelectItem>
              <SelectItem value="1y">Last year</SelectItem>
            </SelectContent>
          </Select>
          <Select defaultValue="all">
            <SelectTrigger className="w-[160px] bg-card">
              <SelectValue placeholder="Vendor" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All vendors</SelectItem>
              <SelectItem value="design-studio">Design Studio Co</SelectItem>
              <SelectItem value="codecraft">CodeCraft Labs</SelectItem>
              <SelectItem value="productivity">Productivity Plus</SelectItem>
            </SelectContent>
          </Select>
          <Select defaultValue="all">
            <SelectTrigger className="w-[140px] bg-card">
              <SelectValue placeholder="Type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All types</SelectItem>
              <SelectItem value="templates">Templates</SelectItem>
              <SelectItem value="icons">Icons</SelectItem>
              <SelectItem value="code">Code</SelectItem>
            </SelectContent>
          </Select>
        </div>

          <Table className="border border-border">
            <TableHeader>
              <TableRow className="border-border hover:bg-transparent">
                <TableHead className="text-muted-foreground">Product</TableHead>
                <TableHead className="text-muted-foreground">Vendor</TableHead>
                <TableHead className="text-muted-foreground">Date</TableHead>
                <TableHead className="text-muted-foreground">Price</TableHead>
                <TableHead className="text-muted-foreground">Status</TableHead>
                <TableHead className="text-right text-muted-foreground">
                  Actions
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {purchases.map((purchase) => (
                <TableRow key={purchase.id} className="border-border">
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <img
                        src={purchase.image}
                        alt={purchase.name}
                        className="h-10 w-10 rounded-md object-cover"
                      />
                      <span className="font-medium text-foreground">
                        {purchase.name}
                      </span>
                    </div>
                  </TableCell>
                  <TableCell className="text-muted-foreground">
                    {purchase.vendor}
                  </TableCell>
                  <TableCell className="text-muted-foreground">
                    {purchase.date}
                  </TableCell>
                  <TableCell className="text-foreground font-medium">
                    {purchase.price}
                  </TableCell>
                  <TableCell>
                    <Badge
                      variant={
                        purchase.status === "Updated" ? "default" : "secondary"
                      }
                      className={
                        purchase.status === "Updated"
                          ? "bg-primary/10 text-primary hover:bg-primary/20"
                          : ""
                      }
                    >
                      {purchase.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center justify-end gap-1">
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <Eye className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <Download className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <Star className="h-4 w-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>

        <div className="hidden">
          <Card className="flex flex-col items-center justify-center p-12 bg-card border-border text-center">
            <div className="rounded-full bg-muted/50 p-4">
              <ShoppingBag className="h-8 w-8 text-muted-foreground" />
            </div>
            <h3 className="mt-4 text-lg font-medium text-foreground">
              No purchases yet
            </h3>
            <p className="mt-2 text-sm text-muted-foreground max-w-sm">
              Start building your digital library by exploring our marketplace
            </p>
            <Button className="mt-4">Browse products</Button>
          </Card>
        </div>
      </div>
    </div>
  );
}
