import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TfNgStatusBeaconComponent } from './tf-ng-status-beacon.component';

describe('TfNgStatusBeaconComponent', () => {
  let component: TfNgStatusBeaconComponent;
  let fixture: ComponentFixture<TfNgStatusBeaconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TfNgStatusBeaconComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TfNgStatusBeaconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
