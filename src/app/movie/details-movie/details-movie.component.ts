import {Component, Input, OnInit} from '@angular/core';
import {MovieService} from "../movie.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-details-movie',
  templateUrl: './details-movie.component.html',
  styleUrls: ['./details-movie.component.css']
})
export class DetailsMovieComponent implements OnInit {

  @Input("movie") movie: any;

  constructor(private movieService: MovieService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {

  }

}
