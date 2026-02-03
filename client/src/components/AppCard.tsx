/* TV Interface Design: Horizontal card layout with brand colors - compact version */

import { Download } from "lucide-react";
import type { AndroidTVApp } from "@/data/apps";

interface AppCardProps {
  app: AndroidTVApp;
}

export default function AppCard({ app }: AppCardProps) {
  return (
    <a
      href={app.playStoreUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="tv-card relative overflow-hidden block h-32 md:h-36"
      style={{
        background: app.brandColor,
        color: app.textColor,
      }}
    >
      {/* Download icon badge */}
      <div className="absolute top-2 right-2 w-6 h-6 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
        <Download className="w-3 h-3" />
      </div>

      {/* Card content - centered */}
      <div className="h-full flex flex-col items-center justify-center p-4 text-center">
        {/* App name */}
        <div className="text-xl md:text-2xl lg:text-3xl font-bold tracking-tight mb-1">
          {app.nameRu}
        </div>
        
        {/* Description */}
        <p className="text-xs md:text-sm opacity-80 font-medium">
          {app.description}
        </p>
      </div>
    </a>
  );
}
