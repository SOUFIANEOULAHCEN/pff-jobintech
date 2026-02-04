import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, TrendingDown, Download, DollarSign, Users, ShoppingCart } from "lucide-react";
import { revenueData } from "./data";

export const KPISummary = () => {
  const totalRevenue = revenueData.reduce((sum, d) => sum + d.revenue, 0);
  const totalDownloads = revenueData.reduce((sum, d) => sum + d.downloads, 0);
  const totalVisitors = revenueData.reduce((sum, d) => sum + d.visitors, 0);

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-6">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-sm font-medium text-muted-foreground">Total Revenue</CardTitle>
          <DollarSign className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">${totalRevenue.toLocaleString()}</div>
          <div className="flex items-center gap-1 text-xs text-primary">
            <TrendingUp className="h-3 w-3" />
            <span>+18.2% from last period</span>
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-sm font-medium text-muted-foreground">Downloads</CardTitle>
          <Download className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{totalDownloads.toLocaleString()}</div>
          <div className="flex items-center gap-1 text-xs text-primary">
            <TrendingUp className="h-3 w-3" />
            <span>+12.5% from last period</span>
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-sm font-medium text-muted-foreground">Store Visitors</CardTitle>
          <Users className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{totalVisitors.toLocaleString()}</div>
          <div className="flex items-center gap-1 text-xs text-primary">
            <TrendingUp className="h-3 w-3" />
            <span>+8.1% from last period</span>
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-sm font-medium text-muted-foreground">Conversion Rate</CardTitle>
          <ShoppingCart className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">5.8%</div>
          <div className="flex items-center gap-1 text-xs text-destructive">
            <TrendingDown className="h-3 w-3" />
            <span>-0.3% from last period</span>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
