import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {SearchOption} from "../../shared/enums/search-option.enum";
import {Router} from "@angular/router";
import {MovieService} from "../../movie/movie.service";
import {SeriesService} from "../series.service";

@Component({
  selector: 'app-list-series',
  templateUrl: './list-series.component.html',
  styleUrls: ['./list-series.component.css']
})
export class ListSeriesComponent implements OnInit {

  search: string;
  seriesArray: any[] = [];
  option: SearchOption = SearchOption.Text;

  @Output('series') series= new EventEmitter<any>();

  constructor(private seriesService: SeriesService, private router: Router) { }

  ngOnInit() {
  }

  getByText() {
    this.seriesService.getByText(this.search).subscribe((outcome) => {
      this.series.emit(undefined);
      this.seriesArray = outcome.results;
    });
  }

  details(series: any) {
    this.seriesArray = [];
    this.series.emit(series);
  }

}
