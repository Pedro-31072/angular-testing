import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IncrementadorComponent } from './incrementador.component';
import { provideZonelessChangeDetection } from '@angular/core';

// Pruebas unitarias al incrementador
describe('Incrementador Component Unit', () => {
  let component: IncrementadorComponent;
  let fixure: ComponentFixture<IncrementadorComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IncrementadorComponent],
      providers: [provideZonelessChangeDetection()],
    }).compileComponents();

    fixure = TestBed.createComponent(IncrementadorComponent);
    component = fixure.componentInstance;
  });
  it('El incrementador no debe de pasar de 100', () => {
    component.progreso = 100;
    component.cambiarValor(5);
    expect(component.progreso()).toBe(100);
  });
});
