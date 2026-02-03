/* TV Interface Design: Dark background with horizontal app cards in grid layout */

import AppCard from "@/components/AppCard";
import { apps } from "@/data/apps";
import { Tv } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen relative">
      {/* Background with subtle glow effect */}
      <div className="fixed inset-0 bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f3460] opacity-80" />
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent" />

      <div className="relative z-10">
        {/* Header */}
        <header className="py-8 md:py-12">
          <div className="container">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center">
                <Tv className="w-6 h-6 md:w-8 md:h-8 text-white" />
              </div>
              <div>
                <h1 className="text-3xl md:text-5xl font-bold text-white">
                  Android TV Apps
                </h1>
                <p className="text-white/70 text-sm md:text-base mt-1">
                  Download Center
                </p>
              </div>
            </div>
          </div>
        </header>

        {/* Apps Grid */}
        <section className="pb-16">
          <div className="container">
            {/* Grid layout - 4 columns on large screens, responsive on smaller screens */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
              {apps.map((app) => (
                <AppCard key={app.id} app={app} />
              ))}
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 border-t border-white/10">
          <div className="container">
            <p className="text-white/60 text-sm text-center">
              Android TV Apps Download Center © 2026 • All apps are property of their respective owners
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}
