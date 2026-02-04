import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const PaymentSettings = () => {
  return (
    <Card className="p-6 bg-card border-border">
      <h3 className="text-base font-medium text-foreground mb-4">
        Payment Settings
      </h3>
      <div className="space-y-4">
        <div className="flex items-center justify-between p-3 rounded-lg bg-muted/30">
          <div>
            <p className="text-sm font-medium text-foreground">Payout Method</p>
            <p className="text-xs text-muted-foreground">
              Bank Transfer (****4892)
            </p>
          </div>
          <Button variant="outline" size="sm">
            Change
          </Button>
        </div>
        <div className="flex items-center justify-between p-3 rounded-lg bg-muted/30">
          <div>
            <p className="text-sm font-medium text-foreground">Tax Information</p>
            <p className="text-xs text-muted-foreground">W-9 form submitted</p>
          </div>
          <Button variant="outline" size="sm">
            Update
          </Button>
        </div>
      </div>
    </Card>
  );
};
