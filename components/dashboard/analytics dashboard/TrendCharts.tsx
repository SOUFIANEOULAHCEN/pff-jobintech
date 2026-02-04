import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { Area, AreaChart, Bar, BarChart, Line, LineChart, XAxis, YAxis, CartesianGrid } from "recharts";
import { revenueData, revenueChartConfig } from "./data";

export const TrendCharts = () => {
  return (
    <Tabs defaultValue="revenue" className="mb-6">
      <TabsList>
        <TabsTrigger value="revenue">Revenue</TabsTrigger>
        <TabsTrigger value="downloads">Downloads</TabsTrigger>
        <TabsTrigger value="visitors">Visitors</TabsTrigger>
      </TabsList>
      <TabsContent value="revenue">
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Revenue Trend</CardTitle>
            <CardDescription>Monthly revenue over the last 6 months</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer config={revenueChartConfig} className="h-72 w-full">
              <AreaChart data={revenueData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                <defs>
                  <linearGradient id="fillRevenue" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="var(--color-revenue)" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="var(--color-revenue)" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="hsl(var(--border))" />
                <XAxis dataKey="month" tickLine={false} axisLine={false} tickMargin={8} />
                <YAxis tickLine={false} axisLine={false} tickMargin={8} tickFormatter={(value) => `$${value}`} />
                <ChartTooltip content={<ChartTooltipContent indicator="line" />} />
                <Area
                  type="monotone"
                  dataKey="revenue"
                  stroke="var(--color-revenue)"
                  strokeWidth={2}
                  fill="url(#fillRevenue)"
                />
              </AreaChart>
            </ChartContainer>
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="downloads">
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Downloads Trend</CardTitle>
            <CardDescription>Monthly downloads over the last 6 months</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer config={revenueChartConfig} className="h-72 w-full">
              <BarChart data={revenueData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="hsl(var(--border))" />
                <XAxis dataKey="month" tickLine={false} axisLine={false} tickMargin={8} />
                <YAxis tickLine={false} axisLine={false} tickMargin={8} />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Bar dataKey="downloads" fill="var(--color-downloads)" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ChartContainer>
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="visitors">
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Visitor Trend</CardTitle>
            <CardDescription>Monthly store visitors over the last 6 months</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer config={revenueChartConfig} className="h-72 w-full">
              <LineChart data={revenueData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="hsl(var(--border))" />
                <XAxis dataKey="month" tickLine={false} axisLine={false} tickMargin={8} />
                <YAxis tickLine={false} axisLine={false} tickMargin={8} />
                <ChartTooltip content={<ChartTooltipContent indicator="dashed" />} />
                <Line
                  type="monotone"
                  dataKey="visitors"
                  stroke="var(--color-visitors)"
                  strokeWidth={2}
                  dot={{ fill: "var(--color-visitors)", r: 4 }}
                />
              </LineChart>
            </ChartContainer>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  );
};
