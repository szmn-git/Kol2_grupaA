import { Component, OnInit } from '@angular/core';
import {DataService} from '../../services/sk-data.service';

@Component({
  selector: 'app-orders-sk',
  templateUrl: './orders-sk.component.html',
  styleUrls: ['./orders-sk.component.css']
})
export class OrdersSKComponent implements OnInit {

  public items$: any;
  constructor(private service: DataService) {
  }


  ngOnInit(): void {
    this.getAll();
  }

  // tslint:disable-next-line:typedef
  getAll() {
    this.service.getAll().subscribe(response => {
      this.items$ = response;
    });
  }

}
