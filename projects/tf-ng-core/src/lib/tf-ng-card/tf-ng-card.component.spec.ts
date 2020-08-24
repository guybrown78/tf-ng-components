import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TfNgCardComponent } from './tf-ng-card.component';

describe('TfNgCardComponent', () => {
  let component: TfNgCardComponent;
  let fixture: ComponentFixture<TfNgCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TfNgCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TfNgCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
