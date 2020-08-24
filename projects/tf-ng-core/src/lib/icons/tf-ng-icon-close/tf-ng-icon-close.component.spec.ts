import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TfNgIconCloseComponent } from './tf-ng-icon-close.component';

describe('TfNgIconCloseComponent', () => {
  let component: TfNgIconCloseComponent;
  let fixture: ComponentFixture<TfNgIconCloseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TfNgIconCloseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TfNgIconCloseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
