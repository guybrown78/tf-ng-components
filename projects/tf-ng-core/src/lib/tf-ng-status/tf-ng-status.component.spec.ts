import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TfNgStatusComponent } from './tf-ng-status.component';

describe('TfNgStatusComponent', () => {
  let component: TfNgStatusComponent;
  let fixture: ComponentFixture<TfNgStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TfNgStatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TfNgStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
