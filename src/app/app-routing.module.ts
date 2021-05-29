import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BankComponent } from './bank/bank.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { IndexComponent } from './index/index.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';



const routes: Routes = [
   {path:'',redirectTo:"/index",pathMatch:'full'},
   {path:"index",component:IndexComponent},
   { path:"registration",component:RegistrationComponent},
   { path:"login",component:LoginComponent},
   {path: "getCard/:crdNo", component: DashboardComponent},
   { path:"addBnk",component:BankComponent},
  //  children:[
  //   { path:"registration",component:RegistrationComponent},
  //   { path:"login",component:LoginComponent}
     
  // ] 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
