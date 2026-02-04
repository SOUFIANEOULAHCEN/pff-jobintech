import { ChevronRight, Home } from "lucide-react";
import Link from "next/link";

interface BreadcrumbProps {
  category: string;
  productTitle: string;
}

export function Breadcrumb({ category, productTitle }: BreadcrumbProps) {
  return (
    <nav className="flex items-center gap-2 text-sm text-muted-foreground">
      <Link 
        href="/" 
        className="flex items-center gap-1 hover:text-foreground transition-colors"
      >
        <Home className="h-3.5 w-3.5" />
        <span>Home</span>
      </Link>
      <ChevronRight className="h-3.5 w-3.5" />
      <Link 
        href={`/category/${category.toLowerCase().replace(/\s+/g, '-')}`}
        className="hover:text-foreground transition-colors"
      >
        {category}
      </Link>
      <ChevronRight className="h-3.5 w-3.5" />
      <span className="text-foreground truncate max-w-[200px]">
        {productTitle}
      </span>
    </nav>
  );
}