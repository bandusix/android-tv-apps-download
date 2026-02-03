/* Neo-Brutalism Design: Bold geometric background, high contrast, thick borders, asymmetric layout */

import AppCard from "@/components/AppCard";
import { apps } from "@/data/apps";
import { Tv, Download } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section with Geometric Background */}
      <section 
        className="relative py-16 md:py-24 overflow-hidden"
        style={{
          backgroundImage: `url('https://private-us-east-1.manuscdn.com/sessionFile/CJSAE5xf8SR76p6vbjyVv2/sandbox/uTRDKny7qsxDAHp4notQGQ-img-1_1770105854000_na1fn_aGVyby1iYWNrZ3JvdW5k.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvQ0pTQUU1eGY4U1I3NnA2dmJqeVZ2Mi9zYW5kYm94L3VUUkRLbnk3cXN4REFIcDRub3RRR1EtaW1nLTFfMTc3MDEwNTg1NDAwMF9uYTFmbl9hR1Z5YnkxaVlXTnJaM0p2ZFc1ay5wbmc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=CTz66ITepww8ZV1XQEDikpPTrq7HduSGCl3sDtWYtOD89Y2Tyy~mtdcVbZRRARaAOM8NG8rEiclMC259gTzkF54O3QCsrRU30NxVX4FJi4~58uw6UvYK0cUnqBX9Ka-qZm00hhBhBzpp9083toCIvAuL26Exs5Wj-x4TapLdjIVj~8J5WcRh3tvbDhsjgl~KGJjZcvhYJwEilf2YCYJJEjcTVnntTM9HuwitFfbadRGLdTa5y3jRyrJm~pAwgoXm1~198GO06wV~5uAalvk5jo3smDraRriaeD5IQH3pGKVnY8dvG-XVemdwmF8qEW~23Xi9Lb-LVKLDBLAN3LoNSg__')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="container relative z-10">
          <div className="max-w-4xl">
            {/* Icon */}
            <div className="mb-6 inline-block p-4 bg-[#ffed00] brutalist-border brutalist-shadow-sm">
              <Tv className="w-12 h-12 md:w-16 md:h-16 text-black" strokeWidth={3} />
            </div>

            {/* Title */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 leading-none text-black">
              Android TV Apps
            </h1>
            
            {/* Subtitle with different background */}
            <div className="inline-block p-4 md:p-6 bg-[#0066ff] brutalist-border brutalist-shadow mb-6">
              <h2 className="text-2xl md:text-4xl font-black text-white leading-tight">
                Download Center
              </h2>
            </div>

            {/* Description */}
            <div className="p-4 md:p-6 bg-white brutalist-border brutalist-shadow max-w-2xl">
              <p className="text-base md:text-lg font-semibold text-black leading-relaxed">
                Download popular Russian streaming apps for your Android TV. 
                Access movies, series, live TV channels, and more. 
                All apps optimized for big screen experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Apps Grid Section */}
      <section className="py-12 md:py-16">
        <div className="container">
          {/* Section Header */}
          <div className="mb-8 md:mb-12">
            <div className="inline-block p-3 md:p-4 bg-[#ff3333] brutalist-border brutalist-shadow-sm mb-4">
              <Download className="w-8 h-8 md:w-10 md:h-10 text-white" strokeWidth={3} />
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-black mb-3">
              Available Apps
            </h2>
            <p className="text-lg md:text-xl font-semibold text-black/80">
              {apps.length} streaming applications ready to download
            </p>
          </div>

          {/* Apps Grid - Bento Box Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {apps.map((app, index) => (
              <AppCard key={app.id} app={app} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 md:py-12 border-t-4 border-black">
        <div className="container">
          <div className="p-4 md:p-6 bg-[#00cc66] brutalist-border brutalist-shadow inline-block">
            <p className="text-sm md:text-base font-bold text-white">
              Android TV Apps Download Center © 2026
            </p>
            <p className="text-xs md:text-sm font-semibold text-white/90 mt-1">
              All apps are property of their respective owners
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
