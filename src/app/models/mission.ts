// models/mission.ts

export interface PayloadParams {
  reference_system: string;
  regime: string;
  longitude: number | null;
  semi_major_axis_km: number | null;
  eccentricity: number | null;
  periapsis_km: number | null;
  apoapsis_km: number | null;
  inclination_deg: number | null;
  period_min: number | null;
  lifespan_years: number | null;
  epoch: Date | null;
  mean_motion: number | null;
  raan: number | null;
  arg_of_pericenter: number | null;
  mean_anomaly: number | null;
}

export interface Payload {
  payload_id: string;
  norad_id: number[] | null;
  reused: boolean;
  customers: string[];
  nationality: string;
  manufacturer: string;
  payload_type: string;
  payload_mass_kg: number;
  payload_mass_lbs: number;
  orbit: string;
  orbit_params: PayloadParams;
}

export interface LaunchSite {
  site_id: string;
  site_name: string;
  site_name_long: string;
}

export interface Rocket {
  rocket_id: string;
  rocket_name: string;
  rocket_type: string;
  first_stage: {
    cores: {
      core_serial: string;
      flight: number;
      block: number | null;
      gridfins: boolean;
      legs: boolean;
      reused: boolean;
      land_success: boolean | null;
      landing_intent: boolean;
      landing_type: string | null;
      landing_vehicle: string | null;
    }[];
  };
  second_stage: {
    block: number;
    payloads: Payload[];
  };
  fairings: {
    reused: boolean;
    recovery_attempt: boolean;
    recovered: boolean;
    ship: string | null;
  };
}

export interface Links {
  mission_patch: string;
  mission_patch_small: string;
  reddit_campaign: string | null;
  reddit_launch: string | null;
  reddit_recovery: string | null;
  reddit_media: string | null;
  presskit: string | null;
  article_link: string | null;
  wikipedia: string;
  video_link: string;
  youtube_id: string | null;
  flickr_images: string[];
}

export interface LaunchFailureDetails {
  time: number;
  altitude: number | null;
  reason: string;
}

export interface Mission {
  flight_number: number;
  mission_name: string;
  mission_id: string[];
  upcoming: boolean;
  launch_year: string;
  launch_date_unix: number;
  launch_date_utc: string;
  launch_date_local: string;
  is_tentative: boolean;
  tentative_max_precision: string;
  tbd: boolean;
  launch_window: number;
  rocket: Rocket;
  ships: string[];
  telemetry: {
    flight_club: string | null;
  };
  launch_site: LaunchSite;
  launch_success: boolean;
  launch_failure_details: LaunchFailureDetails;
  links: Links;
  details: string;
  static_fire_date_utc: string;
  static_fire_date_unix: number;
  timeline: {
    webcast_liftoff: number;
  };
  crew: string | null;
}
