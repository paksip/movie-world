import { Component, OnInit } from '@angular/core';
import {MovieService} from "./movie.service";
import {AuthenticationService} from "../authentication/authentication.service";

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  constructor(private movieService: MovieService, private authenticationService: AuthenticationService) { }

  ngOnInit() {

  }

}
