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
  movieId: number;
  credits: any[] = [];

  constructor(private movieService: MovieService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(queryParams => {
      if(queryParams.movieId){
        this.movieId = queryParams.movieId;
        this.movieService.getById(this.movieId).subscribe(result => {
          this.movie = result;
        });
        this.movieService.getCredits(this.movieId).subscribe(credits => {
          this.credits = credits.cast;
        });
      }else {
        this.movie = undefined;
      }

    });

  }

}
