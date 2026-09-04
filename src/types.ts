export type AppMode = 'everyday' | 'disaster';

export type UserRole = 'CITIZEN' | 'RESPONDER' | 'AUTHORITY' | 'ADMIN';

export type MobileScreenId =
  | 'onboarding'
  | 'radar'
  | 'guidance'
  | 'why-route'
  | 'preparedness'
  | 'disaster-alert'
  | 'dossier'
  | 'sms-gateway'
  | 'recovery'
  | 'authority'
  | 'shelters'
  | 'report-hazard'
  | 'profile'
  | 'sos-active';

export interface AccessibilityProfile {
  wheelchair_required: boolean;
  electricity_required: boolean;
  mobility_impaired: boolean;
  service_animal: boolean;
  elderly_or_infant: boolean;
}

export interface MedicalProfile {
  blood_group: string;
  critical_prescriptions: string[];
  oxygen_dependent: boolean;
  emergency_notes: string;
}

export interface Shelter {
  id: string;
  name: string;
  zone: string;
  distance_km: number;
  eta_mins: number;
  total_capacity: number;
  available_capacity: number;
  occupancy_pct: number;
  elevation_msl: number;
  has_wheelchair_ramp: boolean;
  has_medical_generator: boolean;
  has_triage_team: boolean;
  has_accessible_toilets: boolean;
  status: 'ACCEPTING' | 'NEAR_CAPACITY' | 'FULL';
  address: string;
  coordinates: { lat: number; lng: number };
  last_reported_secs_ago: number;
}

export interface HazardDossier {
  id: string;
  hazard_number: string;
  title: string;
  sector: string;
  location_name: string;
  coordinates: { lat: number; lng: number };
  water_depth_cm: number;
  status: 'UNDER_REVIEW' | 'CONFIRMED_CLOSED' | 'CLEARED';
  severity: 'CRITICAL' | 'WARNING' | 'ADVISORY';
  submitted_time: string;
  consensus_score_pct: number;
  citizen_confirmations_count: number;
  iot_sensor_matched: boolean;
  sensor_node_id: string;
  ground_truth_image_url: string;
  citizen_quote: string;
  affected_edge_id: number;
  evacuees_routed_away: number;
  bypass_corridor_name: string;
}

export interface RouteOption {
  id: 'route-a' | 'route-b';
  name: string;
  type: 'SAFE' | 'REJECTED';
  distance_km: number;
  est_time_mins: number;
  elevation_gain_m: number;
  hazard_intersections: number;
  ada_compliant: boolean;
  description: string;
  reasons: string[];
  fatal_failures?: string[];
  postgis_query?: string;
}

export interface DamageCategory {
  id: string;
  title: string;
  subtitle: string;
  icon: string;
  selected: boolean;
}

export interface AuditEvent {
  id: string;
  actor: string;
  action: string;
  target: string;
  policy: string;
  timestamp: string;
}
