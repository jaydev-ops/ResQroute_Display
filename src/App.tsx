import React, { useState } from 'react';
import {
  Compass,
  Layers,
  Shield,
  Radio,
  Users,
  AlertTriangle,
  ArrowRight,
  Sparkles,
  Smartphone,
  Maximize2,
  Minimize2,
  CheckCircle2,
  Code,
  Activity,
  Droplets,
  Zap,
  Building,
  HeartPulse,
  Share2,
  Navigation,
} from 'lucide-react';
import { MobileScreenId, Shelter } from './types';
import { EvacuationRadarScreen } from './components/mobile/screens/EvacuationRadarScreen';
import { LiveGuidanceScreen } from './components/mobile/screens/LiveGuidanceScreen';
import { WhyThisRouteScreen } from './components/mobile/screens/WhyThisRouteScreen';
import { PreparednessKitScreen } from './components/mobile/screens/PreparednessKitScreen';
import { DisasterEvacuateScreen } from './components/mobile/screens/DisasterEvacuateScreen';
import { CitizenDossierScreen } from './components/mobile/screens/CitizenDossierScreen';
import { SmsGatewayScreen } from './components/mobile/screens/SmsGatewayScreen';
import { RecoveryClaimScreen } from './components/mobile/screens/RecoveryClaimScreen';
import { SheltersScreen } from './components/mobile/screens/SheltersScreen';
import { ProfileScreen } from './components/mobile/screens/ProfileScreen';
import { AuthorityConsoleScreen } from './components/mobile/screens/AuthorityConsoleScreen';

type EditorialTab = 'overview' | 'mission' | 'technology' | 'architecture' | 'documentation';

