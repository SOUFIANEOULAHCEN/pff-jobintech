import { Bell } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface DashboardHeaderProps {
  title: string;
  showDateRange?: boolean;
}

export function DashboardHeader({ title, showDateRange = false }: DashboardHeaderProps) {
  return (
    <header className="sticky top-0 z-30 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex h-16 items-center justify-between px-6">
        <h1 className="text-lg font-semibold text-foreground">{title}</h1>
        
        <div className="flex items-center gap-4">
          {showDateRange && (
            <Select defaultValue="30d">
              <SelectTrigger className="w-[140px] bg-card">
                <SelectValue placeholder="Select range" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="7d">Last 7 days</SelectItem>
                <SelectItem value="30d">Last 30 days</SelectItem>
                <SelectItem value="90d">Last 90 days</SelectItem>
                <SelectItem value="1y">Last year</SelectItem>
              </SelectContent>
            </Select>
          )}
          
          <Button variant="ghost" size="icon" className="relative">
            <Bell className="h-4 w-4" />
            <span className="absolute -top-0.5 -right-0.5 h-2 w-2 rounded-full bg-primary" />
          </Button>
        </div>
      </div>
    </header>
  );
}
