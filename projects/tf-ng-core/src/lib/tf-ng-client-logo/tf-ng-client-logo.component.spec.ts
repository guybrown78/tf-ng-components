import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TfNgClientLogoComponent } from './tf-ng-client-logo.component';

describe('TfNgClientLogoComponent', () => {
  let component: TfNgClientLogoComponent;
  let fixture: ComponentFixture<TfNgClientLogoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TfNgClientLogoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TfNgClientLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
