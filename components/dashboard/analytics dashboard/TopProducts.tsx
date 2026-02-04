import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { topProducts } from "./data";

export const TopProducts = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-base">Top Products</CardTitle>
        <CardDescription>Best performing products by revenue</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {topProducts.map((product, index) => (
            <div key={product.name} className="flex items-center gap-4">
              <span className="text-sm font-medium text-muted-foreground w-5">
                {index + 1}.
              </span>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <p className="text-sm font-medium text-foreground truncate">
                    {product.name}
                  </p>
                  <Badge variant={product.growth > 0 ? "default" : "secondary"} className="text-xs">
                    {product.growth > 0 ? "+" : ""}{product.growth}%
                  </Badge>
                </div>
                <div className="flex items-center gap-3 mt-1">
                  <span className="text-xs text-muted-foreground">
                    {product.sales} sales
                  </span>
                  <span className="text-xs text-muted-foreground">
                    ${product.revenue.toLocaleString()}
                  </span>
                  <span className="text-xs text-muted-foreground">
                    ★ {product.rating}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
