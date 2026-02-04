import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { RadialBar, RadialBarChart, Cell } from "recharts";
import { Monitor, Smartphone, Tablet } from "lucide-react";
import { deviceData, deviceChartConfig } from "./data";

export const DeviceBreakdown = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-base">Device Breakdown</CardTitle>
        <CardDescription>Visitor devices</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={deviceChartConfig} className="h-52 w-full">
          <RadialBarChart
            data={deviceData}
            innerRadius={30}
            outerRadius={80}
            startAngle={90}
            endAngle={-270}
          >
            <ChartTooltip content={<ChartTooltipContent nameKey="device" />} />
            <RadialBar dataKey="percentage" background cornerRadius={5}>
              {deviceData.map((entry) => (
                <Cell key={entry.device} fill={entry.fill} />
              ))}
            </RadialBar>
          </RadialBarChart>
        </ChartContainer>
        <div className="mt-4 space-y-2">
          {deviceData.map((device) => (
            <div key={device.device} className="flex items-center justify-between text-sm">
              <div className="flex items-center gap-2">
                {device.device === "Desktop" && <Monitor className="h-3.5 w-3.5 text-muted-foreground" />}
                {device.device === "Mobile" && <Smartphone className="h-3.5 w-3.5 text-muted-foreground" />}
                {device.device === "Tablet" && <Tablet className="h-3.5 w-3.5 text-muted-foreground" />}
                <span className="text-muted-foreground">{device.device}</span>
              </div>
              <span className="font-medium">{device.percentage}%</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
