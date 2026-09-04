import { Shelter, HazardDossier, RouteOption } from '../types';

export const SHELTERS_DATA: Shelter[] = [
  {
    id: 'shelter-st-jude',
    name: 'St. Jude Relief Pavilion',
    zone: 'Sector 17 North • Ridge Crest',
    distance_km: 3.4,
    eta_mins: 14,
    total_capacity: 100,
    available_capacity: 55,
    occupancy_pct: 45,
    elevation_msl: 32,
    has_wheelchair_ramp: true,
    has_medical_generator: true,
    has_triage_team: true,
    has_accessible_toilets: true,
    status: 'ACCEPTING',
    address: 'Hill Road Upper Ridge, Sector 17, Bandra West',
    coordinates: { lat: 19.0812, lng: 72.8910 },
    last_reported_secs_ago: 18,
  },
  {
    id: 'shelter-bandra-sports',
    name: 'Bandra East Community Complex',
    zone: 'Sector 12 • High Ground',
    distance_km: 4.8,
    eta_mins: 22,
    total_capacity: 250,
    available_capacity: 82,
    occupancy_pct: 67,
    elevation_msl: 28,
    has_wheelchair_ramp: true,
    has_medical_generator: true,
    has_triage_team: false,
    has_accessible_toilets: true,
    status: 'ACCEPTING',
    address: 'BKC Link Road, Bandra East',
    coordinates: { lat: 19.0601, lng: 72.8521 },
    last_reported_secs_ago: 45,
  },
  {
    id: 'shelter-mount-mary',
    name: 'Mount Mary High Ridge Haven',
    zone: 'Heritage Ridge (+44m MSL)',
    distance_km: 2.9,
    eta_mins: 12,
    total_capacity: 80,
    available_capacity: 12,
    occupancy_pct: 85,
    elevation_msl: 44,
    has_wheelchair_ramp: false,
    has_medical_generator: true,
    has_triage_team: true,
    has_accessible_toilets: false,
    status: 'NEAR_CAPACITY',
    address: 'Kane Road Crest, Bandra West',
    coordinates: { lat: 19.0468, lng: 72.8223 },
    last_reported_secs_ago: 12,
  },
];

export const SHELTERS = SHELTERS_DATA;

export const PRIMARY_HAZARD_DOSSIER: HazardDossier = {
  id: 'hz-402',
  hazard_number: '#HZ-402',
  title: 'Deep Inundation & Culvert Overflow',
  sector: 'Sector 17, Link Road • Near Old Bridge',
  location_name: 'Link Road Canal Underpass',
  coordinates: { lat: 28.6139, lng: 77.2090 },
  water_depth_cm: 48,
  status: 'UNDER_REVIEW',
  severity: 'CRITICAL',
  submitted_time: '6 mins ago',
  consensus_score_pct: 87,
  citizen_confirmations_count: 14,
  iot_sensor_matched: true,
  sensor_node_id: '#104',
  ground_truth_image_url:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuAN55PibZ9pVgDJynszBepZ0UbQz7-5qj7y49IiqqrfAtDw1_gro8NV4xBz96HwpshJBd1HTGTDMnQyvvit3OCitgiljBjuuN5J3JOLCR6NNQpeYvov21VbKZ18RG0D8hHOB0UqlRR6wXoMBCUNFhuZwPx6HZnOKJBvKBZnjZ4kUhHAOXca5Tc_9RKDK2pGv6Jy5lLY-bbOweMRqaJepLl_k-y4gp36DaKpkljt4e552-cPkIsXpH0',
  citizen_quote:
    'Culvert overflowed, standing water approx 48cm deep. Vehicles stalling and two hatchbacks already trapped.',
  affected_edge_id: 402,
  evacuees_routed_away: 142,
  bypass_corridor_name: 'Ridge Road High-Ground Corridor',
};

