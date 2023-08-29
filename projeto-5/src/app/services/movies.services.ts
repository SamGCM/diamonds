import { HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { Observable } from "rxjs";

@Injectable()
export class MoviesService {
  readonly apiURL : string = `https://api.themoviedb.org/3`;

  readonly HEADERS = {
    Authorization: 'Bearer ' + import.meta.env["NG_APP_API_TOKEN_TMDB"]
  }

  constructor(private http : HttpClient) {
  }

  public getMovieDetail(id: number): Observable<any> {

    return this.http.get(`${ this.apiURL }/movie/${id}`, {
      headers: this.HEADERS,
      params: {
        language: "pt-BR"
      }
    })
  }

  public getMoviesNowPlaying(): Observable<any> {

    return this.http.get(`${ this.apiURL }/movie/now_playing`, {
      headers: this.HEADERS,
      params: {
        language: "pt-BR",
        page: 1
      }
    })
  }

  public getMoviesUpcoming(): Observable<any> {

    return this.http.get(`${ this.apiURL }/movie/upcoming`, {
      headers: this.HEADERS,
      params: {
        language: "pt-BR",
        page: 1
      }
    })
  }

  public getMoviesPopulars(): Observable<any> {

    return this.http.get(`${ this.apiURL }/movie/popular`, {
      headers: this.HEADERS,
      params: {
        language: "pt-BR",
        page: 1
      }
    })
  }

  getMoviesTopRated(): Observable<any> {
    return this.http.get(`${ this.apiURL }/movie/top_rated`, {
      headers: this.HEADERS,
      params: {
        language: "pt-BR",
        page: 1
      }
    })
  }

  public searchMovie(query: string): Observable<any> {

    return this.http.get(`${ this.apiURL }/search/movie`, {
      headers: this.HEADERS,
      params: {
        language: "pt-BR",
        page: 1,
        include_adult: false,
        sort_by: "popularity.desc",
        query: query
      }
    })
  }

  public exploreMoviesGenre(query: string): Observable<any> {
    let queryCategory = query ? "" + query : ""

    return this.http.get(`${ this.apiURL }/discover/movie`, {
      headers: this.HEADERS,
      params: {
        language: "pt-BR",
        page: 1,
        include_adult: false,
        sort_by: "popularity.desc",
        with_genres: queryCategory
      }
    })
  }

}

interface IExploreMovies {
  category?: string
}
