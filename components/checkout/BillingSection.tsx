import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { MapPin } from 'lucide-react';

interface BillingSectionProps {
  country: string;
  city: string;
  address: string;
  postalCode: string;
  onCountryChange: (value: string) => void;
  onCityChange: (value: string) => void;
  onAddressChange: (value: string) => void;
  onPostalCodeChange: (value: string) => void;
}

const countries = [
  { value: 'us', label: 'United States' },
  { value: 'uk', label: 'United Kingdom' },
  { value: 'ca', label: 'Canada' },
  { value: 'de', label: 'Germany' },
  { value: 'fr', label: 'France' },
  { value: 'au', label: 'Australia' },
  { value: 'jp', label: 'Japan' },
  { value: 'br', label: 'Brazil' },
];

export function BillingSection({
  country,
  city,
  address,
  postalCode,
  onCountryChange,
  onCityChange,
  onAddressChange,
  onPostalCodeChange,
}: BillingSectionProps) {
  return (
    <Card className="border border-border shadow-sm">
      <CardHeader className="pb-4">
        <CardTitle className="flex items-center gap-2 text-lg font-medium">
          <MapPin className="h-5 w-5 text-muted-foreground" />
          Billing Details
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="country" className="text-sm font-medium">
              Country
            </Label>
            <Select value={country} onValueChange={onCountryChange}>
              <SelectTrigger id="country" className="h-11">
                <SelectValue placeholder="Select country" />
              </SelectTrigger>
              <SelectContent>
                {countries.map((c) => (
                  <SelectItem key={c.value} value={c.value}>
                    {c.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="city" className="text-sm font-medium">
              City
            </Label>
            <Input
              id="city"
              type="text"
              placeholder="New York"
              value={city}
              onChange={(e) => onCityChange(e.target.value)}
              className="h-11"
            />
          </div>
        </div>
        <div className="space-y-2">
          <Label htmlFor="address" className="text-sm font-medium">
            Address <span className="text-muted-foreground font-normal">(optional)</span>
          </Label>
          <Input
            id="address"
            type="text"
            placeholder="123 Main St"
            value={address}
            onChange={(e) => onAddressChange(e.target.value)}
            className="h-11"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="postalCode" className="text-sm font-medium">
            ZIP / Postal code
          </Label>
          <Input
            id="postalCode"
            type="text"
            placeholder="10001"
            value={postalCode}
            onChange={(e) => onPostalCodeChange(e.target.value)}
            className="h-11 max-w-[200px]"
          />
        </div>
        <p className="text-xs text-muted-foreground flex items-center gap-1.5 pt-1">
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-success" />
          No physical shipping required for digital products
        </p>
      </CardContent>
    </Card>
  );
}
