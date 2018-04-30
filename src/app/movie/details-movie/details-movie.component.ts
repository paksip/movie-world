import {Component, Input, OnInit} from '@angular/core';
import {MovieService} from "../movie.service";
import {ActivatedRoute} from "@angular/router";
import {RecommendationService} from "../../recommendation/recommendation.service";

@Component({
  selector: 'app-details-movie',
  templateUrl: './details-movie.component.html',
  styleUrls: ['./details-movie.component.css']
})
export class DetailsMovieComponent implements OnInit {

  @Input("movie") movie: any;
  movieId: number;
  credits: any[] = [];
  recommendations: any[] = [];

  constructor(private movieService: MovieService, private activatedRoute: ActivatedRoute,
              private recommendationService: RecommendationService) { }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(queryParams => {
      // Movie
      if(queryParams.movieId){
        this.movieId = queryParams.movieId;
        this.movieService.getById(this.movieId).subscribe(result => {
          this.movie = result;
        });
        //Casts
        this.movieService.getCredits(this.movieId).subscribe(credits => {
          this.credits = credits.cast;
        });
        // Recommendations
        this.recommendationService.getRecommendationsByMovieId(this.movieId).subscribe(recs => {
          this.recommendations = recs.results;
        });
      }else {
        this.movie = undefined;
      }

    });

  }

}
