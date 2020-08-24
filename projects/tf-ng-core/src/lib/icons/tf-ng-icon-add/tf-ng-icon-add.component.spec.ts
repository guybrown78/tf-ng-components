import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TfNgIconAddComponent } from './tf-ng-icon-add.component';

describe('TfNgIconAddComponent', () => {
  let component: TfNgIconAddComponent;
  let fixture: ComponentFixture<TfNgIconAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TfNgIconAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TfNgIconAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
