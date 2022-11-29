import { TestBed } from '@angular/core/testing';

import { ApiPerrosService } from './api-perros.service';

describe('ApiPerrosService', () => {
  let service: ApiPerrosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiPerrosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
