import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { KPICard } from "@/components/dashboard/sales dashboard/KPICard";
import { DashboardHeader } from "@/components/dashboard/DashboardHeader";
import { Button } from "@/components/ui/button";
import { Bell } from "lucide-react";
import { ThemeButton } from "@/components/ThemeButton";

const sales = [
  {
    id: "INV-001",
    product: "Ultimate UI Kit",
    buyer: "john@example.com",
    price: "$49.00",
    date: "Mar 15, 2024",
    status: "Completed",
  },
  {
    id: "INV-002",
    product: "React Component Library",
    buyer: "sarah@company.co",
    price: "$79.00",
    date: "Mar 14, 2024",
    status: "Completed",
  },
  {
    id: "INV-003",
    product: "Icon Collection Pro",
    buyer: "mike@design.io",
    price: "$39.00",
    date: "Mar 14, 2024",
    status: "Completed",
  },
  {
    id: "INV-004",
    product: "Notion Templates Pack",
    buyer: "lisa@startup.com",
    price: "$29.00",
    date: "Mar 13, 2024",
    status: "Refunded",
  },
  {
    id: "INV-005",
    product: "E-commerce Starter Kit",
    buyer: "alex@tech.dev",
    price: "$129.00",
    date: "Mar 13, 2024",
    status: "Completed",
  },
  {
    id: "INV-006",
    product: "Ultimate UI Kit",
    buyer: "emma@freelance.co",
    price: "$49.00",
    date: "Mar 12, 2024",
    status: "Completed",
  },
  {
    id: "INV-007",
    product: "React Component Library",
    buyer: "david@agency.com",
    price: "$79.00",
    date: "Mar 12, 2024",
    status: "Pending",
  },
];

const SalesPage = () => {
  return (
    <>
      <div className="w-full h-20 flex items-center justify-between px-4">
        <h1 className="text-xl lg:text-4xl font-bold flex gap-2">
          <span className="hidden lg:block">Sales</span>
        </h1>
        <div className="flex w-[30%] h-full items-center justify-end gap-3">
          <Button className="w-12 h-12 shadow" variant={"secondary"}>
            <Bell size={25} />
          </Button>
          <ThemeButton />
        </div>
      </div>
      {/* Summary Cards */}
      <div className="grid gap-4 sm:grid-cols-3 mb-6">
        <KPICard
          label="Total Sales"
          value="482"
          trend={8.2}
          trendLabel="this month"
        />
        <KPICard
          label="Revenue This Month"
          value="$8,420"
          trend={15.3}
          trendLabel="vs last month"
        />
        <KPICard label="Best Seller" value="Icon Collection Pro" />
      </div>

      {/* Filters */}
      <div className="flex items-center gap-4 mb-4">
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
            <SelectValue placeholder="Status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Status</SelectItem>
            <SelectItem value="completed">Completed</SelectItem>
            <SelectItem value="pending">Pending</SelectItem>
            <SelectItem value="refunded">Refunded</SelectItem>
          </SelectContent>
        </Select>
      </div>


        <Table className="border">
          <TableHeader>
            <TableRow className="hover:bg-transparent">
              <TableHead className="text-muted-foreground">Product</TableHead>
              <TableHead className="text-muted-foreground">Buyer</TableHead>
              <TableHead className="text-muted-foreground">Price</TableHead>
              <TableHead className="text-muted-foreground">Date</TableHead>
              <TableHead className="text-muted-foreground">Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {sales.map((sale) => (
              <TableRow key={sale.id} className="hover:bg-muted/30">
                <TableCell className="font-medium text-foreground">
                  {sale.product}
                </TableCell>
                <TableCell className="text-muted-foreground">
                  {sale.buyer}
                </TableCell>
                <TableCell className="text-foreground">{sale.price}</TableCell>
                <TableCell className="text-muted-foreground">
                  {sale.date}
                </TableCell>
                <TableCell>
                  <Badge
                    variant={
                      sale.status === "Completed"
                        ? "default"
                        : sale.status === "Pending"
                          ? "secondary"
                          : "destructive"
                    }
                    className="text-xs"
                  >
                    {sale.status}
                  </Badge>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
    </>
  );
};

export default SalesPage;
