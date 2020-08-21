import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TfNgSideDrawerComponent } from './tf-ng-side-drawer.component';

describe('TfNgSideDrawerComponent', () => {
  let component: TfNgSideDrawerComponent;
  let fixture: ComponentFixture<TfNgSideDrawerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TfNgSideDrawerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TfNgSideDrawerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
