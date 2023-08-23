import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../services/movies.services';
import { Movie } from '../shared/movie.model';
import { MovieDetail } from '../shared/movieDetail.model';

@Component({
  selector: 'app-carousel-movies',
  templateUrl: './carousel-movies.component.html',
  styleUrls: ['./carousel-movies.component.scss'],
})
export class CarouselMoviesComponent implements OnInit {

  public movies: Movie[];
  public movieDetail: MovieDetail;

  constructor(
    private moviesService: MoviesService
  ){}

  ngOnInit() {
    this.moviesService.getMovies().subscribe((response: any) =>{
      this.movies = response.results
    })
  }

  getMovieDetail(id: number) {
    this.moviesService.getMovieDetail(id).subscribe((response: any) =>{
      this.movieDetail = response
    })
  }



}
