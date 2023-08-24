import { Component, Input, OnInit, OnChanges } from '@angular/core';
import { MovieDetail } from '../shared/movieDetail.model';
import { MoviesService } from '../services/movies.services';
import { urlBaseImage } from 'src/constants/urlBaseImage';

@Component({
  selector: 'app-modal-detail',
  templateUrl: './modal-detail.component.html',
  styleUrls: ['./modal-detail.component.scss']
})
export class ModalDetailComponent implements OnInit, OnChanges {

  @Input() movieId: string;

  public movieDetail: MovieDetail;
  public urlBaseImage: string = urlBaseImage;

  constructor(
    private moviesService: MoviesService
  ){}

  ngOnInit(): void {  }

  ngOnChanges() {
    if(this.movieId !== "") {
      this.getMovieDetail(parseInt(this.movieId))
    }
  }

  getMovieDetail(id: number) {
    this.moviesService.getMovieDetail(id).subscribe((response: any) =>{
      this.movieDetail = response;
    })
  }

}
