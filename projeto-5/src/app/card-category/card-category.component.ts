import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-category',
  templateUrl: './card-category.component.html',
  styleUrls: ['./card-category.component.scss']
})
export class CardCategoryComponent {


  @Input() category_static!: string;

  @Input() category_gif!: string;

  @Input() title!: string;

  @Input() href!: string;

  public src_image: string = ""

  constructor(){
  }

  ngOnInit() {
    this.src_image = this.category_static
  }

  public mouseHover () {
    this.src_image = this.category_gif
  }

  public mouseOut () {
    this.src_image = this.category_static
  }

}
