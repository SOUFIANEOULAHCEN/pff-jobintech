import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { Pie, PieChart, Cell } from "recharts";
import { trafficSources, trafficChartConfig } from "./data";

export const TrafficSources = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-base">Traffic Sources</CardTitle>
        <CardDescription>Where your visitors come from</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={trafficChartConfig} className="h-52 w-full">
          <PieChart>
            <ChartTooltip content={<ChartTooltipContent nameKey="source" hideLabel />} />
            <Pie
              data={trafficSources}
              dataKey="visitors"
              nameKey="source"
              cx="50%"
              cy="50%"
              innerRadius={40}
              outerRadius={70}
              paddingAngle={2}
            >
              {trafficSources.map((entry) => (
                <Cell key={entry.source} fill={entry.fill} />
              ))}
            </Pie>
          </PieChart>
        </ChartContainer>
        <div className="mt-4 space-y-2">
          {trafficSources.slice(0, 3).map((source) => (
            <div key={source.source} className="flex items-center justify-between text-sm">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full" style={{ backgroundColor: source.fill }} />
                <span className="text-muted-foreground">{source.source}</span>
              </div>
              <span className="font-medium">{source.visitors.toLocaleString()}</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
