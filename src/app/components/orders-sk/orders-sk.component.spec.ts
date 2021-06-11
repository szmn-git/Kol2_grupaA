import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersSKComponent } from './orders-sk.component';

describe('OrdersSKComponent', () => {
  let component: OrdersSKComponent;
  let fixture: ComponentFixture<OrdersSKComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrdersSKComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdersSKComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
