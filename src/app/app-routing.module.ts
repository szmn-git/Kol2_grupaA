import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {OrdersSKComponent} from './components/orders-sk/orders-sk.component';
import {OrdersDetailsSKComponent} from './components/orders-details-sk/orders-details-sk.component';

const routes: Routes = [
  {
    path: '',
    component: OrdersSKComponent,
  },
  {
    path: 'details/:id',
    component: OrdersDetailsSKComponent,
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
