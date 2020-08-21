import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TfNgHexagonComponent } from './tf-ng-hexagon.component';

describe('TfNgHexagonComponent', () => {
  let component: TfNgHexagonComponent;
  let fixture: ComponentFixture<TfNgHexagonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TfNgHexagonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TfNgHexagonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
