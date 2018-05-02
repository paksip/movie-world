import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment'
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";


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

  getCredits(id: number): Observable<any> {
    return this.http.get<any>(`${environment.basic_url}/movie/${id}/credits?api_key=${environment.key_API}`)
  }

  getGenres(): Observable<any>{
    return this.http.get<any>(`${environment.basic_url}/genre/movie/list?api_key=${environment.key_API}`)
  }
}
