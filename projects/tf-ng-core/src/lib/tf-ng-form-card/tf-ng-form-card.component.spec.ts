import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TfNgFormCardComponent } from './tf-ng-form-card.component';

describe('TfNgFormCardComponent', () => {
  let component: TfNgFormCardComponent;
  let fixture: ComponentFixture<TfNgFormCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TfNgFormCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TfNgFormCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
