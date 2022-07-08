export interface Movie {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
  revenue: number;
  runtime: number;
  status: string;
  genres: Genera[];
}

//Data type for retrieved items in http requests
export interface MovieDto {
  page: number;
  results: Movie[];
  total_results: number;
  total_pages: number;
}
export interface Genera {
  id: number;
  name: string;
}
export interface MovieVideoDto {
  id: number;
  results: MovieVideo[];
}

export interface MovieVideo {
  key: string;
  site: string;
}
