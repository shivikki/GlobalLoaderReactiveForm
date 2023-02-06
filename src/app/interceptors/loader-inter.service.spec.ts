import { TestBed } from '@angular/core/testing';

import { LoaderInterService } from './loader-inter.service';

describe('LoaderInterService', () => {
  let service: LoaderInterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoaderInterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
