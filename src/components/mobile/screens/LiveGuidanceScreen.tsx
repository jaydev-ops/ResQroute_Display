import React, { useState } from 'react';
import {
  ArrowLeft,
  Volume2,
  VolumeX,
  Share2,
  CornerUpLeft,
  Check,
  AlertTriangle,
  Navigation,
  Droplets,
  Mountain,
  CheckCircle2,
  X,
  Radio,
} from 'lucide-react';
import { MobileScreenId } from '../../../types';

interface LiveGuidanceScreenProps {
  onNavigate: (screen: MobileScreenId) => void;
}

export const LiveGuidanceScreen: React.FC<LiveGuidanceScreenProps> = ({ onNavigate }) => {
  const [voiceEnabled, setVoiceEnabled] = useState(true);
  const [detourAccepted, setDetourAccepted] = useState(false);
  const [checkedIn, setCheckedIn] = useState(false);

  const toggleVoice = () => {
    setVoiceEnabled(!voiceEnabled);
  };

  const handleAcceptDetour = () => {
    setDetourAccepted(true);
  };

  const handleCheckIn = () => {
    setCheckedIn(true);
  };

  return (
    <div className="flex flex-col w-full h-full relative bg-[#faf9f9] text-[#1a1c1c] select-none overflow-y-auto px-4 pb-20 pt-2 space-y-3">
      {/* Top App Bar */}
      <div className="flex items-center justify-between py-1">
        <div className="flex items-center gap-2">
          <button
            onClick={() => onNavigate('radar')}
            className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-[#005eb2] hover:bg-slate-200 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
          </button>
          <div className="flex flex-col">
            <span className="text-[10px] font-bold tracking-wider uppercase text-[#005eb2] leading-tight">
              resQroute Live
            </span>
            <h1 className="text-[15px] font-bold text-slate-900 leading-tight">Live Guidance</h1>
          </div>
        </div>
        <div className="flex items-center gap-1.5">
          <button
            onClick={() => onNavigate('sms-gateway')}
            className="px-2 py-0.5 rounded-full bg-blue-50 text-blue-700 text-[10px] font-bold border border-blue-200"
          >
            2G SMS
          </button>
          <button
            onClick={() => onNavigate('profile')}
            className="w-7 h-7 rounded-full bg-[#855400] text-white flex items-center justify-center text-xs font-bold"
          >
            S
          </button>
        </div>
      </div>

      {/* Top Turn-by-Turn Guidance HUD Card */}
      <div className="w-full bg-[#005eb2] text-white rounded-2xl p-3.5 shadow-lg flex items-center justify-between gap-3 relative overflow-hidden">
        <div className="flex items-center gap-3 min-w-0">
          <div className="w-11 h-11 rounded-xl bg-white/15 flex items-center justify-center text-white flex-shrink-0">
            <CornerUpLeft className="w-6 h-6" />
          </div>
          <div className="flex flex-col min-w-0">
            <div className="flex items-center gap-1.5 text-[#d5e3ff] text-[10px] font-bold uppercase tracking-wider">
              <span>In 240 m</span>
              <span className="w-1 h-1 rounded-full bg-[#d5e3ff]" />
              <span className="text-[#ffb248] font-extrabold flex items-center gap-0.5">
                +38m MSL
              </span>
            </div>
            <h2 className="text-[14px] font-bold tracking-tight truncate leading-tight text-white">
              Turn left onto Ridge Crest Overpass
            </h2>
            <p className="text-[11px] text-[#a7c8ff] truncate leading-tight mt-0.5">
              Remain on elevated crest corridor above flood line
            </p>
          </div>
        </div>
        <button
          onClick={toggleVoice}
          className={`w-8 h-8 rounded-full bg-white/15 flex items-center justify-center text-white active:scale-95 transition-transform flex-shrink-0 ${
            !voiceEnabled ? 'opacity-50' : ''
          }`}
          title={voiceEnabled ? 'Mute audio guidance' : 'Unmute audio guidance'}
        >
          {voiceEnabled ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
        </button>
      </div>

      {/* Dynamic Reroute Alert Card */}
      <div className="w-full bg-[#ffb248] text-[#704600] rounded-2xl p-3 shadow-md flex flex-col gap-2 transition-all">
        <div className="flex items-start gap-2.5">
          <div className="w-8 h-8 rounded-full bg-[#855400] text-white flex items-center justify-center mt-0.5 shadow-xs flex-shrink-0">
            <AlertTriangle className="w-4 h-4 text-[#ffb248]" />
          </div>
          <div className="flex flex-col flex-1 min-w-0">
            <div className="flex items-center justify-between gap-1">
              <span className="text-[9px] font-extrabold uppercase tracking-wider text-[#855400] bg-white/80 px-2 py-0.5 rounded-full">
                Hydrology AI Divert
              </span>
              <span className="text-[10px] font-bold text-[#855400] flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-red-600 animate-ping inline-block" />
                Live Alert
              </span>
            </div>
            <h3 className="text-[12.5px] font-extrabold text-slate-900 mt-0.5 leading-tight">
              Rerouting around rising inundation (+1.1 km safer)
            </h3>
            <p className="text-[11px] text-slate-800 leading-snug mt-0.5">
              Sensor Node #409 detected flash flood (
              <span className="font-bold text-red-700">+18cm rising</span>) on Low Basin Rd.
              Switched to dry ridge corridor.
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2 pt-0.5">
          <button
            onClick={handleAcceptDetour}
            className={`flex-1 h-9 rounded-xl font-bold text-[11.5px] shadow-xs flex items-center justify-center gap-1.5 active:scale-95 transition-all ${
              detourAccepted
                ? 'bg-emerald-700 text-white'
                : 'bg-[#005eb2] text-white hover:bg-blue-800'
            }`}
          >
            <Check className="w-3.5 h-3.5" />
            <span>{detourAccepted ? 'Safe Detour Locked' : 'Accept Safe Detour'}</span>
          </button>
          <button
            onClick={() => onNavigate('dossier')}
            className="h-9 px-3 bg-white text-slate-800 rounded-xl font-semibold text-[11px] shadow-xs flex items-center justify-center gap-1 active:scale-95 transition-all hover:bg-slate-50"
          >
            <AlertTriangle className="w-3.5 h-3.5 text-red-600" />
            <span>Review Hazard</span>
          </button>
        </div>
      </div>

      {/* Center Tactical Map Canvas */}
      <div className="w-full relative h-48 rounded-2xl overflow-hidden shadow-md bg-slate-200 border border-slate-300/60">
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none"
          viewBox="0 0 360 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Base street grid */}
          <path d="M-10 100 H370 M50 0 V200 M200 0 V200" stroke="#cbd5e1" strokeWidth="3" />
          {/* Water hazard polygon */}
          <path
            d="M170 15 C210 30, 250 50, 310 40 C340 35, 360 60, 360 100 L360 160 L220 120 Z"
            fill="#dc2626"
            fillOpacity="0.2"
          />
          {/* Blocked inundated route */}
          <path
            d="M140 140 L230 80 L290 65"
            stroke="#dc2626"
            strokeWidth="5"
            strokeLinecap="round"
          />
          <path
            d="M140 140 L230 80 L290 65"
            stroke="#ffdad6"
            strokeWidth="2"
            strokeDasharray="4 4"
            strokeLinecap="round"
          />
          {/* Active safe elevated route */}
          <path
            d="M80 190 L140 140 L105 60 L90 15"
            stroke="#005eb2"
            strokeWidth="7"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M80 190 L140 140 L105 60 L90 15"
            stroke="#a7c8ff"
            strokeWidth="2.5"
            strokeDasharray="6 4"
            strokeLinecap="round"
          />
          {/* Guidance pulses */}
          <path d="M133 130 L137 124 L141 130" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />
          <path d="M110 80 L113 74 L117 80" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />
        </svg>

        {/* Hazard Floating Badge */}
        <div className="absolute top-3 right-3 flex items-center gap-1.5 bg-red-600 text-white px-2 py-1 rounded-lg shadow-md animate-pulse">
          <Droplets className="w-3.5 h-3.5" />
          <div className="flex flex-col text-left leading-none">
            <span className="text-[8.5px] font-black uppercase">Flooding Ahead</span>
            <span className="text-[9.5px] font-bold">+18cm Basin</span>
          </div>
        </div>

        {/* User GPS Puck */}
        <div className="absolute left-[130px] top-[130px] -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
          <div className="absolute w-9 h-9 rounded-full bg-[#005eb2]/25 animate-ping" />
          <div className="w-6 h-6 rounded-full bg-[#d5e3ff] flex items-center justify-center shadow-md">
            <div className="w-4.5 h-4.5 rounded-full bg-[#005eb2] flex items-center justify-center text-white transform -rotate-45">
              <Navigation className="w-2.5 h-2.5 fill-current" />
            </div>
          </div>
        </div>

        {/* Dry Ridge Safe Route Pill */}
        <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md px-2.5 py-1 rounded-full shadow-xs flex items-center gap-1 border border-slate-200">
          <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
          <span className="text-[10px] font-bold text-[#005eb2]">Ridge Way Overpass (Clear)</span>
        </div>

        {/* Speedometer HUD */}
        <div className="absolute left-2.5 bottom-2.5 bg-white/95 backdrop-blur-sm px-2 py-1 rounded-lg shadow-sm border border-slate-200 flex items-center gap-2">
          <div className="flex flex-col items-center border-r border-slate-200 pr-1.5">
            <span className="text-[12px] font-black font-mono text-slate-900 leading-none">38</span>
            <span className="text-[8px] font-bold text-slate-500 uppercase">KM/H</span>
          </div>
          <div className="flex flex-col">
            <span className="text-[8px] font-bold text-[#005eb2] uppercase leading-tight">High Ground</span>
            <span className="text-[9.5px] font-bold text-slate-900 leading-tight">NNE 24°</span>
          </div>
        </div>
      </div>

      {/* Auxiliary Sensor Cards Grid */}
      <div className="grid grid-cols-2 gap-2">
        <div className="bg-white p-2.5 rounded-xl shadow-xs border border-slate-100 flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-blue-50 text-[#005eb2] flex items-center justify-center flex-shrink-0">
            <Droplets className="w-4 h-4" />
          </div>
          <div className="flex flex-col min-w-0">
            <span className="text-[9px] uppercase font-bold text-slate-400">Valley Runoff</span>
            <span className="text-[11.5px] font-bold text-slate-900 truncate">340 L/sec Peak</span>
          </div>
        </div>
        <div className="bg-white p-2.5 rounded-xl shadow-xs border border-slate-100 flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-amber-50 text-[#855400] flex items-center justify-center flex-shrink-0">
            <Mountain className="w-4 h-4" />
          </div>
          <div className="flex flex-col min-w-0">
            <span className="text-[9px] uppercase font-bold text-slate-400">Road Gradient</span>
            <span className="text-[11.5px] font-bold text-slate-900 truncate">+6.2% Incline</span>
          </div>
        </div>
      </div>

      {/* Bottom In-Ride Sheet */}
      <div className="bg-white rounded-2xl p-3.5 shadow-md border border-slate-100 flex flex-col gap-2.5">
        {/* Primary Metrics */}
        <div className="flex items-center justify-between">
          <div className="flex items-baseline gap-1">
            <span className="text-[22px] font-black text-[#005eb2] tabular-nums leading-none">
              9
            </span>
            <span className="text-[11px] font-bold text-[#005eb2] uppercase">min</span>
          </div>
          <div className="flex items-center gap-3 text-slate-800 text-[12px] font-bold">
            <span className="text-slate-500">2.6 km</span>
            <span className="w-1 h-1 rounded-full bg-slate-300" />
            <span>ETA 09:50</span>
          </div>
          <span className="px-2 py-0.5 rounded-md bg-[#d5e3ff] text-[#001b3b] text-[9.5px] font-bold uppercase tracking-wider">
            Elevated
          </span>
        </div>

        {/* Next Destination Milestone */}
        <div className="bg-slate-50 p-2.5 rounded-xl border border-slate-100 flex items-center justify-between gap-2">
          <div className="flex items-center gap-2 min-w-0">
            <div className="w-6 h-6 rounded-full bg-[#ffddb7] text-[#2a1700] flex items-center justify-center text-xs flex-shrink-0 font-bold">
              +
            </div>
            <div className="flex flex-col min-w-0">
              <span className="text-[9px] font-bold uppercase text-[#855400]">Destination Haven</span>
              <span className="text-[11.5px] font-bold text-slate-900 truncate">
                St. Jude Safe Haven • Gate 2 ADA Ramp
              </span>
            </div>
          </div>
          <span className="text-[10px] font-bold text-[#005eb2] whitespace-nowrap">Tier 1 Dry</span>
        </div>

        {/* Action Buttons Row */}
        <div className="flex items-center gap-2 pt-0.5">
          <button
            onClick={() => onNavigate('radar')}
            className="h-10 px-3 rounded-xl bg-[#ffdad6] text-[#ba1a1a] font-bold text-[11px] flex items-center justify-center gap-1 active:scale-95 transition-all"
          >
            <X className="w-3.5 h-3.5" />
            <span>End Guidance</span>
          </button>
          <button
            onClick={handleCheckIn}
            className={`flex-1 h-10 rounded-xl font-bold text-[12px] flex items-center justify-center gap-1.5 active:scale-95 transition-all shadow-sm ${
              checkedIn
                ? 'bg-emerald-600 text-white'
                : 'bg-[#855400] text-white hover:bg-amber-900'
            }`}
          >
            <CheckCircle2 className="w-4 h-4" />
            <span>{checkedIn ? 'Beacon Shared with Shelter' : 'Shelter Check-In'}</span>
          </button>
        </div>

        {/* Sync status */}
        <div className="flex items-center justify-center gap-1 text-[10px] font-medium text-slate-500 pt-1 border-t border-slate-100">
          <Radio className="w-3 h-3 text-[#005eb2]" />
          <span>Mesh & Cellular Sync Active • Cached Offline Map Ready</span>
        </div>
      </div>
    </div>
  );
};
