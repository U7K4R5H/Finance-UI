import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Order } from './Order';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private myHttp: HttpClient) { }
//   findOrderService(ordId:number):Observable<Order>{
//    return this.myHttp.get<Order>("http://localhost:8080/getOrder/"+ordId);
// }
   
findOrderService(cardNo:number):Observable<Order[]>{
  return this.myHttp.get<Order[]>("http://localhost:8080/getOrdersByCard/"+cardNo);
}
}