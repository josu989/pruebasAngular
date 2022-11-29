import { TestBed } from '@angular/core/testing';

import { Videojuegos2Service } from './videojuegos2.service';

describe('Videojuegos2Service', () => {
  let service: Videojuegos2Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Videojuegos2Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
