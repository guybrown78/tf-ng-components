import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TfNgFileSelectComponent } from './tf-ng-file-select.component';

describe('TfNgFileSelectComponent', () => {
  let component: TfNgFileSelectComponent;
  let fixture: ComponentFixture<TfNgFileSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TfNgFileSelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TfNgFileSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
