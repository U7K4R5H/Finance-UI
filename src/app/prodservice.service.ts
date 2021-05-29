import { Injectable } from '@angular/core';
import { Product } from './product/Product';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProdserviceService {
  static findAllProductsService() {
    throw new Error('Method not implemented.');
  }
  constructor(private myHttp: HttpClient) { 
    }
    // findProductService(prodId:number):Observable<Product>{
    //   return this.myHttp.get<Product>("http://localhost:8080/getProd/"+prodId);

      findAllProductsService():Observable<Product[]>{
        return this.myHttp.get<Product[]>("http://localhost:8080/getProducts/");
  }
}
