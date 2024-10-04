import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllCartProductsComponent } from './all-cart-products.component';

describe('AllCartProductsComponent', () => {
  let component: AllCartProductsComponent;
  let fixture: ComponentFixture<AllCartProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AllCartProductsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllCartProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
