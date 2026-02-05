import { Badge } from "@/components/ui/badge";
import { Shield, Sparkles, Download } from "lucide-react";

export function PageHeader() {
  return (
    <div className="mb-8 md:mb-12">
      <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground mb-3">
        Explore digital products
      </h1>
      <p className="text-lg text-muted-foreground mb-4 max-w-2xl">
        High-quality resources made by independent creators
      </p>
      <div className="flex flex-wrap items-center gap-3">
        <Badge variant="secondary" className="gap-1.5 py-1.5 px-3 text-xs font-normal">
          <Sparkles className="h-3 w-3" />
          Curated
        </Badge>
        <Badge variant="secondary" className="gap-1.5 py-1.5 px-3 text-xs font-normal">
          <Shield className="h-3 w-3" />
          Secure
        </Badge>
        <Badge variant="secondary" className="gap-1.5 py-1.5 px-3 text-xs font-normal">
          <Download className="h-3 w-3" />
          Instant download
        </Badge>
      </div>
    </div>
  );
}
