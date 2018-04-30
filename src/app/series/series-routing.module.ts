import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MovieComponent} from "../movie/movie.component";
import {RouterModule, Routes} from "@angular/router";
import {SeriesComponent} from "./series.component";

const routes: Routes = [
  {
    path: '',
    component: SeriesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SeriesRoutingModule { }
