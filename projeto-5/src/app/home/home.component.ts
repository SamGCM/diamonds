import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../services/movies.services';
import { Movie } from '../shared/movie.model';
import { MovieDetail } from '../shared/movieDetail.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{

  movieDetailId: number;
  moviesPopularList: Movie[];
  moviesTopRatedList: Movie[];
  moviesNowPlayingList: Movie[];
  moviesUpcomingList: Movie[];
  movieDetails: MovieDetail;
  bannerData: Movie;

  constructor(
    private moviesService: MoviesService
  ){}
  ngOnInit(): void {
    let randomNumberId = Math.floor(Math.random() * 999);

    this.moviesService.getMoviesPopulars().subscribe((response: any) =>{
      this.moviesPopularList = response.results
    })

    this.moviesService.getMoviesTopRated().subscribe((response: any) =>{
      this.moviesTopRatedList = response.results
    })

    this.moviesService.getMoviesNowPlaying().subscribe((response: any) =>{
      this.moviesNowPlayingList = response.results
    })

    this.moviesService.getMoviesUpcoming().subscribe((response: any) =>{
      this.moviesUpcomingList = response.results
    })

    this.moviesService.getMovieDetail(randomNumberId).subscribe((response: any) =>{
      this.bannerData = response;
    })
  }

  getMovieDetail(id: number) {
    this.moviesService.getMovieDetail(id).subscribe((response: any) =>{
      this.movieDetails = response;
    })
  }
}
