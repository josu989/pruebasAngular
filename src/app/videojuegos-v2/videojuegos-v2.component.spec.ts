import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideojuegosV2Component } from './videojuegos-v2.component';

describe('VideojuegosV2Component', () => {
  let component: VideojuegosV2Component;
  let fixture: ComponentFixture<VideojuegosV2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VideojuegosV2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VideojuegosV2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
