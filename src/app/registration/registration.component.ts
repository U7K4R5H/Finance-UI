import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserRegistrationService } from '../user-registration.service';
import { User } from './User';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  user: User= new User();


  constructor(private service:UserRegistrationService,
    private route: ActivatedRoute,
    private router: Router) { }



  ngOnInit(): void {
  }

  public registerNow(){
   let resp= this.service.doRegistration(this.user);
   resp.subscribe((data)=>{

    return data},
    (error) => console.log(error))
  }

  onSubmit() {
    this.registerNow();
      this.router.navigate(['/addBnk'] );
  }
}