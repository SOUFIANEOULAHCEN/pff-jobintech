import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartContainer, ChartTooltip, ChartTooltipContent, ChartLegend, ChartLegendContent } from "@/components/ui/chart";
import { Bar, BarChart, XAxis, YAxis, CartesianGrid } from "recharts";
import { weeklyData, weeklyChartConfig } from "./data";

export const WeeklyPerformance = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-base">Weekly Performance</CardTitle>
        <CardDescription>Sales and revenue this week</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={weeklyChartConfig} className="h-64 w-full">
          <BarChart data={weeklyData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="hsl(var(--border))" />
            <XAxis dataKey="day" tickLine={false} axisLine={false} tickMargin={8} />
            <YAxis tickLine={false} axisLine={false} tickMargin={8} />
            <ChartTooltip content={<ChartTooltipContent />} />
            <ChartLegend content={<ChartLegendContent />} />
            <Bar dataKey="sales" fill="var(--color-sales)" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
};
