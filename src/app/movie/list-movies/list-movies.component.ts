import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {MovieService} from "../movie.service";
import {Movie} from "../movie.model";

@Component({
  selector: 'app-list-movies',
  templateUrl: './list-movies.component.html',
  styleUrls: ['./list-movies.component.css']
})
export class ListMoviesComponent implements OnInit {

  movieId: any;

  @Output('movie') movie= new EventEmitter<any>();

  constructor(private movieService: MovieService) { }

  ngOnInit() {
  }

  getById(){
    this.movieService.getById(this.movieId).subscribe(result => {
      this.movie.emit(result);
    });
  }

}
