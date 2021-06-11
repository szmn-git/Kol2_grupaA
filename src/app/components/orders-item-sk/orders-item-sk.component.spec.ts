import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersItemSKComponent } from './orders-item-sk.component';

describe('OrdersItemSKComponent', () => {
  let component: OrdersItemSKComponent;
  let fixture: ComponentFixture<OrdersItemSKComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrdersItemSKComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdersItemSKComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