export default function App() {
  const [activeTab, setActiveTab] = useState<EditorialTab>('overview');
  const [currentScreen, setCurrentScreen] = useState<MobileScreenId>('radar');
  const [wheelchairEnabled, setWheelchairEnabled] = useState(true);
  const [selectedShelter, setSelectedShelter] = useState<Shelter | null>(null);
  const [isPhoneExpanded, setIsPhoneExpanded] = useState(false);
  const [systemDeployed, setSystemDeployed] = useState(false);

  const handleDeployToggle = () => {
    setSystemDeployed(!systemDeployed);
    if (!systemDeployed) {
      setCurrentScreen('disaster-alert');
    } else {
      setCurrentScreen('radar');
    }
  };

  const screensList: { id: MobileScreenId; label: string; icon: string; category: string }[] = [
    { id: 'radar', label: 'Evacuation Radar', icon: '🗺️', category: 'Core' },
    { id: 'guidance', label: 'Live Guidance', icon: '🧭', category: 'Transit' },
    { id: 'why-route', label: 'Why This Route?', icon: '🛡️', category: 'Intelligence' },
    { id: 'preparedness', label: 'Preparedness Kit', icon: '🎒', category: 'Peacetime' },
    { id: 'disaster-alert', label: 'Evacuate Mandate', icon: '🚨', category: 'Emergency' },
    { id: 'dossier', label: 'Citizen Dossier', icon: '📋', category: 'Verification' },
    { id: 'sms-gateway', label: '2G SMS Lifeline', icon: '📡', category: 'Zero Bandwidth' },
    { id: 'recovery', label: 'Recovery Claim', icon: '🏛️', category: 'Post Disaster' },
    { id: 'shelters', label: 'Havens & Shelters', icon: '🏥', category: 'Logistics' },
    { id: 'profile', label: 'Citizen Safety Net', icon: '👤', category: 'Identity' },
    { id: 'authority', label: 'Authority Console', icon: '⚡', category: 'Municipal Ops' },
  ];

  return (
    <div className="w-full min-h-screen bg-[#F5F5F7] flex flex-col font-sans text-[#1D1D1F] overflow-x-hidden">
      {/* Header matching Geometric Balance aesthetic */}
      <header className="h-16 px-6 lg:px-12 flex items-center justify-between border-b border-black/5 bg-white/80 backdrop-blur-md sticky top-0 z-50">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-[#007AFF] rounded-lg flex items-center justify-center shadow-xs">
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
            </svg>
          </div>
          <div className="flex items-baseline gap-1.5">
            <span className="text-xl font-semibold tracking-tight text-[#1D1D1F]">resQroute</span>
            <span className="text-[10px] font-mono text-[#007AFF] font-bold bg-[#007AFF]/10 px-1.5 py-0.5 rounded">
              v2.6 PROD
            </span>
          </div>
        </div>

        {/* Center Editorial Navigation */}
        <nav className="hidden md:flex gap-8 text-[13px] font-medium text-black/60">
          <button
            onClick={() => setActiveTab('overview')}
            className={`transition-colors hover:text-black ${
              activeTab === 'overview' ? 'text-[#007AFF] font-semibold' : ''
            }`}
          >
            Overview
          </button>
          <button
            onClick={() => setActiveTab('mission')}
            className={`transition-colors hover:text-black ${
              activeTab === 'mission' ? 'text-[#007AFF] font-semibold' : ''
            }`}
          >
            Mission
          </button>
          <button
            onClick={() => setActiveTab('technology')}
            className={`transition-colors hover:text-black ${
              activeTab === 'technology' ? 'text-[#007AFF] font-semibold' : ''
            }`}
          >
            Technology
          </button>
          <button
            onClick={() => setActiveTab('architecture')}
            className={`transition-colors hover:text-black ${
              activeTab === 'architecture' ? 'text-[#007AFF] font-semibold' : ''
            }`}
          >
            Architecture
          </button>
          <button
            onClick={() => setActiveTab('documentation')}
            className={`transition-colors hover:text-black ${
              activeTab === 'documentation' ? 'text-[#007AFF] font-semibold' : ''
            }`}
          >
            Documentation
          </button>
        </nav>

        {/* Action Controls */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => setIsPhoneExpanded(!isPhoneExpanded)}
            className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium text-black/70 hover:bg-black/5 transition-colors border border-black/5"
            title={isPhoneExpanded ? 'Show Split Layout' : 'Expand Phone View'}
          >
            {isPhoneExpanded ? <Minimize2 className="w-3.5 h-3.5" /> : <Maximize2 className="w-3.5 h-3.5" />}
            <span className="hidden lg:inline">{isPhoneExpanded ? 'Split Layout' : 'Focus App'}</span>
          </button>

          <button
            onClick={handleDeployToggle}
            className={`px-5 py-1.5 text-sm font-medium rounded-full shadow-xs active:scale-95 transition-all flex items-center gap-1.5 ${
              systemDeployed
                ? 'bg-red-600 hover:bg-red-700 text-white'
                : 'bg-[#007AFF] hover:bg-[#0066d6] text-white'
            }`}
          >
            <span className={`w-2 h-2 rounded-full ${systemDeployed ? 'bg-white animate-ping' : 'bg-white/80'}`} />
            <span>{systemDeployed ? 'Crisis Active (Drill)' : 'Deploy System'}</span>
          </button>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col lg:flex-row overflow-hidden min-h-[calc(100vh-8rem)]">
        {/* Left Column: Editorial & Architecture Documentation */}
        {!isPhoneExpanded && (
          <div className="w-full lg:w-[58%] xl:w-[60%] p-6 sm:p-10 lg:p-14 flex flex-col justify-between overflow-y-auto">
            <div>
              {/* Guidance Status Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#FFB248]/10 text-[#CC7A00] rounded-full text-xs font-bold uppercase tracking-wider mb-6 border border-[#FFB248]/20">
                <span className="w-1.5 h-1.5 bg-[#FFB248] rounded-full animate-pulse" />
                Guidance Systems Active • Mumbai Basin Sector 17
              </div>

              {/* Hero Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-[66px] leading-[1.05] font-semibold tracking-tight mb-6 text-[#1D1D1F]">
                The Safest Path <br />
                <span className="text-black/30">Not the Shortest.</span>
              </h1>

              {/* Lead Paragraph */}
              <p className="text-lg sm:text-xl text-black/50 leading-relaxed max-w-xl mb-8">
                Our proprietary Hazard Intelligence Engine transforms static maps into living safety corridors,
                prioritizing lives over travel time during critical evacuations.
              </p>

              {/* Dynamic Content based on Active Tab */}
              {activeTab === 'overview' && (
                <div className="space-y-8 mb-8">
                  {/* Two Key Value Pillars */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
                    <div className="p-4 rounded-2xl bg-white/70 border border-black/5 backdrop-blur-xs shadow-xs">
                      <div className="w-7 h-7 rounded-lg bg-[#007AFF]/10 text-[#007AFF] flex items-center justify-center mb-3">
                        <Compass className="w-4 h-4" />
                      </div>
                      <h3 className="text-sm font-bold text-black/90 mb-1.5 uppercase tracking-wide">
                        Routing Philosophy
                      </h3>
                      <p className="text-sm text-black/50 leading-relaxed">
                        Dynamic safety scoring based on live flood polygons, fire progression, hydrodynamic elevation models, and terrain viability.
                      </p>
                    </div>

                    <div className="p-4 rounded-2xl bg-white/70 border border-black/5 backdrop-blur-xs shadow-xs">
                      <div className="w-7 h-7 rounded-lg bg-[#00C853]/15 text-[#00C853] flex items-center justify-center mb-3">
                        <CheckCircle2 className="w-4 h-4" />
                      </div>
                      <h3 className="text-sm font-bold text-black/90 mb-1.5 uppercase tracking-wide">
                        Accessibility First
                      </h3>
                      <p className="text-sm text-black/50 leading-relaxed">
                        Custom profiles for medical needs, wheelchair step-free paths (&lt;4.5% grade), and oxygen-dependent citizens.
                      </p>
                    </div>
                  </div>

                  {/* Secondary Features Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
                    <div className="p-4 rounded-2xl bg-white/70 border border-black/5 backdrop-blur-xs shadow-xs">
                      <div className="w-7 h-7 rounded-lg bg-[#FFB248]/20 text-[#CC7A00] flex items-center justify-center mb-3">
                        <Radio className="w-4 h-4" />
                      </div>
                      <h3 className="text-sm font-bold text-black/90 mb-1.5 uppercase tracking-wide">
                        Zero-Bandwidth 2G SMS
                      </h3>
                      <p className="text-sm text-black/50 leading-relaxed">
                        Full route calculation over compact 160-character cellular SMS when cellular 4G/5G data towers fail during storms.
                      </p>
                    </div>

                    <div className="p-4 rounded-2xl bg-white/70 border border-black/5 backdrop-blur-xs shadow-xs">
                      <div className="w-7 h-7 rounded-lg bg-red-500/10 text-[#FF3B30] flex items-center justify-center mb-3">
                        <Droplets className="w-4 h-4" />
                      </div>
                      <h3 className="text-sm font-bold text-black/90 mb-1.5 uppercase tracking-wide">
                        IoT Corroboration
                      </h3>
                      <p className="text-sm text-black/50 leading-relaxed">
                        Live river stage, stormwater culvert sensors, and verified citizen ground-truth dossiers to prevent trapped convoys.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'mission' && (
                <div className="space-y-4 mb-8 bg-white/80 p-6 rounded-3xl border border-black/5">
                  <span className="text-xs uppercase font-bold text-[#007AFF] tracking-wider">
                    Human Factors & Survival Mathematics
                  </span>
                  <h2 className="text-2xl font-bold text-slate-900">
                    Why Shortest-Path Algorithms Kill in Disasters
                  </h2>
                  <p className="text-sm text-black/60 leading-relaxed">
                    Standard navigation systems (Google Maps, Waze, Apple Maps) optimize for nominal travel time. In a flash flood, that creates fatal funnel traps into sunken culverts and underpasses.
                  </p>
                  <div className="grid grid-cols-3 gap-3 pt-2 text-center font-mono">
                    <div className="p-3 bg-red-50 rounded-xl border border-red-100">
                      <span className="text-xl font-black text-red-600 block">73%</span>
                      <span className="text-[10px] text-red-800 font-sans">Fatalities in Vehicles taking Shortest Paths</span>
                    </div>
                    <div className="p-3 bg-blue-50 rounded-xl border border-blue-100">
                      <span className="text-xl font-black text-[#007AFF] block">+32m</span>
                      <span className="text-[10px] text-blue-900 font-sans">Average Safe Ridge Elevation Buffer</span>
                    </div>
                    <div className="p-3 bg-emerald-50 rounded-xl border border-emerald-100">
                      <span className="text-xl font-black text-emerald-700 block">0</span>
                      <span className="text-[10px] text-emerald-900 font-sans">Hazard Collisions on Ridge Corridors</span>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'technology' && (
                <div className="space-y-4 mb-8 bg-white/80 p-6 rounded-3xl border border-black/5">
                  <span className="text-xs uppercase font-bold text-[#007AFF] tracking-wider">
                    PostGIS & Multi-Criteria Pathfinding
                  </span>
                  <h2 className="text-2xl font-bold text-slate-900">
                    Dual Dynamic Impedance Algorithm
                  </h2>
                  <p className="text-sm text-black/60 leading-relaxed">
                    resQroute weights graph edges by elevation, surface hydro-depth, curb slope, and real-time municipal culvert flow rates.
                  </p>
                  <pre className="p-3.5 bg-slate-900 text-emerald-400 rounded-2xl text-xs font-mono overflow-x-auto leading-relaxed">
{`-- Real-time Edge Exclusion & High Ground Penalty
SELECT edge_id, ST_Length(geom) AS dist,
  CASE 
    WHEN water_depth_cm > 15 THEN 999999 -- Impassable
    WHEN max_slope_pct > 4.5 AND wheelchair_mode = TRUE THEN 999999
    ELSE ST_Length(geom) * (1.0 + (50.0 / GREATEST(elevation_msl, 1.0)))
  END AS cost
FROM network_edges
WHERE ST_Intersects(geom, ST_Buffer(hazard_geom, 25.0)) = FALSE;`}
                  </pre>
                </div>
              )}

              {activeTab === 'architecture' && (
                <div className="space-y-4 mb-8 bg-white/80 p-6 rounded-3xl border border-black/5">
                  <span className="text-xs uppercase font-bold text-[#007AFF] tracking-wider">
                    Resilient Decentralized Architecture
                  </span>
                  <h2 className="text-2xl font-bold text-slate-900">
                    3-Tier Fallback Lifecycle
                  </h2>
                  <div className="space-y-2 text-sm text-black/70">
                    <div className="p-3 bg-blue-50/70 rounded-xl border border-blue-100 flex items-start gap-2">
                      <span className="font-bold text-[#007AFF]">Tier 1 (Broadband):</span>
                      <span>WebSockets + Vector Map Tile Streaming + PostGIS routing engine.</span>
                    </div>
                    <div className="p-3 bg-amber-50/70 rounded-xl border border-amber-100 flex items-start gap-2">
                      <span className="font-bold text-[#CC7A00]">Tier 2 (Mesh / P2P):</span>
                      <span>Local SQLite topological graph cached on-device + Bluetooth Low Energy beacon sync.</span>
                    </div>
                    <div className="p-3 bg-purple-50/70 rounded-xl border border-purple-100 flex items-start gap-2">
                      <span className="font-bold text-purple-700">Tier 3 (Zero Bandwidth):</span>
                      <span>160-char GSM SMS Gateway to Municipal Shortcode 51969 with CRC32 verification.</span>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'documentation' && (
                <div className="space-y-4 mb-8 bg-white/80 p-6 rounded-3xl border border-black/5">
                  <span className="text-xs uppercase font-bold text-[#007AFF] tracking-wider">
                    API Reference & Municipal Specifications
                  </span>
                  <h2 className="text-2xl font-bold text-slate-900">
                    Standardized OpenAPI Schema
                  </h2>
                  <div className="space-y-2 text-xs font-mono">
                    <div className="p-2.5 bg-slate-100 rounded-lg flex items-center justify-between">
                      <span className="font-bold text-blue-700">POST /v1/evacuate/safest-corridor</span>
                      <span className="text-slate-500 font-sans">Calculates high-ground route</span>
                    </div>
                    <div className="p-2.5 bg-slate-100 rounded-lg flex items-center justify-between">
                      <span className="font-bold text-blue-700">GET /v1/shelters/capacity/live</span>
                      <span className="text-slate-500 font-sans">Real-time open beds & ADA triage</span>
                    </div>
                    <div className="p-2.5 bg-slate-100 rounded-lg flex items-center justify-between">
                      <span className="font-bold text-blue-700">POST /v1/dossier/citizen-consensus</span>
                      <span className="text-slate-500 font-sans">Multi-modal ground-truth verification</span>
                    </div>
                  </div>
                </div>
              )}

              {/* Interactive Screen Selector Drawer */}
              <div className="pt-2 border-t border-black/5">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs uppercase font-bold text-black/40 tracking-wider">
                    Inspect Mobile Application Screens ({screensList.length})
                  </span>
                  <span className="text-xs text-[#007AFF] font-medium">Click screen to load in simulator</span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {screensList.map((screen) => (
                    <button
                      key={screen.id}
                      onClick={() => setCurrentScreen(screen.id)}
                      className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all flex items-center gap-1.5 ${
                        currentScreen === screen.id
                          ? 'bg-[#007AFF] text-white shadow-xs scale-102'
                          : 'bg-white/80 hover:bg-white text-black/70 border border-black/5'
                      }`}
                    >
                      <span>{screen.icon}</span>
                      <span>{screen.label}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Right Column: Interactive Hardware Mobile Simulator */}
        <div
          className={`bg-gradient-to-br from-[#E8E8ED] to-[#D2D2D7] relative overflow-hidden flex items-center justify-center p-4 sm:p-6 lg:p-8 transition-all ${
            isPhoneExpanded ? 'w-full min-h-[85vh]' : 'w-full lg:w-[42%] xl:w-[40%]'
          }`}
        >
          {/* Subtle Ambient Stage Rings */}
          <div className="absolute w-[600px] h-[600px] rounded-full border border-black/5 pointer-events-none" />
          <div className="absolute w-[850px] h-[850px] rounded-full border border-black/5 pointer-events-none" />

          {/* iPhone / Dynamic Island Hardware Enclosure */}
          <div className="w-[360px] max-w-full h-[730px] max-h-[92vh] bg-[#1a1a1a] rounded-[50px] border-[8px] border-[#2c2c2e] shadow-2xl overflow-hidden flex flex-col relative z-10 transition-all">
            {/* Top Speaker / Dynamic Island Bar */}
            <div className="w-full h-8 bg-black flex items-center justify-between px-6 shrink-0 relative select-none">
              <span className="text-[11px] font-semibold text-white/90">09:41</span>
              {/* Dynamic Island Pill */}
              <div className="w-24 h-4.5 bg-black rounded-full border border-white/10 flex items-center justify-center gap-1.5 px-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-[8.5px] font-bold text-white tracking-wider uppercase">Ridge Active</span>
              </div>
              <div className="flex items-center gap-1 text-[10px] text-white/80">
                <span className="text-[8.5px] font-bold">5G</span>
                <span className="w-4 h-2 rounded-xs border border-white/80 p-0.5 flex items-center">
                  <span className="w-full h-full bg-white rounded-2xs" />
                </span>
              </div>
            </div>

            {/* Active Screen Viewport */}
            <div className="flex-1 w-full overflow-hidden relative bg-[#faf9f9]">
              {currentScreen === 'radar' && (
                <EvacuationRadarScreen
                  onNavigate={setCurrentScreen}
                  wheelchairEnabled={wheelchairEnabled}
                />
              )}
              {currentScreen === 'guidance' && <LiveGuidanceScreen onNavigate={setCurrentScreen} />}
              {currentScreen === 'why-route' && <WhyThisRouteScreen onNavigate={setCurrentScreen} />}
              {currentScreen === 'preparedness' && <PreparednessKitScreen onNavigate={setCurrentScreen} />}
              {currentScreen === 'disaster-alert' && (
                <DisasterEvacuateScreen onNavigate={setCurrentScreen} />
              )}
              {currentScreen === 'dossier' && <CitizenDossierScreen onNavigate={setCurrentScreen} />}
              {currentScreen === 'sms-gateway' && <SmsGatewayScreen onNavigate={setCurrentScreen} />}
              {currentScreen === 'recovery' && <RecoveryClaimScreen onNavigate={setCurrentScreen} />}
              {currentScreen === 'shelters' && (
                <SheltersScreen
                  onNavigate={setCurrentScreen}
                  onSelectShelter={(shelter) => setSelectedShelter(shelter)}
                />
              )}
              {currentScreen === 'profile' && <ProfileScreen onNavigate={setCurrentScreen} />}
              {currentScreen === 'authority' && <AuthorityConsoleScreen onNavigate={setCurrentScreen} />}
              {currentScreen === 'sos-active' && (
                <div className="p-6 flex flex-col items-center justify-center h-full text-center space-y-4 bg-red-600 text-white">
                  <div className="w-16 h-16 rounded-full bg-white text-red-600 flex items-center justify-center text-2xl font-black animate-bounce shadow-xl">
                    🚨
                  </div>
                  <h2 className="text-xl font-black">Air-Boat Rescue Dispatched</h2>
                  <p className="text-xs text-white/90 leading-relaxed">
                    Municipal NDRF Unit 4 has received your high-precision coordinates (19.0760° N, 72.8777° E).
                    Estimated arrival: 6 minutes.
                  </p>
                  <div className="w-full p-3 rounded-xl bg-white/10 font-mono text-xs text-left">
                    <p>Channel: VHF 16 / 406 MHz</p>
                    <p>Life vest: Inflate upon visual</p>
                    <p>Beacon: Ephemeral SHA-256</p>
                  </div>
                  <button
                    onClick={() => setCurrentScreen('radar')}
                    className="w-full py-2.5 rounded-xl bg-white text-red-600 font-bold text-xs"
                  >
                    Return to Navigation
                  </button>
                </div>
              )}
            </div>

            {/* Persistent Mobile Bottom Navigation Bar matching Apple HIG */}
            <div className="h-14 bg-white/95 backdrop-blur-md border-t border-black/5 px-4 flex items-center justify-around shrink-0 relative z-30">
              <button
                onClick={() => setCurrentScreen('radar')}
                className={`flex flex-col items-center gap-0.5 transition-colors ${
                  currentScreen === 'radar' || currentScreen === 'guidance' || currentScreen === 'why-route'
                    ? 'text-[#007AFF]'
                    : 'text-black/40 hover:text-black/70'
                }`}
              >
                <Compass className="w-4.5 h-4.5" />
                <span className="text-[9px] font-bold">Radar</span>
              </button>

              <button
                onClick={() => setCurrentScreen('shelters')}
                className={`flex flex-col items-center gap-0.5 transition-colors ${
                  currentScreen === 'shelters' ? 'text-[#007AFF]' : 'text-black/40 hover:text-black/70'
                }`}
              >
                <Building className="w-4.5 h-4.5" />
                <span className="text-[9px] font-bold">Havens</span>
              </button>

              {/* Dominant SOS / Evacuate Button */}
              <button
                onClick={() => setCurrentScreen('disaster-alert')}
                className="w-10 h-10 -mt-3 bg-red-600 text-white rounded-full flex items-center justify-center shadow-lg hover:bg-red-700 active:scale-95 transition-transform"
                title="Immediate Disaster Evacuation Directive"
              >
                <AlertTriangle className="w-5 h-5 text-white" />
              </button>

              <button
                onClick={() => setCurrentScreen('preparedness')}
                className={`flex flex-col items-center gap-0.5 transition-colors ${
                  currentScreen === 'preparedness' ? 'text-[#007AFF]' : 'text-black/40 hover:text-black/70'
                }`}
              >
                <Shield className="w-4.5 h-4.5" />
                <span className="text-[9px] font-bold">Kit</span>
              </button>

              <button
                onClick={() => setCurrentScreen('profile')}
                className={`flex flex-col items-center gap-0.5 transition-colors ${
                  currentScreen === 'profile' ? 'text-[#007AFF]' : 'text-black/40 hover:text-black/70'
                }`}
              >
                <Users className="w-4.5 h-4.5" />
                <span className="text-[9px] font-bold">Profile</span>
              </button>
            </div>
          </div>
        </div>
      </main>

      {/* Editorial Footer matching Geometric Balance theme */}
      <footer className="h-auto py-4 lg:h-24 bg-white border-t border-black/5 px-6 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex flex-wrap items-center gap-8 lg:gap-12">
          <div className="flex flex-col">
            <span className="text-[10px] uppercase font-bold text-black/30 tracking-[2px] mb-0.5">
              Architecture
            </span>
            <span className="text-xs font-semibold text-slate-800">
              Resilient Serverless & PostGIS Graph
            </span>
          </div>
          <div className="flex flex-col">
            <span className="text-[10px] uppercase font-bold text-black/30 tracking-[2px] mb-0.5">
              Offline Mode
            </span>
            <span className="text-xs font-semibold text-slate-800">
              P2P Mesh + 2G GSM Relay
            </span>
          </div>
          <div className="flex flex-col">
            <span className="text-[10px] uppercase font-bold text-black/30 tracking-[2px] mb-0.5">
              Verification
            </span>
            <span className="text-xs font-semibold text-slate-800">
              AI-Proofed Multi-Node Consensus
            </span>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <span className="text-xs text-black/40 text-center sm:text-right">
            Trusted by NDRF & SDMA Municipal Authorities
          </span>
          <div className="flex gap-2 opacity-40">
            <span className="w-5 h-5 rounded-full bg-slate-300 flex items-center justify-center text-[10px] font-bold">
              ✓
            </span>
            <span className="w-5 h-5 rounded-full bg-slate-300 flex items-center justify-center text-[10px] font-bold">
              ⚡
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}
