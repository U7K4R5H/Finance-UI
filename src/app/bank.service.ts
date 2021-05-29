import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Bank } from './bank/Bank';

@Injectable({
  providedIn: 'root'
})
export class BankService {

  constructor(private http:HttpClient) { }
  public bankdetail(bank:Bank){
    return this.http.post("http://localhost:8080/addBnk",bank);
  }
}
