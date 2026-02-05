import { ChevronRight } from 'lucide-react';
import Link from 'next/link';

export function CheckoutHeader() {
  return (
    <header className="border-b border-border bg-card">
      <div className="container max-w-6xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-semibold tracking-tight">Sellora</h1>
          <nav className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link href={"/products"}><span className="hover:text-foreground cursor-pointer transition-colors">Cart</span></Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-foreground font-medium">Checkout</span>
          </nav>
        </div>
      </div>
    </header>
  );
}
