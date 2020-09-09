import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TfNgButtonComponent } from './tf-ng-button.component';

describe('TfNgButtonComponent', () => {
  let component: TfNgButtonComponent;
  let fixture: ComponentFixture<TfNgButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TfNgButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TfNgButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
