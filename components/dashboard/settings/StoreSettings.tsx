"use client"
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

export const StoreSettings = () => {
  const storedUser = localStorage.getItem("user");
  const user = storedUser ? JSON.parse(storedUser) : null;
  return (
    <Card className="p-6 bg-card border-border">
      <h3 className="text-base font-medium text-foreground mb-4">
        Store Settings
      </h3>
      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="storeName">Store Name</Label>
          <Input
            id="storeName"
            defaultValue={`${user.fullName}'s Digital Shop`}
            className="bg-background"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="storeUrl">Store URL</Label>
          <div className="flex">
            <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-input bg-muted text-sm text-muted-foreground">
              sellora.co/
            </span>
            <Input
              id="storeUrl"
              defaultValue={user.fullName.toLowerCase()}
              className="rounded-l-none bg-background"
            />
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div>
            <Label htmlFor="visibility">Store Visibility</Label>
            <p className="text-xs text-muted-foreground">
              Make your store visible to the public
            </p>
          </div>
          <Switch id="visibility" defaultChecked />
        </div>
      </div>
    </Card>
  );
};
