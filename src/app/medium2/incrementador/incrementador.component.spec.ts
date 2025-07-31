import { TestBed, ComponentFixture } from '@angular/core/testing';
import { IncrementadorComponent } from './incrementador.component';
import { provideZonelessChangeDetection } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('Incremendator Component', () => {
  let component: IncrementadorComponent;
  let fixture: ComponentFixture<IncrementadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [],
      imports: [IncrementadorComponent],
      providers: [provideZonelessChangeDetection()],
    }).compileComponents();

    fixture = TestBed.createComponent(IncrementadorComponent);
    component = fixture.componentInstance;
  });
  it('Debe de mostrar en el input el valor del progreso', async () => {
    component.cambiarValor(5);
    fixture.detectChanges();
    await fixture.whenStable().then(() => {
      const input = fixture.debugElement.query(By.css('input'));
      const element: HTMLInputElement = input.nativeElement;
      expect(element.value).toBe('55');
    });
  });

  it('Debe de mostrar la leyenda y el progreso', () => {
    const mensaje = 'Progreso de carga';
    component.leyenda = mensaje;
    fixture.detectChanges();
    const elemt: HTMLElement = fixture.debugElement.query(
      By.css('h3')
    ).nativeElement;
    expect(elemt.innerHTML).toContain(mensaje);
  });
  it('Debe de incrementar/decrementar en 5, con un click en el boton', () => {
    const buttons = fixture.debugElement.queryAll(By.css('.btn.btn-primary'));
    buttons[0].triggerEventHandler('click', null);
    expect(component.progreso()).toBe(45);

    buttons[1].triggerEventHandler('click', null);
    fixture.detectChanges();
    expect(component.progreso()).toBe(50);
  });
  it('El titulo del componente debe de mostrar el progreso', () => {
    const buttons = fixture.debugElement.queryAll(By.css('.btn.btn-primary'));
    const titulo: HTMLElement = fixture.debugElement.query(
      By.css('h3')
    ).nativeElement;
    buttons[0].triggerEventHandler('click', null);
    fixture.detectChanges();
    expect(titulo.innerHTML).toContain('45');
  });
});
