import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TfNgInfoPanelItemContainerComponent } from './tf-ng-info-panel-item-container.component';

describe('TfNgInfoPanelItemContainerComponent', () => {
  let component: TfNgInfoPanelItemContainerComponent;
  let fixture: ComponentFixture<TfNgInfoPanelItemContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TfNgInfoPanelItemContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TfNgInfoPanelItemContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
