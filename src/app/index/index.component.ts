import { Component, OnInit } from '@angular/core';
import { ProdserviceService } from '../prodservice.service';
import { Product } from '../product/Product';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  constructor(private prodServ:ProdserviceService) { }

  ngOnInit(): void {
  }
  buyNow(){
    alert('REGISTER or LOGIN ');
  }

//  prod=0;  //sometime u might use objects , so make sure to instantiate it : abc: Account = new Account();()  ok bye
//   tempProd: Product= new Product();  //created an object of departments
//   findProduct(prodId:number){
//       this.prodServ.findProductService(prodId).subscribe((data:any)=>{
//         if (data!=null) 
//         {
//           this.tempProd=data;
//           sessionStorage.setItem("prodDetails",JSON.stringify(data))
//         }
//         else{
//           alert('unable to fetch');
//         }
//         })
//   }
  
}
