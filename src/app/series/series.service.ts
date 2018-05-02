import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs/Observable";

@Injectable()
export class SeriesService {

  constructor(private http: HttpClient) { }

  getById(id: number): Observable<any>{
    return this.http.get<any>(`${environment.basic_url}/tv/${id}?api_key=${environment.key_API}`)
  }

  getByText(search: string): Observable<any>{
    return this.http.get<any>
    (`${environment.basic_url}/search/tv?api_key=${environment.key_API}&query=${search}`);
  }
}
