import { Component, Input, OnInit, OnChanges } from '@angular/core';
import { MovieDetail } from '../shared/movieDetail.model';
import { MoviesService } from '../services/movies.services';
import { urlBaseImage } from 'src/constants/urlBaseImage';

@Component({
  selector: 'app-modal-detail',
  templateUrl: './modal-detail.component.html',
  styleUrls: ['./modal-detail.component.scss']
})
export class ModalDetailComponent {

  @Input() movieDetail: MovieDetail;
  public urlBaseImage: string = urlBaseImage;

  constructor(){}

}
