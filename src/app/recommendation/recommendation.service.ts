import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs/Observable";

@Injectable()
export class RecommendationService {

  constructor(private http: HttpClient) { }

  getMostPopularMovies(): Observable<any>{
    return this.http.get<any>
    (`${environment.basic_url}/movie/popular?api_key=${environment.key_API}`);
  }

  getMostPopularMoviesByGenre(genreId: number): Observable<any>{
    return this.http.get<any>
    (`${environment.basic_url}/discover/movie?api_key=${environment.key_API}&sort_by=popularity.desc&with_genres=${genreId}`);
  }

  getRecommendationsByMovieId(movieId: number): Observable<any>{
    return this.http.get<any>
    (`${environment.basic_url}/movie/${movieId}/recommendations?api_key=${environment.key_API}`);
  }

}
