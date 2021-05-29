import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Login } from './login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient: HttpClient) { }

  getLogin(loginDto: Login): Observable<Object> {
    return this.httpClient.post("http://localhost:8080/getLogin/", loginDto);
  }

}
