import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouterMedico } from './router-medico';
import { provideZonelessChangeDetection } from '@angular/core';
import {
  ActivatedRoute,
  Router,
} from '@angular/router';
import { of, Subject } from 'rxjs';
class FakeRouter {
  navigate(params: any) {}
}
class FakeActivatedRoute {
  private readonly subject = new Subject<{ id: string }>();
  get params() {
    return this.subject.asObservable();
  }
  push(valor: { id: string }) {
    this.subject.next(valor);
  }
}

describe('RouterMedico', () => {
  let component: RouterMedico;
  let fixture: ComponentFixture<RouterMedico>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterMedico],
      providers: [
        provideZonelessChangeDetection(),
        {
          provide: Router,
          useClass: FakeRouter,
        },
        {
          provide: ActivatedRoute,
          useClass: FakeActivatedRoute,
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(RouterMedico);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('Debe de redireccionar a Medico cuando se guarde', () => {
    const router = TestBed.inject(Router);
    const spy = spyOn(router, 'navigate');
    component.guardarMedico();
    expect(spy).toHaveBeenCalledWith(['medico', '123']);
  });
  it('Debe de colocar el id = nuevo', () => {
    const activatedRoute = TestBed.inject(ActivatedRoute) as any
    activatedRoute.push({ id: 'nuevo' });
    expect(component.id()).toBe('nuevo');
  });
});
