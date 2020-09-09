import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TfNgPhOverviewCardComponent } from './tf-ng-ph-overview-card.component';

describe('TfNgPhOverviewCardComponent', () => {
  let component: TfNgPhOverviewCardComponent;
  let fixture: ComponentFixture<TfNgPhOverviewCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TfNgPhOverviewCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TfNgPhOverviewCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
