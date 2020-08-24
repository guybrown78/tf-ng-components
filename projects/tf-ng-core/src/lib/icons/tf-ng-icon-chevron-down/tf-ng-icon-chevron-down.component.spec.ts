import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TfNgIconChevronDownComponent } from './tf-ng-icon-chevron-down.component';

describe('TfNgIconChevronDownComponent', () => {
  let component: TfNgIconChevronDownComponent;
  let fixture: ComponentFixture<TfNgIconChevronDownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TfNgIconChevronDownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TfNgIconChevronDownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
