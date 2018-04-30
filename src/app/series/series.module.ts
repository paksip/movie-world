import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SeriesComponent } from './series.component';
import { DetailsSeriesComponent } from './details-series/details-series.component';
import { ListSeriesComponent } from './list-series/list-series.component';
import {SeriesService} from "./series.service";
import {CoreModule} from "../core/core.module";
import {MovieRoutingModule} from "../movie/movie-routing.module";
import { SeriesRoutingModule } from './/series-routing.module';

@NgModule({
  imports: [
    CommonModule,
    CoreModule,
    SeriesRoutingModule
  ],
  declarations: [SeriesComponent, DetailsSeriesComponent, ListSeriesComponent],
  providers: [SeriesService]
})
export class SeriesModule { }
