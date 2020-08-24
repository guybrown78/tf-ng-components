import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TfNgProductInitialsComponent } from './tf-ng-product-initials.component';

describe('TfNgProductInitialsComponent', () => {
  let component: TfNgProductInitialsComponent;
  let fixture: ComponentFixture<TfNgProductInitialsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TfNgProductInitialsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TfNgProductInitialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
