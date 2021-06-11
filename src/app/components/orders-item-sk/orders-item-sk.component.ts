import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-orders-item-sk',
  templateUrl: './orders-item-sk.component.html',
  styleUrls: ['./orders-item-sk.component.css']
})
export class OrdersItemSKComponent implements OnInit {

  @Input() title = '';
  @Input() text = '';
  @Input() image = '';
  @Input() price = '';


  constructor() { }

  ngOnInit(): void {
  }

}
