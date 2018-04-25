import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment'
import {HttpClient, HttpHeaders, HttpResponse} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {Movie} from "./movie.model";


@Injectable()
export class MovieService {

  constructor(private http: HttpClient) { }

  getById(id: number): Observable<Movie>{
    return this.http.get<Movie>(`${environment.basic_url}/3/movie/${id}?api_key=${environment.key_API}`)
  }
}
