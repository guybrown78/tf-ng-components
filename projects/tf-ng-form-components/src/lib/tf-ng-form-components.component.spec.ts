import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TfNgFormComponentsComponent } from './tf-ng-form-components.component';

describe('TfNgFormComponentsComponent', () => {
  let component: TfNgFormComponentsComponent;
  let fixture: ComponentFixture<TfNgFormComponentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TfNgFormComponentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TfNgFormComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
