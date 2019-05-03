import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {CustomerComponent} from './customer/customer.component';
import { CustomerService } from './customer/customer.service';
import { HttpModule } from '@angular/http';
import {FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,CustomerComponent
  ],
  imports: [
    BrowserModule,
     HttpModule,
     FormsModule
  ],
  providers: [CustomerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
