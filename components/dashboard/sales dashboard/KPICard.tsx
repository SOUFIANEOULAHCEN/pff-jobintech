import { TrendingUp, TrendingDown } from "lucide-react";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface KPICardProps {
  label: string;
  value: string;
  trend?: number;
  trendLabel?: string;
}

export function KPICard({ label, value, trend, trendLabel }: KPICardProps) {
  const isPositive = trend !== undefined && trend > 0;
  const isNegative = trend !== undefined && trend < 0;

  return (
    <Card className="p-5 bg-card border border-border">
      <p className="text-sm text-muted-foreground">{label}</p>
      <p className="mt-1 text-2xl font-semibold text-foreground">{value}</p>
      {trend !== undefined && (
        <div className="mt-2 flex items-center gap-1">
          {isPositive && <TrendingUp className="h-3 w-3 text-primary" />}
          {isNegative && <TrendingDown className="h-3 w-3 text-destructive" />}
          <span
            className={cn(
              "text-xs font-medium",
              isPositive && "text-primary",
              isNegative && "text-destructive",
              !isPositive && !isNegative && "text-muted-foreground"
            )}
          >
            {isPositive && "+"}
            {trend}%
          </span>
          {trendLabel && (
            <span className="text-xs text-muted-foreground">{trendLabel}</span>
          )}
        </div>
      )}
    </Card>
  );
}
