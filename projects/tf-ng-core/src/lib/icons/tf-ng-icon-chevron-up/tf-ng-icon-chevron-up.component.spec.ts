import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TfNgIconChevronUpComponent } from './tf-ng-icon-chevron-up.component';

describe('TfNgIconChevronUpComponent', () => {
  let component: TfNgIconChevronUpComponent;
  let fixture: ComponentFixture<TfNgIconChevronUpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TfNgIconChevronUpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TfNgIconChevronUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
