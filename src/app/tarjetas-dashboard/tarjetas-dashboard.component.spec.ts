import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TarjetasDashboardComponent } from './tarjetas-dashboard.component';

describe('TarjetasDashboardComponent', () => {
  let component: TarjetasDashboardComponent;
  let fixture: ComponentFixture<TarjetasDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TarjetasDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TarjetasDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
