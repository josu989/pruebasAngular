import { TestBed } from '@angular/core/testing';

import { ServicioVideojuegosService } from './servicio-videojuegos.service';

describe('ServicioVideojuegosService', () => {
  let service: ServicioVideojuegosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicioVideojuegosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
