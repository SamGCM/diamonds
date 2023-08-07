import { Country } from "./classes/country";
import { Movie } from "./classes/movie";
import { Pokemon } from "./classes/pokemon";
import { country } from "./data/country";
import { movie } from "./data/movie";
import { pokemon } from "./data/pokemon"

let poke = new Pokemon(
    pokemon.id,
    pokemon.name,
    pokemon.base_experience,
    pokemon.height,
    pokemon.weight,
    pokemon.legendary,
    new Date(pokemon.firstAppearance),
    pokemon.abilities,
    pokemon.stats
)

let mov = new Movie(
    movie.id,
    movie.adult,
    movie.backdrop_path,
    movie.original_language,
    movie.original_title,
    movie.overview,
    movie.popularity,
    movie.poster_path,
    new Date(movie.release_date),
    movie.title,
    movie.video,
    movie.vote_average,
    movie.vote_count
)

let countr = new Country(
    country.name,
    country.independent,
    country.unMember,
    country.capital,
    country.region,
    country.subregion,
    country.languages,
    country.latlng,
    country.borders,
    country.area,
    country.population,
    country.timezones,
    country.flags
)

