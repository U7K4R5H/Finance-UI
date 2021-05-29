import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './registration/User';

@Injectable({
  providedIn: 'root'
})
export class UserRegistrationService {

  constructor(private http:HttpClient) { }
  public doRegistration(user:User){
    return this.http.post("http://localhost:8080/addReg",user);
  }
}
