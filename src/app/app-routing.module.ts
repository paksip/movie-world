import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./home/home.component";

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'movie',
    loadChildren: 'app/movie/movie.module#MovieModule'
  },
  {
    path: 'series',
    loadChildren: 'app/series/series.module#SeriesModule'
  },
  {
    path: 'performer',
    loadChildren: 'app/performer/performer.module#PerformerModule'
  },
  {
    path: 'recommendation',
    loadChildren: 'app/recommendation/recommendation.module#RecommendationModule'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
