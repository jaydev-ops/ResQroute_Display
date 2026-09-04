import React, { useState } from 'react';
import {
  Search,
  Compass,
  Layers,
  Share2,
  ChevronRight,
  Shield,
  Zap,
  Activity,
  CheckCircle2,
  Crosshair,
  Sparkles,
} from 'lucide-react';
import { MobileScreenId } from '../../../types';

interface EvacuationRadarScreenProps {
  onNavigate: (screen: MobileScreenId) => void;
  wheelchairEnabled: boolean;
}

export const EvacuationRadarScreen: React.FC<EvacuationRadarScreenProps> = ({
  onNavigate,
  wheelchairEnabled,
}) => {
  const [is3D, setIs3D] = useState(false);
  const [isRecentering, setIsRecentering] = useState(false);
  const [isStartingNav, setIsStartingNav] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);

  const handleRecenter = () => {
    setIsRecentering(true);
    setTimeout(() => setIsRecentering(false), 500);
  };

  const handleStartNav = () => {
    setIsStartingNav(true);
    setTimeout(() => {
      setIsStartingNav(false);
      onNavigate('guidance');
    }, 600);
  };

  const handleShare = () => {
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  return (
    <div className="flex flex-col w-full h-full relative bg-[#faf9f9] text-[#1a1c1c] select-none overflow-y-auto">
      {/* Top Header */}
      <div className="sticky top-0 z-40 bg-[#faf9f9]/90 backdrop-blur-xl border-b border-[#e9e8e8]/60 px-4 pt-1.5 pb-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-[#d5e3ff] flex items-center justify-center relative overflow-hidden shadow-xs">
              <div className="w-4.5 h-4.5 rounded-md bg-[#ffb248] flex items-center justify-center">
                <Shield className="w-3 h-3 text-[#005eb2]" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] font-bold tracking-wider uppercase text-[#005eb2] leading-tight">
                resQroute Live
              </span>
              <h1 className="text-[15px] font-bold text-[#1a1c1c] tracking-tight leading-tight">
                Evacuation Radar
              </h1>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => onNavigate('disaster-alert')}
              className="px-2.5 py-1 rounded-full bg-[#ffdad6] text-[#ba1a1a] text-[11px] font-bold flex items-center gap-1 active:scale-95 transition-transform"
            >
              <span className="w-2 h-2 rounded-full bg-[#ba1a1a] animate-ping" />
              SOS Alert
            </button>
            <button
              onClick={() => onNavigate('profile')}
              className="w-7 h-7 rounded-full bg-[#855400] text-white flex items-center justify-center text-xs font-bold"
            >
              S
            </button>
          </div>
        </div>
      </div>

      {/* Vector Map Canvas Container */}
      <div
        className={`relative w-full h-[360px] bg-[#f8fafc] overflow-hidden transition-transform duration-500 ${
          is3D ? 'rotate-x-12 scale-105' : ''
        }`}
      >
        {/* SVG Vector Map */}
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 420 400"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Ground parcels */}
          <path d="M-20 -20 H440 V420 H-20 Z" fill="#F8FAFC" />
          <rect x="24" y="28" width="86" height="74" rx="14" fill="#F1F5F9" />
          <rect x="124" y="16" width="138" height="66" rx="16" fill="#F1F5F9" />
          <rect x="278" y="24" width="130" height="96" rx="14" fill="#F1F5F9" />
          <rect x="30" y="148" width="92" height="110" rx="16" fill="#EFF3F8" />
          <rect x="290" y="156" width="118" height="124" rx="16" fill="#EFF3F8" />
          <rect x="28" y="290" width="88" height="110" rx="18" fill="#F1F5F9" />

          {/* Contour Elevation Shading (+32m MSL Ridge Crest) */}
          <path
            d="M80 0 C 130 90, 160 170, 175 250 C 185 300, 240 350, 270 400 L 370 400 C 330 310, 260 230, 240 180 C 220 120, 180 50, 140 0 Z"
            fill="#E2E8F0"
            opacity="0.45"
          />

          {/* Mahim Basin Canal */}
          <path
            d="M-10 145 C 90 160, 150 190, 210 220 C 280 260, 340 310, 430 330"
            stroke="#93C5FD"
            strokeWidth="24"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Flooded Hazard Polygon (Sector 17 Low Basin - 48cm depth) */}
          <path
            d="M125 170 C 170 165, 235 195, 255 235 C 265 265, 230 300, 175 290 C 130 280, 105 235, 110 205 Z"
            fill="#FEE2E2"
            fillOpacity="0.85"
          />
          <path
            d="M125 170 C 170 165, 235 195, 255 235 C 265 265, 230 300, 175 290 C 130 280, 105 235, 110 205 Z"
            stroke="#DC2626"
            strokeWidth="2"
            strokeDasharray="6 4"
          />

          {/* Grid lines */}
          <path d="M40 0 V400 M120 0 V140 M120 250 V400 M265 0 V130 M380 0 V400" stroke="#CBD5E1" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M0 100 H420 M0 240 H120 M250 250 H420" stroke="#CBD5E1" strokeWidth="2.5" strokeLinecap="round" />

          {/* Blocked Inundated Canal Road (Crimson Hazard) */}
          <path
            d="M72 320 Q 130 285 175 240 T 235 195"
            stroke="#DC2626"
            strokeWidth="4"
            strokeDasharray="6 4"
            strokeLinecap="round"
          />

          {/* Safe Evacuation Corridor: Solid Royal Blue along High Ridge Crest (+32m MSL) */}
          <path
            d="M72 320 C 68 260, 84 210, 118 150 C 148 100, 184 75, 235 65 C 265 58, 290 60, 316 56"
            stroke="#1D4ED8"
            strokeWidth="10"
            opacity="0.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M72 320 C 68 260, 84 210, 118 150 C 148 100, 184 75, 235 65 C 265 58, 290 60, 316 56"
            stroke="#2563EB"
            strokeWidth="5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Directional Chevron Pulses */}
          <path d="M125 140 L130 133 L137 136" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M222 68 L229 65 L228 73" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />

          {/* User Location: Pulsing Blue Dot */}
          <circle cx="72" cy="320" r="24" fill="#2563EB" opacity="0.15" />
          <circle cx="72" cy="320" r="9" fill="#FFFFFF" />
          <circle cx="72" cy="320" r="5.5" fill="#2563EB" />
        </svg>

        {/* Hazard Marker Pin */}
        <button
          onClick={() => onNavigate('dossier')}
          className="absolute left-[142px] top-[228px] -translate-x-1/2 -translate-y-1/2 flex items-center gap-1 px-2 py-0.5 rounded-full bg-white/95 backdrop-blur-md shadow-md border border-red-200 active:scale-95 transition-transform"
        >
          <span className="w-3.5 h-3.5 rounded-full bg-[#dc2626] text-white flex items-center justify-center text-[9px] font-black">
            ✕
          </span>
          <span className="text-[9.5px] font-bold text-[#dc2626]">Submerged 48cm</span>
        </button>

        {/* Shelter Marker Pin: St. Jude Relief Pavilion */}
        <button
          onClick={() => onNavigate('shelters')}
          className="absolute left-[316px] top-[54px] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center active:scale-95 transition-transform group"
        >
          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/95 backdrop-blur-md shadow-lg border border-emerald-200">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <div className="flex flex-col text-left">
              <span className="text-[10.5px] font-bold text-[#1a1c1c] leading-tight">
                St. Jude Pavilion
              </span>
              <span className="text-[8.5px] font-semibold text-emerald-700 leading-none">
                55 open beds
              </span>
            </div>
          </div>
          <div className="w-2 h-2 rotate-45 bg-white shadow-xs -mt-1" />
        </button>

        {/* Ridge Crest Tag */}
        <div className="absolute left-[110px] top-[105px] px-2 py-0.5 rounded-full bg-[#d5e3ff]/90 backdrop-blur-sm border border-[#005eb2]/20 flex items-center gap-1">
          <span className="text-[9px] font-bold text-[#005eb2] uppercase tracking-wider">
            Ridge Crest +32m MSL
          </span>
        </div>

        {/* Floating Controls Overlay - Top Left */}
        <div className="absolute top-2.5 left-2.5 right-14 flex flex-col gap-1.5 pointer-events-auto">
          <div
            onClick={() => onNavigate('shelters')}
            className="h-9 px-3 rounded-xl bg-white/90 backdrop-blur-md shadow-sm border border-slate-200 flex items-center gap-2 cursor-pointer"
          >
            <Search className="w-3.5 h-3.5 text-slate-500" />
            <span className="text-[11.5px] text-slate-500 truncate flex-1">
              Find safe shelter or high ground...
            </span>
            <span className="text-[9.5px] font-semibold text-[#005eb2] bg-[#d5e3ff] px-1.5 py-0.5 rounded">
              Bandra
            </span>
          </div>

          <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar">
            <div
              className={`px-2 py-0.5 rounded-full text-[10px] font-semibold flex items-center gap-1 shadow-2xs ${
                wheelchairEnabled
                  ? 'bg-blue-600 text-white'
                  : 'bg-white/90 text-slate-700 border border-slate-200'
              }`}
            >
              <span>♿</span>
              <span>Wheelchair Ready</span>
            </div>
            <div className="px-2 py-0.5 rounded-full bg-white/90 text-slate-700 border border-slate-200 text-[10px] font-semibold flex items-center gap-1 shadow-2xs">
              <Zap className="w-2.5 h-2.5 text-amber-600" />
              <span>Power Active</span>
            </div>
          </div>
        </div>

        {/* Floating Controls Overlay - Top Right Rail */}
        <div className="absolute top-2.5 right-2.5 flex flex-col gap-1.5 pointer-events-auto">
          <button
            onClick={() => setIs3D(!is3D)}
            className="w-8 h-8 rounded-xl bg-white/90 backdrop-blur-md border border-slate-200 shadow-sm flex items-center justify-center text-[10px] font-extrabold text-slate-800 active:scale-95 transition-transform"
          >
            {is3D ? '2D' : '3D'}
          </button>
          <button
            onClick={handleRecenter}
            className={`w-8 h-8 rounded-xl bg-white/90 backdrop-blur-md border border-slate-200 shadow-sm flex items-center justify-center text-[#005eb2] active:scale-95 transition-transform ${
              isRecentering ? 'scale-90 text-blue-800' : ''
            }`}
          >
            <Crosshair className="w-4 h-4" />
          </button>
          <button
            onClick={() => onNavigate('why-route')}
            title="Inspect Layers"
            className="w-8 h-8 rounded-xl bg-white/90 backdrop-blur-md border border-slate-200 shadow-sm flex items-center justify-center text-slate-700 active:scale-95 transition-transform"
          >
            <Layers className="w-4 h-4" />
          </button>
        </div>

        {/* Bottom Left Live Telemetry */}
        <div className="absolute bottom-2 left-2 flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-white/90 backdrop-blur-md shadow-2xs border border-slate-200">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-[9.5px] font-semibold text-slate-600">
            NDRF Mesh Connected • GPS Accuracy 1.8m
          </span>
        </div>
      </div>

      {/* Multi-Height Apple-Style Bottom Sheet */}
      <section className="flex-1 -mt-3 rounded-t-[24px] bg-white shadow-lg border-t border-slate-100 px-4 pt-2.5 pb-20 flex flex-col gap-3.5 z-20">
        {/* Grab Handle */}
        <div className="w-full flex justify-center py-0.5">
          <div className="w-9 h-1 rounded-full bg-slate-300" />
        </div>

        {/* Destination Header */}
        <div className="flex items-start justify-between gap-3">
          <div className="flex flex-col gap-0.5 min-w-0">
            <div className="flex items-center gap-1.5">
              <span className="text-[10px] font-bold text-[#005eb2] uppercase tracking-wider">
                Safe Evacuation Route
              </span>
              <span className="w-1 h-1 rounded-full bg-slate-300" />
              <span className="text-[10px] font-medium text-slate-500">Live Radar</span>
            </div>
            <h2 className="text-[17px] font-extrabold text-slate-900 leading-tight truncate">
              St. Jude Relief Pavilion
            </h2>
            <div className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-[#d5e3ff] text-[#005eb2] w-fit mt-0.5">
              <CheckCircle2 className="w-3 h-3" />
              <span className="text-[9.5px] font-bold tracking-tight">
                Elevated Ridge Route (+32m MSL)
              </span>
            </div>
          </div>
          <button
            onClick={handleShare}
            className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-700 hover:bg-slate-200 transition-colors flex-shrink-0"
          >
            <Share2 className="w-3.5 h-3.5" />
          </button>
        </div>

        {copiedLink && (
          <div className="text-[11px] text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-lg border border-emerald-200 font-medium">
            Evacuation route coordinates copied to clipboard!
          </div>
        )}

        {/* Reassurance Strip with #FFB248 Warm Accent */}
        <div className="w-full px-3 py-2 rounded-xl bg-[#ffddb7]/50 border border-[#ffb248]/40 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 rounded-full bg-[#ffb248] flex items-center justify-center text-[#704600]">
              <Sparkles className="w-3 h-3" />
            </div>
            <span className="text-[11px] font-bold text-[#2a1700]">
              Safe Corridor Confirmed Dry
            </span>
          </div>
          <span className="text-[9.5px] font-semibold text-[#653e00]">Updated 18s ago</span>
        </div>

        {/* Trip Key Metrics */}
        <div className="grid grid-cols-4 gap-1.5 w-full">
          <div className="flex flex-col items-center p-2 rounded-xl bg-slate-50 text-center border border-slate-100">
            <span className="text-[18px] font-black text-slate-900 tabular-nums leading-tight">
              14
            </span>
            <span className="text-[9px] font-bold text-[#005eb2] uppercase tracking-tight">
              MIN
            </span>
          </div>
          <div className="flex flex-col items-center p-2 rounded-xl bg-slate-50 text-center border border-slate-100">
            <span className="text-[18px] font-black text-slate-900 tabular-nums leading-tight">
              3.8
            </span>
            <span className="text-[9px] font-semibold text-slate-500 uppercase tracking-tight">
              KM
            </span>
          </div>
          <div className="flex flex-col items-center p-2 rounded-xl bg-slate-50 text-center border border-slate-100">
            <span className="text-[18px] font-black text-emerald-700 tabular-nums leading-tight">
              0
            </span>
            <span className="text-[9px] font-bold text-emerald-700 uppercase tracking-tight">
              HAZARDS
            </span>
          </div>
          <div className="flex flex-col items-center p-2 rounded-xl bg-slate-50 text-center border border-slate-100">
            <span className="text-[18px] font-black text-slate-900 tabular-nums leading-tight">
              55
            </span>
            <span className="text-[9px] font-semibold text-slate-500 uppercase tracking-tight">
              BEDS FREE
            </span>
          </div>
        </div>

        {/* Quick Shelter Specs */}
        <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar py-0.5">
          <div className="px-2.5 py-1 rounded-lg bg-slate-100 flex items-center gap-1.5 flex-shrink-0 text-slate-800 text-[10.5px] font-medium">
            <span>♿</span>
            <span>Ramp Slope 4.2%</span>
          </div>
          <div className="px-2.5 py-1 rounded-lg bg-slate-100 flex items-center gap-1.5 flex-shrink-0 text-slate-800 text-[10.5px] font-medium">
            <Zap className="w-3 h-3 text-amber-700" />
            <span>Generator Active</span>
          </div>
          <div className="px-2.5 py-1 rounded-lg bg-slate-100 flex items-center gap-1.5 flex-shrink-0 text-slate-800 text-[10.5px] font-medium">
            <Activity className="w-3 h-3 text-red-600" />
            <span>Triage Ready</span>
          </div>
        </div>

        {/* Dominant Primary Action CTA */}
        <div className="flex flex-col gap-2 pt-1">
          <button
            onClick={handleStartNav}
            disabled={isStartingNav}
            className="w-full h-12 rounded-xl bg-[#2563EB] hover:bg-[#1d4ed8] text-white font-bold text-[14px] shadow-md shadow-blue-500/25 flex items-center justify-center gap-2 active:scale-[0.98] transition-all"
          >
            {isStartingNav ? (
              <span className="flex items-center gap-2">
                <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                Engaging Turn-by-Turn Audio...
              </span>
            ) : (
              <>
                <Compass className="w-4 h-4" />
                <span>Start Evacuation Navigation</span>
              </>
            )}
          </button>

          {/* Secondary Forensic Link */}
          <button
            onClick={() => onNavigate('why-route')}
            className="w-full py-1 flex items-center justify-center gap-1 text-[11.5px] font-semibold text-[#005eb2] hover:underline"
          >
            <span>Why this route? (View Hydrological Analysis)</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </section>
    </div>
  );
};
