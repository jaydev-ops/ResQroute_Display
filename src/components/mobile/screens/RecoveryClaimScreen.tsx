import React, { useState } from 'react';
import {
  ChevronLeft,
  HelpCircle,
  AlertTriangle,
  Building,
  Tv,
  Car,
  Store,
  Camera,
  Lock,
  Send,
  CloudLightning,
  CheckCircle2,
  Zap,
} from 'lucide-react';
import { MobileScreenId } from '../../../types';
import { RECOVERY_CLAIM_PRESET } from '../../../data/mockData';

interface RecoveryClaimScreenProps {
  onNavigate: (screen: MobileScreenId) => void;
}

export const RecoveryClaimScreen: React.FC<RecoveryClaimScreenProps> = ({ onNavigate }) => {
  const [selectedCats, setSelectedCats] = useState<string[]>(['interior']);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [draftSaved, setDraftSaved] = useState(false);

  const preset = RECOVERY_CLAIM_PRESET;

  const toggleCat = (id: string) => {
    setSelectedCats((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleSubmit = () => {
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1400);
  };

  const handleSaveDraft = () => {
    setDraftSaved(true);
    setTimeout(() => setDraftSaved(false), 2500);
  };

  return (
    <div className="flex flex-col w-full h-full relative bg-[#faf9f9] text-[#1a1c1c] select-none overflow-y-auto px-4 pt-2 pb-24 space-y-3.5">
      {/* Top Breadcrumb */}
      <div className="flex items-center justify-between">
        <button
          onClick={() => onNavigate('radar')}
          className="flex items-center gap-1 text-slate-800 text-[12px] font-semibold hover:underline"
        >
          <ChevronLeft className="w-4 h-4" />
          <span>Recovery Home</span>
        </button>
        <div className="flex items-center gap-1 text-[11px] font-bold text-[#005eb2]">
          <HelpCircle className="w-3.5 h-3.5" />
          <span>Need Help?</span>
        </div>
      </div>

      {/* State of Emergency Banner */}
      <div className="rounded-2xl p-3.5 bg-[#ffddb7]/50 border border-[#ffb248]/40 shadow-2xs space-y-1">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-full bg-[#ffb248] text-[#704600] flex items-center justify-center font-black text-xs shrink-0">
            ⚠️
          </div>
          <div className="flex items-center gap-1.5 flex-wrap">
            <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#704600]">
              State of Emergency
            </span>
            <span className="px-2 py-0.5 text-[9.5px] font-bold rounded-full bg-[#ffb248] text-[#704600]">
              Gazette #DE-892
            </span>
          </div>
        </div>
        <p className="text-[11px] text-[#2a1700] leading-snug">
          Disaster Recovery Active in District 17. Fast-track paperless claims expedited under municipal node protocol.
        </p>
      </div>

      {/* Declared Habitation Unit & Telemetry Card */}
      <div className="bg-white rounded-2xl p-4 shadow-xs border border-slate-100 space-y-3">
        <div className="flex items-center justify-between">
          <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
            Declared Habitation Unit
          </span>
          <span className="inline-flex items-center gap-1 text-[10px] font-bold text-[#005eb2] bg-[#d5e3ff] px-2 py-0.5 rounded-full">
            <CheckCircle2 className="w-3 h-3" /> Auto-Matched
          </span>
        </div>

        <div className="flex items-start gap-2.5">
          <div className="w-8 h-8 rounded-xl bg-slate-100 text-slate-700 flex items-center justify-center shrink-0">
            <Building className="w-4 h-4" />
          </div>
          <div className="min-w-0 flex-1">
            <h3 className="text-[13px] font-bold text-slate-900 truncate">42 Palm Grove, Sector 17</h3>
            <p className="text-[11px] text-slate-600">Bandra West, Mumbai 400050</p>
            <p className="text-[10px] text-slate-400 mt-0.5 font-medium">
              Residential Ground Floor Apartment
            </p>
          </div>
        </div>

        {/* Telemetry Sensor Pill */}
        <div className="bg-[#d5e3ff]/40 rounded-xl p-2.5 flex items-center justify-between border border-blue-100">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-full bg-[#005eb2] text-white flex items-center justify-center text-xs font-bold">
              🌊
            </div>
            <div>
              <span className="text-[9px] uppercase font-bold text-[#004788] block">
                Telemetry Inundation
              </span>
              <span className="text-[11.5px] font-bold text-slate-900">
                Peak +{preset.inundation_peak_cm}cm Level
              </span>
            </div>
          </div>
          <div className="text-right">
            <span className="text-[9.5px] font-mono text-slate-500 block">{preset.sensor_node}</span>
            <span className="text-[10.5px] font-bold text-[#005eb2]">
              {preset.inundation_duration_hrs}h Continuous
            </span>
          </div>
        </div>
      </div>

      {/* Damage Classification 2x2 Grid */}
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
            Select Damage Category
          </span>
          <span className="text-[10px] text-slate-500">Multi-select enabled</span>
        </div>

        <div className="grid grid-cols-2 gap-2">
          {/* Structural */}
          <div
            onClick={() => toggleCat('structural')}
            className={`p-3 rounded-2xl cursor-pointer transition-all border flex flex-col justify-between h-24 ${
              selectedCats.includes('structural')
                ? 'bg-[#ffddb7]/30 border-[#ffb248]'
                : 'bg-white border-slate-200 hover:border-slate-300'
            }`}
          >
            <div className="flex items-center justify-between">
              <Building className="w-4 h-4 text-slate-700" />
              <div
                className={`w-4 h-4 rounded-full flex items-center justify-center text-[10px] font-bold ${
                  selectedCats.includes('structural')
                    ? 'bg-[#ffb248] text-[#704600]'
                    : 'bg-slate-200 text-transparent'
                }`}
              >
                ✓
              </div>
            </div>
            <div>
              <p className="text-[11.5px] font-bold text-slate-900">Structural & Wall</p>
              <p className="text-[9.5px] text-slate-500">Pillars, subsidence</p>
            </div>
          </div>

          {/* Interior */}
          <div
            onClick={() => toggleCat('interior')}
            className={`p-3 rounded-2xl cursor-pointer transition-all border flex flex-col justify-between h-24 ${
              selectedCats.includes('interior')
                ? 'bg-[#ffddb7]/30 border-[#ffb248]'
                : 'bg-white border-slate-200 hover:border-slate-300'
            }`}
          >
            <div className="flex items-center justify-between">
              <Tv className="w-4 h-4 text-amber-700" />
              <div
                className={`w-4 h-4 rounded-full flex items-center justify-center text-[10px] font-bold ${
                  selectedCats.includes('interior')
                    ? 'bg-[#ffb248] text-[#704600]'
                    : 'bg-slate-200 text-transparent'
                }`}
              >
                ✓
              </div>
            </div>
            <div>
              <p className="text-[11.5px] font-bold text-slate-900">Interior & Grid</p>
              <p className="text-[9.5px] text-slate-500">Inverter, wiring, floor</p>
            </div>
          </div>

          {/* Vehicle */}
          <div
            onClick={() => toggleCat('vehicle')}
            className={`p-3 rounded-2xl cursor-pointer transition-all border flex flex-col justify-between h-24 ${
              selectedCats.includes('vehicle')
                ? 'bg-[#ffddb7]/30 border-[#ffb248]'
                : 'bg-white border-slate-200 hover:border-slate-300'
            }`}
          >
            <div className="flex items-center justify-between">
              <Car className="w-4 h-4 text-slate-700" />
              <div
                className={`w-4 h-4 rounded-full flex items-center justify-center text-[10px] font-bold ${
                  selectedCats.includes('vehicle')
                    ? 'bg-[#ffb248] text-[#704600]'
                    : 'bg-slate-200 text-transparent'
                }`}
              >
                ✓
              </div>
            </div>
            <div>
              <p className="text-[11.5px] font-bold text-slate-900">Vehicle & Mobility</p>
              <p className="text-[9.5px] text-slate-500">Car, EV, wheelchair</p>
            </div>
          </div>

          {/* Commercial */}
          <div
            onClick={() => toggleCat('commercial')}
            className={`p-3 rounded-2xl cursor-pointer transition-all border flex flex-col justify-between h-24 ${
              selectedCats.includes('commercial')
                ? 'bg-[#ffddb7]/30 border-[#ffb248]'
                : 'bg-white border-slate-200 hover:border-slate-300'
            }`}
          >
            <div className="flex items-center justify-between">
              <Store className="w-4 h-4 text-slate-700" />
              <div
                className={`w-4 h-4 rounded-full flex items-center justify-center text-[10px] font-bold ${
                  selectedCats.includes('commercial')
                    ? 'bg-[#ffb248] text-[#704600]'
                    : 'bg-slate-200 text-transparent'
                }`}
              >
                ✓
              </div>
            </div>
            <div>
              <p className="text-[11.5px] font-bold text-slate-900">Commercial Stock</p>
              <p className="text-[9.5px] text-slate-500">Small business trade</p>
            </div>
          </div>
        </div>
      </div>

      {/* Visual Proof & Geotagging */}
      <div className="bg-white rounded-2xl p-4 shadow-xs border border-slate-100 space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
              Visual Proof
            </span>
            <span className="px-2 py-0.5 text-[9.5px] font-bold rounded-full bg-slate-100 text-slate-800">
              2 Photos Attached
            </span>
          </div>
          <span className="text-[10px] font-bold text-[#855400] flex items-center gap-0.5">
            <Lock className="w-3 h-3" /> Tamper-Proof
          </span>
        </div>

        {/* 2 Photos */}
        <div className="grid grid-cols-2 gap-2">
          {preset.photos.map((photo, i) => (
            <div
              key={i}
              className="relative rounded-xl overflow-hidden shadow-2xs h-28 bg-slate-100 border border-slate-200"
            >
              <img src={photo.url} alt={photo.title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-1.5 left-1.5 right-1.5 flex items-center justify-between text-white text-[9px]">
                <span className="font-bold truncate">{photo.title}</span>
                <span className="font-mono opacity-80">{photo.time}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Cryptographic Stamp */}
        <div className="bg-slate-50 rounded-xl p-2.5 flex items-center justify-between text-[10px] font-mono border border-slate-100">
          <span className="text-slate-600">19.0762° N, 72.8779° E</span>
          <span className="px-2 py-0.5 rounded-full bg-slate-200 text-slate-800 font-bold">
            #CLAIM-8429
          </span>
        </div>

        <button className="w-full h-9 rounded-xl bg-slate-100 hover:bg-slate-200 font-semibold text-[11px] text-slate-800 flex items-center justify-center gap-1.5 transition-colors">
          <Camera className="w-3.5 h-3.5 text-[#855400]" />
          <span>Add More Evidence (Camera / PDF)</span>
        </button>
      </div>

      {/* Automated AI Loss Assessment Card */}
      <div className="bg-white rounded-2xl p-4 shadow-xs border border-blue-100 space-y-3">
        <div className="flex items-center justify-between">
          <span className="text-[10px] font-bold uppercase tracking-wider text-[#005eb2]">
            Automated Assessment
          </span>
          <span className="text-[9.5px] font-bold text-slate-500 bg-slate-100 px-2 py-0.5 rounded-full">
            Municipal AI Engine
          </span>
        </div>

        <div>
          <span className="text-[10px] text-slate-500 font-medium block">
            Preliminary Pre-Claim Band
          </span>
          <div className="text-[20px] font-black text-slate-900 tracking-tight mt-0.5">
            {preset.claim_band}
          </div>
          <p className="text-[10.5px] text-slate-600 mt-0.5">
            Calculated via verified +42cm inundation duration (6.5 hours) against standard residential fitment indexes.
          </p>
        </div>

        {/* Instant Advance Eligibility */}
        <div className="rounded-xl p-3 bg-[#ffddb7]/40 border border-[#ffb248]/40 flex items-start gap-2.5">
          <Zap className="w-4 h-4 text-[#855400] shrink-0 mt-0.5" />
          <div className="text-[11px] text-slate-900 leading-snug">
            <p className="font-bold text-[#704600]">Instant Advance Eligibility</p>
            <p className="mt-0.5">
              Up to <strong className="font-black text-[#2a1700]">₹50,000 disbursed in 24 hours</strong> to
              registered Aadhaar-UPI under PM/CM Disaster Relief Fund without waiting for surveyor sign-off.
            </p>
          </div>
        </div>
      </div>

      {/* Actions */}
      <div className="space-y-2 pt-1">
        <button
          onClick={handleSubmit}
          disabled={isSubmitting}
          className="w-full h-12 rounded-xl bg-[#005eb2] hover:bg-blue-800 text-white font-bold text-[13px] shadow-md shadow-blue-500/20 flex items-center justify-center gap-2 active:scale-[0.98] transition-all"
        >
          {isSubmitting ? (
            <span className="flex items-center gap-2">
              <span className="w-3.5 h-3.5 border-2 border-white border-t-transparent rounded-full animate-spin" />
              <span>Encrypting & Verifying Proof...</span>
            </span>
          ) : submitted ? (
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-white" />
              <span>Fast-Track Claim #FT-892 Registered!</span>
            </span>
          ) : (
            <>
              <Send className="w-4 h-4" />
              <span>Submit Fast-Track Claim</span>
            </>
          )}
        </button>

        <button
          onClick={handleSaveDraft}
          className="w-full h-10 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold text-[11px] flex items-center justify-center gap-1.5 transition-colors"
        >
          <CloudLightning className="w-3.5 h-3.5 text-slate-500" />
          <span>{draftSaved ? 'Draft Cached on Local Enclave' : 'Save Draft & Sync Later (Offline Safe)'}</span>
        </button>

        <p className="text-center text-[9.5px] text-slate-400 pt-1">
          Audited under IRDAI Expedited Disaster Protocol 2026. Zero paper inspection for red-zone habitations.
        </p>
      </div>
    </div>
  );
};
