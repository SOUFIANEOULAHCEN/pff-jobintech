import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export const DangerZone = () => {
  return (
    <Card className="p-6 bg-card border-destructive/20">
      <h3 className="text-base font-medium text-destructive mb-4">
        Danger Zone
      </h3>
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-foreground">
              Deactivate Store
            </p>
            <p className="text-xs text-muted-foreground">
              Temporarily hide your store from customers
            </p>
          </div>
          <Button variant="outline" size="sm">
            Deactivate
          </Button>
        </div>
        <Separator />
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-foreground">Delete Store</p>
            <p className="text-xs text-muted-foreground">
              Permanently delete your store and all data
            </p>
          </div>
          <Button variant="destructive" size="sm">
            Delete Store
          </Button>
        </div>
      </div>
    </Card>
  );
};
