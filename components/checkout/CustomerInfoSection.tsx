import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { User } from 'lucide-react';

interface CustomerInfoSectionProps {
  email: string;
  fullName: string;
  onEmailChange: (value: string) => void;
  onFullNameChange: (value: string) => void;
}

export function CustomerInfoSection({
  email,
  fullName,
  onEmailChange,
  onFullNameChange,
}: CustomerInfoSectionProps) {
  return (
    <Card className="border border-border shadow-sm">
      <CardHeader className="pb-4">
        <CardTitle className="flex items-center gap-2 text-lg font-medium">
          <User className="h-5 w-5 text-muted-foreground" />
          Customer Information
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="email" className="text-sm font-medium">
            Email address
          </Label>
          <Input
            id="email"
            type="email"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => onEmailChange(e.target.value)}
            className="h-11"
          />
          <p className="text-xs text-muted-foreground">
            We&apos;ll send your receipt and download links here
          </p>
        </div>
        <div className="space-y-2">
          <Label htmlFor="fullName" className="text-sm font-medium">
            Full name
          </Label>
          <Input
            id="fullName"
            type="text"
            placeholder="John Doe"
            value={fullName}
            onChange={(e) => onFullNameChange(e.target.value)}
            className="h-11"
          />
        </div>
      </CardContent>
    </Card>
  );
}
