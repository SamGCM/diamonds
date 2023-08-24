import { urlBaseImage } from './../../constants/urlBaseImage';
import { Component, Input, OnInit } from '@angular/core';
import { Movie } from '../shared/movie.model';

@Component({
  selector: 'app-poster-movie',
  templateUrl: './poster-movie.component.html',
  styleUrls: ['./poster-movie.component.scss']
})
export class PosterMovieComponent implements OnInit {

  public urlBaseImage: string = urlBaseImage;

  @Input() movie: Movie;

  constructor(){}

  ngOnInit(): void {

  }


}
