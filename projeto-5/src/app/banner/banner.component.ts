import { Component, Input } from '@angular/core';
import { Movie } from '../shared/movie.model';
import { urlBaseImage } from 'src/constants/urlBaseImage';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent {
  public urlBaseImage: string = urlBaseImage;
  @Input() bannerData: Movie;

}
