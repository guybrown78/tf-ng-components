import { TestBed } from '@angular/core/testing';

import { TfNgToggleDrawerService } from './tf-ng-toggle-drawer.service';

describe('TfNgToggleDrawerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TfNgToggleDrawerService = TestBed.get(TfNgToggleDrawerService);
    expect(service).toBeTruthy();
  });
});
