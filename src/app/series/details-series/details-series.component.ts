import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {SeriesService} from "../series.service";

@Component({
  selector: 'app-details-series',
  templateUrl: './details-series.component.html',
  styleUrls: ['./details-series.component.css']
})
export class DetailsSeriesComponent implements OnInit {

  @Input("series") series: any;
  seriesId: number;

  constructor(private activatedRoute: ActivatedRoute, private seriesService: SeriesService) { }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(queryParams => {
      if(queryParams.seriesId){
        this.seriesId = queryParams.seriesId;
        this.seriesService.getById(this.seriesId).subscribe(result => {
          this.series = result;
        });
      }else {
        this.series = undefined;
      }

    });
  }

}
