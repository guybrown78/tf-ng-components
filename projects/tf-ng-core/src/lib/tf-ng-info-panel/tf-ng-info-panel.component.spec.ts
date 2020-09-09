import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TfNgInfoPanelComponent } from './tf-ng-info-panel.component';

describe('TfNgInfoPanelComponent', () => {
  let component: TfNgInfoPanelComponent;
  let fixture: ComponentFixture<TfNgInfoPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TfNgInfoPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TfNgInfoPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
