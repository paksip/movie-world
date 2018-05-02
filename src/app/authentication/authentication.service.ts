import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment'
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";

@Injectable()
export class AuthenticationService {

  request_token: string;

  constructor(private http: HttpClient) { }

  // Project level authentication
  authenticateRequest(): Observable<any>{
    return this.http.get<any>(`${environment.basic_url}/authentication/token/new?api_key=${environment.key_API}`);
  }

  // User level authentication
  authenticateSession(session: string): Observable<any>{
    return this.http.get<any>(`${environment.basic_url}/authentication/session/new?api_key=${environment.key_API}&request_token=${session}`);
  }

  authenticate(){
    this.authenticateRequest().subscribe(request => {
      this.request_token = request.request_token;
      localStorage.setItem('token', this.request_token);
      // this.authenticateSession(this.request_token).subscribe(session => {});
    });

  }

}
