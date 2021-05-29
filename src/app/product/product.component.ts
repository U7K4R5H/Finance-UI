import { Component, OnInit } from '@angular/core';
import { ProdserviceService } from '../prodservice.service';
import { Product } from './Product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
 
  constructor(private prodServ:ProdserviceService) { }
  ngOnInit(): void {  
  }
  buyNow(prod : Product){
    alert('Product being purchased is '+prod.productId);
  }
  // prod=0;  //sometime u might use objects , so make sure to instantiate it : abc: Account = new Account();()  ok bye
  // tempProd: Product= new Product();  //created an object of departments
  // findProduct(prodId:number){
  //     this.prodServ.findProductService(prodId).subscribe((data:any)=>{
  //       if (data!=null) 
  //       {
  //         this.tempProd=data;
  //         sessionStorage.setItem("prodDetails",JSON.stringify(data))
  //       }
  //       else{
  //         alert('unable to fetch');
  //       }
  //       })
  // }
 
  prodSet=0;  //sometime u might use objects , so make sure to instantiate it : abc: Account = new Account();()  ok bye
  tempProd : Product[] | undefined;  //created an object of departments
  findAllProducts(){
      this.prodServ.findAllProductsService().subscribe((data:Product[])=>{
        if (data!=null) 
        {
          this.tempProd=data;
        }
        else{
          alert('unable to fetch');
        }
        })
  }

}
