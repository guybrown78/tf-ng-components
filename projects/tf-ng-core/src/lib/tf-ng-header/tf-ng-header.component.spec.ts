import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TfNgHeaderComponent } from './tf-ng-header.component';

describe('TfNgHeaderComponent', () => {
  let component: TfNgHeaderComponent;
  let fixture: ComponentFixture<TfNgHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TfNgHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TfNgHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
