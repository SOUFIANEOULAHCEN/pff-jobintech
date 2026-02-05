import { ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { KPICard } from "@/components/dashboard/sales dashboard/KPICard";

const payouts = [
  {
    id: "PAY-001",
    amount: "$2,450.00",
    method: "Bank Transfer",
    date: "Mar 15, 2024",
    status: "Completed",
  },
  {
    id: "PAY-002",
    amount: "$1,890.00",
    method: "Bank Transfer",
    date: "Feb 28, 2024",
    status: "Completed",
  },
  {
    id: "PAY-003",
    amount: "$3,120.00",
    method: "Bank Transfer",
    date: "Jan 31, 2024",
    status: "Completed",
  },
  {
    id: "PAY-004",
    amount: "$2,780.00",
    method: "PayPal",
    date: "Dec 29, 2023",
    status: "Completed",
  },
  {
    id: "PAY-005",
    amount: "$1,650.00",
    method: "PayPal",
    date: "Nov 30, 2023",
    status: "Completed",
  },
];

const PayoutsPage = () => {
  return (
    <div className="w-full flex flex-col p-6">
      <div className="w-full flex items-center py-5">
        <div className="w-full flex items-start lg:justify-start flex-col gap-1">
          <h1 className="text-2xl lg:text-4xl font-bold">Payouts</h1>
          <p className="text-xs text-muted-foreground mt-2">
            Manage and view your payment and payouts here
          </p>
        </div>
      </div>
      <div className="grid gap-4 sm:grid-cols-3 mb-6">
        <KPICard label="Available Balance" value="$4,280.00" />
        <KPICard label="Pending Payouts" value="$890.00" />
        <KPICard label="Lifetime Earnings" value="$47,280.00" />
      </div>

      {/* Payout Settings Link */}
      <Card className="p-4 bg-card border-border mb-6">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-sm font-medium text-foreground">
              Payout Settings
            </h3>
            <p className="text-xs text-muted-foreground mt-0.5">
              Manage your bank details and payout preferences
            </p>
          </div>
          <Button variant="outline" size="sm">
            Manage
            <ArrowRight className="ml-2 h-3 w-3" />
          </Button>
        </div>
      </Card>

      {/* Payout History */}
      <div>
        <h3 className="text-sm font-medium text-foreground mb-4">
          Payout History
        </h3>
          <Table className="border border-border">
            <TableHeader>
              <TableRow className="hover:bg-transparent">
                <TableHead className="text-muted-foreground">Amount</TableHead>
                <TableHead className="text-muted-foreground">Method</TableHead>
                <TableHead className="text-muted-foreground">Date</TableHead>
                <TableHead className="text-muted-foreground">Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {payouts.map((payout) => (
                <TableRow key={payout.id} className="hover:bg-muted/30">
                  <TableCell className="font-medium text-foreground">
                    {payout.amount}
                  </TableCell>
                  <TableCell className="text-muted-foreground">
                    {payout.method}
                  </TableCell>
                  <TableCell className="text-muted-foreground">
                    {payout.date}
                  </TableCell>
                  <TableCell>
                    <Badge variant="default" className="text-xs">
                      {payout.status}
                    </Badge>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
      </div>
    </div>
  );
};

export default PayoutsPage;
