import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TfNgAppWrapperComponent } from './tf-ng-app-wrapper.component';

describe('TfNgAppWrapperComponent', () => {
  let component: TfNgAppWrapperComponent;
  let fixture: ComponentFixture<TfNgAppWrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TfNgAppWrapperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TfNgAppWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
