"use client";

import React, { useState } from "react";
import { SacredGeometryRosette } from "./Icons";

export const GmmSculpture: React.FC<{ className?: string }> = ({ className = "" }) => {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 16;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * -16;
    setTilt({ x, y });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  return (
    <div
      className={`relative flex items-center justify-center select-none ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Background Sacred Geometry Linework */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-45 scale-105 sm:scale-115 md:scale-125 animate-spin-very-slow">
        <SacredGeometryRosette className="text-gmm-flame/35" size="100%" />
      </div>

      {/* Floating Ambient Glow */}
      <div className="absolute w-64 h-64 sm:w-80 sm:h-80 rounded-full bg-gradient-to-tr from-gmm-amber/20 via-gmm-flame/15 to-gmm-rust/10 blur-3xl pointer-events-none" />

      {/* 3D Folded Ribbon Sculpture */}
      <div
        className="relative z-10 w-full max-w-[260px] xs:max-w-[320px] sm:max-w-[400px] md:max-w-[460px] aspect-square flex items-center justify-center transition-transform duration-300 ease-out"
        style={{
          transform: `perspective(1000px) rotateY(${tilt.x}deg) rotateX(${tilt.y}deg)`,
        }}
      >
        <div className="w-full h-full p-4 animate-float-gentle flex items-center justify-center drop-shadow-2xl">
          {/* 3D Faceted Continuous Ribbon Sculpture */}
          <svg
            viewBox="0 0 500 500"
            className="w-full h-full filter drop-shadow-[0_24px_45px_rgba(191,30,7,0.25)]"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="sculpture-amber-flame" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FEB366" />
                <stop offset="35%" stopColor="#FD953A" />
                <stop offset="70%" stopColor="#FA5D19" />
                <stop offset="100%" stopColor="#E23E0A" />
              </linearGradient>

              <linearGradient id="sculpture-flame-rust" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FA5D19" />
                <stop offset="50%" stopColor="#D92E08" />
                <stop offset="100%" stopColor="#BF1E07" />
              </linearGradient>

              <linearGradient id="sculpture-deep-rust" x1="0%" y1="100%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#8C1304" />
                <stop offset="60%" stopColor="#B61C07" />
                <stop offset="100%" stopColor="#E03208" />
              </linearGradient>

              <linearGradient id="sculpture-gold-specular" x1="0%" y1="0%" x2="100%" y2="50%">
                <stop offset="0%" stopColor="#FFF4EA" stopOpacity="0.8" />
                <stop offset="30%" stopColor="#FED7A5" stopOpacity="0.5" />
                <stop offset="100%" stopColor="#FA5D19" stopOpacity="0" />
              </linearGradient>

              <filter id="ribbon-glow" x="-20%" y="-20%" width="140%" height="140%">
                <feDropShadow dx="0" dy="16" stdDeviation="16" floodColor="#FA5D19" floodOpacity="0.22" />
              </filter>
            </defs>

            {/* Back Fold 1 (Shadowed fold) */}
            <path
              d="M140 180 C110 240, 105 320, 160 380 C210 435, 290 445, 360 410 C420 380, 440 320, 410 260 L360 285 C380 325, 360 365, 320 385 C270 410, 210 395, 180 350 C145 305, 150 245, 175 200 Z"
              fill="url(#sculpture-deep-rust)"
            />

            {/* Outer Major Loop (Front Amber-Flame Plane) */}
            <path
              d="M250 50 C360 50, 450 140, 450 250 C450 360, 360 450, 250 450 C140 450, 50 360, 50 250 C50 140, 140 50, 250 50 Z"
              fill="none"
              stroke="url(#sculpture-amber-flame)"
              strokeWidth="42"
              strokeLinecap="round"
              strokeDasharray="950 400"
              filter="url(#ribbon-glow)"
            />

            {/* Folded Diagonal Ribbon Facets (Mirroring the GMM Ribbon Angles) */}
            <g transform="translate(250, 250) rotate(-15) translate(-250, -250)">
              {/* Primary Fold Stroke A */}
              <polygon
                points="110,380 180,380 390,120 320,120"
                fill="url(#sculpture-amber-flame)"
              />
              {/* Inner Chamfer Specular */}
              <polygon
                points="110,380 135,380 345,120 320,120"
                fill="url(#sculpture-gold-specular)"
              />
              {/* Turn Under Fold B */}
              <polygon
                points="320,120 390,120 420,165 350,165"
                fill="url(#sculpture-deep-rust)"
              />
              {/* Secondary Descending Ribbon C */}
              <polygon
                points="350,165 420,165 260,390 190,390"
                fill="url(#sculpture-flame-rust)"
              />
              {/* Bottom Turn Fold D */}
              <polygon
                points="190,390 260,390 230,430 160,430"
                fill="url(#sculpture-deep-rust)"
              />
              {/* Ascending Return Ribbon E */}
              <polygon
                points="160,430 230,430 380,210 310,210"
                fill="url(#sculpture-amber-flame)"
              />
            </g>

            {/* Central Ambient Ring Accent */}
            <circle cx="250" cy="250" r="48" stroke="url(#sculpture-amber-flame)" strokeWidth="6" opacity="0.6" />
            <circle cx="250" cy="250" r="14" fill="#FA5D19" opacity="0.8" />
          </svg>
        </div>
      </div>
    </div>
  );
};
