import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TfNgPageTitleBreadcrumbsComponent } from './tf-ng-page-title-breadcrumbs.component';

describe('TfNgPageTitleBreadcrumbsComponent', () => {
  let component: TfNgPageTitleBreadcrumbsComponent;
  let fixture: ComponentFixture<TfNgPageTitleBreadcrumbsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TfNgPageTitleBreadcrumbsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TfNgPageTitleBreadcrumbsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
