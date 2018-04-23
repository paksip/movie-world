import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieComponent } from './movie.component';
import { ListMoviesComponent } from './list-movies/list-movies.component';
import { DetailsMovieComponent } from './details-movie/details-movie.component';
import { MovieRoutingModule } from './movie-routing.module';

@NgModule({
  imports: [
    CommonModule,
    MovieRoutingModule
  ],
  declarations: [MovieComponent, ListMoviesComponent, DetailsMovieComponent]
})
export class MovieModule { }
