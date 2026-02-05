import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tag, Check, X } from "lucide-react";

interface PromoCodeSectionProps {
  promoCode: string;
  onPromoCodeChange: (value: string) => void;
}

export function PromoCodeSection({
  promoCode,
  onPromoCodeChange,
}: PromoCodeSectionProps) {
  const [isApplied, setIsApplied] = useState(false);
  const [error, setError] = useState("");

  const handleApply = () => {
    if (promoCode.toLowerCase() === "save10") {
      setIsApplied(true);
      setError("");
    } else if (promoCode) {
      setError("Invalid promo code");
      setIsApplied(false);
    }
  };

  const handleRemove = () => {
    setIsApplied(false);
    onPromoCodeChange("");
    setError("");
  };

  return (
    <div className="space-y-2">
      <div className="flex items-center gap-2">
        <Tag className="h-4 w-4 text-muted-foreground" />
        <span className="text-sm font-medium">Promo code</span>
      </div>
      <div className="flex gap-2">
        <Input
          type="text"
          placeholder="Enter code"
          value={promoCode}
          onChange={(e) => {
            onPromoCodeChange(e.target.value);
            setError("");
          }}
          disabled={isApplied}
          className="h-10 flex-1"
        />
        {isApplied ? (
          <Button
            type="button"
            variant="outline"
            size="sm"
            onClick={handleRemove}
            className="h-10 px-3"
          >
            <X className="h-4 w-4" />
          </Button>
        ) : (
          <Button
            type="button"
            variant="secondary"
            onClick={handleApply}
            disabled={!promoCode}
            className="h-10"
          >
            Apply
          </Button>
        )}
      </div>
      {isApplied && (
        <p className="text-sm text-success flex items-center gap-1.5">
          <Check className="h-3.5 w-3.5" />
          Promo code applied successfully!
        </p>
      )}
      {error && <p className="text-sm text-destructive">{error}</p>}
    </div>
  );
}
