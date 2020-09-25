import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TfNgFormTitleComponent } from './tf-ng-form-title.component';

describe('TfNgFormTitleComponent', () => {
  let component: TfNgFormTitleComponent;
  let fixture: ComponentFixture<TfNgFormTitleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TfNgFormTitleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TfNgFormTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