export const ROUTE_OPTIONS_DATA: { safe: RouteOption; rejected: RouteOption } = {
  safe: {
    id: 'route-b',
    name: 'Route B: Ridge Road Corridor',
    type: 'SAFE',
    distance_km: 3.4,
    est_time_mins: 14,
    elevation_gain_m: 32,
    hazard_intersections: 0,
    ada_compliant: true,
    description: 'Topological Elevation Traverse via Highlands (+32m MSL)',
    reasons: [
      'Zero Water Accumulation: Maintains continuous crest on +32m MSL high-ground spine away from flash drainage zones.',
      'Full ADA Wheelchair Compliance: Continuous paved sidewalks with maximum grade slope < 4.5% and zero washed-out curbs.',
      'Telemetry Checked Culverts: Sensor node #104 pinged 4 mins ago with 100% flow capacity and zero hydraulic blockage.',
    ],
  },
  rejected: {
    id: 'route-a',
    name: 'Route A: Direct Canal Expressway',
    type: 'REJECTED',
    distance_km: 1.9,
    est_time_mins: 6,
    elevation_gain_m: 0,
    hazard_intersections: 3,
    ada_compliant: false,
    description: 'Urban Low-Basin Culvert Path (Nominal shortcut: 1.9km / 6 min)',
    reasons: [],
    fatal_failures: [
      'Hard Road Closure at Edge #402: Hydro sensor recorded water depth at 48cm. Threshold >15cm floats passenger vehicles and stalls wheelchairs.',
      'Structural Culvert Collapse: Municipal Node #12 flagged severe sediment backflow and structural cracking along low-basin canal viaduct.',
      'PostGIS Boundary Collision: ST_Intersects(geom, closed_edge_buffer) = TRUE',
    ],
    postgis_query: 'ST_Intersects(geom, ST_Buffer(closed_edge_geom, 15)) = TRUE',
  },
};

export const RECOVERY_CLAIM_PRESET = {
  address: '42 Palm Grove, Sector 17, Bandra West, Mumbai 400050',
  habitation_unit: 'Residential Ground Floor Apartment',
  inundation_peak_cm: 42,
  inundation_duration_hrs: 6.5,
  sensor_node: 'Node #104',
  claim_band: '₹1,85,000 – ₹2,40,000',
  instant_advance: '₹50,000',
  photos: [
    {
      title: 'Submerged Living Room',
      time: '13:42 IST',
      url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDUbIR8wI88PVUTZk0RLhBQVfd96ppILHpSoff-s_SyX3-9rl95icCWoDEAhBS9eBxpcjfZRzsjqYognatT47NTvQ-EPfTIK4CL4elIxV70p3R0TvZmfqWj4aJj6POcBCM7Drq8FstvCfgX4oFldjRjcuU2g_2MAjvQIOhD1fhkNfIdCqorMoFkz3XK379w9N2c9gh0TJVeBtRqWzz-hYcBNfKXG5dC1CGm9xQvOa6U6yG2jBYePJk',
    },
    {
      title: 'Inverter Unit & Wiring',
      time: '13:46 IST',
      url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCsT2tNqLvHH-jxxGb3Wg3MwkQNt775A16NkswGcYVdd9YJmCB82ZJnGuWfRhRCkt8UstB52lwdBh18al6IzqaLo36-V-PMPjuYvnsQ4nkTDDD5TDwjD3ewDoyqMp-_zllgrjrXOfKswsTl0sclbxxVyzQYLhwV8qwmCmjHnydc8ke2O2UsjEoH8nZWQ34YWCivygvWuNcaPPzXqy65ES4OSFYmUEqBRaUZKuyjt4gdR9FTd0NmFN8',
    },
  ],
  audit_hash: '#SHA-256: 9FA-4081-D93',
};

export const GO_BAG_ITEMS = [
  { id: 1, name: 'Drinking Water (3 Liters)', category: 'hydration', packed: true },
  { id: 2, name: 'Non-Perishable Nutrition Bars', category: 'ration', packed: true },
  { id: 3, name: 'Critical Prescriptions (7-Day Supply)', category: 'medical', packed: true },
  { id: 4, name: 'Solar Hand-Crank Emergency Radio', category: 'comms', packed: true },
  { id: 5, name: 'Waterproof Document Pouch (Aadhaar / Deeds)', category: 'docs', packed: false },
  { id: 6, name: 'Compact Medical First Aid Kit', category: 'medical', packed: true },
  { id: 7, name: 'Lithium Power Bank (20,000mAh)', category: 'power', packed: true },
  { id: 8, name: 'N95 Respirators & High-Visibility Poncho', category: 'protection', packed: true },
  { id: 9, name: 'Multi-Tool & High-Decibel Safety Whistle', category: 'tools', packed: false },
];

export const SENSOR_NODES = [
  { id: '104', location: 'Low-Basin Canal Underpass', waterDepth: 48, flowRate: '340 L/s', status: 'danger' },
  { id: '208', location: 'Hill Road Ridge Drainage Culvert', waterDepth: 4, flowRate: '45 L/s', status: 'safe' },
  { id: '312', location: 'Bandra Creek Tidal Sluice Gate 2', waterDepth: 26, flowRate: '190 L/s', status: 'warning' },
  { id: '409', location: 'Low Basin Junction Overpass', waterDepth: 18, flowRate: '120 L/s', status: 'warning' },
];

