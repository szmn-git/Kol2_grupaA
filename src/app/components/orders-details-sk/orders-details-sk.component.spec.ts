import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersDetailsSKComponent } from './orders-details-sk.component';

describe('OrdersDetailsSKComponent', () => {
  let component: OrdersDetailsSKComponent;
  let fixture: ComponentFixture<OrdersDetailsSKComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrdersDetailsSKComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdersDetailsSKComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
