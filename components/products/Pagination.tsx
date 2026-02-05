import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export function Pagination({ currentPage, totalPages, onPageChange }: PaginationProps) {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);
  
  const visiblePages = pages.filter((page) => {
    if (totalPages <= 7) return true;
    if (page === 1 || page === totalPages) return true;
    if (Math.abs(page - currentPage) <= 1) return true;
    return false;
  });

  const renderPageButtons = () => {
    const buttons: React.ReactNode[] = [];
    let lastPage = 0;

    visiblePages.forEach((page) => {
      if (page - lastPage > 1) {
        buttons.push(
          <span key={`ellipsis-${page}`} className="px-2 text-muted-foreground">
            …
          </span>
        );
      }

      buttons.push(
        <Button
          key={page}
          variant={currentPage === page ? "default" : "ghost"}
          size="icon"
          className="h-9 w-9"
          onClick={() => onPageChange(page)}
        >
          {page}
        </Button>
      );

      lastPage = page;
    });

    return buttons;
  };

  return (
    <div className="flex items-center justify-center gap-1 mt-12">
      <Button
        variant="ghost"
        size="icon"
        className="h-9 w-9"
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
      >
        <ChevronLeft className="h-4 w-4" />
      </Button>

      {renderPageButtons()}

      <Button
        variant="ghost"
        size="icon"
        className="h-9 w-9"
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
      >
        <ChevronRight className="h-4 w-4" />
      </Button>
    </div>
  );
}
