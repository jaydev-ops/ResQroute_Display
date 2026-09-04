import React, { useState } from 'react';
import {
  ChevronLeft,
  Radio,
  Send,
  CheckCircle2,
  Copy,
  Compass,
  Map,
  Check,
  Zap,
} from 'lucide-react';
import { MobileScreenId } from '../../../types';

interface SmsGatewayScreenProps {
  onNavigate: (screen: MobileScreenId) => void;
}

export const SmsGatewayScreen: React.FC<SmsGatewayScreenProps> = ({ onNavigate }) => {
  const [smsText, setSmsText] = useState('EMERGENCY LOC 19.0760,72.8777 WHEELCHAIR');
  const [isSending, setIsSending] = useState(false);
  const [delivered, setDelivered] = useState(true);
  const [copied, setCopied] = useState(false);
  const [bearingActive, setBearingActive] = useState(false);

  const charCount = smsText.length;
  const segments = Math.ceil(charCount / 160) || 1;

  const handleSend = () => {
    setIsSending(true);
    setTimeout(() => {
      setIsSending(false);
      setDelivered(true);
    }, 1200);
  };

  const handleCopy = () => {
    navigator.clipboard?.writeText(smsText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex flex-col w-full h-full relative bg-[#faf9f9] text-[#1a1c1c] select-none overflow-y-auto px-4 pt-2 pb-24 space-y-3.5">
      {/* Top Header */}
      <div className="flex items-center justify-between">
        <button
          onClick={() => onNavigate('radar')}
          className="flex items-center gap-1 text-[#005eb2] font-semibold text-[13px] hover:underline"
        >
          <ChevronLeft className="w-4 h-4" />
          <span>Back</span>
        </button>
        <h1 className="text-[14px] font-bold text-slate-900">SMS Fallback Gateway</h1>
        <span className="inline-flex items-center gap-1 text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#ffddb7] text-[#704600]">
          <span className="w-1.5 h-1.5 rounded-full bg-[#005eb2] animate-pulse" />
          Offline
        </span>
      </div>

      {/* Offline Status Pill */}
      <div className="bg-slate-100 rounded-2xl p-3 border border-slate-200 flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-xl bg-[#ffddb7] flex items-center justify-center text-[#855400] flex-shrink-0">
            <Radio className="w-4 h-4" />
          </div>
          <div className="min-w-0">
            <div className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse" />
              <p className="text-[11px] font-bold text-slate-900 truncate">
                Data Offline • 2G SMS Lifeline Active
              </p>
            </div>
            <p className="text-[10px] text-slate-500">Direct GSM Handshake • Shortcode 51969</p>
          </div>
        </div>
        <span className="text-[9px] uppercase font-bold tracking-wider px-2 py-0.5 bg-white text-[#855400] rounded-md shadow-2xs border border-slate-200">
          Level 3
        </span>
      </div>

      {/* Header Info */}
      <div className="space-y-0.5">
        <div className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-[#d5e3ff] text-[#001b3b] text-[10.5px] font-bold">
          <Zap className="w-3 h-3" />
          Zero-Bandwidth Protocol
        </div>
        <h2 className="text-[18px] font-black text-slate-900 tracking-tight">
          Offline SMS Lifeline
        </h2>
        <p className="text-[11.5px] text-slate-600 leading-relaxed">
          When 4G/5G and Wi-Fi fail, resQroute queries high-ground evacuation vectors and ADA shelters
          via compact 160-character cellular SMS.
        </p>
      </div>

      {/* Interactive Simulation Console */}
      <div className="bg-white rounded-2xl p-4 shadow-xs border border-slate-100 space-y-3">
        <div className="flex items-center justify-between">
          <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
            Outgoing Emergency SMS
          </span>
          <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded bg-slate-100 text-slate-600">
            {charCount} / 160 chars ({segments} segment)
          </span>
        </div>

        <div className="bg-slate-50 rounded-xl p-3 border border-slate-200 focus-within:border-blue-500 transition-all">
          <textarea
            value={smsText}
            onChange={(e) => setSmsText(e.target.value)}
            rows={2}
            className="w-full bg-transparent font-mono text-[12.5px] text-slate-900 focus:outline-none resize-none leading-relaxed"
          />
          <div className="flex items-center justify-between pt-1 border-t border-slate-200/60 text-[10px] text-slate-500">
            <span>Standard GSM 7-bit Encoding</span>
            <button
              onClick={() => setSmsText('EMERGENCY LOC 19.0760,72.8777 WHEELCHAIR')}
              className="text-[#005eb2] font-semibold hover:underline"
            >
              Reset Safe Query
            </button>
          </div>
        </div>

        <button
          onClick={handleSend}
          disabled={isSending}
          className="w-full h-11 bg-[#005eb2] text-white rounded-xl font-bold text-[12.5px] flex items-center justify-center gap-2 shadow-xs active:scale-[0.98] transition-all hover:bg-blue-800"
        >
          {isSending ? (
            <span className="flex items-center gap-1.5">
              <span className="w-3.5 h-3.5 border-2 border-white border-t-transparent rounded-full animate-spin" />
              <span>Transmitting via 2G Tower...</span>
            </span>
          ) : (
            <>
              <Send className="w-3.5 h-3.5" />
              <span>Simulate GSM SMS Dispatch</span>
            </>
          )}
        </button>
      </div>

      {/* Simulated Incoming Response */}
      {delivered && (
        <div className="space-y-2">
          <div className="flex items-center justify-between px-1 text-[10.5px]">
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#ffb248]" />
              <span className="font-bold text-slate-800">Carrier Link Confirmed</span>
            </div>
            <span className="font-mono text-slate-500">Latency: 1.4s • Signal: -94dBm</span>
          </div>

          <div className="bg-white rounded-2xl p-4 shadow-xs border border-slate-100 space-y-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span className="text-[11px] font-bold text-slate-900">Verified Payload Received</span>
              </div>
              <span className="text-[10px] text-slate-500">Via Gov NDRF 51969</span>
            </div>

            <div className="bg-[#d5e3ff] text-[#001b3b] p-3 rounded-xl font-mono text-[11px] leading-relaxed shadow-2xs border border-blue-200/60">
              <p>
                resQroute: Safe Haven St. Jude (3.4km). Status: SAFE. High-ground Ridge Rd dry
                (+32m). ADA Ramp: YES. Beds: 55 open. Lat: 19.0812 Lon: 72.8910. Fresh: 2m ago.
              </p>
              <div className="mt-2 flex items-center justify-between text-[9px] text-[#004788] border-t border-blue-200 pt-1.5 font-sans font-medium">
                <span>Payload: 152 / 160 Chars (1 Segment)</span>
                <span>CRC32 Checksum: 0x8A4F Verified</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Parsed Evacuation Dossier */}
      <div className="bg-white rounded-2xl p-4 shadow-xs border border-slate-100 space-y-3">
        <div className="flex items-center justify-between">
          <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
            Parsed Evacuation Dossier
          </span>
          <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-[#ffddb7] text-[#704600]">
            High Ground Path
          </span>
        </div>

        <div className="bg-slate-50 rounded-xl p-3 flex items-start justify-between border border-slate-100">
          <div>
            <span className="text-[9.5px] uppercase font-bold text-slate-400">Recommended Haven</span>
            <h3 className="text-[13.5px] font-extrabold text-slate-900">
              St. Jude Relief Pavilion
            </h3>
            <p className="text-[10.5px] text-slate-500 mt-0.5">
              3.4 km vector • Coordinates 19.0812, 72.8910
            </p>
          </div>
          <div className="px-2 py-1 bg-white rounded-lg shadow-2xs text-center border border-slate-100">
            <span className="block text-[13px] font-black text-slate-900">55</span>
            <span className="block text-[8px] text-slate-500 uppercase font-bold">Beds</span>
          </div>
        </div>

        <div className="bg-slate-50 rounded-xl p-2.5 space-y-0.5 border border-slate-100">
          <div className="flex items-center justify-between text-[10px]">
            <span className="font-bold text-slate-400 uppercase">Active Corridor</span>
            <span className="font-bold text-red-600">✕ Avoid Canal Road</span>
          </div>
          <p className="text-[12px] font-bold text-slate-900">Ridge Road High-Ground Spine</p>
          <p className="text-[10.5px] text-slate-600">
            Topological ridge ensures natural flood runoff along elevation crest.
          </p>
        </div>

        {/* 3 Metrics */}
        <div className="grid grid-cols-3 gap-1.5 text-center">
          <div className="bg-slate-50 p-2 rounded-xl border border-slate-100">
            <span className="text-[12px] font-black text-slate-900 block">14 min</span>
            <span className="text-[9px] text-slate-500">Est. Transit</span>
          </div>
          <div className="bg-slate-50 p-2 rounded-xl border border-slate-100">
            <span className="text-[12px] font-black text-[#005eb2] block">+32m</span>
            <span className="text-[9px] text-slate-500">Elevation</span>
          </div>
          <div className="bg-slate-50 p-2 rounded-xl border border-slate-100">
            <span className="text-[12px] font-black text-emerald-700 block">Verified</span>
            <span className="text-[9px] text-slate-500">ADA Ramp</span>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="space-y-2 pt-1">
        <button
          onClick={() => setBearingActive(!bearingActive)}
          className="w-full h-12 bg-[#005eb2] text-white rounded-xl font-bold text-[13px] flex items-center justify-center gap-2 active:scale-95 transition-all shadow-md shadow-blue-500/20"
        >
          <Compass className="w-4 h-4" />
          <span>
            {bearingActive ? 'Compass Bearing: 038° NNE • 3.4km' : 'Launch Compass Vector to Coords'}
          </span>
        </button>

        <div className="grid grid-cols-2 gap-2">
          <button
            onClick={handleCopy}
            className="h-10 bg-slate-100 hover:bg-slate-200 text-slate-800 rounded-xl font-semibold text-[11px] flex items-center justify-center gap-1.5 transition-colors"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
            <span>{copied ? 'Copied' : 'Copy Template'}</span>
          </button>
          <button
            onClick={() => onNavigate('radar')}
            className="h-10 bg-slate-100 hover:bg-slate-200 text-slate-800 rounded-xl font-semibold text-[11px] flex items-center justify-center gap-1.5 transition-colors"
          >
            <Map className="w-3.5 h-3.5" />
            <span>Offline Topo Grid</span>
          </button>
        </div>
      </div>
    </div>
  );
};
