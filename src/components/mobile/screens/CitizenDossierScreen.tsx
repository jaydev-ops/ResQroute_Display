import React, { useState } from 'react';
import {
  ChevronLeft,
  Users,
  Radio,
  Clock,
  Camera,
  Lock,
  ThumbsUp,
  RotateCcw,
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
  ShieldCheck,
} from 'lucide-react';
import { MobileScreenId } from '../../../types';
import { PRIMARY_HAZARD_DOSSIER } from '../../../data/mockData';

interface CitizenDossierScreenProps {
  onNavigate: (screen: MobileScreenId) => void;
}

export const CitizenDossierScreen: React.FC<CitizenDossierScreenProps> = ({ onNavigate }) => {
  const [confirmed, setConfirmed] = useState(false);
  const [clearedReported, setClearedReported] = useState(false);
  const dossier = PRIMARY_HAZARD_DOSSIER;

  const handleConfirm = () => {
    setConfirmed(true);
  };

  const handleClear = () => {
    setClearedReported(true);
  };

  return (
    <div className="flex flex-col w-full h-full relative bg-[#faf9f9] text-[#1a1c1c] select-none overflow-y-auto px-4 pt-2 pb-24 space-y-3.5">
      {/* Top Action Breadcrumb Bar */}
      <div className="flex items-center justify-between">
        <button
          onClick={() => onNavigate('radar')}
          className="flex items-center gap-1 text-[#005eb2] font-semibold text-[13px] hover:underline"
        >
          <ChevronLeft className="w-4 h-4" />
          <span>Radar</span>
        </button>
        <div className="flex items-center gap-1.5 bg-slate-100 px-2.5 py-1 rounded-full shadow-2xs border border-slate-200">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ffb248] opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#855400]" />
          </span>
          <span className="text-[11px] font-bold text-slate-800">Under Authority Review</span>
        </div>
      </div>

      {/* Threat Header Dossier Card */}
      <div className="relative overflow-hidden rounded-2xl bg-white p-4 shadow-xs border border-slate-100">
        <div className="flex items-start justify-between gap-2 mb-2">
          <div className="flex items-center gap-1.5">
            <span className="w-6 h-6 rounded-lg bg-red-100 text-red-600 font-bold text-xs flex items-center justify-center">
              ⚠️
            </span>
            <span className="text-[11px] font-extrabold uppercase tracking-wider text-red-600">
              Hazard Dossier {dossier.hazard_number}
            </span>
          </div>
          <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-slate-100 text-slate-700">
            SEC-17
          </span>
        </div>

        <h1 className="text-[17px] font-extrabold text-slate-900 tracking-tight leading-tight mb-1">
          {dossier.title}
        </h1>

        <div className="flex items-center gap-1.5 text-[11px] text-slate-600 mb-2 font-medium">
          <span className="font-bold text-slate-900">{dossier.sector}</span>
          <span className="ml-auto inline-flex items-center font-mono text-[9.5px] text-[#005eb2] bg-[#d5e3ff] px-2 py-0.5 rounded-full font-bold">
            ±3m GPS
          </span>
        </div>

        <div className="flex items-center justify-between pt-2 border-t border-slate-100 text-[10.5px] text-slate-500">
          <div className="flex items-center gap-1">
            <Clock className="w-3 h-3" />
            <span>
              Submitted <strong className="text-slate-800">{dossier.submitted_time}</strong>
            </span>
          </div>
          <div className="flex items-center gap-1 font-mono">
            <Radio className="w-3 h-3 text-[#855400]" />
            <span>Node #408 (Ephemeral)</span>
          </div>
        </div>
      </div>

      {/* Consensus & Verification Engine Gauge */}
      <div className="rounded-2xl bg-white p-4 shadow-xs border border-slate-100 space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-full bg-[#d5e3ff] flex items-center justify-center text-[#005eb2]">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <div>
              <h2 className="text-[13px] font-bold text-slate-900 leading-tight">
                Consensus Engine
              </h2>
              <p className="text-[10px] text-slate-500">Multi-modal field validation</p>
            </div>
          </div>
          <span className="text-[10px] font-bold text-[#704600] bg-[#ffddb7] px-2 py-0.5 rounded-full">
            High Trust
          </span>
        </div>

        {/* Meter Gauge */}
        <div className="bg-slate-50 rounded-xl p-3 flex items-center gap-3 border border-slate-100">
          <div className="relative w-13 h-13 flex-shrink-0 flex items-center justify-center">
            <svg className="w-13 h-13 transform -rotate-90">
              <circle cx="26" cy="26" r="22" stroke="#e2e8f0" strokeWidth="4" fill="none" />
              <circle
                cx="26"
                cy="26"
                r="22"
                stroke="#855400"
                strokeWidth="4"
                strokeDasharray="138.2"
                strokeDashoffset={138.2 * (1 - dossier.consensus_score_pct / 100)}
                strokeLinecap="round"
                fill="none"
              />
            </svg>
            <span className="absolute text-[12px] font-extrabold font-mono text-slate-900">
              {dossier.consensus_score_pct}%
            </span>
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between mb-0.5">
              <span className="text-[11px] font-bold text-slate-900">Consensus Confidence</span>
              <span className="text-[10px] font-mono text-[#855400] font-bold">Passed (T&gt;80%)</span>
            </div>
            <p className="text-[10.5px] text-slate-600 leading-snug">
              Algorithmic threshold satisfied via citizen cluster upvotes & active ultrasonic depth gauge telemetry.
            </p>
          </div>
        </div>

        {/* Verification Breakdown */}
        <div className="space-y-1.5 pt-1">
          <div className="flex items-center justify-between p-2 rounded-xl bg-slate-50 border border-slate-100">
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4 text-[#005eb2]" />
              <div className="leading-tight">
                <span className="text-[11px] font-bold text-slate-900 block">
                  {dossier.citizen_confirmations_count} Citizen Confirmations
                </span>
                <span className="text-[9.5px] text-slate-500">Peer validated within radius ≤250m</span>
              </div>
            </div>
            <span className="text-[11px] font-bold text-[#005eb2] font-mono">
              +{dossier.citizen_confirmations_count}
            </span>
          </div>

          <div className="flex items-center justify-between p-2 rounded-xl bg-slate-50 border border-slate-100">
            <div className="flex items-center gap-2">
              <Radio className="w-4 h-4 text-[#855400]" />
              <div className="leading-tight">
                <span className="text-[11px] font-bold text-slate-900 block">
                  IoT Sensor Corroborated
                </span>
                <span className="text-[9.5px] text-slate-500">
                  Culvert Node {dossier.sensor_node_id} • {dossier.water_depth_cm}cm depth water
                </span>
              </div>
            </div>
            <span className="text-[10.5px] font-bold text-[#855400] font-mono">MATCH</span>
          </div>
        </div>
      </div>

      {/* Field Ground Truth Visual Card */}
      <div className="rounded-2xl bg-white p-4 shadow-xs border border-slate-100 space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1.5 text-slate-700">
            <Camera className="w-4 h-4" />
            <h3 className="text-[12px] font-bold text-slate-900">Field Ground Truth Visual</h3>
          </div>
          <span className="text-[9.5px] font-mono text-slate-400">IMG_402_L.RAW</span>
        </div>

        {/* Photo with Geo-Stamp Overlay */}
        <div className="relative w-full h-44 rounded-xl overflow-hidden bg-slate-100 border border-slate-200">
          <img
            src={dossier.ground_truth_image_url}
            alt="Field ground truth"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-black/30 pointer-events-none" />
          <div className="absolute top-2 left-2 flex items-center gap-1 bg-black/60 backdrop-blur-md px-2 py-0.5 rounded-full text-white text-[9.5px] font-mono">
            <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
            <span>GEO-STAMP: 28.6139° N, 77.2090° E</span>
          </div>
          <div className="absolute bottom-2 left-2 flex items-center gap-1 bg-red-600 text-white px-2 py-0.5 rounded-md text-[10.5px] font-bold shadow-xs">
            <span>Depth: +48cm Water Level</span>
          </div>
          <div className="absolute bottom-2 right-2 bg-black/60 backdrop-blur-md px-1.5 py-0.5 rounded text-[9px] text-white font-mono">
            f/1.8 • 1/240s
          </div>
        </div>

        {/* Metadata & Clearance Warning */}
        <div className="space-y-1.5">
          <div className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-slate-50 text-slate-600 text-[10.5px] border border-slate-100">
            <Lock className="w-3.5 h-3.5 text-[#005eb2]" />
            <span>Zero PII Captured • Hardware SHA-256 Hash #9FA-4081</span>
          </div>

          <div className="p-2.5 rounded-xl bg-[#ffdad6] text-[#ba1a1a] text-[11px] leading-tight">
            <p className="font-extrabold">Impassable Roadway (&gt;30cm)</p>
            <p className="opacity-90 mt-0.5">
              Exceeds standard passenger sedan and EV chassis clearance. Extreme hydroplaning hazard.
            </p>
          </div>
        </div>
      </div>

      {/* Algorithmic Reroute Advisory */}
      <div className="rounded-2xl bg-white p-3.5 shadow-xs border border-slate-100 space-y-2">
        <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
          Algorithmic Reroute Advisory
        </span>
        <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-between">
          <div>
            <p className="text-[11.5px] font-bold text-slate-900">{dossier.bypass_corridor_name}</p>
            <p className="text-[10px] text-slate-500">Recommended high-ground bypass</p>
          </div>
          <div className="text-right">
            <span className="text-[12px] font-mono font-bold text-[#005eb2]">
              {dossier.evacuees_routed_away} evacuees
            </span>
            <p className="text-[9px] text-slate-500">currently routed</p>
          </div>
        </div>
      </div>

      {/* Community Action Controls */}
      <div className="space-y-2 pt-1">
        <button
          onClick={handleConfirm}
          className={`w-full h-12 rounded-xl font-bold text-[13px] flex items-center justify-center gap-2 shadow-xs active:scale-[0.98] transition-all ${
            confirmed
              ? 'bg-emerald-600 text-white'
              : 'bg-[#ffb248] text-[#704600] hover:bg-amber-400'
          }`}
        >
          <ThumbsUp className="w-4 h-4" />
          <span>{confirmed ? 'Confirmed Active (+1 to Consensus)' : 'Confirm Hazard Still Active'}</span>
        </button>

        <button
          onClick={handleClear}
          className="w-full h-10 rounded-xl bg-slate-100 hover:bg-slate-200 font-semibold text-[11.5px] text-slate-700 flex items-center justify-center gap-1.5 transition-colors"
        >
          <CheckCircle2 className="w-3.5 h-3.5 text-slate-500" />
          <span>{clearedReported ? 'Clearance Request Queued' : 'Report Road Cleared / Reduced Depth'}</span>
        </button>

        <div className="text-center pt-1">
          <button
            onClick={() => onNavigate('authority')}
            className="inline-flex items-center gap-1 text-[11px] font-bold text-[#005eb2] hover:underline"
          >
            <span>View Municipal Audit & PostGIS Event Log</span>
            <ArrowRight className="w-3 h-3" />
          </button>
        </div>
      </div>
    </div>
  );
};
