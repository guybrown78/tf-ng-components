import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TfNgCardContentComponent } from './tf-ng-card-content.component';

describe('TfNgCardContentComponent', () => {
  let component: TfNgCardContentComponent;
  let fixture: ComponentFixture<TfNgCardContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TfNgCardContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TfNgCardContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
