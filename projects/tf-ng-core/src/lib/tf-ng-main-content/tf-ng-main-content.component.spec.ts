import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TfNgMainContentComponent } from './tf-ng-main-content.component';

describe('TfNgMainContentComponent', () => {
  let component: TfNgMainContentComponent;
  let fixture: ComponentFixture<TfNgMainContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TfNgMainContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TfNgMainContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
