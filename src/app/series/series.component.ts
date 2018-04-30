import {Component, OnInit, ViewChild} from '@angular/core';
import {ListMoviesComponent} from "../movie/list-movies/list-movies.component";
import {ListSeriesComponent} from "./list-series/list-series.component";

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.css']
})
export class SeriesComponent implements OnInit {

  @ViewChild(ListSeriesComponent) listSeriesComponent: ListSeriesComponent;
  series: any;

  constructor() { }

  ngOnInit() {
  }

  seriesChanged(series: any){
    this.series = series;
  }

}
