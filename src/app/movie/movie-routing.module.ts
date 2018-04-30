import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ListMoviesComponent} from "./list-movies/list-movies.component";
import {DetailsMovieComponent} from "./details-movie/details-movie.component";
import {RouterModule, Routes} from "@angular/router";
import {MovieComponent} from "./movie.component";

const routes: Routes = [
  {
    path: '',
    component: MovieComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MovieRoutingModule { }
