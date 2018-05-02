import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {SeriesService} from "../series.service";

@Component({
  selector: 'app-list-series',
  templateUrl: './list-series.component.html',
  styleUrls: ['./list-series.component.css']
})
export class ListSeriesComponent implements OnInit {

  search: string;
  seriesArray: any[] = [];

  constructor(private seriesService: SeriesService, private router: Router) { }

  ngOnInit() {
  }

  // Get series by text
  getByText() {
    this.seriesService.getByText(this.search).subscribe((outcome) => {
      this.router.navigate(['/series'], { queryParams: {} });
      this.seriesArray = outcome.results;
    });
  }

  // Click on a series
  details(series: any) {
    this.seriesArray = [];
    this.router.navigate(['/series'], { queryParams: { seriesId: series.id} });
  }
}
