import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Globe } from "lucide-react";
import { geoData } from "./data";

export const GeographicDistribution = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-base">Geographic Distribution</CardTitle>
        <CardDescription>Top markets by sales</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {geoData.map((country) => (
            <div key={country.country} className="space-y-1">
              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-2">
                  <Globe className="h-3.5 w-3.5 text-muted-foreground" />
                  <span className="text-muted-foreground">{country.country}</span>
                </div>
                <span className="font-medium">{country.sales}</span>
              </div>
              <div className="h-1.5 bg-muted rounded-full overflow-hidden">
                <div
                  className="h-full bg-primary rounded-full"
                  style={{ width: `${country.percentage}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
