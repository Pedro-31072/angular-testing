import { Routes } from '@angular/router';
import { rutas } from './avanzado/rutas.routes';

export const routes: Routes = [
  {
    path: '',
    children: rutas,
  },
];
