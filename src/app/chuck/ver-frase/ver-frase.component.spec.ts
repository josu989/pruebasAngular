import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerFraseComponent } from './ver-frase.component';

describe('VerFraseComponent', () => {
  let component: VerFraseComponent;
  let fixture: ComponentFixture<VerFraseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerFraseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerFraseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
