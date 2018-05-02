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
  isLoading = false;

  constructor(private router: Router, private recommendationService: RecommendationService,
              private movieService: MovieService) { }

  ngOnInit() {
    // Getting general popular movies
    this.recommendationService.getMostPopularMovies().subscribe(movies => {
      this.movies = movies.results;
    });
    // Getting genres
    this.movieService.getGenres().subscribe(genresArray => {
      this.genres = genresArray.genres;
    });
  }

  // Get popular movies by a selected genre
  getMostPopularMoviesByGenre(genreId: number){
    this.isLoading = true;
    this.genreId = genreId;
    this.recommendationService.getMostPopularMoviesByGenre(genreId).subscribe(movies => {
      this.isLoading = false;
      this.moviesByGenre = movies.results;
    });
  }
}
