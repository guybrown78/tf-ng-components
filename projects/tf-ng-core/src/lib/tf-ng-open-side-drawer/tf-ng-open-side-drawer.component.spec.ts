import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TfNgOpenSideDrawerComponent } from './tf-ng-open-side-drawer.component';

describe('TfNgOpenSideDrawerComponent', () => {
  let component: TfNgOpenSideDrawerComponent;
  let fixture: ComponentFixture<TfNgOpenSideDrawerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TfNgOpenSideDrawerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TfNgOpenSideDrawerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
