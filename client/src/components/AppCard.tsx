/* Neo-Brutalism Design: Bold colors, thick black borders, no border radius, hard shadows */

import { Download, ExternalLink } from "lucide-react";
import type { AndroidTVApp } from "@/data/apps";

interface AppCardProps {
  app: AndroidTVApp;
  index: number;
}

const colorClasses = {
  yellow: 'bg-[#ffed00] text-black',
  blue: 'bg-[#0066ff] text-white',
  red: 'bg-[#ff3333] text-white',
  green: 'bg-[#00cc66] text-white',
};

export default function AppCard({ app, index }: AppCardProps) {
  // Slight rotation for some cards to add dynamism (2-3 degrees)
  const rotations = ['rotate-0', 'rotate-1', '-rotate-1', 'rotate-2', '-rotate-2', 'rotate-0'];
  const rotation = rotations[index % rotations.length];

  return (
    <div
      className={`brutalist-border brutalist-shadow p-6 transition-transform duration-75 hover:translate-x-1 hover:translate-y-1 hover:shadow-none ${colorClasses[app.color]} ${rotation}`}
    >
      {/* App Name */}
      <div className="mb-4">
        <h3 className="text-2xl md:text-3xl font-black mb-1 leading-tight">
          {app.nameRu}
        </h3>
        <p className="text-sm md:text-base font-semibold opacity-90">
          {app.name}
        </p>
      </div>

      {/* Description */}
      <p className="text-sm md:text-base mb-4 leading-snug font-medium opacity-95">
        {app.description}
      </p>

      {/* Package Name */}
      <div className="mb-4 p-2 bg-black/10 brutalist-border border-2">
        <p className="text-xs md:text-sm font-mono font-semibold break-all">
          {app.packageName}
        </p>
      </div>

      {/* Download Buttons */}
      <div className="flex flex-col gap-2">
        <a
          href={app.playStoreUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 p-3 bg-black text-white brutalist-border border-2 font-bold text-sm md:text-base transition-transform duration-75 hover:translate-x-0.5 hover:translate-y-0.5"
        >
          <Download className="w-4 h-4 md:w-5 md:h-5" />
          Google Play Store
        </a>
        
        {app.apkMirrorUrl && (
          <a
            href={app.apkMirrorUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 p-2 bg-white/20 brutalist-border border-2 font-semibold text-sm transition-transform duration-75 hover:translate-x-0.5 hover:translate-y-0.5"
          >
            <ExternalLink className="w-4 h-4" />
            APK Mirror
          </a>
        )}
      </div>
    </div>
  );
}
