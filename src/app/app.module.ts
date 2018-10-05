import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { routes, RouteModule } from './route.module';
import { OrdersComponent } from './orders/orders.component';
import { CustomerModule } from './customer/customer.module';
import { MenuComponent } from './core/menu.component';
import { CustomersModule } from './customers/customers.module';
import { CoreModule } from './core/core.module';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from '@angular/forms'
import { Service } from './core/service/service';

@NgModule({
  declarations: [
    AppComponent
    
    

  ],
  imports: [
    BrowserModule, 
     FormsModule,RouterModule, RouteModule,
    CoreModule,HttpClientModule

  ],
  providers: [Service],
  bootstrap: [AppComponent]
})
export class AppModule { }
