import { Component, OnInit } from '@angular/core';
import { Card } from './Card';
import { Order } from './Order';
import { OrderService } from './order.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  constructor(private ordServ:OrderService) { }
  usersession: any;
  ngOnInit(): void {
        this.usersession = sessionStorage.getItem('myuser');
    this.usersession = JSON.parse(this.usersession);
    this.cardNo = this.usersession.cardNo;
    this.findOrderByCard(this.cardNo);
  
   console.log(this.cardNo+"  ----  "+ this.usersession.cardNo);
  }
  // order=0;  //sometime u might use objects , so make sure to instantiate it : abc: Account = new Account();()  ok bye
  // temporder: Order= new Order();  //created an object of departments
  // findOrder(ordId:number){
  //     this.ordServ.findOrderService(ordId).subscribe((data:any)=>{
  //       if (data!=null) 
  //       {
  //         this.temporder=data;
  //         sessionStorage.setItem("orderDetails",JSON.stringify(data))
  //       }
  //       else{
  //         alert('unable to fetch');
  //       }
  //       })
  // }
cardNo=0;  //sometime u might use objects , so make sure to instantiate it : abc: Account = new Account();()  ok bye
  tempcard:Order[] |undefined;  //created an object of departments
  findOrderByCard(cardNo:number){
      this.ordServ.findOrderService(cardNo).subscribe((data:any)=>{
        if (data!=null) 
        {
          this.tempcard=data;
         console.log(data);
        }
        else{
          alert('unable to fetch');
        }
        })
  }
}
 
