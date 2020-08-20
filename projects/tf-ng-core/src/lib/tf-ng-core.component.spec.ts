import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TfNgCoreComponent } from './tf-ng-core.component';

describe('TfNgCoreComponent', () => {
  let component: TfNgCoreComponent;
  let fixture: ComponentFixture<TfNgCoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TfNgCoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TfNgCoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
