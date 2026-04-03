export interface IBaseMediaDetails {
  adult: boolean;
  backdrop_path: string;
  genres: { id: number; name: string }[];
  homepage: string;
  id: number;
  original_language: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: {
    id: number;
    logo_path: string;
    name: string;
    origin_country: string;
  }[];
  production_countries: { iso_3166_1: string; name: string }[];
  spoken_languages: { english_name: string; iso_639_1: string; name: string }[];
  status: string;
  tagline: string;
  vote_average: number;
  vote_count: number;
  origin_country: string[];
}


export interface IMovieDetails extends IBaseMediaDetails {
  belongs_to_collection: string | null;
  budget: number;
  original_title: string;
  release_date: string;
  revenue: number;
  runtime: number;
  title: string;
  video: boolean;
}

export interface ITvDetails extends IBaseMediaDetails {
  created_by: {
    id: number;
    credit_id: string;
    name?: string;
    original_name: string | null;
    gender?: number;
    profile_path?: string | null;
  }[];
  episode_run_time: number[];
  first_air_date: string;
  in_production: boolean;
  languages: string[];
  last_air_date: string;
  last_episode_to_air: {
    air_date: string;
    episode_number: number;
    episode_type?: string;
    id: number;
    name: string;
    overview?: string;
    production_code?: string;
    runtime: number;
    season_number: number;
    show_id: number;
    still_path?: string | null;
    vote_average?: number;
    vote_count?: number;
  };
  next_episode_to_air: {
    air_date: string;
    episode_number: number;
    episode_type: string;
    id: number;
    name: string;
    overview: string;
    production_code: string;
    runtime: number | null;
    season_number: number;
    show_id: number;
    still_path: string | null;
    vote_average: number;
    vote_count: number;
  } | null;
  networks: {
    id: number;
    logo_path: string;
    name: string;
    origin_country: string;
  }[];
  number_of_episodes: number;
  number_of_seasons: number;
  original_name: string;
  name: string;
  seasons: {
    air_date: string | null;
    episode_count: number;
    id: number;
    name: string;
    overview: string;
    poster_path: string;
    season_number: number;
    vote_average: number;
  }[];
  type: string;
}
