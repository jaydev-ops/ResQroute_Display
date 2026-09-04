import React, { useState } from 'react';
import {
  ChevronLeft,
  Shield,
  Activity,
  AlertOctagon,
  Radio,
  Users,
  CheckCircle2,
  LifeBuoy,
  Send,
  Sliders,
  ExternalLink,
  Droplets,
  Zap,
} from 'lucide-react';
import { MobileScreenId } from '../../../types';
import { SENSOR_NODES } from '../../../data/mockData';

interface AuthorityConsoleScreenProps {
  onNavigate: (screen: MobileScreenId) => void;
}

export const AuthorityConsoleScreen: React.FC<AuthorityConsoleScreenProps> = ({ onNavigate }) => {
  const [broadcastSent, setBroadcastSent] = useState(false);
  const [sluiceDischarged, setSluiceDischarged] = useState(false);
  const [rescueDispatched, setRescueDispatched] = useState(false);

  const handleBroadcast = () => {
    setBroadcastSent(true);
    setTimeout(() => setBroadcastSent(false), 3000);
  };

  const handleSluice = () => {
    setSluiceDischarged(true);
  };

  const handleRescue = () => {
    setRescueDispatched(true);
  };

  return (
    <div className="flex flex-col w-full h-full relative bg-[#0f172a] text-slate-100 select-none overflow-y-auto px-4 pt-2 pb-24 space-y-3.5">
      {/* Top Bar */}
      <div className="flex items-center justify-between">
        <button
          onClick={() => onNavigate('radar')}
          className="flex items-center gap-1 text-[#60a5fa] font-semibold text-[13px] hover:underline"
        >
          <ChevronLeft className="w-4 h-4" />
          <span>Exit Console</span>
        </button>
        <div className="flex items-center gap-1.5 bg-red-950/70 text-red-400 px-2.5 py-0.5 rounded-full border border-red-800 text-[10.5px] font-mono font-bold animate-pulse">
          <span className="w-2 h-2 rounded-full bg-red-500" />
          <span>THREAT LEVEL 4 • ACTIVE</span>
        </div>
      </div>

      {/* Header */}
      <div className="space-y-0.5">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-blue-600/30 border border-blue-500/40 text-blue-400 flex items-center justify-center">
            <Shield className="w-4 h-4" />
          </div>
          <div>
            <h1 className="text-[15px] font-black text-white tracking-tight">
              NDRF / Municipal Command
            </h1>
            <p className="text-[10.5px] font-mono text-slate-400">Sector 17 Tactical Desk • Node 01</p>
          </div>
        </div>
      </div>

      {/* Live Evacuee Funnel Metrics */}
      <div className="grid grid-cols-2 gap-2">
        <div className="bg-slate-900/80 p-3 rounded-xl border border-slate-800">
          <span className="text-[9.5px] uppercase font-bold text-slate-400 block">Active Evacuees</span>
          <div className="flex items-baseline gap-1 mt-0.5">
            <span className="text-[20px] font-black text-white tabular-nums">1,842</span>
            <span className="text-[10px] text-emerald-400 font-bold">↑ +140</span>
          </div>
          <span className="text-[10px] text-slate-400">77% on Ridge Road High-Spine</span>
        </div>

        <div className="bg-slate-900/80 p-3 rounded-xl border border-slate-800">
          <span className="text-[9.5px] uppercase font-bold text-slate-400 block">Haven Capacity</span>
          <div className="flex items-baseline gap-1 mt-0.5">
            <span className="text-[20px] font-black text-white tabular-nums">54%</span>
            <span className="text-[10px] text-slate-400">Occupied</span>
          </div>
          <span className="text-[10px] text-blue-400">St. Jude 55 beds open</span>
        </div>
      </div>

      {/* Real-time Culvert & Hydrology Sensor Nodes */}
      <div className="bg-slate-900/80 rounded-2xl p-3.5 border border-slate-800 space-y-2.5">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <Activity className="w-4 h-4 text-blue-400" />
            <h2 className="text-[12px] font-bold text-white">Culvert & Stream IoT Nodes</h2>
          </div>
          <span className="text-[9px] font-mono text-slate-400">Polling: 5s</span>
        </div>

        <div className="space-y-1.5">
          {SENSOR_NODES.map((node) => (
            <div
              key={node.id}
              className="p-2.5 rounded-xl bg-slate-950/60 border border-slate-800/80 flex items-center justify-between text-[11px]"
            >
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-[10px] font-bold text-blue-400">#{node.id}</span>
                  <span className="font-bold text-slate-200 truncate">{node.location}</span>
                </div>
                <div className="flex items-center gap-2 text-[10px] text-slate-400 mt-0.5">
                  <span>Water: {node.waterDepth}cm</span>
                  <span>•</span>
                  <span>Flow: {node.flowRate}</span>
                </div>
              </div>

              <span
                className={`text-[9.5px] font-bold px-2 py-0.5 rounded-full font-mono shrink-0 ${
                  node.status === 'danger'
                    ? 'bg-red-950 text-red-300 border border-red-800'
                    : node.status === 'warning'
                    ? 'bg-amber-950 text-amber-300 border border-amber-800'
                    : 'bg-emerald-950 text-emerald-300 border border-emerald-800'
                }`}
              >
                {node.status.toUpperCase()}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Incident Verification & Consensus Queue */}
      <div className="bg-slate-900/80 rounded-2xl p-3.5 border border-slate-800 space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <AlertOctagon className="w-4 h-4 text-red-400" />
            <h2 className="text-[12px] font-bold text-white">Active PostGIS Road Closures</h2>
          </div>
          <span className="text-[9.5px] font-mono font-bold text-amber-400 bg-amber-950/60 px-2 py-0.5 rounded border border-amber-800">
            1 Edge Blocked
          </span>
        </div>

        <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-bold text-white">Dossier #HZ-402 (Sector 17 Link)</span>
            <span className="text-[10px] font-mono text-emerald-400 font-bold">87% Consensus</span>
          </div>
          <p className="text-[10.5px] text-slate-400 leading-snug">
            Edge #402 excluded from global A* / PostGIS pathfinding. Rerouting traffic onto Ridge Road (+32m MSL).
          </p>
          <div className="flex items-center justify-between pt-1 text-[10px] text-slate-400 border-t border-slate-900">
            <span>Sensor node corroboration: MATCH</span>
            <button
              onClick={() => onNavigate('dossier')}
              className="text-blue-400 hover:underline font-bold"
            >
              Open Citizen Dossier →
            </button>
          </div>
        </div>
      </div>

      {/* Incident Commander Controls */}
      <div className="bg-slate-900/80 rounded-2xl p-3.5 border border-slate-800 space-y-2.5">
        <div className="flex items-center gap-1.5">
          <Sliders className="w-4 h-4 text-amber-400" />
          <h2 className="text-[12px] font-bold text-white">Emergency Override Controls</h2>
        </div>

        <div className="space-y-2">
          {/* Action 1: Broadcast */}
          <button
            onClick={handleBroadcast}
            className="w-full h-11 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-[12px] flex items-center justify-center gap-2 transition-all active:scale-[0.98]"
          >
            <Send className="w-3.5 h-3.5" />
            <span>
              {broadcastSent
                ? 'High-Ground Order Dispatched to 18,400 Devices!'
                : 'Broadcast Mandatory High-Ground Push to Sector 17'}
            </span>
          </button>

          {/* Action 2: Sluice */}
          <button
            onClick={handleSluice}
            className={`w-full h-10 rounded-xl font-bold text-[11.5px] flex items-center justify-center gap-2 transition-all ${
              sluiceDischarged
                ? 'bg-emerald-900 text-emerald-200 border border-emerald-700'
                : 'bg-slate-800 hover:bg-slate-700 text-slate-200'
            }`}
          >
            <Droplets className="w-3.5 h-3.5 text-blue-400" />
            <span>{sluiceDischarged ? 'Sluice Gate #3 Discharging (800 L/s)' : 'Discharge Upstream Sluice Gate #3'}</span>
          </button>

          {/* Action 3: Air Boat */}
          <button
            onClick={handleRescue}
            className={`w-full h-10 rounded-xl font-bold text-[11.5px] flex items-center justify-center gap-2 transition-all ${
              rescueDispatched
                ? 'bg-amber-900 text-amber-200 border border-amber-700'
                : 'bg-red-950/80 hover:bg-red-900 text-red-300 border border-red-800'
            }`}
          >
            <LifeBuoy className="w-3.5 h-3.5" />
            <span>{rescueDispatched ? 'Amphibious Air-Boat Unit 12 En Route' : 'Dispatch Amphibious Rescue Unit 12'}</span>
          </button>
        </div>
      </div>
    </div>
  );
};
