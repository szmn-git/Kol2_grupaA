import { Component, OnInit } from '@angular/core';
import {DataService} from '../../services/sk-data.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-orders-details-sk',
  templateUrl: './orders-details-sk.component.html',
  styleUrls: ['./orders-details-sk.component.css']
})
export class OrdersDetailsSKComponent implements OnInit {

  public image = '';
  public text: string = '';
  public id: number = 0;

  constructor(private dataService: DataService, private route: ActivatedRoute) {
  }


  // tslint:disable-next-line:typedef
  ngOnInit() {
    let id: any;
    this.route.paramMap
      .subscribe(params => {
        id = params.get('id');
      });

    this.dataService.getById(id).subscribe((res: any) => {
      this.image = res['image'];
      this.text = res['text'];
    });

  }


}
