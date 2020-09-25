import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TfNgFormHeroComponent } from './tf-ng-form-hero.component';

describe('TfNgFormHeroComponent', () => {
  let component: TfNgFormHeroComponent;
  let fixture: ComponentFixture<TfNgFormHeroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TfNgFormHeroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TfNgFormHeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
