import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MoviesService } from '../services/movies.services';
import { Movie } from '../shared/movie.model';
import { GENRES } from 'src/constants/genres';
import { MovieDetail } from '../shared/movieDetail.model';

@Component({
  selector: 'app-explorar',
  templateUrl: './explorar.component.html',
  styleUrls: ['./explorar.component.scss']
})
export class ExplorarComponent {

  private queryParams: any
  moviesList: Movie[]
  movieDetail: MovieDetail;

  constructor(
    private acivatedRoute: ActivatedRoute,
    private router: Router,
    private moviesService: MoviesService
    ) {
      this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    }

  ngOnInit() {
    this.acivatedRoute.queryParams
    .subscribe(params => {

      this.queryParams = params;
    })

    if(this.queryParams.category) {
      this.moviesService.exploreMoviesGenre(this.queryParams.category).subscribe((response: any) =>{
        this.moviesList = response.results
      })
    }

    if(this.queryParams.search) {
      this.moviesService.searchMovie(this.queryParams.search).subscribe((response: any) =>{
        this.moviesList = response.results
      })
    }
  }

  getMovieDetail(id: number) {
    this.moviesService.getMovieDetail(id).subscribe((response: any) =>{
      this.movieDetail = response;
    })
  }

}
