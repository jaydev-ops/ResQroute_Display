import React, { useState } from 'react';
import {
  ChevronLeft,
  Lightbulb,
  Layers,
  CheckCircle2,
  AlertOctagon,
  Mountain,
  ChevronDown,
  Navigation,
  Check,
  Code,
  ShieldCheck,
} from 'lucide-react';
import { MobileScreenId } from '../../../types';

interface WhyThisRouteScreenProps {
  onNavigate: (screen: MobileScreenId) => void;
}

export const WhyThisRouteScreen: React.FC<WhyThisRouteScreenProps> = ({ onNavigate }) => {
  const [techOpen, setTechOpen] = useState(false);
  const [isConfirmed, setIsConfirmed] = useState(false);

  const handleConfirm = () => {
    setIsConfirmed(true);
    setTimeout(() => {
      onNavigate('guidance');
    }, 800);
  };

  return (
    <div className="flex flex-col w-full h-full relative bg-[#faf9f9] text-[#1a1c1c] select-none overflow-y-auto px-4 pt-2 pb-24 space-y-4">
      {/* Header */}
      <div className="flex flex-col gap-1">
        <div className="flex items-center gap-2">
          <button
            onClick={() => onNavigate('radar')}
            className="w-8 h-8 -ml-1 flex items-center justify-center rounded-full text-slate-800 hover:bg-slate-100 active:scale-95 transition-all"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <div className="flex items-center gap-2">
            <span className="w-6 h-6 rounded-lg bg-[#005eb2]/10 text-[#005eb2] flex items-center justify-center">
              <ShieldCheck className="w-4 h-4" />
            </span>
            <h1 className="text-[17px] font-extrabold text-slate-900 tracking-tight">
              Why This Route?
            </h1>
          </div>
        </div>
        <p className="text-[11.5px] text-slate-500 ml-9 font-medium">
          Algorithmic Safety & PostGIS Verification
        </p>
      </div>

      {/* Thesis Principle Banner */}
      <div className="relative overflow-hidden rounded-2xl bg-white shadow-xs border border-slate-100 p-3.5">
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#ffb248]" />
        <div className="flex items-start gap-2.5 pl-1">
          <div className="w-7 h-7 rounded-xl bg-[#ffddb7]/60 text-[#704600] flex items-center justify-center shrink-0 mt-0.5">
            <Lightbulb className="w-4 h-4" />
          </div>
          <div className="flex flex-col gap-0.5">
            <span className="text-[9.5px] uppercase tracking-wider font-bold text-[#855400]">
              Core Routing Axiom
            </span>
            <p className="text-[12.5px] font-bold text-slate-900 leading-snug">
              Thesis: The shortest route is not always the safest route.
            </p>
            <p className="text-[11px] text-slate-600 leading-normal mt-0.5">
              resQroute calculates hydrodynamic thresholds, topological elevation corridors, and
              real-time culvert IoT telemetry before optimizing for travel time.
            </p>
          </div>
        </div>
      </div>

      {/* Dual Route Schematics Map Mini-View */}
      <div className="w-full rounded-2xl bg-white p-3.5 shadow-xs border border-slate-100 flex flex-col gap-2.5">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <Layers className="w-4 h-4 text-[#005eb2]" />
            <span className="text-[12px] font-bold text-slate-900 tracking-tight">
              PostGIS Geospatial Trajectory
            </span>
          </div>
          <span className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-slate-100 text-slate-600">
            Real-time Model
          </span>
        </div>

        {/* Vector Schematic */}
        <div className="relative w-full h-36 rounded-xl overflow-hidden bg-slate-100 border border-slate-200/70 flex items-center justify-center">
          <svg
            className="w-full h-full"
            viewBox="0 0 340 160"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Grid Pattern */}
            <path d="M0 40 H340 M0 80 H340 M0 120 H340 M80 0 V160 M170 0 V160 M260 0 V160" stroke="#e2e8f0" strokeWidth="1" strokeDasharray="3 3" />
            {/* Hazard Water Basin */}
            <circle cx="165" cy="110" r="26" fill="#fee2e2" stroke="#fca5a5" strokeWidth="1" />
            <text x="165" y="113" textAnchor="middle" fill="#dc2626" fontSize="8" fontWeight="bold">
              WATER +48cm
            </text>
            {/* Rejected Route A (Red Dashed) */}
            <path d="M 38 116 L 100 112 L 140 110" stroke="#dc2626" strokeWidth="3" strokeDasharray="4 4" strokeLinecap="round" />
            <path d="M 190 108 L 240 100 L 298 48" stroke="#dc2626" strokeWidth="1.5" strokeDasharray="2 4" strokeLinecap="round" opacity="0.4" />
            {/* Safe Route B (Blue Elevated Arc) */}
            <path d="M 38 116 C 60 65, 95 35, 170 32 C 235 30, 265 38, 298 48" stroke="#005eb2" strokeWidth="4" strokeLinecap="round" />
            <path d="M 38 116 C 60 65, 95 35, 170 32 C 235 30, 265 38, 298 48" stroke="#4597fe" strokeWidth="1.5" strokeDasharray="4 4" strokeLinecap="round" />
            {/* Origin Pin */}
            <circle cx="38" cy="116" r="5" fill="#0f172a" />
            <circle cx="38" cy="116" r="2" fill="#ffffff" />
            <text x="38" y="132" textAnchor="middle" fill="#475569" fontSize="8" fontWeight="bold">
              Your Origin
            </text>
            {/* Rejection Cross Pin */}
            <circle cx="150" cy="110" r="7" fill="#dc2626" />
            <path d="M 148 108 L 152 112 M 152 108 L 148 112" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" />
            {/* Destination Shelter Pin */}
            <circle cx="298" cy="48" r="6" fill="#005eb2" />
            <circle cx="298" cy="48" r="2.5" fill="#ffffff" />
            <text x="282" y="38" textAnchor="middle" fill="#005eb2" fontSize="8.5" fontWeight="bold">
              St. Jude Shelter
            </text>
          </svg>

          <div className="absolute bottom-1.5 right-2 bg-white/90 backdrop-blur-md px-2 py-0.5 rounded text-[9px] font-bold text-[#005eb2] shadow-2xs">
            High-Spine Divergence
          </div>
        </div>

        {/* Legend */}
        <div className="grid grid-cols-2 gap-2 text-[10px] font-semibold text-slate-600">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-1 rounded-full bg-[#005eb2]" />
            <span>Route B: Safe (+32m MSL)</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-1 rounded-full bg-red-600 border-dashed" />
            <span>Route A: Inundated Canal</span>
          </div>
        </div>
      </div>

      {/* ROUTE B: SELECTED & RECOMMENDED */}
      <div className="rounded-2xl bg-white p-4 shadow-sm border border-blue-100 flex flex-col gap-3 relative overflow-hidden">
        <div className="flex flex-col gap-1.5">
          <div className="flex items-center justify-between flex-wrap gap-1.5">
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#d5e3ff] text-[#001b3b] font-bold text-[10.5px]">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#005eb2]" />
              0 Hazard Intersections • Verified Safe
            </span>
            <span className="text-[9.5px] font-bold uppercase text-[#005eb2] bg-blue-50 px-2 py-0.5 rounded">
              Active Target
            </span>
          </div>
          <h2 className="text-[15px] font-extrabold text-slate-900 tracking-tight leading-tight mt-0.5">
            Route B: Ridge Road Corridor
          </h2>
          <p className="text-[11px] text-slate-500 font-medium">
            Topological Elevation Traverse via Highlands
          </p>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-3 gap-2">
          <div className="p-2 rounded-xl bg-slate-50 text-center border border-slate-100">
            <span className="text-[9.5px] font-medium text-slate-500 block">Distance</span>
            <span className="text-[14px] font-black text-slate-900">3.4 km</span>
          </div>
          <div className="p-2 rounded-xl bg-slate-50 text-center border border-slate-100">
            <span className="text-[9.5px] font-medium text-slate-500 block">Est. Time</span>
            <span className="text-[14px] font-black text-[#005eb2]">14 min</span>
          </div>
          <div className="p-2 rounded-xl bg-slate-50 text-center border border-slate-100">
            <span className="text-[9.5px] font-medium text-slate-500 block">Elevation</span>
            <span className="text-[14px] font-black text-slate-900">+32m</span>
          </div>
        </div>

        {/* Verification Matrix Bullets */}
        <div className="flex flex-col gap-2 pt-1">
          <span className="text-[9.5px] uppercase tracking-wider font-bold text-slate-400">
            Verification Matrix
          </span>
          <div className="flex items-start gap-2">
            <div className="w-4.5 h-4.5 rounded-full bg-blue-50 text-[#005eb2] flex items-center justify-center shrink-0 mt-0.5">
              <Mountain className="w-3 h-3" />
            </div>
            <div className="flex flex-col">
              <span className="text-[11.5px] font-bold text-slate-900">Zero Water Accumulation</span>
              <span className="text-[10.5px] text-slate-600 leading-snug">
                Maintains continuous crest on +32m MSL high-ground spine away from flash drainage zones.
              </span>
            </div>
          </div>
          <div className="flex items-start gap-2">
            <div className="w-4.5 h-4.5 rounded-full bg-blue-50 text-[#005eb2] flex items-center justify-center shrink-0 mt-0.5">
              <span>♿</span>
            </div>
            <div className="flex flex-col">
              <span className="text-[11.5px] font-bold text-slate-900">
                Full ADA Wheelchair Compliance
              </span>
              <span className="text-[10.5px] text-slate-600 leading-snug">
                Continuous paved sidewalks with maximum grade slope &lt; 4.5% and zero washed-out curbs.
              </span>
            </div>
          </div>
        </div>

        {/* Shelter Banner */}
        <div className="rounded-xl bg-[#d5e3ff]/50 p-2.5 flex items-center gap-2.5 border border-blue-200/60">
          <div className="w-7 h-7 rounded-lg bg-white text-[#005eb2] flex items-center justify-center shadow-2xs shrink-0 font-black text-xs">
            +
          </div>
          <div className="flex flex-col min-w-0">
            <div className="flex items-center gap-1.5">
              <span className="text-[11px] font-bold text-slate-900 truncate">
                St. Jude Pavilion
              </span>
              <span className="w-1 h-1 rounded-full bg-[#005eb2]" />
              <span className="text-[10px] font-bold text-[#005eb2]">55 open beds</span>
            </div>
            <span className="text-[10px] text-slate-600 leading-tight">
              Emergency generator power & triage team standing by.
            </span>
          </div>
        </div>
      </div>

      {/* ROUTE A: REJECTED ALTERNATIVE */}
      <div className="rounded-2xl bg-white p-4 shadow-xs border border-red-100 flex flex-col gap-3">
        <div className="flex flex-col gap-1.5">
          <div className="flex items-center justify-between flex-wrap gap-1.5">
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#ffdad6] text-[#ba1a1a] font-bold text-[10.5px]">
              <AlertOctagon className="w-3.5 h-3.5" />
              REJECTED - Life Safety Hazard
            </span>
            <span className="text-[9.5px] font-bold uppercase text-red-600 bg-red-50 px-2 py-0.5 rounded">
              Unsafe Shortcut
            </span>
          </div>
          <h2 className="text-[14.5px] font-extrabold text-slate-900 tracking-tight leading-tight mt-0.5">
            Route A: Direct Canal Expressway
          </h2>
          <p className="text-[11px] text-slate-500 font-medium">Urban Low-Basin Culvert Path</p>
        </div>

        {/* Strikethrough Metrics */}
        <div className="grid grid-cols-3 gap-2 opacity-75">
          <div className="p-2 rounded-xl bg-slate-50 text-center border border-slate-100">
            <span className="text-[9.5px] font-medium text-slate-500 block">Nominal Dist</span>
            <span className="text-[13px] font-bold text-slate-900 line-through decoration-red-500 decoration-2">
              1.9 km
            </span>
          </div>
          <div className="p-2 rounded-xl bg-slate-50 text-center border border-slate-100">
            <span className="text-[9.5px] font-medium text-slate-500 block">Nominal Time</span>
            <span className="text-[13px] font-bold text-slate-900 line-through decoration-red-500 decoration-2">
              6 min
            </span>
          </div>
          <div className="p-2 rounded-xl bg-slate-50 text-center border border-slate-100">
            <span className="text-[9.5px] font-medium text-slate-500 block">Profile</span>
            <span className="text-[12px] font-bold text-red-600">Impassable</span>
          </div>
        </div>

        {/* Rejection Causes */}
        <div className="flex flex-col gap-2 pt-1">
          <span className="text-[9.5px] uppercase tracking-wider font-bold text-red-600">
            Fatal Failure Causes
          </span>
          <div className="flex items-start gap-2">
            <span className="w-4 h-4 rounded-full bg-red-100 text-red-700 flex items-center justify-center text-[10px] font-black shrink-0 mt-0.5">
              ✕
            </span>
            <div className="flex flex-col">
              <span className="text-[11px] font-bold text-slate-900">
                Hard Road Closure at Edge #402
              </span>
              <span className="text-[10.5px] text-slate-600 leading-snug">
                Hydro sensor recorded water depth at 48cm. Threshold &gt;15cm floats passenger vehicles and stalls wheelchairs.
              </span>
            </div>
          </div>
          <div className="flex items-start gap-2">
            <span className="w-4 h-4 rounded-full bg-red-100 text-red-700 flex items-center justify-center text-[10px] font-black shrink-0 mt-0.5">
              ✕
            </span>
            <div className="flex flex-col">
              <span className="text-[11px] font-bold text-slate-900">PostGIS Collision</span>
              <code className="text-[9.5px] font-mono text-red-700 bg-red-50 px-2 py-0.5 rounded mt-0.5 break-all border border-red-200">
                ST_Intersects(geom, closed_edge_buffer) = TRUE
              </code>
            </div>
          </div>
        </div>
      </div>

      {/* Technical Lineage Accordion */}
      <div className="rounded-2xl bg-white p-3.5 shadow-xs border border-slate-100">
        <button
          onClick={() => setTechOpen(!techOpen)}
          className="w-full flex items-center justify-between text-slate-900 font-bold text-[12px]"
        >
          <div className="flex items-center gap-2">
            <Code className="w-4 h-4 text-slate-500" />
            <span>Technical & Sensor Provenance</span>
          </div>
          <ChevronDown
            className={`w-4 h-4 text-slate-400 transition-transform ${techOpen ? 'rotate-180' : ''}`}
          />
        </button>

        {techOpen && (
          <div className="mt-3 pt-2 border-t border-slate-100 flex flex-col gap-1.5 text-[10.5px] font-mono bg-slate-50 p-2.5 rounded-xl text-slate-700">
            <div className="flex justify-between">
              <span>Graph Engine:</span>
              <span className="font-bold text-slate-900">OSM-Graph v2.4</span>
            </div>
            <div className="flex justify-between">
              <span>Evacuation Policy:</span>
              <span className="font-bold text-slate-900">NDMA-Flood v1.0</span>
            </div>
            <div className="flex justify-between">
              <span>Confidence Score:</span>
              <span className="font-bold text-[#005eb2]">98.4% (p &lt; 0.001)</span>
            </div>
            <div className="flex justify-between">
              <span>Elevation Datum:</span>
              <span>SRTM 30m / LiDAR 1m Fusion</span>
            </div>
          </div>
        )}
      </div>

      {/* Reassuring Bottom CTA */}
      <div className="pt-2">
        <button
          onClick={handleConfirm}
          className="w-full h-12 rounded-xl bg-[#ffb248] text-[#704600] font-extrabold text-[14px] shadow-md shadow-amber-500/20 flex items-center justify-center gap-2 active:scale-[0.98] transition-all"
        >
          {isConfirmed ? (
            <span className="flex items-center gap-1.5 text-[#2a1700]">
              <Check className="w-4 h-4" />
              <span>Route B Locked & GPS Calibrated</span>
            </span>
          ) : (
            <>
              <Navigation className="w-4 h-4 fill-current" />
              <span>Confirm & Follow Safe Route B</span>
            </>
          )}
        </button>
        <p className="text-center text-[10px] text-slate-400 mt-2 font-medium">
          Turn-by-turn guidance adapts automatically if water thresholds change.
        </p>
      </div>
    </div>
  );
};
