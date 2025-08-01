import { Routes } from '@angular/router';
import { Hospital } from '../medium2/hospital/hospital';
import { Medico } from '../medium2/medico/medico';
import { IncrementadorComponent } from '../medium2/incrementador/incrementador.component';

export const rutas: Routes = [
  {
    path: 'hospital',
    component: Hospital,
  },
  {
    path: 'medico/:id',
    component: Medico,
  },
  {
    path: '**',
    component: IncrementadorComponent,
  },
];
