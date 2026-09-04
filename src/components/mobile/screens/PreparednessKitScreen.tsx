import React, { useState } from 'react';
import {
  Bell,
  Shield,
  Droplets,
  CheckCircle2,
  AlertTriangle,
  MapPin,
  Users,
  Compass,
  ChevronRight,
  Sparkles,
  PackageCheck,
  Radio,
} from 'lucide-react';
import { MobileScreenId } from '../../../types';
import { GO_BAG_ITEMS } from '../../../data/mockData';

interface PreparednessKitScreenProps {
  onNavigate: (screen: MobileScreenId) => void;
}

export const PreparednessKitScreen: React.FC<PreparednessKitScreenProps> = ({ onNavigate }) => {
  const [items, setItems] = useState(GO_BAG_ITEMS);
  const [showChecklist, setShowChecklist] = useState(false);

  const packedCount = items.filter((i) => i.packed).length;
  const pct = Math.round((packedCount / items.length) * 100);

  const toggleItem = (id: number) => {
    setItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, packed: !item.packed } : item))
    );
  };

  return (
    <div className="flex flex-col w-full h-full relative bg-[#faf9f9] text-[#1a1c1c] select-none overflow-y-auto px-4 pt-2 pb-24 space-y-4">
      {/* Top App Bar */}
      <div className="flex items-center justify-between py-1">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-[#855400] text-white flex items-center justify-center font-bold text-xs shadow-xs">
            <Shield className="w-4 h-4 text-[#ffddb7]" />
          </div>
          <h1 className="text-[15px] font-bold text-slate-900 tracking-tight">
            Preparedness / Kit
          </h1>
        </div>
        <div className="flex items-center gap-1.5">
          <button
            onClick={() => onNavigate('disaster-alert')}
            className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-700 hover:bg-slate-200"
          >
            <Bell className="w-4 h-4" />
          </button>
          <button
            onClick={() => onNavigate('profile')}
            className="w-7 h-7 rounded-full bg-[#855400] text-white flex items-center justify-center text-xs font-bold"
          >
            S
          </button>
        </div>
      </div>

      {/* Greeting & District Normal Status */}
      <div className="space-y-1">
        <div className="flex items-center justify-between">
          <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
            Peacetime Monitoring
          </span>
          <span className="inline-flex items-center gap-1 text-[10px] font-bold text-[#005eb2] bg-[#d5e3ff] px-2 py-0.5 rounded-full">
            <span className="w-1.5 h-1.5 rounded-full bg-[#005eb2] animate-pulse" />
            Live Sync
          </span>
        </div>
        <h2 className="text-[20px] font-black text-slate-900 tracking-tight">
          Good morning, Sarah
        </h2>
        <p className="text-[11.5px] text-slate-600 flex items-center gap-1 font-medium">
          <span className="w-2 h-2 rounded-full bg-[#005eb2]" />
          <span>Bandra West • District 17 • Normal Status (River Gauge 2.4m Safe)</span>
        </p>
      </div>

      {/* Mode Hub Pills */}
      <div className="grid grid-cols-2 gap-2">
        <button className="h-9 rounded-xl bg-white border border-slate-200 font-bold text-[12px] text-slate-900 shadow-2xs flex items-center justify-center gap-1.5">
          <Shield className="w-3.5 h-3.5 text-[#005eb2]" />
          <span>Peacetime Hub</span>
        </button>
        <button
          onClick={() => onNavigate('disaster-alert')}
          className="h-9 rounded-xl bg-slate-100 hover:bg-slate-200 font-semibold text-[12px] text-slate-600 flex items-center justify-center gap-1.5 transition-colors"
        >
          <AlertTriangle className="w-3.5 h-3.5 text-amber-600" />
          <span>Emergency Drill</span>
        </button>
      </div>

      {/* Monsoon Readiness / Hydrology Telemetry */}
      <div className="rounded-2xl bg-white p-3.5 shadow-xs border border-slate-100 space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1.5 text-[#005eb2]">
            <Droplets className="w-4 h-4" />
            <span className="text-[12px] font-bold text-slate-900">Monsoon Readiness</span>
          </div>
          <span className="px-2 py-0.5 rounded-full text-[9.5px] font-bold bg-[#ffddb7] text-[#704600]">
            Seasonal Watch
          </span>
        </div>

        <div className="grid grid-cols-2 gap-2">
          <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100">
            <span className="text-[10px] text-slate-500 font-medium block">72h Precipitation</span>
            <div className="flex items-baseline gap-1 mt-0.5">
              <span className="text-[20px] font-black text-slate-900 tabular-nums">22</span>
              <span className="text-[11px] font-semibold text-slate-600">mm</span>
            </div>
            <span className="text-[10px] font-bold text-emerald-700 flex items-center gap-0.5 mt-0.5">
              <CheckCircle2 className="w-3 h-3" /> Low Risk
            </span>
          </div>

          <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100">
            <span className="text-[10px] text-slate-500 font-medium block">Culvert Flow Capacity</span>
            <div className="flex items-baseline gap-1 mt-0.5">
              <span className="text-[20px] font-black text-slate-900 tabular-nums">98</span>
              <span className="text-[11px] font-semibold text-slate-600">%</span>
            </div>
            <span className="text-[10px] text-slate-500 font-medium block mt-0.5">
              Node #104 • 2m ago
            </span>
          </div>
        </div>

        <div className="p-2 rounded-xl bg-[#fffbeb] border border-[#fde68a] flex items-center justify-between text-[11px] text-[#92400e]">
          <div className="flex items-center gap-2">
            <Sparkles className="w-3.5 h-3.5 flex-shrink-0" />
            <span className="font-medium">Pre-monsoon culvert desilting active in Sector 4</span>
          </div>
          <ChevronRight className="w-3.5 h-3.5 flex-shrink-0" />
        </div>
      </div>

      {/* Go-Bag Readiness (78% Packed) */}
      <div className="rounded-2xl bg-white p-3.5 shadow-xs border border-slate-100 space-y-3">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-[13px] font-bold text-slate-900">Go-Bag Readiness</h3>
            <p className="text-[11px] text-slate-500">
              {packedCount} of {items.length} household essentials packed
            </p>
          </div>
          <button
            onClick={() => setShowChecklist(!showChecklist)}
            className="text-[11px] font-bold text-[#005eb2] hover:underline"
          >
            {showChecklist ? 'Close' : 'View Checklist'}
          </button>
        </div>

        <div className="flex items-center gap-3">
          {/* Circular Progress Meter */}
          <div className="relative w-14 h-14 flex items-center justify-center flex-shrink-0">
            <svg className="w-14 h-14 transform -rotate-90">
              <circle cx="28" cy="28" r="23" stroke="#f1f5f9" strokeWidth="4.5" fill="none" />
              <circle
                cx="28"
                cy="28"
                r="23"
                stroke="#ffb248"
                strokeWidth="4.5"
                strokeDasharray="144.5"
                strokeDashoffset={144.5 * (1 - pct / 100)}
                strokeLinecap="round"
                fill="none"
              />
            </svg>
            <div className="absolute flex flex-col items-center justify-center leading-none">
              <span className="text-[12px] font-black text-slate-900">{pct}%</span>
              <span className="text-[7.5px] text-slate-400 font-bold uppercase">Ready</span>
            </div>
          </div>

          {/* Quick Badges */}
          <div className="flex-1 flex flex-wrap gap-1">
            <span className="px-2 py-0.5 rounded-full bg-slate-100 text-slate-800 text-[10px] font-semibold flex items-center gap-1">
              <CheckCircle2 className="w-2.5 h-2.5 text-emerald-600" /> Water (3L)
            </span>
            <span className="px-2 py-0.5 rounded-full bg-slate-100 text-slate-800 text-[10px] font-semibold flex items-center gap-1">
              <CheckCircle2 className="w-2.5 h-2.5 text-emerald-600" /> Prescriptions
            </span>
            <span className="px-2 py-0.5 rounded-full bg-slate-100 text-slate-800 text-[10px] font-semibold flex items-center gap-1">
              <CheckCircle2 className="w-2.5 h-2.5 text-emerald-600" /> Solar Radio
            </span>
            <span className="px-2 py-0.5 rounded-full bg-amber-50 text-amber-800 text-[10px] font-semibold flex items-center gap-1 border border-amber-200">
              <AlertTriangle className="w-2.5 h-2.5 text-amber-600" /> Docs Pouch
            </span>
          </div>
        </div>

        {/* Interactive Checklist Expansion */}
        {showChecklist && (
          <div className="pt-2 border-t border-slate-100 space-y-1.5">
            {items.map((item) => (
              <div
                key={item.id}
                onClick={() => toggleItem(item.id)}
                className="flex items-center justify-between p-2 rounded-xl bg-slate-50 cursor-pointer hover:bg-slate-100 transition-colors"
              >
                <span
                  className={`text-[11.5px] font-medium ${
                    item.packed ? 'text-slate-800' : 'text-slate-500'
                  }`}
                >
                  {item.name}
                </span>
                <span
                  className={`w-5 h-5 rounded-full flex items-center justify-center text-xs ${
                    item.packed
                      ? 'bg-emerald-600 text-white'
                      : 'bg-slate-200 text-slate-400'
                  }`}
                >
                  ✓
                </span>
              </div>
            ))}
          </div>
        )}

        <button
          onClick={() => setShowChecklist(!showChecklist)}
          className="w-full h-10 rounded-xl bg-slate-100 hover:bg-slate-200 font-bold text-[12px] text-slate-800 flex items-center justify-center gap-1.5 transition-colors"
        >
          <PackageCheck className="w-4 h-4" />
          <span>{showChecklist ? 'Done Updating Go-Bag' : 'Update Go-Bag Inventory'}</span>
        </button>
      </div>

      {/* Core Safeguards 2x2 Grid */}
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
            Core Safeguards
          </span>
          <span className="text-[10px] font-semibold text-emerald-700">All Operational</span>
        </div>

        <div className="grid grid-cols-2 gap-2">
          <div
            onClick={() => onNavigate('sms-gateway')}
            className="p-2.5 rounded-xl bg-white border border-slate-100 shadow-2xs cursor-pointer hover:border-slate-300 transition-all"
          >
            <div className="flex items-center justify-between mb-1">
              <span className="text-[16px]">🗺️</span>
              <CheckCircle2 className="w-3.5 h-3.5 text-[#005eb2]" />
            </div>
            <span className="text-[11.5px] font-bold text-slate-900 block leading-tight">
              Offline Map Pack
            </span>
            <span className="text-[10px] text-slate-500">District 17 (42 MB) Cached</span>
          </div>

          <div
            onClick={() => onNavigate('shelters')}
            className="p-2.5 rounded-xl bg-white border border-slate-100 shadow-2xs cursor-pointer hover:border-slate-300 transition-all"
          >
            <div className="flex items-center justify-between mb-1">
              <span className="text-[16px]">🏛️</span>
              <span className="text-[9px] font-bold text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded">
                Open
              </span>
            </div>
            <span className="text-[11.5px] font-bold text-slate-900 block leading-tight">
              Designated Shelter
            </span>
            <span className="text-[10px] text-slate-500">St. Jude Pavilion • 1.4 km</span>
          </div>

          <div
            onClick={() => onNavigate('disaster-alert')}
            className="p-2.5 rounded-xl bg-white border border-slate-100 shadow-2xs cursor-pointer hover:border-slate-300 transition-all"
          >
            <div className="flex items-center justify-between mb-1">
              <span className="text-[16px]">🚨</span>
              <span className="text-[9px] font-bold text-[#855400] bg-amber-50 px-1.5 py-0.5 rounded">
                Ready
              </span>
            </div>
            <span className="text-[11.5px] font-bold text-slate-900 block leading-tight">
              Emergency SOS
            </span>
            <span className="text-[10px] text-slate-500">3 Confirmed • Kin & NDRF</span>
          </div>

          <div
            onClick={() => onNavigate('profile')}
            className="p-2.5 rounded-xl bg-white border border-slate-100 shadow-2xs cursor-pointer hover:border-slate-300 transition-all"
          >
            <div className="flex items-center justify-between mb-1">
              <Users className="w-4 h-4 text-blue-600" />
              <Radio className="w-3.5 h-3.5 text-slate-400" />
            </div>
            <span className="text-[11.5px] font-bold text-slate-900 block leading-tight">
              Family Safe Word
            </span>
            <span className="text-[10px] text-slate-500">Synced • 2 Kin Nodes</span>
          </div>
        </div>
      </div>

      {/* Daily Corridor Simulation */}
      <div className="rounded-2xl bg-white p-3.5 shadow-xs border border-slate-100 space-y-2.5">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-blue-50 text-[#005eb2] flex items-center justify-center">
            <Compass className="w-4 h-4" />
          </div>
          <div className="flex flex-col">
            <span className="text-[12px] font-bold text-slate-900">Daily Corridor Simulation</span>
            <span className="text-[10px] text-slate-500">Autonomous route testing</span>
          </div>
        </div>
        <p className="text-[11px] text-slate-600 leading-relaxed">
          Autonomous route testing validated 4 minutes ago. Your primary high-ground evacuation path is
          verified dry.
        </p>
        <button
          onClick={() => onNavigate('radar')}
          className="w-full h-11 rounded-xl bg-[#005eb2] text-white font-bold text-[12.5px] flex items-center justify-center gap-2 active:scale-95 transition-all shadow-xs"
        >
          <MapPin className="w-4 h-4" />
          <span>Inspect Cached Evacuation Route</span>
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
