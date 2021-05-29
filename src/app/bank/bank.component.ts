import { Component, OnInit } from '@angular/core';
import { BankService } from '../bank.service';
import { User } from '../registration/User';
import { Bank } from './Bank';

@Component({
  selector: 'app-bank',
  templateUrl: './bank.component.html',
  styleUrls: ['./bank.component.css']
})
export class BankComponent implements OnInit {
 bank: Bank= new Bank();
 user: User= new User();

// bank2={
//   "regId": 104,
//   "bankType": "dfgdf",
//   "ifscCode":"df021"

// }


 
  constructor(private service:BankService) { }

  ngOnInit(): void {
  }
  public bankDetail(){
     let r : any
     r=sessionStorage.getItem("user");
    this.user=JSON.parse(r);
    let a=this.user.regId;
    this.bank.regId=a;
    // this.bank.regId=104;
    let resp = this.service.bankdetail(this.bank);
    resp.subscribe((data)=>data);

    
  }

}
