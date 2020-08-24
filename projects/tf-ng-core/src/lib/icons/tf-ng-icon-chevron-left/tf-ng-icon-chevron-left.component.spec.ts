import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TfNgIconChevronLeftComponent } from './tf-ng-icon-chevron-left.component';

describe('TfNgIconChevronLeftComponent', () => {
  let component: TfNgIconChevronLeftComponent;
  let fixture: ComponentFixture<TfNgIconChevronLeftComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TfNgIconChevronLeftComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TfNgIconChevronLeftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
