import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TfNgItemComponent } from './tf-ng-item.component';

describe('TfNgItemComponent', () => {
  let component: TfNgItemComponent;
  let fixture: ComponentFixture<TfNgItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TfNgItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TfNgItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
