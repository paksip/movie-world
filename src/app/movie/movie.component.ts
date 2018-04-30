import {Component, OnInit, ViewChild} from '@angular/core';
import {ListMoviesComponent} from "./list-movies/list-movies.component";

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  @ViewChild(ListMoviesComponent) listMovieComponent: ListMoviesComponent;
  movie: any;

  constructor() { }

  ngOnInit() {
  }

  movieChanged(movie: any){
    this.movie = movie;
  }

}
