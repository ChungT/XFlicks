import { TestBed } from '@angular/core/testing';

import { FlickService } from './flick.service';

describe('FlickService', () => {
  let service: FlickService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FlickService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
