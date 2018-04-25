import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-details-movie',
  templateUrl: './details-movie.component.html',
  styleUrls: ['./details-movie.component.css']
})
export class DetailsMovieComponent implements OnInit {

  @Input("movie") movie: any;

  constructor() { }

  ngOnInit() {
  }

}
