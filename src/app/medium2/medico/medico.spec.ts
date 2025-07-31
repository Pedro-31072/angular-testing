import {  provideZonelessChangeDetection } from '@angular/core';
import { Medico } from './medico';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { MedicoService } from './medico-service';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { HttpClientModule } from '@angular/common/http';
describe('Medico Compenent', () => {
  let component: Medico;
  let fixture: ComponentFixture<Medico>;
  beforeEach(async () => {
  await TestBed.configureTestingModule({
      declarations: [],
      providers: [
        provideZonelessChangeDetection(),
        MedicoService,
      ],
      imports: [Medico,HttpClientModule],
    }).compileComponents();
    fixture = TestBed.createComponent(Medico);
    component = fixture.componentInstance;
  });
  it('Debe de crearse el componente', () => {
    expect(component).toBeTruthy();
  });
  it('Debe de mandarse el mensaje', () => {
    const param = 'Pedro';
    spyOn(component,"saludarMedico").and.callThrough()
    const result = component.saludarMedico(param)
    expect(component.saludarMedico).toHaveBeenCalledWith(param);
    expect(result).toContain(param);
  });
});
