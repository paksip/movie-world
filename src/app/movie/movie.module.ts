import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieComponent } from './movie.component';
import { ListMoviesComponent } from './list-movies/list-movies.component';
import { DetailsMovieComponent } from './details-movie/details-movie.component';
import { MovieRoutingModule } from './movie-routing.module';
import { MovieService } from './movie.service';
import {CoreModule} from "../core/core.module";
import {SharedModule} from "../shared/shared.module";

@NgModule({
  imports: [
    CommonModule,
    CoreModule,
    SharedModule,
    MovieRoutingModule
  ],
  declarations: [MovieComponent, ListMoviesComponent, DetailsMovieComponent],
  providers: [MovieService]
})
export class MovieModule { }
