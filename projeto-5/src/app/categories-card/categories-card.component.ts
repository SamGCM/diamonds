import { Component } from '@angular/core';
import { Category } from '../shared/category.model';
import { dataCategories } from 'src/data/categories';

@Component({
  selector: 'app-categories-card',
  templateUrl: './categories-card.component.html',
  styleUrls: ['./categories-card.component.scss']
})
export class CategoriesCardComponent {

  public categories: Category[] = dataCategories.map(
    item => new Category(item.img, item.gif, item.title, item.category)
  );

  constructor(){}

  ngOnInit() {}

}
