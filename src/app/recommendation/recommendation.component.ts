import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {RecommendationService} from "./recommendation.service";
import {MovieService} from "../movie/movie.service";

@Component({
  selector: 'app-recommendation',
  templateUrl: './recommendation.component.html',
  styleUrls: ['./recommendation.component.css']
})
export class RecommendationComponent implements OnInit {

  movies: any[] = [];
  moviesByGenre: any[] = [];
  genres: any[] = [];
  genreId : number;

  constructor(private router: Router, private recommendationService: RecommendationService,
              private movieService: MovieService) { }

  ngOnInit() {
    this.recommendationService.getMostPopularMovies().subscribe(movies => {
      this.movies = movies.results;
    });
    this.movieService.getGenres().subscribe(genresArray => {
      this.genres = genresArray.genres;
    });
  }

  getMostPopularMoviesByGenre(genreId: number){
    this.genreId = genreId;
    this.recommendationService.getMostPopularMoviesByGenre(genreId).subscribe(movies => {
      this.moviesByGenre = movies.results;
    });
  }
}
