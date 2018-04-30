import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {MovieService} from "../movie.service";
import {Router} from "@angular/router";
import {SearchOption} from "../../shared/enums/search-option.enum";



@Component({
  selector: 'app-list-movies',
  templateUrl: './list-movies.component.html',
  styleUrls: ['./list-movies.component.css']
})
export class ListMoviesComponent implements OnInit {
  SearchOption = SearchOption;

  movieId: any;
  search: string;
  movies: any[] = [];
  option: SearchOption = SearchOption.Text;

  @Output('movie') movie= new EventEmitter<any>();

  constructor(private movieService: MovieService, private router: Router) { }

  ngOnInit() {
  }

  getById(){
    this.movieService.getById(this.movieId).subscribe(result => {
      this.movies = [];
      this.router.navigate(['/movie'], { queryParams: {} });
      this.movies.push(result);
    });
  }

  getByText() {
    this.movieService.getByText(this.search).subscribe((outcome) => {
      this.router.navigate(['/movie'], { queryParams: {} });
      this.movies = outcome.results;
    });
  }

  details(movie: any) {
    this.movies = [];
    this.router.navigate(['/movie'], { queryParams: { movieId: movie.id} });
  }

  changeOption(option: SearchOption) {
    this.movieId = '';
    this.search = '';
    this.option = option;

  }
}
