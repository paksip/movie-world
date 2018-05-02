import {Component, OnInit} from '@angular/core';
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

  constructor(private movieService: MovieService, private router: Router) { }

  ngOnInit() {
  }

  // Get a movie by the written ID
  getById(){
    this.movieService.getById(this.movieId).subscribe(result => {
      this.movies = [];
      this.router.navigate(['/movie'], { queryParams: {} }); // Clear URL
      this.movies.push(result);
    });
  }

  // Get a movie by the written text
  getByText() {
    this.movieService.getByText(this.search).subscribe((outcome) => {
      this.router.navigate(['/movie'], { queryParams: {} }); // Clear URL
      this.movies = outcome.results;
    });
  }

  // Click on a movie
  details(movie: any) {
    this.movies = [];
    this.router.navigate(['/movie'], { queryParams: { movieId: movie.id} });
  }

  //Change between ID/Text searching
  changeOption(option: SearchOption) {
    this.movieId = '';
    this.search = '';
    this.option = option;
  }
}
