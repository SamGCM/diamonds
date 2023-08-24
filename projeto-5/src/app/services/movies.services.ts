import { HttpClient } from "@angular/common/http";
import { Movie } from "../shared/movie.model";
import { MovieDetail } from "../shared/movieDetail.model";
import { Injectable } from '@angular/core';
import { Observable, Subscription } from "rxjs";

@Injectable()
export class MoviesService {
  readonly apiURL : string = `https://api.themoviedb.org/3/movie`;

  constructor(private http : HttpClient) {
  }

  public getMovieDetail(id: number): Observable<any> {

    return this.http.get(`${ this.apiURL }/${id}?language=pt-BR`, {
      headers: {
        Authorization: 'Bearer ' + import.meta.env["NG_APP_API_TOKEN_TMDB"]
      }
    })
  }

  public getMoviesPopulars(): Observable<any> {

    return this.http.get(`${ this.apiURL }/popular?language=pt-BR&page=1`, {
      headers: {
        Authorization: 'Bearer ' + import.meta.env["NG_APP_API_TOKEN_TMDB"]
      }
    })
  }

  getMoviesTopRated(): Observable<any> {
    return this.http.get(`${ this.apiURL }/top_rated?language=pt-BR&page=1`, {
      headers: {
        Authorization: 'Bearer ' + import.meta.env["NG_APP_API_TOKEN_TMDB"]
      }
    })
  }
}
