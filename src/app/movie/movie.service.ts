import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment'
import {HttpClient, HttpHeaders, HttpResponse} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {Movie} from "./movie.model";


@Injectable()
export class MovieService {

  constructor(private http: HttpClient) { }

  getById(id: number): Observable<any>{
    return this.http.get<any>(`${environment.basic_url}/movie/${id}?api_key=${environment.key_API}`)
  }

  getByText(search: string): Observable<any>{
    return this.http.get<any>
    (`${environment.basic_url}/search/movie?api_key=${environment.key_API}&query=${search}`);
  }
}
