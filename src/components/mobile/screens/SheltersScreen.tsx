import React, { useState } from 'react';
import {
  ChevronLeft,
  Search,
  Bed,
  Accessibility,
  Zap,
  Coffee,
  HeartPulse,
  Navigation,
  CheckCircle2,
  AlertTriangle,
  Dog,
} from 'lucide-react';
import { MobileScreenId, Shelter } from '../../../types';
import { SHELTERS_DATA } from '../../../data/mockData';

interface SheltersScreenProps {
  onNavigate: (screen: MobileScreenId) => void;
  onSelectShelter?: (shelter: Shelter) => void;
}

export const SheltersScreen: React.FC<SheltersScreenProps> = ({
  onNavigate,
  onSelectShelter,
}) => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'ada' | 'medical' | 'generator'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const shelters = SHELTERS_DATA;

  const filteredShelters = shelters.filter((s) => {
    if (searchQuery && !s.name.toLowerCase().includes(searchQuery.toLowerCase())) {
      return false;
    }
    if (activeFilter === 'ada' && !s.has_wheelchair_ramp) return false;
    if (activeFilter === 'medical' && !s.has_triage_team) return false;
    if (activeFilter === 'generator' && !s.has_medical_generator) return false;
    return true;
  });

  const handleNavigateTo = (shelter: Shelter) => {
    if (onSelectShelter) {
      onSelectShelter(shelter);
    }
    onNavigate('radar');
  };

  return (
    <div className="flex flex-col w-full h-full relative bg-[#faf9f9] text-[#1a1c1c] select-none overflow-y-auto px-4 pt-2 pb-24 space-y-3.5">
      {/* Top Header */}
      <div className="flex items-center justify-between">
        <button
          onClick={() => onNavigate('radar')}
          className="flex items-center gap-1 text-[#007AFF] font-semibold text-[13px] hover:underline"
        >
          <ChevronLeft className="w-4 h-4" />
          <span>Radar</span>
        </button>
        <h1 className="text-[15px] font-bold text-slate-900">Relief Havens & Shelters</h1>
        <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-full bg-slate-100 text-slate-700">
          Sector 17
        </span>
      </div>

      {/* Search & Filter Bar */}
      <div className="space-y-2">
        <div className="flex items-center gap-2 bg-white px-3 py-2 rounded-xl border border-slate-200 shadow-2xs">
          <Search className="w-4 h-4 text-slate-400 shrink-0" />
          <input
            type="text"
            placeholder="Search haven name or sector..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-transparent text-[12.5px] text-slate-800 placeholder-slate-400 focus:outline-none"
          />
        </div>

        {/* Filter Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar pb-0.5">
          <button
            onClick={() => setActiveFilter('all')}
            className={`px-3 py-1 rounded-full text-[11px] font-bold shrink-0 transition-all ${
              activeFilter === 'all'
                ? 'bg-[#007AFF] text-white shadow-xs'
                : 'bg-white text-slate-600 border border-slate-200'
            }`}
          >
            All Havens ({shelters.length})
          </button>
          <button
            onClick={() => setActiveFilter('ada')}
            className={`px-3 py-1 rounded-full text-[11px] font-bold shrink-0 transition-all flex items-center gap-1 ${
              activeFilter === 'ada'
                ? 'bg-[#007AFF] text-white shadow-xs'
                : 'bg-white text-slate-600 border border-slate-200'
            }`}
          >
            <Accessibility className="w-3 h-3" />
            ADA Step-Free
          </button>
          <button
            onClick={() => setActiveFilter('medical')}
            className={`px-3 py-1 rounded-full text-[11px] font-bold shrink-0 transition-all flex items-center gap-1 ${
              activeFilter === 'medical'
                ? 'bg-[#007AFF] text-white shadow-xs'
                : 'bg-white text-slate-600 border border-slate-200'
            }`}
          >
            <HeartPulse className="w-3 h-3" />
            Medical Triage
          </button>
          <button
            onClick={() => setActiveFilter('generator')}
            className={`px-3 py-1 rounded-full text-[11px] font-bold shrink-0 transition-all flex items-center gap-1 ${
              activeFilter === 'generator'
                ? 'bg-[#007AFF] text-white shadow-xs'
                : 'bg-white text-slate-600 border border-slate-200'
            }`}
          >
            <Zap className="w-3 h-3" />
            Aux Power
          </button>
        </div>
      </div>

      {/* Shelter Cards List */}
      <div className="space-y-3">
        {filteredShelters.map((shelter) => {
          const occupancyPct = shelter.occupancy_pct;
          const isFull = shelter.status === 'FULL';
          const isNearCapacity = shelter.status === 'NEAR_CAPACITY';
          const safetyScore = shelter.elevation_msl >= 30 ? 98 : shelter.elevation_msl >= 20 ? 92 : 78;

          return (
            <div
              key={shelter.id}
              className="bg-white rounded-2xl p-4 shadow-xs border border-slate-100 hover:border-blue-200 transition-all"
            >
              {/* Card Header */}
              <div className="flex items-start justify-between gap-2 mb-2">
                <div className="min-w-0">
                  <div className="flex items-center gap-1.5 mb-0.5">
                    <span
                      className={`text-[9.5px] font-extrabold uppercase px-2 py-0.5 rounded-full ${
                        isFull
                          ? 'bg-red-100 text-red-700'
                          : isNearCapacity
                          ? 'bg-amber-100 text-amber-800'
                          : 'bg-[#d5e3ff] text-[#001b3b]'
                      }`}
                    >
                      {isFull ? 'At Capacity' : isNearCapacity ? 'Near Capacity' : 'Verified Open'}
                    </span>
                    <span className="text-[10.5px] text-slate-400">• {shelter.distance_km} km</span>
                    <span className="text-[10.5px] font-bold text-[#007AFF]">
                      +{shelter.elevation_msl}m MSL
                    </span>
                  </div>
                  <h2 className="text-[14px] font-extrabold text-slate-900 truncate">
                    {shelter.name}
                  </h2>
                  <p className="text-[11px] text-slate-500">{shelter.address}</p>
                </div>

                <div className="flex flex-col items-end">
                  <span
                    className={`text-[12px] font-black font-mono ${
                      safetyScore >= 90 ? 'text-emerald-600' : 'text-amber-600'
                    }`}
                  >
                    {safetyScore}%
                  </span>
                  <span className="text-[8px] text-slate-400 font-bold uppercase">Safety</span>
                </div>
              </div>

              {/* Occupancy Progress Bar */}
              <div className="space-y-1 mb-3">
                <div className="flex items-center justify-between text-[10.5px]">
                  <span className="font-semibold text-slate-600">
                    {shelter.available_capacity} beds open{' '}
                    <span className="text-slate-400">({shelter.total_capacity} max)</span>
                  </span>
                  <span className="font-mono text-slate-500">{occupancyPct}% full</span>
                </div>
                <div className="w-full h-2 rounded-full bg-slate-100 overflow-hidden">
                  <div
                    className={`h-full rounded-full ${
                      isFull
                        ? 'bg-red-500'
                        : occupancyPct > 80
                        ? 'bg-[#FFB248]'
                        : 'bg-[#007AFF]'
                    }`}
                    style={{ width: `${occupancyPct}%` }}
                  />
                </div>
              </div>

              {/* Amenities Badges */}
              <div className="flex items-center gap-1.5 flex-wrap mb-3">
                {shelter.has_wheelchair_ramp && (
                  <span className="px-2 py-0.5 rounded-md bg-blue-50 text-[#007AFF] text-[10px] font-semibold flex items-center gap-1">
                    <Accessibility className="w-3 h-3" /> ADA Step-Free
                  </span>
                )}
                {shelter.has_medical_generator && (
                  <span className="px-2 py-0.5 rounded-md bg-amber-50 text-[#CC7A00] text-[10px] font-semibold flex items-center gap-1">
                    <Zap className="w-3 h-3" /> Aux Power
                  </span>
                )}
                {shelter.has_triage_team && (
                  <span className="px-2 py-0.5 rounded-md bg-emerald-50 text-emerald-700 text-[10px] font-semibold flex items-center gap-1">
                    <HeartPulse className="w-3 h-3" /> Medical Triage
                  </span>
                )}
                {shelter.has_accessible_toilets && (
                  <span className="px-2 py-0.5 rounded-md bg-slate-100 text-slate-700 text-[10px] font-semibold flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3" /> Accessible Toilets
                  </span>
                )}
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-2 pt-1 border-t border-slate-100">
                <button
                  onClick={() => handleNavigateTo(shelter)}
                  className={`flex-1 h-9 rounded-xl font-bold text-[11.5px] flex items-center justify-center gap-1.5 active:scale-95 transition-all shadow-xs ${
                    isFull
                      ? 'bg-slate-200 text-slate-600'
                      : 'bg-[#007AFF] text-white hover:bg-[#0066d6]'
                  }`}
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>{isFull ? 'Review Secondary Haven' : 'Route to Haven'}</span>
                </button>
                <button
                  onClick={() => onNavigate('profile')}
                  className="h-9 px-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold text-[11px] flex items-center justify-center transition-colors"
                >
                  Family Pre-Reg
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
