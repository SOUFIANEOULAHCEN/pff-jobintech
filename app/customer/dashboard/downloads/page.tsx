import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Download,
  FileText,
  FileArchive,
  FileVideo,
  Eye,
  Clock,
} from "lucide-react";

const downloads = [
  {
    id: 1,
    name: "Ultimate UI Kit",
    fileType: "ZIP",
    fileIcon: FileArchive,
    downloadCount: 3,
    lastDownloaded: "5 minutes ago",
    size: "45.2 MB",
  },
  {
    id: 2,
    name: "React Components Pro",
    fileType: "ZIP",
    fileIcon: FileArchive,
    downloadCount: 2,
    lastDownloaded: "2 days ago",
    size: "12.8 MB",
  },
  {
    id: 3,
    name: "Notion Templates Bundle",
    fileType: "PDF",
    fileIcon: FileText,
    downloadCount: 5,
    lastDownloaded: "1 week ago",
    size: "8.4 MB",
  },
  {
    id: 4,
    name: "Video Course: Design Systems",
    fileType: "Video",
    fileIcon: FileVideo,
    downloadCount: 1,
    lastDownloaded: "2 weeks ago",
    size: "2.1 GB",
  },
  {
    id: 5,
    name: "Icon Collection Premium",
    fileType: "ZIP",
    fileIcon: FileArchive,
    downloadCount: 4,
    lastDownloaded: "3 weeks ago",
    size: "156 MB",
  },
  {
    id: 6,
    name: "Figma Design System",
    fileType: "ZIP",
    fileIcon: FileArchive,
    downloadCount: 2,
    lastDownloaded: "1 month ago",
    size: "23.5 MB",
  },
];

const fileTypeColors: Record<string, string> = {
  ZIP: "bg-primary/10 text-primary",
  PDF: "bg-destructive/10 text-destructive",
  Video: "bg-accent text-accent-foreground",
};

export default function DownloadsPage() {
  return (
    <>
      <div className="space-y-4">
        <div>
          <h2 className="text-2xl font-semibold text-foreground">
            Your Downloads
          </h2>
          <p className="mt-1 text-muted-foreground">
            Manage and access all your purchased digital products and resources
          </p>
        </div>
        {downloads.map((item) => (
          <Card
            key={item.id}
            className="flex items-center justify-between flex-row p-4 bg-card border-border hover:bg-muted/30 transition-colors"
          >
            <div className="flex items-center gap-4">
              <div className="rounded-lg bg-muted/50 p-3">
                <item.fileIcon className="h-5 w-5 text-muted-foreground" />
              </div>
              <div>
                <h3 className="font-medium text-foreground">{item.name}</h3>
                <div className="mt-1 flex items-center gap-3 text-xs text-muted-foreground">
                  <Badge
                    variant="secondary"
                    className={fileTypeColors[item.fileType] || ""}
                  >
                    {item.fileType}
                  </Badge>
                  <span>{item.size}</span>
                  <span className="flex items-center gap-1">
                    <Download className="h-3 w-3" />
                    {item.downloadCount} downloads
                  </span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="text-right hidden sm:block">
                <div className="flex items-center gap-1 text-xs text-muted-foreground">
                  <Clock className="h-3 w-3" />
                  Last downloaded
                </div>
                <p className="text-sm text-foreground">{item.lastDownloaded}</p>
              </div>
              <div className="flex items-center gap-2">
                <Button variant="ghost" size="icon" className="h-9 w-9">
                  <Eye className="h-4 w-4" />
                </Button>
                <Button size="sm" className="gap-2">
                  <Download className="h-4 w-4" />
                  Download
                </Button>
              </div>
            </div>
          </Card>
        ))}

        {/* Quick Stats */}
        <div className="grid gap-4 sm:grid-cols-3 pt-4">
          <Card className="p-4 bg-card border-border">
            <p className="text-xs text-muted-foreground">Total Downloads</p>
            <p className="mt-1 text-2xl font-semibold text-foreground">17</p>
          </Card>
          <Card className="p-4 bg-card border-border">
            <p className="text-xs text-muted-foreground">Total Size</p>
            <p className="mt-1 text-2xl font-semibold text-foreground">
              2.4 GB
            </p>
          </Card>
          <Card className="p-4 bg-card border-border">
            <p className="text-xs text-muted-foreground">Available Files</p>
            <p className="mt-1 text-2xl font-semibold text-foreground">6</p>
          </Card>
        </div>
      </div>
    </>
  );
}
