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


  @Input() moviesList: Movie[];

  public movieDetail: MovieDetail;

  @Input() title: string;

  @Output() movieClick = new EventEmitter<number>();

  constructor(
    private moviesService: MoviesService
  ){}

  ngOnInit() {

  }

  getMovieDetail(id: number) {
    this.movieClick.emit(id)
  }



}
