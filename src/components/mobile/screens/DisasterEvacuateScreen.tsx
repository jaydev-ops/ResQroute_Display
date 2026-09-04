import React, { useState } from 'react';
import {
  AlertOctagon,
  ShieldCheck,
  Footprints,
  ChevronDown,
  Navigation,
  LifeBuoy,
  Bed,
  Accessibility,
  Zap,
} from 'lucide-react';
import { MobileScreenId } from '../../../types';

interface DisasterEvacuateScreenProps {
  onNavigate: (screen: MobileScreenId) => void;
}

export const DisasterEvacuateScreen: React.FC<DisasterEvacuateScreenProps> = ({ onNavigate }) => {
  const [telemetryOpen, setTelemetryOpen] = useState(false);
  const [sosRequested, setSosRequested] = useState(false);

  const handleSos = () => {
    setSosRequested(true);
    setTimeout(() => {
      onNavigate('sos-active');
    }, 1000);
  };

  return (
    <div className="flex flex-col w-full h-full relative bg-[#faf9f9] text-[#1a1c1c] select-none overflow-y-auto px-4 pt-2 pb-24 space-y-3.5">
      {/* 1. High-Alert Crisis Directive Banner */}
      <section className="relative overflow-hidden rounded-2xl bg-[#dc2626] p-3.5 text-white shadow-lg">
        <div className="flex items-start gap-2.5">
          <div className="w-10 h-10 rounded-xl bg-white text-[#dc2626] flex items-center justify-center shrink-0 shadow-sm">
            <AlertOctagon className="w-6 h-6" />
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-1.5 mb-0.5">
              <span className="text-[9.5px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full bg-white/20 text-white">
                Life Threat Active
              </span>
              <span className="text-[10.5px] text-white/90 font-semibold">• Priority 1</span>
            </div>
            <h1 className="text-[15px] font-black tracking-tight leading-tight uppercase">
              Flash Flood Emergency
            </h1>
            <p className="text-[11px] text-white/95 font-medium mt-0.5 leading-snug">
              Sector 17 Low Basin • Immediate High-Ground Evacuation Mandated
            </p>
          </div>
        </div>

        <div className="mt-2.5 pt-2 flex items-center gap-1.5 text-[10px] font-medium text-white/90 bg-black/15 -mx-3.5 -mb-3.5 px-3.5 py-1.5 border-t border-white/10">
          <ShieldCheck className="w-3.5 h-3.5 text-[#ffb248]" />
          <span className="truncate">Municipal Disaster Authority (NDRF) • Issued 1 min ago</span>
        </div>
      </section>

      {/* 2. Single Directive Decision Card */}
      <section className="rounded-2xl bg-white p-3.5 shadow-sm border border-slate-100 flex flex-col gap-2.5">
        <div className="flex items-center gap-2 p-2 rounded-xl bg-[#ffdad6] text-[#ba1a1a]">
          <span className="text-base">🌊</span>
          <p className="text-[11.5px] font-bold leading-tight">
            Your position is inside active inundation:{' '}
            <span className="font-extrabold text-[#ba1a1a] underline">+48cm water rising</span>
          </p>
        </div>

        <div className="flex flex-col gap-0.5">
          <span className="text-[10px] font-extrabold tracking-widest text-[#855400] uppercase">
            Mandatory Action
          </span>
          <h2 className="text-[15px] font-extrabold text-slate-900 leading-snug">
            Head towards Ridge Road Corridor to St. Jude Relief Pavilion
          </h2>
          <div className="flex items-center gap-2 mt-1 text-[11px] text-slate-600 font-medium">
            <span className="inline-flex items-center gap-1 text-slate-900 font-bold">
              <Footprints className="w-3.5 h-3.5 text-[#005eb2]" />
              3.4 km
            </span>
            <span>•</span>
            <span className="font-bold text-slate-900">14 min walk</span>
            <span>•</span>
            <span className="text-[#005eb2] font-bold">High-Ground (+32m MSL)</span>
          </div>
        </div>
      </section>

      {/* 3. Compact Micro-GIS Corridor Map */}
      <section className="rounded-2xl bg-white p-3 shadow-sm border border-slate-100 flex flex-col gap-2">
        <div className="flex items-center justify-between">
          <span className="text-[11.5px] font-bold text-slate-900">Evacuation Ridge Topology</span>
          <span className="inline-flex items-center gap-1 text-[10px] font-bold text-[#704600] bg-[#ffddb7] px-2 py-0.5 rounded-full">
            <span>✓</span> 0 Hazard Intersections
          </span>
        </div>

        <div className="relative w-full h-36 rounded-xl bg-slate-100 overflow-hidden flex items-center justify-center border border-slate-200">
          <svg className="w-full h-full" viewBox="0 0 320 160" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 40 H320 M0 80 H320 M0 120 H320 M70 0 V160 M150 0 V160 M230 0 V160" stroke="#e2e8f0" strokeDasharray="3 3" />
            <path d="M 0 90 Q 80 100 120 160 L 0 160 Z" fill="#fee2e2" />
            <path d="M 20 145 C 90 110 140 65 270 28" stroke="#ffb248" strokeWidth="22" opacity="0.3" strokeLinecap="round" />
            <path d="M 20 105 L 100 150" stroke="#dc2626" strokeWidth="2.5" strokeDasharray="4 4" />
            <circle cx="60" cy="125" r="7" fill="#dc2626" />
            <path d="M 58 125 H 62" stroke="#ffffff" strokeWidth="1.5" />
            <text x="72" y="128" fill="#dc2626" fontSize="8" fontWeight="bold">Canal Blocked</text>

            <path d="M 38 135 C 80 105 140 68 255 34" stroke="#005eb2" strokeWidth="5" strokeLinecap="round" />
            <circle cx="38" cy="135" r="4" fill="#005eb2" />
            <text x="22" y="152" fill="#005eb2" fontSize="8" fontWeight="bold">YOU (0m MSL)</text>
            <circle cx="255" cy="34" r="6" fill="#005eb2" />
            <text x="200" y="24" fill="#002e5d" fontSize="8.5" fontWeight="bold">ST. JUDE RELIEF (+32m)</text>
          </svg>

          <div className="absolute top-2 left-2 px-1.5 py-0.5 rounded bg-white/90 backdrop-blur text-[9px] font-bold text-slate-800 shadow-2xs">
            Elevation Contour +32m
          </div>
        </div>

        {/* Capacity and Accessibility Verified Signals */}
        <div className="grid grid-cols-3 gap-1 pt-1">
          <div className="flex flex-col items-center justify-center p-1.5 rounded-xl bg-slate-50 text-center border border-slate-100">
            <Bed className="w-3.5 h-3.5 text-[#005eb2] mb-0.5" />
            <span className="text-[10.5px] font-bold text-slate-900 leading-tight">55 Beds</span>
            <span className="text-[8px] text-slate-500 font-medium">St. Jude Shelter</span>
          </div>
          <div className="flex flex-col items-center justify-center p-1.5 rounded-xl bg-slate-50 text-center border border-slate-100">
            <Accessibility className="w-3.5 h-3.5 text-[#005eb2] mb-0.5" />
            <span className="text-[10.5px] font-bold text-slate-900 leading-tight">ADA Ramp</span>
            <span className="text-[8px] text-slate-500 font-medium">Step-Free Entry</span>
          </div>
          <div className="flex flex-col items-center justify-center p-1.5 rounded-xl bg-slate-50 text-center border border-slate-100">
            <Zap className="w-3.5 h-3.5 text-[#855400] mb-0.5" />
            <span className="text-[10.5px] font-bold text-slate-900 leading-tight">Aux Generator</span>
            <span className="text-[8px] text-slate-500 font-medium">Power Verified</span>
          </div>
        </div>
      </section>

      {/* 4. Dominant Life-Safety Actions */}
      <section className="flex flex-col gap-2 pt-1">
        <button
          onClick={() => onNavigate('guidance')}
          className="w-full h-13 rounded-2xl bg-[#005eb2] hover:bg-blue-800 active:scale-[0.98] transition-all flex items-center justify-between px-4 text-white font-extrabold text-[13px] shadow-md shadow-blue-500/25"
        >
          <div className="flex items-center gap-2">
            <Navigation className="w-5 h-5 fill-current" />
            <span className="tracking-tight">START SAFE EVACUATION</span>
          </div>
          <span className="bg-white/20 px-2 py-0.5 rounded-lg text-[11px] font-bold">
            RIDGE ROAD →
          </span>
        </button>

        <button
          onClick={handleSos}
          className="w-full h-11 rounded-2xl bg-[#ffdad6] hover:bg-red-200 active:scale-[0.98] transition-all flex items-center justify-center gap-1.5 text-[#ba1a1a] font-bold text-[11px]"
        >
          <LifeBuoy className="w-4 h-4" />
          <span>
            {sosRequested ? 'Air-Boat Rescue Dispatched!' : 'Trapped / Cannot Walk? Request Immediate Air-Boat Rescue'}
          </span>
        </button>
      </section>

      {/* 5. Progressive Disclosure Footnote */}
      <section className="flex flex-col items-center text-center">
        <button
          onClick={() => setTelemetryOpen(!telemetryOpen)}
          className="inline-flex items-center gap-1 text-[11px] font-semibold text-slate-500 hover:text-slate-900 py-1"
        >
          <span>View hydrological reasoning & rejected flood routes</span>
          <ChevronDown
            className={`w-3.5 h-3.5 transition-transform ${telemetryOpen ? 'rotate-180' : ''}`}
          />
        </button>

        {telemetryOpen && (
          <div className="w-full mt-2 p-2.5 bg-slate-100 rounded-xl text-left text-[11px] text-slate-700 flex flex-col gap-1.5">
            <div className="flex items-center justify-between font-mono text-[9.5px] text-slate-500">
              <span>PostGIS Node ID: #849-SECT17</span>
              <span className="text-red-700 font-bold">Inundation Rate: +3.2mm/min</span>
            </div>
            <p className="leading-relaxed text-[10.5px]">
              <strong className="text-slate-900">Rejected Path:</strong> Canal Underpass rejected at
              14:02 due to culvert overflow exceeding 1.2m depth threshold. The Ridge Spine corridor
              maintains +18.4m hydraulic safety buffer.
            </p>
            <button
              onClick={() => onNavigate('why-route')}
              className="text-[#005eb2] font-bold text-[10.5px] hover:underline"
            >
              Open Full PostGIS Forensic Breakdown →
            </button>
          </div>
        )}
      </section>
    </div>
  );
};
