import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Card } from './card';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  constructor(private httpClient: HttpClient) { }

  getCardByUser(crdno: number): Observable<Card>{
    return this.httpClient.get<Card>("http://localhost:8080/getCard/"+crdno);
  }
}
