export class MovieDetail {
  adult: boolean
  backdrop_path: string
  belongs_to_collection: IBelongsToCollection
  budget: number
  genres: IGenreMovie[]
  homepage: string
  id: number
  imdb_id: string
  original_language: string
  original_title: string
  overview: string
  popularity: number
  poster_path: string
  production_companies: IProductionCompanies[]
  production_countries: IProductionCountries[]
  release_date: string
  revenue: number
  runtime: number
  spoken_languages: ISpokenLanguages[]
  status: string
  tagline: string
  title: string
  video: false
  vote_average: number
  vote_count: number
}

interface IGenreMovie {
  id: number,
  name: string
}

interface IProductionCompanies {
  id: number
  logo_path: string | null
  name: string
  origin_country: string
}

interface IProductionCountries {
  iso_3166_1: string
  name: string
}

interface ISpokenLanguages {
  english_name: string
  iso_639_1: string
  name: string
}

interface IBelongsToCollection {
  id: number,
  name: string,
  poster_path: string,
  backdrop_path: string
}
