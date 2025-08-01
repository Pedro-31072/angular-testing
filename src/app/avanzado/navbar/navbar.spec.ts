import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Navbar } from './navbar';
import { DebugElement, provideZonelessChangeDetection } from '@angular/core';
import { By } from '@angular/platform-browser';
import { provideRouter, RouterLinkWithHref } from '@angular/router';

describe('Prueba al navbar' , () => {
  let fixture: ComponentFixture<Navbar>;
  let component: Navbar;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Navbar,],
      providers:[provideZonelessChangeDetection(),provideRouter([])]
    }).compileComponents();
    fixture = TestBed.createComponent(Navbar);
    component = fixture.componentInstance;
  });
  it('Debe de tener un link a la pagina de medicos', () => {
    const debugElements: DebugElement[] = fixture.debugElement.queryAll(
      By.directive(RouterLinkWithHref)
    );
    const existe = !!debugElements.find(
      (el) => el.attributes['routerLink'] === '/hospital'
    );
    expect(existe).toBeTrue();
  });
});
