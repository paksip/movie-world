import {Component, OnInit, ViewChild} from '@angular/core';
import {MovieService} from "./movie.service";
import {AuthenticationService} from "../authentication/authentication.service";
import {ListMoviesComponent} from "./list-movies/list-movies.component";

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  @ViewChild(ListMoviesComponent) listMovieComponent: ListMoviesComponent;
  movie: any;

  constructor(private movieService: MovieService, private authenticationService: AuthenticationService) { }

  ngOnInit() {
    this.movie = this.listMovieComponent.movie;
  }

  movieChanged(movie: any){
    this.movie = movie;
  }

}
