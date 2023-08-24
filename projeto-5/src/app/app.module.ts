import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopbarComponent } from './topbar/topbar.component';
import { BannerComponent } from './banner/banner.component';
import { CategoriesCardComponent } from './categories-card/categories-card.component';
import { CardCategoryComponent } from './card-category/card-category.component';
import { CarouselMoviesComponent } from './carousel-movies/carousel-movies.component';
import { MoviesService } from './services/movies.services';
import { NgxConveyerModule } from '@egjs/ngx-conveyer';
import { HttpClientModule } from '@angular/common/http';
import { PosterMovieComponent } from './poster-movie/poster-movie.component';
import { ModalDetailComponent } from './modal-detail/modal-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    TopbarComponent,
    BannerComponent,
    CategoriesCardComponent,
    CardCategoryComponent,
    CarouselMoviesComponent,
    PosterMovieComponent,
    ModalDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxConveyerModule,
    HttpClientModule,
  ],
  providers: [MoviesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
