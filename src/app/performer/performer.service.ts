import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment'
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";

@Injectable()
export class PerformerService {

  constructor(private http: HttpClient) { }

  getById(id: number): Observable<any>{
    return this.http.get<any>(`${environment.basic_url}/person/${id}?api_key=${environment.key_API}`)
  }

  getByText(search: string): Observable<any>{
    return this.http.get<any>
    (`${environment.basic_url}/search/person?api_key=${environment.key_API}&query=${search}`);
  }

  getCombinedCredits(id: number): Observable<any>{
    return this.http.get<any>
    (`${environment.basic_url}/person/${id}/combined_credits?api_key=${environment.key_API}`);
  }

}
