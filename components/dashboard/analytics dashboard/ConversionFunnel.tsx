import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ChevronRight } from "lucide-react";
import { funnelData } from "./data";


export const ConversionFunnel = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-base">Conversion Funnel</CardTitle>
        <CardDescription>Customer journey from visit to purchase</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4 md:grid-cols-5">
          {funnelData.map((stage, index) => (
            <div key={stage.stage} className="relative">
              <div className="p-4 rounded-lg bg-muted/50 text-center">
                <p className="text-xs text-muted-foreground mb-1">{stage.stage}</p>
                <p className="text-xl font-bold">{stage.value.toLocaleString()}</p>
                {index > 0 && (
                  <p className="text-xs text-primary mt-1">{stage.rate}% converted</p>
                )}
              </div>
              {index < funnelData.length - 1 && (
                <div className="absolute -right-3 top-1/2 -translate-y-1/2 z-10 hidden md:block">
                  <ChevronRight className="h-5 w-5 text-muted-foreground" />
                </div>
              )}
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
