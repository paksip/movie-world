import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-details-series',
  templateUrl: './details-series.component.html',
  styleUrls: ['./details-series.component.css']
})
export class DetailsSeriesComponent implements OnInit {

  @Input("series") series: any;

  constructor() { }

  ngOnInit() {
  }

}
