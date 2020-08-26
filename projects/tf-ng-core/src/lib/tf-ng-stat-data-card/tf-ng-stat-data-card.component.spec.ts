import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TfNgStatDataCardComponent } from './tf-ng-stat-data-card.component';

describe('TfNgStatDataCardComponent', () => {
  let component: TfNgStatDataCardComponent;
  let fixture: ComponentFixture<TfNgStatDataCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TfNgStatDataCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TfNgStatDataCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
