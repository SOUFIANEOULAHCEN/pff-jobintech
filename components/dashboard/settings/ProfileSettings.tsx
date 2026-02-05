"use client"
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export const ProfileSettings = () => {
  const storedUser = localStorage.getItem("user");
  const user = storedUser ? JSON.parse(storedUser) : null;
  return (
    <Card className="p-6 bg-card border-border">
      <h3 className="text-base font-medium text-foreground mb-4">
        Profile Settings
      </h3>
      <div className="flex items-center gap-4 mb-6">
        <Avatar className="h-16 w-16">
          <AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah" />
          <AvatarFallback>SC</AvatarFallback>
        </Avatar>
        <div>
          <Button variant="outline" size="sm">
            Change Avatar
          </Button>
          <p className="text-xs text-muted-foreground mt-1">
            JPG, PNG or GIF. Max 2MB.
          </p>
        </div>
      </div>
      <div className="space-y-4">
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="name">Full Name</Label>
            <Input
              id="name"
              defaultValue={user.fullName}
              className="bg-background"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type={"email"}
              defaultValue={user.email}
              className="bg-background"
            />
          </div>
        </div>
        <div className="space-y-2">
          <Label htmlFor="bio">Bio</Label>
          <Textarea
            id="bio"
            placeholder="Tell customers about yourself..."
            defaultValue="Designer and creator of digital products. Helping businesses look beautiful."
            className="bg-background resize-none"
            rows={3}
          />
        </div>
      </div>
    </Card>
  );
};
