import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OrdersSKComponent } from './components/orders-sk/orders-sk.component';
import { OrdersItemSKComponent } from './components/orders-item-sk/orders-item-sk.component';
import { OrdersDetailsSKComponent } from './components/orders-details-sk/orders-details-sk.component';
import {HttpClientModule} from '@angular/common/http';
import {DataService} from './services/sk-data.service';

@NgModule({
  declarations: [
    AppComponent,
    OrdersSKComponent,
    OrdersItemSKComponent,
    OrdersDetailsSKComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
