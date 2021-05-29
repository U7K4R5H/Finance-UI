import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProdserviceService } from './prodservice.service';
import { ProductComponent } from './product/product.component';
import { OrderComponent } from './order/order.component';
import { OrderService } from './order/order.service';
import { IndexComponent } from './index/index.component';

import { LoginService } from './login.service';
import { LoginComponent } from './login/login.component';
import { CardService } from './card.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BankService } from './bank.service';
import { BankComponent } from './bank/bank.component';
import { RegistrationComponent } from './registration/registration.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    OrderComponent,
    IndexComponent,
    RegistrationComponent,
    LoginComponent,
    DashboardComponent,
    BankComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ProdserviceService,OrderService,LoginService,CardService,BankService],
  bootstrap: [AppComponent]
})
export class AppModule { }
