import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TfNgIconChevronRightComponent } from './tf-ng-icon-chevron-right.component';

describe('TfNgIconChevronRightComponent', () => {
  let component: TfNgIconChevronRightComponent;
  let fixture: ComponentFixture<TfNgIconChevronRightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TfNgIconChevronRightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TfNgIconChevronRightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
