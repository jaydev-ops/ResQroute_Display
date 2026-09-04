import React, { useState } from 'react';
import {
  ChevronLeft,
  User,
  Accessibility,
  Heart,
  Users,
  HardDrive,
  CheckCircle2,
  RefreshCw,
  Phone,
  Shield,
  Dog,
  Plus,
} from 'lucide-react';
import { MobileScreenId } from '../../../types';

interface ProfileScreenProps {
  onNavigate: (screen: MobileScreenId) => void;
}

export const ProfileScreen: React.FC<ProfileScreenProps> = ({ onNavigate }) => {
  const [wheelchairRequired, setWheelchairRequired] = useState(true);
  const [serviceDog, setServiceDog] = useState(true);
  const [syncing, setSyncing] = useState(false);
  const [syncDone, setSyncDone] = useState(false);

  const handleSync = () => {
    setSyncing(true);
    setSyncDone(false);
    setTimeout(() => {
      setSyncing(false);
      setSyncDone(true);
    }, 1500);
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
          <span>Radar</span>
        </button>
        <h1 className="text-[15px] font-bold text-slate-900">Citizen Profile & Safety Net</h1>
        <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800">
          Enclave Secured
        </span>
      </div>

      {/* User Identity Card */}
      <div className="bg-white rounded-2xl p-4 shadow-xs border border-slate-100 flex items-center gap-3">
        <div className="w-13 h-13 rounded-2xl bg-[#855400] text-white flex items-center justify-center font-bold text-xl shadow-xs shrink-0">
          SJ
        </div>
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-1.5">
            <h2 className="text-[15px] font-extrabold text-slate-900 truncate">Sarah Jenkins</h2>
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
          </div>
          <p className="text-[11px] text-slate-500">42 Palm Grove, Sector 17, Bandra West</p>
          <div className="flex items-center gap-1 text-[10px] font-mono text-[#005eb2] mt-0.5 font-semibold">
            <span>Aadhaar-Linked • ResQ-ID: #8942-BW</span>
          </div>
        </div>
      </div>

      {/* Accessibility & Mobility Mandates */}
      <div className="bg-white rounded-2xl p-4 shadow-xs border border-slate-100 space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Accessibility className="w-4 h-4 text-[#005eb2]" />
            <h3 className="text-[13px] font-bold text-slate-900">
              Mobility & Evacuation Routing Mandates
            </h3>
          </div>
          <span className="text-[9.5px] font-bold uppercase tracking-wider text-slate-400">
            Routing Engine
          </span>
        </div>
        <p className="text-[11px] text-slate-500 leading-snug">
          resQroute filters out all paths with steps, steep inclines (&gt;4.5%), or washed-out curbs
          when wheelchair mode is active.
        </p>

        {/* Wheelchair Toggle */}
        <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-100">
          <div className="flex items-center gap-2.5">
            <span className="text-lg">♿</span>
            <div>
              <p className="text-[12px] font-bold text-slate-900">Wheelchair Step-Free Routing</p>
              <p className="text-[10px] text-slate-500">
                Enforce ADA ramps and maximum grade slope &lt; 4.5%
              </p>
            </div>
          </div>
          <button
            onClick={() => setWheelchairRequired(!wheelchairRequired)}
            className={`w-11 h-6 rounded-full transition-colors relative flex items-center p-0.5 ${
              wheelchairRequired ? 'bg-[#005eb2]' : 'bg-slate-300'
            }`}
          >
            <div
              className={`w-5 h-5 rounded-full bg-white shadow-md transform transition-transform ${
                wheelchairRequired ? 'translate-x-5' : 'translate-x-0'
              }`}
            />
          </button>
        </div>

        {/* Service Animal Toggle */}
        <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-100">
          <div className="flex items-center gap-2.5">
            <Dog className="w-4 h-4 text-purple-600" />
            <div>
              <p className="text-[12px] font-bold text-slate-900">Service Animal Accompaniment</p>
              <p className="text-[10px] text-slate-500">Filter shelters to pet-friendly safe havens</p>
            </div>
          </div>
          <button
            onClick={() => setServiceDog(!serviceDog)}
            className={`w-11 h-6 rounded-full transition-colors relative flex items-center p-0.5 ${
              serviceDog ? 'bg-[#005eb2]' : 'bg-slate-300'
            }`}
          >
            <div
              className={`w-5 h-5 rounded-full bg-white shadow-md transform transition-transform ${
                serviceDog ? 'translate-x-5' : 'translate-x-0'
              }`}
            />
          </button>
        </div>
      </div>

      {/* Medical & Care Directives */}
      <div className="bg-white rounded-2xl p-4 shadow-xs border border-slate-100 space-y-2.5">
        <div className="flex items-center gap-2">
          <Heart className="w-4 h-4 text-red-600" />
          <h3 className="text-[13px] font-bold text-slate-900">Emergency Medical Triage Badges</h3>
        </div>
        <div className="flex flex-wrap gap-1.5 pt-1">
          <span className="px-2.5 py-1 rounded-lg bg-red-50 text-red-700 text-[11px] font-bold border border-red-200 flex items-center gap-1">
            <span>💉</span> Insulin Dependent (Cold Storage Req)
          </span>
          <span className="px-2.5 py-1 rounded-lg bg-blue-50 text-blue-700 text-[11px] font-bold border border-blue-200 flex items-center gap-1">
            <span>🫁</span> Asthma Inhaler
          </span>
          <span className="px-2.5 py-1 rounded-lg bg-purple-50 text-purple-700 text-[11px] font-bold border border-purple-200 flex items-center gap-1">
            <span>👵</span> Elderly Dependent (82y)
          </span>
        </div>
      </div>

      {/* Kin & Emergency Contacts */}
      <div className="bg-white rounded-2xl p-4 shadow-xs border border-slate-100 space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Users className="w-4 h-4 text-slate-700" />
            <h3 className="text-[13px] font-bold text-slate-900">Emergency Kin Network</h3>
          </div>
          <button className="text-[11px] font-bold text-[#005eb2] hover:underline flex items-center gap-0.5">
            <Plus className="w-3 h-3" /> Add
          </button>
        </div>

        <div className="space-y-2">
          {/* Kin 1 */}
          <div className="flex items-center justify-between p-2.5 rounded-xl bg-slate-50 border border-slate-100">
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-[12px] font-bold text-slate-900">David Jenkins (Spouse)</span>
                <span className="text-[9px] font-bold px-1.5 py-0.2 rounded bg-emerald-100 text-emerald-800">
                  Safe @ St. Jude
                </span>
              </div>
              <p className="text-[10px] font-mono text-slate-500">+91 98201 12345</p>
            </div>
            <a
              href="tel:9820112345"
              className="w-8 h-8 rounded-full bg-white shadow-2xs flex items-center justify-center text-slate-700 hover:bg-slate-100"
            >
              <Phone className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Kin 2 */}
          <div className="flex items-center justify-between p-2.5 rounded-xl bg-slate-50 border border-slate-100">
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-[12px] font-bold text-slate-900">Priya Sharma (Sister)</span>
                <span className="text-[9px] font-bold px-1.5 py-0.2 rounded bg-amber-100 text-amber-800">
                  At Home Sec-18
                </span>
              </div>
              <p className="text-[10px] font-mono text-slate-500">+91 98202 54321</p>
            </div>
            <a
              href="tel:9820254321"
              className="w-8 h-8 rounded-full bg-white shadow-2xs flex items-center justify-center text-slate-700 hover:bg-slate-100"
            >
              <Phone className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>

      {/* Offline Data Enclave Cache */}
      <div className="bg-white rounded-2xl p-4 shadow-xs border border-slate-100 space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <HardDrive className="w-4 h-4 text-[#005eb2]" />
            <h3 className="text-[13px] font-bold text-slate-900">Local Enclave Offline Cache</h3>
          </div>
          <span className="text-[10px] font-mono text-slate-500">54 MB Total</span>
        </div>

        <div className="space-y-1.5 text-[11px]">
          <div className="flex items-center justify-between p-2 rounded-xl bg-slate-50">
            <span className="text-slate-700">District 17 Vector Topo Tiles</span>
            <span className="font-bold text-emerald-700 flex items-center gap-1">
              <CheckCircle2 className="w-3 h-3" /> 42 MB (Cached)
            </span>
          </div>
          <div className="flex items-center justify-between p-2 rounded-xl bg-slate-50">
            <span className="text-slate-700">PostGIS Offline Routing Graph</span>
            <span className="font-bold text-emerald-700 flex items-center gap-1">
              <CheckCircle2 className="w-3 h-3" /> 12 MB (Cached)
            </span>
          </div>
        </div>

        <button
          onClick={handleSync}
          disabled={syncing}
          className="w-full h-10 rounded-xl bg-slate-100 hover:bg-slate-200 font-bold text-[11.5px] text-slate-800 flex items-center justify-center gap-1.5 transition-colors"
        >
          <RefreshCw className={`w-3.5 h-3.5 ${syncing ? 'animate-spin text-[#005eb2]' : ''}`} />
          <span>
            {syncing
              ? 'Downloading Latest Municipal Topo...'
              : syncDone
              ? 'Local Enclave Verified Fresh'
              : 'Re-sync Offline GIS Data'}
          </span>
        </button>
      </div>

      {/* Quick Jump to Kit */}
      <div className="pt-1">
        <button
          onClick={() => onNavigate('preparedness')}
          className="w-full h-11 rounded-xl bg-[#ffddb7] hover:bg-[#ffcf9e] text-[#704600] font-bold text-[12px] flex items-center justify-center gap-2 transition-colors"
        >
          <Shield className="w-4 h-4 text-[#855400]" />
          <span>Open Peacetime Preparedness Hub & Go-Bag</span>
        </button>
      </div>
    </div>
  );
};
