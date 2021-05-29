import { Component, OnInit } from '@angular/core';
import { Login } from '../login';
import { LoginService } from '../login.service';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginDto: Login = new Login();
  constructor(
    private loginService: LoginService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {}

  isLogin() {
    this.loginService.getLogin(this.loginDto).subscribe(
      (data) => {
        sessionStorage.setItem('myuser', JSON.stringify(data));
        console.log(data);
        return data;
      },
      (error) => console.log(error)
    );
  }

  onSubmit() {
    this.isLogin();
    let crd: any;
    crd = sessionStorage.getItem('myuser');
    this.loginDto = JSON.parse(crd);
    if (this.loginDto.cardNo == 0) {
      alert('Invalid username & password Combo');
    } else {
      this.router.navigate(['/getCard/', this.loginDto.cardNo]);
    }
  }
} 
