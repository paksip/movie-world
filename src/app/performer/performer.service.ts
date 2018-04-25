import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment'
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {Performer} from "./performer.model";

@Injectable()
export class PerformerService {

  constructor(private http: HttpClient) { }

  getById(id: number): Observable<Performer>{
    return this.http.get<Performer>(`${environment.basic_url}/3/person/${id}?api_key=${environment.key_API}`);
  }

}
