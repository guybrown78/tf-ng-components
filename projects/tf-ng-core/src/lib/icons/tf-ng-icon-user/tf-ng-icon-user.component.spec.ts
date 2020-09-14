import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TfNgIconUserComponent } from './tf-ng-icon-user.component';

describe('TfNgIconUserComponent', () => {
  let component: TfNgIconUserComponent;
  let fixture: ComponentFixture<TfNgIconUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TfNgIconUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TfNgIconUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
