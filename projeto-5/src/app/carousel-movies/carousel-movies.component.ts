import { Observable } from 'rxjs';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { MoviesService } from '../services/movies.services';
import { Movie } from '../shared/movie.model';
import { MovieDetail } from '../shared/movieDetail.model';

@Component({
  selector: 'app-carousel-movies',
  templateUrl: './carousel-movies.component.html',
  styleUrls: ['./carousel-movies.component.scss'],
})
export class CarouselMoviesComponent implements OnInit {

  public moviesList: Movie[];

  public movieDetail: MovieDetail;

  @Input() title: "Populares" | "Mais avaliados";

  @Output() movieClick = new EventEmitter<number>();

  constructor(
    private moviesService: MoviesService
  ){}

  ngOnInit() {

    if(this.title === "Populares") {
      this.moviesService.getMoviesPopulars().subscribe((response: any) =>{
        this.moviesList = response.results
      })
    }

    if(this.title === "Mais avaliados") {
      this.moviesService.getMoviesTopRated().subscribe((response: any) =>{
        this.moviesList = response.results
      })
    }

  }

  getMovieDetail(id: number) {
    this.movieClick.emit(id)
  }



}
